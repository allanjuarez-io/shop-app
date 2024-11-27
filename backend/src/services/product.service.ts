import { API_BASE_URL } from '../config';
import { ProductModel } from '../models';
import { createNewSlug } from './url.service';
import { ProductAdapter } from '../util';
import type { ProductAPI, ProductRaw } from '../interfaces';

async function fillDataBase(): Promise<void> {
  try {
    const request = await fetch(`${API_BASE_URL}?limit=25`);
    const responseData: ProductAPI[] = await request.json();

    const preData = responseData.map((product) => {
      const productSlug = createNewSlug(product.title);
      return {
        ...product,
        productSlug,
      };
    });

    const adaptedData = preData.map((product) => ProductAdapter(product));

    await ProductModel.insertMany(adaptedData);
    console.log('Se insertaron los documentos en la base de datos con exito.');
  } catch (error) {
    console.error(error);
  }
}

async function getAllProductsDB() {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (error) {
    console.error(error);
  }
}

async function getProductDBById(productId: string) {
  try {
    const product = await ProductModel.findOne({ _id: productId });
    return product;
  } catch (error) {
    console.error(error);
  }
}

async function createProductDB(product: ProductRaw) {
  try {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  } catch (error) {
    console.error(error);
  }
}

async function updateProductDB(
  productId: string,
  newData: {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    productSlug: string;
  }
) {
  try {
    const newSlug = createNewSlug(newData.name);
    const data = {
      ...newData,
      productSlug: newSlug,
    };

    const product = await ProductModel.findByIdAndUpdate(
      { _id: productId },
      data,
      { new: true }
    );
    return product;
  } catch (error) {
    console.error(error);
  }
}

async function deleteProductDB(productId: string) {
  try {
    await ProductModel.deleteOne({ _id: productId });
    console.log('Se elimino el producto con exito');
  } catch (error) {
    console.error(error);
  }
}

export {
  fillDataBase,
  getAllProductsDB,
  getProductDBById,
  createProductDB,
  updateProductDB,
  deleteProductDB,
};
