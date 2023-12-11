// Component interface
class Graphic {
  draw() { }
}

// Leaf class (represents simple shapes)
class Circle extends Graphic {
  constructor() {
    super()
    // Circle-specific properties and methods
  }

  draw() {
    // Draw a circle
    console.log('Draw a circle')
  }
}

// Composite class (represents groups of shapes)
class Group extends Graphic {
  constructor() {
    super()
    this.graphics = []
  }

  add(graphic) {
    this.graphics.push(graphic)
  }

  draw() {
    // Draw each graphic in the group
    this.graphics.forEach(graphic => graphic.draw())
  }
}

// Usage
const circle1 = new Circle()
const circle2 = new Circle()
const group = new Group()

group.add(circle1)
group.add(circle2)

group.draw() // Draws both circles in the group