// Product class
class Product {
  constructor(name) {
    this.name = name
  }
}

// Factory for creating products
class ProductFactory {
  createProduct(name) {
    return new Product(name)
  }
}

// Usage
const factory = new ProductFactory()
const productA = factory.createProduct('Product A')
const productB = factory.createProduct('Product B')

console.log(productA.name)
console.log(productB.name)