// Abstraction
class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }

  draw() {
    // Delegating the drawing to the specific renderer
    this.renderer.renderShape(this)
  }
}

// Implementor interface
class Renderer {
  renderShape(shape) { }
}

// Concrete Implementors
class WebRenderer extends Renderer {
  renderShape(shape) {
    console.log(`Drawing on the web: ${shape.constructor.name}`)
  }
}

class MobileRenderer extends Renderer {
  renderShape(shape) {
    console.log(`Drawing on mobile: ${shape.constructor.name}`)
  }
}

// Concrete Abstractions (Shapes)
class Circle extends Shape {
  constructor(renderer) {
    super(renderer)
  }
}

class Square extends Shape {
  constructor(renderer) {
    super(renderer)
  }
}

// Usage
const webRenderer = new WebRenderer()
const mobileRenderer = new MobileRenderer()

const circle = new Circle(webRenderer)
const square = new Square(mobileRenderer)

circle.draw()
square.draw()