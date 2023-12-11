// Singleton instance
let instance = null

class Singleton {
  constructor() {
    if (!instance) {
      instance = this
      // Your initialization code here
    } else {
      return instance
    }
  }

  // Your methods and properties here
}

// Usage
const singletonA = new Singleton()
const singletonB = new Singleton()

console.log(singletonA === singletonB)