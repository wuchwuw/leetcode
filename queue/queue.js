class Queue {
  constructor () {
    this.queue = []
  }

  enqueue (e) {
    this.queue.push(e)
  }

  dequeue () {
    return this.queue.shift()
  }

  getFront () {
    return this.queue[0]
  }

  getSize () {
    return this.queue.length
  }

  isEmpty () {
    return this.queue.length === 0
  }
}
