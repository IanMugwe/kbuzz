import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons/Tag'

export const category = defineType({
  name: 'category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Accent colour',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: '#e11d2a'},
          {title: 'Green', value: '#0f8a5f'},
          {title: 'Yellow', value: '#e0a100'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '#e11d2a',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', type: 'text', rows: 2}),
  ],
})
