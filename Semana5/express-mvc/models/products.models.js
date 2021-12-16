const products = [
  { id: 1, name: 'Product1', stock: 10, price: 30 },
  { id: 2, name: 'Product2', stock: 10, price: 20 },
  { id: 3, name: 'Product3', stock: 10, price: 10 },
]

export class Product {
  constructor(name, stock, price) {
    this.name = name;
    this.stock = stock;
    this.price = price;
  }

  save(product) {
    const newProduct = {
      id: products[products.length - 1].id + 1,
      name: product.name,
      stock: product.stock,
      price: product.price
    }
    products.push(newProduct)
  }

  static fetchAll() {
    return products;
  }

  static findById(productId) {
    return products.filter( product => product.id == productId );
  }
}