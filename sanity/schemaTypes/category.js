export const category = {
  name: 'category',
  title: 'Qalareya',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Şəkil açıqlaması',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Şəkil əlavə et',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }
  ],
}
