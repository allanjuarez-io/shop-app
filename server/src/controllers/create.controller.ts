import { createProductDB } from '../services';
import { ProductAdapter } from '../util';
import { FAKESTOREAPI_BASE_URL } from '../constants';
import type { Request, Response } from 'express';
import type { ProductAPI, ProductRaw } from '../interfaces';

export async function createProduct(req: Request, res: Response) {
  try {
    if (!req.body) {
      throw new Error('NO_BODY_CONTENT');
    }

    const preData: ProductAPI = {
      title: req.body.title || '',
      description: req.body.description || '',
      price: req.body.price || 0.0,
      category: req.body.category || '',
      image: req.body.image || '',
    };

    const requestOptions = {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(preData),
    };

    const request = await fetch(FAKESTOREAPI_BASE_URL, requestOptions);
    const responseData: ProductAPI = await request.json();

    const adaptedData: Omit<ProductRaw, 'productSlug'> = {
      name: responseData.title,
      description: responseData.description,
      price: responseData.price,
      category: responseData.category,
      imageUrl: responseData.image,
    };

    const newProduct = await createProductDB(adaptedData);

    res.status(200).json({ status: 200, data: newProduct });
  } catch (error) {
    console.error(error);
  }
}
