import {toHTML, escapeHTML, uriLooksSafe} from '@portabletext/to-html'
import {imageUrl, imageSrcset, type Figure} from './sanity'
import {embedHtml} from './embed'

export function bodyHtml(blocks: unknown[]) {
  return toHTML(blocks as never, {
    components: {
      types: {
        figure: ({value}: {value: Figure}) => {
          if (!value?.asset) return ''
          const caption = [value.caption, value.credit && `Photo: ${value.credit}`].filter(Boolean).join(' · ')
          return `<figure class="kb-story__figure"><img src="${imageUrl(value, 1200)}" srcset="${imageSrcset(value, [480, 800, 1200, 1600])}" sizes="(min-width: 768px) 720px, 100vw" alt="${escapeHTML(value.alt || '')}" loading="lazy" decoding="async"/>${caption ? `<figcaption class="kb-story__caption">${escapeHTML(caption)}</figcaption>` : ''}</figure>`
        },
        embed: ({value}: {value: {url: string; caption?: string}}) => embedHtml(value.url, value.caption),
      },
      marks: {
        link: ({children, value}: {children: string; value?: {href?: string}}) => {
          const href = value?.href || ''
          if (!uriLooksSafe(href)) return children
          const external = /^https?:/.test(href)
          return `<a href="${escapeHTML(href)}"${external ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`
        },
      },
    },
  })
}
