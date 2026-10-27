import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const author = defineType({
  name: 'author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'role', type: 'string', description: 'e.g. Field Reporter, Presenter'}),
    defineField({name: 'photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bio', type: 'text', rows: 3}),
    defineField({
      name: 'links',
      title: 'Social links',
      type: 'array',
      of: [{type: 'url'}],
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})
