import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
import category from './schemas/category'
import heroImages from './schemas/heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,heroImages],
}
