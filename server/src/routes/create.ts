import Router from 'express';
import { createProduct } from '../controllers';

const router = Router();

router.post('/', createProduct);

export { router };
