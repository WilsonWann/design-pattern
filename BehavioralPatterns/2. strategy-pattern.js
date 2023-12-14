// Discount Strategies
const regularCustomerDiscount = (amount) => amount * 0.1
const premiumCustomerDiscount = (amount) => amount * 0.2

// Context
class ShoppingCart {
  constructor(discountStrategy) {
    this.items = []
    this.discountStrategy = discountStrategy
  }

  addItem(item) {
    this.items.push(item)
  }

  calculateTotal() {
    const subtotal = this.items.reduce((total, item) => total + item.price, 0)
    return subtotal - this.discountStrategy(subtotal)
  }
}

// Usage
const regularCustomerCart = new ShoppingCart(regularCustomerDiscount)
const premiumCustomerCart = new ShoppingCart(premiumCustomerDiscount)

regularCustomerCart.addItem({ name: 'Item 1', price: 50 })
premiumCustomerCart.addItem({ name: 'Item 2', price: 100 })

console.log(`Regular Customer Total: $${regularCustomerCart.calculateTotal()}`)
console.log(`Premium Customer Total: $${premiumCustomerCart.calculateTotal()}`)