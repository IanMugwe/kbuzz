import {useState} from 'react'
import {Button, Flex, Stack, Text} from '@sanity/ui'
import {useToast} from '@sanity/ui/toast'
import {getPublishedId, useClient, useDocumentOperation, useFormValue, type StringInputProps} from 'sanity'

// The website's Worker reads link previews (see worker/unfurl.ts in the site repo).
const SITE_URL = process.env.SANITY_STUDIO_SITE_URL || 'https://kbuzz.ianmugwe656.workers.dev'

interface Preview {
  url: string
  title?: string
  description?: string
  image?: string
  siteName?: string
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 96).replace(/-$/, '')

const clip = (s: string, max: number) => (s.length <= max ? s : `${s.slice(0, max - 1).replace(/\s+\S*$/, '')}…`)

/** Source URL field with a "Fill from link" button that fills empty headline, slug, excerpt and cover. */
export function SourceUrlInput(props: StringInputProps) {
  const toast = useToast()
  const client = useClient({apiVersion: '2026-10-01'})
  const id = getPublishedId((useFormValue(['_id']) as string) ?? '')
  const {patch} = useDocumentOperation(id, 'article')
  const title = useFormValue(['title']) as string | undefined
  const slug = useFormValue(['slug', 'current']) as string | undefined
  const excerpt = useFormValue(['excerpt']) as string | undefined
  const cover = useFormValue(['cover', 'asset']) as unknown
  const [busy, setBusy] = useState(false)

  async function fill() {
    if (!props.value) return
    setBusy(true)
    try {
      const res = await fetch(`${SITE_URL}/api/unfurl?url=${encodeURIComponent(props.value)}`)
      const data = (await res.json()) as Preview & {error?: string}
      if (!res.ok) throw new Error(data.error || `Preview failed (${res.status})`)

      const set: Record<string, unknown> = {}
      const filled: string[] = []
      if (!title && data.title) {
        set.title = clip(data.title, 120)
        filled.push('headline')
        if (!slug) set.slug = {_type: 'slug', current: slugify(data.title)}
      }
      if (!excerpt && data.description) {
        set.excerpt = clip(data.description, 200)
        filled.push('excerpt')
      }
      if (!cover && data.image) {
        const img = await fetch(`${SITE_URL}/api/unfurl/image?url=${encodeURIComponent(data.image)}`)
        if (img.ok) {
          const asset = await client.assets.upload('image', await img.blob(), {
            filename: new URL(data.image).pathname.split('/').pop() || 'link-preview.jpg',
            source: {name: 'link-preview', id: data.image, url: data.image},
          })
          set.cover = {_type: 'figure', asset: {_type: 'reference', _ref: asset._id}, credit: data.siteName}
          filled.push('cover image')
        }
      }

      if (filled.length === 0) {
        toast.push({status: 'info', title: 'Nothing to fill', description: 'Headline, excerpt and cover already have content.'})
        return
      }
      patch.execute([{set}])
      toast.push({
        status: 'success',
        title: `Filled ${filled.join(', ')} from ${data.siteName ?? 'the link'}`,
        description: filled.includes('cover image') ? 'Add alt text to the cover image before publishing.' : 'Review the text before publishing.',
      })
    } catch (err) {
      toast.push({status: 'error', title: 'Could not read that link', description: err instanceof Error ? err.message : String(err)})
    } finally {
      setBusy(false)
    }
  }

  return (
    <Stack gap={3}>
      {props.renderDefault(props)}
      <Flex align="center" gap={3}>
        <Button disabled={!props.value || busy} loading={busy} mode="ghost" onClick={fill} text="Fill from link" />
        <Text muted size={1}>
          Fills an empty headline, slug, excerpt and cover from the page's preview.
        </Text>
      </Flex>
    </Stack>
  )
}
