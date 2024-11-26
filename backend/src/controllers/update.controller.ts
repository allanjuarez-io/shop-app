import { updateProductDB } from '../services';
import type { Request, Response } from 'express';

export async function updateProductById(req: Request, res: Response) {
  try {
    if (!req.body) {
      throw new Error('NO_BODY_CONTENT');
    }
    // console.log(req.body);
    console.log('Funcionas?');

    const { productId } = req.params;
    console.log('Params', productId);

    const newData = {
      name: req.body.name ?? '',
      description: req.body.description ?? '',
      price: req.body.price ?? 0.0,
      category: req.body.category ?? '',
      imageUrl: req.body.imageUrl ?? '',
      productSlug: req.body.productSlug ?? '',
    };

    const product = await updateProductDB(productId, newData);

    console.log(product);

    res.status(200).send({ data: 'Update' });
  } catch (error) {
    console.error(error);
  }
}
