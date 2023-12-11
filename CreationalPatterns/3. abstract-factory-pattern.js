// Abstract Product classes
class Button {
  render() { }
}

class Checkbox {
  render() { }
}

// Concrete Product classes
class MacButton extends Button {
  render() {
    return 'Render Mac button'
  }
}

class MacCheckbox extends Checkbox {
  render() {
    return 'Render Mac checkbox'
  }
}

class WindowsButton extends Button {
  render() {
    return 'Render Windows button'
  }
}

class WindowsCheckbox extends Checkbox {
  render() {
    return 'Render Windows checkbox'
  }
}

// Abstract Factory interface
class GUIFactory {
  createButton() { }
  createCheckbox() { }
}

// Concrete Factories
class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton()
  }

  createCheckbox() {
    return new MacCheckbox()
  }
}

class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton()
  }

  createCheckbox() {
    return new WindowsCheckbox()
  }
}

// Usage
function createUI(factory) {
  const button = factory.createButton()
  const checkbox = factory.createCheckbox()

  return { button, checkbox }
}

const macUI = createUI(new MacFactory())
console.log(macUI.button.render())
console.log(macUI.checkbox.render())

const windowsUI = createUI(new WindowsFactory())
console.log(windowsUI.button.render())
console.log(windowsUI.checkbox.render())

