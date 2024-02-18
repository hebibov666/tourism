export const post = {
  name: 'post',
  title: 'Tur əlavə et',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlıq',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Açıqlama',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Qiymət',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Növü',
      type: 'string',
      options:{
        list:["Xarici tur","Daxili tur","Məktəbli turu","Ziyarətgah"]
      }
    },
    {
      name: 'mainImage',
      title: 'Şəkil',
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
    },
 {
      name: 'phone',
      title: 'Əlaqə nömrəsi',
      type: 'number',
    },
    {
      name: 'contact',
      title: 'Əlaqədar şəxs',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Yayımlanma tarixi',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
