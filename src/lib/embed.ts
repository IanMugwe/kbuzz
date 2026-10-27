// Turns a pasted link into a player where the service allows plain iframes;
// anything else (X, TikTok, unknown sites) renders as a link card.
export type Embed =
  | {kind: 'iframe'; src: string; ratio: string; title: string}
  | {kind: 'link'; href: string; host: string}

export function resolveEmbed(raw: string): Embed | null {
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return null
  }
  if (url.protocol !== 'https:') return null
  const host = url.hostname.replace(/^www\.|^m\./, '')

  if (host === 'youtube.com' || host === 'youtu.be') {
    const id =
      host === 'youtu.be'
        ? url.pathname.slice(1)
        : url.searchParams.get('v') || url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]+)/)?.[1]
    if (id && /^[\w-]{6,}$/.test(id)) {
      return {kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${id}`, ratio: '16 / 9', title: 'YouTube video'}
    }
  }
  if (host === 'soundcloud.com') {
    const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url.href)}&color=%23e11d2a&visual=false`
    return {kind: 'iframe', src, ratio: 'auto', title: 'SoundCloud audio'}
  }
  if (host === 'zeno.fm') {
    const station = url.pathname.match(/^\/(?:radio|player)\/([\w-]+)/)?.[1]
    if (station) return {kind: 'iframe', src: `https://zeno.fm/player/${station}`, ratio: 'auto', title: 'Zeno radio player'}
  }
  return {kind: 'link', href: url.href, host}
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

export function embedHtml(raw: string, caption?: string) {
  const e = resolveEmbed(raw)
  if (!e) return ''
  const cap = caption ? `<figcaption class="kb-story__caption">${esc(caption)}</figcaption>` : ''
  if (e.kind === 'iframe') {
    const style = e.ratio === 'auto' ? 'height:166px' : `aspect-ratio:${e.ratio}`
    return `<figure class="kb-story__embed"><iframe src="${esc(e.src)}" title="${esc(e.title)}" style="${style}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>${cap}</figure>`
  }
  return `<figure class="kb-story__embed"><a class="kb-story__linkcard" href="${esc(e.href)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">open_in_new</span><span>View on ${esc(e.host)}</span></a>${cap}</figure>`
}
