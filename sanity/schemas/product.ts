export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',

            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'category' }]
        }
    ]
}