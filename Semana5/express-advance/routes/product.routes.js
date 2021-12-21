import { Router } from 'express';
import { getProducts, getProductbyId, changeStock, deleteProduct,createProduct } from '../controllers/product.controller.js'
const router = Router();

router.get('/', getProducts );
router.get('/:productID', getProductbyId);


router.post('/', createProduct );

router.patch('/:productID', changeStock );

router.delete('/:productID', deleteProduct );

export default router;