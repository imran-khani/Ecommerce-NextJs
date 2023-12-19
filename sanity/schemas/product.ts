export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string',
        },
        {
            name: 'images',
            type: 'array',
            title: "Product Images",
            of: [{ type: 'image' }]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',

            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of product',
        },
        {
            name: 'category',
            title: "Category",
            type: 'reference',
            to: [{
                type: 'category'
            }]
        }
    ]
}