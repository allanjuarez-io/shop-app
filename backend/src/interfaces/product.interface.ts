export interface ProductAPI {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // nameUrl?: string;
}

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
  createAt: Date;
  updatedAt: Date;
}
