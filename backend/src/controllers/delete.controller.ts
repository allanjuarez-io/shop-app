import { deleteProductDB } from '../services';
import type { Request, Response } from 'express';

export async function deleteProductById(req: Request, res: Response) {
  try {
    if (!req.params.productId) {
      throw new Error('NO_ID');
    }

    await deleteProductDB(req.params.productId);
    res.send({ data: 'Delete' });
  } catch (error) {}
}
