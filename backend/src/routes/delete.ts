import Router from 'express';
import { deleteProductById } from '../controllers';

const router = Router();

router.delete('/:id', deleteProductById);

export { router };
