import Router from 'express';
import { deleteProductById } from '../controllers';

const router = Router();

router.delete('/:productId', deleteProductById);

export { router };
