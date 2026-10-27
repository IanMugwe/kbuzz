import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export const client = createClient({
  projectId: 'ydvtjdhb',
  dataset: 'production',
  apiVersion: '2026-10-01',
  // The site is built once per publish, so read straight from the API for fresh content.
  useCdn: false,
  perspective: 'published',
})

const builder = createImageUrlBuilder(client)

export function imageUrl(source: unknown, width: number, height?: number) {
  let img = builder.image(source as never).width(width).auto('format').quality(80)
  if (height) img = img.height(height).fit('crop')
  return img.url()
}

/** A srcset across common widths, keeping the given aspect ratio when one is passed. */
export function imageSrcset(source: unknown, widths: number[], ratio?: number) {
  return widths.map((w) => `${imageUrl(source, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`).join(', ')
}

export interface Category {
  title: string
  slug: string
  accent: string
  description?: string
}

export interface Author {
  name: string
  slug: string
  role?: string
  bio?: string
  photo?: unknown
  links?: string[]
}

export interface Figure {
  asset: {_ref?: string; _id?: string}
  alt: string
  caption?: string
  credit?: string
}

export interface ArticleCard {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  featured?: boolean
  category: Category
  author: Author
  cover: Figure
  words: number
}

export interface Article extends ArticleCard {
  updatedAt?: string
  tags?: string[]
  body: unknown[]
  gallery?: Figure[]
  sourceUrl?: string
  embedUrl?: string
  seo?: {title?: string; description?: string; image?: unknown}
}

const card = `
  _id, title, "slug": slug.current, excerpt, publishedAt, featured,
  "category": category->{title, "slug": slug.current, accent},
  "author": author->{name, "slug": slug.current, role},
  cover,
  "words": length(string::split(pt::text(body), " "))
`

const live = `_type == "article" && defined(slug.current) && publishedAt <= now()`

export const queries = {
  latest: `*[${live}] | order(publishedAt desc) {${card}}`,
  article: `*[${live} && slug.current == $slug][0] {
    ${card}, updatedAt, tags, body, gallery, sourceUrl, embedUrl, seo,
    "author": author->{name, "slug": slug.current, role, bio, photo, links}
  }`,
  related: `*[${live} && _id != $id && category->slug.current == $category] | order(publishedAt desc)[0...3] {${card}}`,
  categories: `*[_type == "category" && defined(slug.current)] | order(title asc) {title, "slug": slug.current, accent, description}`,
  authors: `*[_type == "author" && defined(slug.current)] {name, "slug": slug.current, role, bio, photo, links}`,
}

export function readMinutes(words: number) {
  return Math.max(1, Math.round((words || 0) / 200))
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'Africa/Nairobi'})
}
