import MaxHeap from './max-heap.js'

class PriorityQueue {
  constructor () {
    this.heap = new MaxHeap()
  }

  getSize () {
    return this.heap.getSize()
  }

  isEmpty () {
    return this.heap.isEmpty()
  }

  getFront () {
    return this.heap.findMax()
  }

  enqueue (e) {
    this.heap.add(e)
  }

  dequeue () {
    return this.heap.extractMax()
  }
}