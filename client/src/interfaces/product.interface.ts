export interface ProductRaw {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  productSlug: string;
}

export interface ProductDB extends ProductRaw {
  _id: string;
  createAt?: Date;
  updatedAt?: Date;
}
