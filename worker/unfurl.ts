// Link previews for the Studio's "Fill from link" button.
//   GET /api/unfurl?url=…        → {url, title, description, image, siteName}
//   GET /api/unfurl/image?url=…  → the preview image bytes (so the Studio can upload it to Sanity)
// Only the Studio origins may call these; anything else gets 403.

const ALLOWED_ORIGINS = ['https://kbuzz.sanity.studio', 'http://localhost:3333']
const MAX_HTML_BYTES = 1_000_000
const MAX_IMAGE_BYTES = 10_000_000
const TIMEOUT_MS = 8000
const UA = 'Mozilla/5.0 (compatible; KBuzzLinkPreview/1.0; +https://kbuzz.ianmugwe656.workers.dev)'

export interface Preview {
  url: string
  title?: string
  description?: string
  image?: string
  siteName?: string
}

function cors(origin: string): Record<string, string> {
  return {'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'GET', Vary: 'Origin'}
}

function json(body: unknown, status: number, origin: string) {
  return new Response(JSON.stringify(body), {status, headers: {'Content-Type': 'application/json', ...cors(origin)}})
}

/** Public http(s) URLs only: no credentials, odd ports, IP literals or local hostnames. */
export function parsePublicUrl(raw: string | null): URL | null {
  if (!raw) return null
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return null
  }
  const host = url.hostname.toLowerCase()
  const blocked =
    !['http:', 'https:'].includes(url.protocol) ||
    url.username ||
    url.password ||
    (url.port && !['80', '443'].includes(url.port)) ||
    !host.includes('.') ||
    /^[\d.]+$/.test(host) ||
    host.startsWith('[') ||
    /(^|\.)(localhost|local|internal|lan|home\.arpa)$/.test(host)
  return blocked ? null : url
}

async function fetchLimited(url: URL, accept: string) {
  return fetch(url.href, {
    headers: {'User-Agent': UA, Accept: accept},
    redirect: 'follow',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cf: {cacheTtl: 600},
  })
}

/** Reads <meta> preview tags and <title> from the page with HTMLRewriter (streams, no DOM). */
export async function extractPreview(res: Response, pageUrl: URL): Promise<Preview> {
  const meta: Record<string, string> = {}
  let title = ''
  let inTitle = false

  // Stop reading after MAX_HTML_BYTES: preview tags live in <head>.
  let seen = 0
  const limited = new Response(
    res.body!.pipeThrough(
      new TransformStream<Uint8Array, Uint8Array>({
        transform(chunk, controller) {
          seen += chunk.byteLength
          if (seen > MAX_HTML_BYTES) controller.terminate()
          else controller.enqueue(chunk)
        },
      }),
    ),
    {headers: res.headers},
  )

  await new HTMLRewriter()
    .on('meta', {
      element(el) {
        const key = (el.getAttribute('property') || el.getAttribute('name') || '').toLowerCase()
        const content = el.getAttribute('content')
        if (key && content && !(key in meta)) meta[key] = content.trim()
      },
    })
    .on('title', {
      element(el) {
        inTitle = true
        el.onEndTag(() => {
          inTitle = false
        })
      },
      text(chunk) {
        if (inTitle) title += chunk.text
      },
    })
    .transform(limited)
    .arrayBuffer()
    .catch(() => undefined)

  const absolute = (u?: string) => {
    if (!u) return undefined
    try {
      return new URL(u, pageUrl).href
    } catch {
      return undefined
    }
  }
  const decode = (s?: string) =>
    s
      ?.replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#0?39;|&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim() || undefined

  return {
    url: absolute(meta['og:url']) ?? pageUrl.href,
    title: decode(meta['og:title'] || meta['twitter:title'] || title),
    description: decode(meta['og:description'] || meta['twitter:description'] || meta['description']),
    image: absolute(meta['og:image:secure_url'] || meta['og:image'] || meta['twitter:image'] || meta['twitter:image:src']),
    siteName: decode(meta['og:site_name']) ?? pageUrl.hostname.replace(/^www\./, ''),
  }
}

export async function handleUnfurl(request: Request): Promise<Response> {
  const origin = request.headers.get('Origin') ?? ''
  if (!ALLOWED_ORIGINS.includes(origin)) return new Response('Forbidden', {status: 403})
  if (request.method === 'OPTIONS') return new Response(null, {status: 204, headers: cors(origin)})
  if (request.method !== 'GET') return json({error: 'Method not allowed'}, 405, origin)

  const {pathname, searchParams} = new URL(request.url)
  const target = parsePublicUrl(searchParams.get('url'))
  if (!target) return json({error: 'Enter a public http(s) link.'}, 400, origin)

  try {
    if (pathname === '/api/unfurl/image') {
      const res = await fetchLimited(target, 'image/avif,image/webp,image/*')
      const type = res.headers.get('Content-Type') ?? ''
      const size = Number(res.headers.get('Content-Length') ?? 0)
      if (!res.ok || !type.startsWith('image/')) return json({error: 'That link is not an image.'}, 422, origin)
      if (size > MAX_IMAGE_BYTES) return json({error: 'Image is larger than 10 MB.'}, 413, origin)
      return new Response(res.body, {headers: {'Content-Type': type, 'Cache-Control': 'private, max-age=600', ...cors(origin)}})
    }

    const res = await fetchLimited(target, 'text/html,application/xhtml+xml')
    if (!res.ok) return json({error: `The site responded ${res.status}.`}, 502, origin)
    if (!(res.headers.get('Content-Type') ?? '').includes('html')) return json({error: 'That link is not a web page.'}, 422, origin)
    return json(await extractPreview(res, new URL(res.url || target.href)), 200, origin)
  } catch (err) {
    const timedOut = err instanceof Error && err.name === 'TimeoutError'
    return json({error: timedOut ? 'The site took too long to respond.' : 'Could not read that link.'}, 502, origin)
  }
}
