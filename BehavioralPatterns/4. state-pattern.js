// State interface
class VendingMachineState {
  insertMoney() { }
  ejectMoney() { }
  selectProduct() { }
  dispenseProduct() { }
}

// Concrete States
class ReadyState extends VendingMachineState {
  constructor(machine) {
    super()
    this.machine = machine
  }

  insertMoney() {
    console.log('Money inserted.')
    this.machine.setState(this.machine.getDispensingState())
  }

  selectProduct() {
    console.log('Please insert money first.')
  }
}

class DispensingState extends VendingMachineState {
  constructor(machine) {
    super()
    this.machine = machine
  }

  dispenseProduct() {
    console.log('Product dispensed.')
    this.machine.setState(this.machine.getReadyState())
  }
}

class VendingMachine {
  constructor() {
    this.readyState = new ReadyState(this)
    this.dispensingState = new DispensingState(this)
    this.currentState = this.readyState
  }

  setState(state) {
    this.currentState = state
  }

  getReadyState() {
    return this.readyState
  }

  getDispensingState() {
    return this.dispensingState
  }

  insertMoney() {
    this.currentState.insertMoney()
  }

  selectProduct() {
    this.currentState.selectProduct()
  }

  dispenseProduct() {
    this.currentState.dispenseProduct()
  }
}

// Usage
const vendingMachine = new VendingMachine()

vendingMachine.selectProduct()
vendingMachine.insertMoney()
vendingMachine.dispenseProduct()