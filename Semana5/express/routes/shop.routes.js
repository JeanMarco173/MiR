import { Router } from 'express';
const router = Router();

const { pathname: product } = new URL('../views/product.html', import.meta.url);
const { pathname: addProduct } = new URL('../views/addProduct.html', import.meta.url);

router.get('/', (req, res, next) => {
    res.status(200).sendFile(product);
});

router.get('/add-product', (req, res, next) => {
    res.status(200).sendFile(addProduct);
});

router.post('/product', (req, res, next) => {
    console.log('body', req.body);
    res.status(200).redirect('/');
});

export default router;