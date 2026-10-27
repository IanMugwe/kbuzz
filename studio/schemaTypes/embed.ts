import {defineField, defineType} from 'sanity'
import {icons} from '@sanity/icons'

export const embed = defineType({
  name: 'embed',
  title: 'Embed',
  type: 'object',
  icon: icons.play,
  description: 'YouTube, SoundCloud, Zeno, X or TikTok link — shown as a player.',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({name: 'caption', type: 'string'}),
  ],
  preview: {select: {title: 'url', subtitle: 'caption'}},
})
