import { Product } from '../models/products.models.js'

const createProduct = (req, res, next) => {
  const { name, stock, price } = req.body;
  if( name && stock && price){
    const newProduct = {name, stock, price}
    const product = new Product();
    product.save(newProduct);
    res.status(200).json({ message: 'Producto registrado con exito', data: []})
  }else{
    next();
  }
};

const getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.status(200).json({ message: 'Ok', data: products})
};

const getProductbyId = (req, res, next) => {
  const { productID } = req.params;
  const product = Product.findById(productID);
  res.status(200).json({ message: 'Ok', data: product})
};

const changeStock = (req, res, next) => {
  const { productID } = req.params;
  const { stock } = req.body;
  if(stock){
    const product = Product.setStock(productID, stock);
    res.status(200).json({ message: 'Ok', data: product})
  }else{
    next();
  }
};

const deleteProduct = (req, res, next) => {
  const { productID } = req.params;
  const product = Product.deleteProduct(productID);
  res.status(200).json({ message: 'Ok', data: product})
};

export { createProduct, getProducts, getProductbyId, changeStock, deleteProduct };