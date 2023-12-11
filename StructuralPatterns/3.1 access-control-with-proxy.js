const user = {
  username: 'john doe',
  password: 'secret123'
}

const userProxy = new Proxy(user, {
  get(target, property) {
    if (property === 'password') {
      throw new Error('Access denied to password.')
    }
    return target[property]
  }
})

console.log(userProxy.username)
console.log(userProxy.password)