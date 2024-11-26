import { Schema, Types, model } from 'mongoose';
import type { ProductRaw } from '../interfaces';

const ProductSchema = new Schema<ProductRaw>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    productSlug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model('products', ProductSchema);

export default ProductModel;
