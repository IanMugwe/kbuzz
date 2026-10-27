import {defineConfig} from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://kbuzz.ianmugwe656.workers.dev',
  output: 'static',
  integrations: [sitemap()],
})
