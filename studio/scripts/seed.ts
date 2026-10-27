// Seeds categories, authors and the three launch stories from the old static homepage.
// Safe to re-run: every document uses a fixed _id and createOrReplace.
// Run from studio/: npx sanity exec scripts/seed.ts --with-user-token
import {createReadStream} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-10-01'})
const img = (name: string) => fileURLToPath(new URL(`../../src/assets/img/${name}`, import.meta.url))
const slugify = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const key = () => Math.random().toString(36).slice(2, 10)

const RED = '#e11d2a'
const GREEN = '#0f8a5f'
const YELLOW = '#e0a100'

// Initial categories from SRS §16.
const categories: [string, string][] = [
  ['News', RED], ['Culture', RED], ['People', GREEN], ['Youth', YELLOW], ['Ideas', GREEN], ['Music', RED],
  ['Sheng', YELLOW], ['Enterprise', YELLOW], ['Sports', GREEN], ['Community', GREEN], ['Investigations', RED],
]

const authors = ['Mercy Chebet', 'Kenzy Oduor', 'Sarah Kamau']

const stories = [
  {
    title: 'Greening the Concrete: Rooftop Agriculture Thrives Along the Riverbank',
    excerpt: 'How youth environmental cooperatives transformed forty corrugated rooftops along the Nairobi River basin into high-yield organic hydroponic gardens, securing fresh greens for over 800 households.',
    category: 'Community', author: 'Mercy Chebet', publishedAt: '2024-10-24T07:00:00Z', featured: true,
    tags: ['Ecological Resilience', 'Field Report #88'],
    cover: {file: 'rooftop-agriculture.jpg', alt: 'An urban farmer tends green rooftop vegetables above the iron-sheet roofs of Eastlands, Nairobi.'},
  },
  {
    title: 'The Sound of Gengetone 2.0: Producers Fusing Benga with Trap',
    excerpt: 'Inside bedroom recording booths in Kiamaiko, self-taught sound engineers are splicing traditional Luo Benga guitar licks with 808 sub-bass, pioneering East Africa’s newest sonic export.',
    category: 'Music', author: 'Kenzy Oduor', publishedAt: '2024-10-22T07:00:00Z', featured: false,
    tags: ['Sheng & Sound'],
    cover: {file: 'acoustic-session.jpg', alt: 'A singer performs into a large studio condenser microphone under warm spotlights.'},
  },
  {
    title: 'Matatu Artistry: The Master Painters Preserving Street Aesthetics',
    excerpt: 'With spray cans and airbrushes, Kiamaiko garage workshops remain the beating heart of custom bus design, honoring Nairobi’s rolling art galleries.',
    category: 'Culture', author: 'Sarah Kamau', publishedAt: '2024-10-20T07:00:00Z', featured: false,
    tags: ['Street Canvas'],
    cover: {file: 'culture.jpg', alt: 'Artists and musicians sketch and play guitar together in a bright, poster-lined studio.'},
  },
]

async function main() {
  const tx = client.transaction()
  for (const [title, accent] of categories) {
    tx.createOrReplace({_id: `category-${slugify(title)}`, _type: 'category', title, slug: {_type: 'slug', current: slugify(title)}, accent})
  }
  for (const name of authors) {
    tx.createOrReplace({_id: `author-${slugify(name)}`, _type: 'author', name, slug: {_type: 'slug', current: slugify(name)}, role: 'Contributor'})
  }
  await tx.commit()
  console.log(`✓ ${categories.length} categories, ${authors.length} authors`)

  for (const s of stories) {
    const asset = await client.assets.upload('image', createReadStream(img(s.cover.file)), {filename: s.cover.file})
    const slug = slugify(s.title).slice(0, 96).replace(/-$/, '')
    await client.createOrReplace({
      _id: `article-${slug}`,
      _type: 'article',
      title: s.title,
      slug: {_type: 'slug', current: slug},
      excerpt: s.excerpt,
      category: {_type: 'reference', _ref: `category-${slugify(s.category)}`},
      author: {_type: 'reference', _ref: `author-${slugify(s.author)}`},
      publishedAt: s.publishedAt,
      featured: s.featured,
      tags: s.tags,
      cover: {_type: 'figure', asset: {_type: 'reference', _ref: asset._id}, alt: s.cover.alt},
      body: [{_type: 'block', _key: key(), style: 'normal', markDefs: [], children: [{_type: 'span', _key: key(), text: s.excerpt, marks: []}]}],
    })
    console.log(`✓ ${s.title}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
