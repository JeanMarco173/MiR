import { Product } from '../models/products.models.js'

const createProduct = (req, res, next) => {
  const { name, stock, price } = req.body;
  const product = new Product(name, stock, price);
  product.save();
  res.status(200).json({ message: 'Producto registrado con exito', data: []})
};

const getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log('products', products)
  res.status(200).json({ message: 'Ok', data: products})
};

const getProductbyId = (req, res, next) => {
  const { productID } = req.params;
  const product = Product.findById(productID);
  console.log('product', product)
  res.status(200).json({ message: 'Ok', data: product})
};

export { createProduct, getProducts, getProductbyId };