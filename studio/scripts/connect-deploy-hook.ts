// Creates (or updates) the Sanity webhook that rebuilds the website when content is published.
// Run from studio/:  DEPLOY_HOOK_URL=https://api.cloudflare.com/... npx sanity exec scripts/connect-deploy-hook.ts --with-user-token
import {getCliClient} from 'sanity/cli'

const NAME = 'Rebuild website (Cloudflare)'
const hookUrl = process.env.DEPLOY_HOOK_URL
if (!hookUrl?.startsWith('https://api.cloudflare.com/')) {
  console.error('Set DEPLOY_HOOK_URL to the Cloudflare Workers Builds deploy hook URL.')
  process.exit(1)
}

const client = getCliClient({apiVersion: '2026-10-01'})
const {projectId, token} = client.config()
const api = `https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}`
const headers = {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}

const hook = {
  type: 'document',
  name: NAME,
  description: 'Triggers a Workers Builds deploy so published changes go live.',
  url: hookUrl,
  httpMethod: 'POST',
  apiVersion: 'v2026-10-01',
  dataset: 'production',
  includeDrafts: false,
  isDisabledByUser: false,
  rule: {
    on: ['create', 'update', 'delete'],
    filter: '_type in ["article", "author", "category"]',
    projection: '{_id, _type}',
  },
}

const existing = ((await (await fetch(api, {headers})).json()) as {id: string; name: string}[]).find((h) => h.name === NAME)
const res = await fetch(existing ? `${api}/${existing.id}` : api, {
  method: existing ? 'PATCH' : 'POST',
  headers,
  body: JSON.stringify(hook),
})
if (!res.ok) {
  console.error(`Sanity responded ${res.status}: ${await res.text()}`)
  process.exit(1)
}
console.log(`${existing ? 'Updated' : 'Created'} webhook "${NAME}"`)
