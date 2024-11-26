import Router from 'express';
import { updateProductById } from '../controllers';

const router = Router();

router.put('/:productId', updateProductById);

export { router };
