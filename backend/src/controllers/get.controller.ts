import { ProductModel } from '../models';
import type { Request, Response } from 'express';
import { getAllProductsDB, getProductDBById } from '../services';

async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await getAllProductsDB();
    res.status(200).json({ status: 200, data: products });
  } catch (error) {}
}

async function getProductById(req: Request, res: Response) {
  try {
    const productId: string = req.params.id ?? '1';
    const product = await getProductDBById(productId);
    res.status(200).json({ status: 200, data: product });
  } catch (error) {}
}

export { getProductById, getAllProducts };
