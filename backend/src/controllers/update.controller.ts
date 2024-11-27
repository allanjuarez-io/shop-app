import { updateProductDB } from '../services';
import type { Request, Response } from 'express';

export async function updateProductById(req: Request, res: Response) {
  try {
    if (!req.body) {
      throw new Error('NO_BODY_CONTENT');
    }

    if (!req.params.productId) {
      throw new Error('NO_PRODUCT_ID');
    }

    const newData = {
      name: req.body.name || '',
      description: req.body.description || '',
      price: req.body.price || 0.0,
      category: req.body.category || '',
      imageUrl: req.body.imageUrl || '',
      productSlug: req.body.productSlug || '',
    };

    const product = await updateProductDB(req.params.productId, newData);

    console.log(product);

    res.status(200).send('Update');
  } catch (error) {
    console.error(error);
  }
}
