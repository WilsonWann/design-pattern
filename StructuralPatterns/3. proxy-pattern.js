class ExpensiveResource {
  constructor() {
    console.log('Creating an expensive resource...')
  }

  fetchData() {
    console.log('Fetching data...')
  }
}

class LazyResourceProxy {
  constructor() {
    this.resource = null
  }

  fetchData() {
    if (!this.resource) {
      this.resource = new ExpensiveResource()
    }
    this.resource.fetchData()
  }
}

// Usage
const LazyResource = new LazyResourceProxy()
// The actual resource is created and data is fetched only when needed
LazyResource.fetchData()

