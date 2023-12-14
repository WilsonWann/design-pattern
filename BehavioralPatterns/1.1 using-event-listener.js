class NewsPublisher {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber) {
    const index = this.subscribers.indexOf(subscriber)
    if (index !== -1) {
      this.subscribers.splice(index, 1)
    }
  }

  publishNews(news) {
    this.subscribers.forEach(subscriber => {
      subscriber(news)
    })
  }
}

// Usage
const publisher = new NewsPublisher()

const subscriber1 = (news) => {
  console.log(`Subscriber 1 received news: ${news}`)
}

const subscriber2 = (news) => {
  console.log(`Subscriber 2 received news: ${news}`)
}

publisher.subscribe(subscriber1)
publisher.subscribe(subscriber2)

publisher.publishNews('Breaking News: Important Announcement')