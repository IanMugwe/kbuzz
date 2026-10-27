import {defineField, defineType} from 'sanity'

// An image with the alt text and caption every published photo needs.
export const figure = defineType({
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the photo for screen readers and slow connections.',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({name: 'caption', type: 'string'}),
    defineField({name: 'credit', type: 'string', description: 'Photographer or source'}),
  ],
})
