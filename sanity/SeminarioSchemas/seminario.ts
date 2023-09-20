// courseSchema.js
export const seminario = {
  name: 'seminario',
  title: 'Seminario',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'enlace',
      title: 'Enlace',
      type: 'string',
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'scheduledtime',
      title: 'Scheduled Time',
      type: 'string',
    },
    {
      name: 'totalHours',
      title: 'Total Hours',
      type: 'number',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'slugSpanish',
      title: 'Slug - Spanish',
      type: 'string',
    },
    {
      name: 'coverUrl',
      title: 'Cover URL',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'descriptionSpanish',
      title: 'Description - Spanish',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'priceSale',
      title: 'Sale Price',
      type: 'number',
    },
    {
      name: 'shareLinks',
      title: 'Share Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
        },
      ],
    },
  ],
};
