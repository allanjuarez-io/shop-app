import type { Request, Response } from 'express';

export async function deleteProductById(req: Request, res: Response) {
  try {
    res.send({ data: 'Delete' });
  } catch (error) {}
}
