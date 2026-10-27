import rss from '@astrojs/rss'
import {client, queries, type ArticleCard} from '../lib/sanity'
import {SITE_DESCRIPTION, SITE_NAME, SITE_URL} from '../lib/site'

export async function GET() {
  const stories = await client.fetch<ArticleCard[]>(`${queries.latest}[0...50]`)
  return rss({
    title: `${SITE_NAME} — Latest Dispatches`,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: stories.map((s) => ({
      title: s.title,
      description: s.excerpt,
      link: `/stories/${s.slug}`,
      pubDate: new Date(s.publishedAt),
      categories: s.category ? [s.category.title] : [],
      author: s.author?.name,
    })),
  })
}
