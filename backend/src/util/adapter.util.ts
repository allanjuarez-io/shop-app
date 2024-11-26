import type { ProductAPI, ProductRaw } from '../interfaces';

export function ProductAdapter(product: any): ProductRaw {
  return {
    name: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    imageUrl: product.image,
    productSlug: product.productSlug,
  };
}
