# Deploying K Buzz

| Piece | Where | How it updates |
|---|---|---|
| Website (Astro → `dist/`) + edge Worker (`worker/index.ts`) | Cloudflare Workers `kbuzz` | Push to `main` (Workers Builds runs `npm run deploy`), or a deploy hook |
| Editor Studio (`studio/`) | https://kbuzz.sanity.studio | `cd studio && npx sanity deploy` |
| Content | Sanity project `ydvtjdhb`, dataset `production` | Editors press Publish |

## Publish → live

1. Cloudflare dashboard → Workers → **kbuzz** → Settings → Builds → **Deploy Hooks** → create `sanity-publish` on branch `main`, copy the URL.
2. Connect Sanity to it (creates or updates the webhook):
   ```sh
   cd studio
   DEPLOY_HOOK_URL='<hook url>' npx sanity exec scripts/connect-deploy-hook.ts --with-user-token
   ```
3. Give the hourly cron the same URL so scheduled stories go live:
   ```sh
   npx wrangler secret put DEPLOY_HOOK_URL
   ```

## Local

- `npm run dev` — site at http://localhost:4321 (reads published content from Sanity)
- `npm run preview` — production build served through the Worker
- `npm run check` — type-check the site and Worker
- `cd studio && npm run dev` — Studio at http://localhost:3333
