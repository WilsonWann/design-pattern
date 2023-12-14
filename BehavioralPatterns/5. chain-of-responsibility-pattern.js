// Handler interface
class OrderHandler {
  constructor() {
    this.nextHandler = null
  }

  setNextHandler(handler) {
    this.nextHandler = handler
  }

  handleOver(order) {
    if (this.canHandlerOrder(order)) {
      this.processOrder(order)
    } else if (this.nextHandler) {
      this.nextHandler.handleOver(order)
    } else {
      console.log('No handler can process this order.')
    }
  }

  canHandlerOrder(order) { }
  processOrder(order) { }
}

// Concrete Handlers
class SmallOrderHandler extends OrderHandler {
  canHandlerOrder(order) {
    return order.amount <= 100
  }

  processOrder(order) {
    console.log(`Processing small order for ${order.amount}`)
  }
}

class MediumOrderHandler extends OrderHandler {
  canHandlerOrder(order) {
    return order.amount <= 500
  }

  processOrder(order) {
    console.log(`Processing medium order for ${order.amount}`)
  }
}

class LargeOrderHandler extends OrderHandler {
  canHandlerOrder(order) {
    return order.amount > 500
  }

  processOrder(order) {
    console.log(`Processing large order for ${order.amount}`)
  }
}

// Client
class Order {
  constructor(amount) {
    this.amount = amount
  }
}

// Usage
const smallOrderHandler = new SmallOrderHandler();
const mediumOrderHandler = new MediumOrderHandler();
const largeOrderHandler = new LargeOrderHandler();

smallOrderHandler.setNextHandler(mediumOrderHandler)
mediumOrderHandler.setNextHandler(largeOrderHandler)

const order1 = new Order(20)
const order2 = new Order(250)
const order3 = new Order(600)

smallOrderHandler.handleOver(order1)
smallOrderHandler.handleOver(order2)
smallOrderHandler.handleOver(order3)