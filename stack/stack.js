class Stack {
  constructor () {
    this.stack = []
  }

  push (e) {
    this.stack.push(e)
  }

  pop () {
    return this.stack.pop()
  }

  peek () {
    return this.stack[this.stack.length - 1]
  }

  isEmpty () {
    return this.stack.length === 0
  }

  getSize () {
    return this.stack.length
  }
}