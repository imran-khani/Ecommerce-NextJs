import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
import category from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
