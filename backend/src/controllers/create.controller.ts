import { API_BASE_URL } from '../config';
import { createProductDB } from '../services';
import { ProductAdapter } from '../util';
import type { Request, Response } from 'express';
import type { ProductAPI, ProductRaw } from '../interfaces';

export async function createProduct(req: Request, res: Response) {
  try {
    if (!req.body) {
      throw new Error('NO_BODY_CONTENT');
    }

    const preData: ProductAPI = {
      title: req.body.title ?? '',
      description: req.body.description ?? '',
      price: req.body.price ?? 0.0,
      category: req.body.category ?? '',
      image: req.body.image ?? '',
    };

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(preData),
      headers: new Headers({ 'content-type': 'application/json' }),
    };

    const request = await fetch(API_BASE_URL, requestOptions);
    const responseData: ProductAPI = await request.json();

    const adaptedData: ProductRaw = ProductAdapter(responseData);
    const newProduct = await createProductDB(adaptedData);

    console.log('createProduct', newProduct);
    res.status(200).json({ status: 200, data: newProduct });
  } catch (error) {
    console.error(error);
  }
}
