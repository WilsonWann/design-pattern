class Coffee {
  cost() {
    return 5 // Base cost of a regular coffee
  }
}

// Now, you want to add decorators to your coffee to customize it with additional options, such as milk and sugar: 
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2; // Adding the cost of milk
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1; // Adding the cost of sugar
  }
}

// You can then create decorated coffee instances like this:
const regularCoffee = new Coffee()
const coffeeWithMilk = new MilkDecorator(regularCoffee);
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);

console.log(regularCoffee.cost())
console.log(coffeeWithMilk.cost())
console.log(coffeeWithMilkAndSugar.cost())