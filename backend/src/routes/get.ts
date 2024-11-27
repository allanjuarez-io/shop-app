import Router from 'express';
import { getAllProducts, getProductById } from '../controllers';

const router = Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);

export { router };
