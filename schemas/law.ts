import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import institution from './institution'

export default defineType({
  name: 'law',
  title: 'Law',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Law Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'institutionIssuedBy',
      title: 'Institution Issued By',
      type: 'reference',
      to: [institution],
    }),
    defineField({
      name: 'dateAnnounced',
      title: 'Date Announced',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Original Scan',
      type: 'image',
    }),
    defineField({
      name: 'scannedText',
      title: 'Scanned Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
