import { Router } from 'express';
import { getProducts, getProductbyId } from '../controllers/product.controller.js'
const router = Router();

router.get('/', getProducts );

router.get('/:productID', getProductbyId);

export default router;