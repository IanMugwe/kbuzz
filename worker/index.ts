// Edge Worker in front of the static Astro build.
// - fetch: /api/unfurl* powers the Studio's "Fill from link" button; everything else is static assets in dist/.
// - scheduled: rebuilds the site when a story scheduled for the future becomes due,
//   because Sanity's publish webhook fires when the editor presses Publish, not when publishedAt passes.

import {handleUnfurl} from './unfurl'

interface Env {
  ASSETS: Fetcher
  /** Cloudflare Workers Builds deploy hook URL (secret). Without it, the cron does nothing. */
  DEPLOY_HOOK_URL?: string
}

const SANITY_QUERY_URL = 'https://ydvtjdhb.api.sanity.io/v2026-10-01/data/query/production'
// Matches the hourly cron in wrangler.jsonc, with a little overlap so nothing falls between runs.
const WINDOW_MS = 65 * 60 * 1000

async function storiesBecameDue(since: Date): Promise<number> {
  const url = new URL(SANITY_QUERY_URL)
  url.searchParams.set('query', 'count(*[_type == "article" && publishedAt > $since && publishedAt <= now()])')
  url.searchParams.set('$since', JSON.stringify(since.toISOString()))
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`)
  const {result} = (await res.json()) as {result: number}
  return result
}

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith('/api/unfurl')) return handleUnfurl(request)
    return env.ASSETS.fetch(request)
  },

  async scheduled(controller, env) {
    if (!env.DEPLOY_HOOK_URL) return
    const due = await storiesBecameDue(new Date(controller.scheduledTime - WINDOW_MS))
    if (due === 0) return
    const res = await fetch(env.DEPLOY_HOOK_URL, {method: 'POST'})
    console.log(`${due} scheduled stories due; deploy hook responded ${res.status}`)
  },
} satisfies ExportedHandler<Env>
