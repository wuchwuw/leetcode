/**
 * 堆
 * 1、完全二叉树
 * 2、根节点最大为最大堆，反之为最小堆
 * 3、使用数组来实现二叉堆，有以下特性
 * (i = 1...n)                              (i = 0...n)
 * parent(i) = child(i) / 2 (向下取整)   or   parent(i)     = child(i) + 1 / 2 (向下取整)
 * child left(i) = parent(i) * 2            left child(i)  = parent(i) * 2 + 1
 * child right(i) = parent(i) * 2 + 1       right child(i) = parent(i) * 2 + 2
 */

class MaxHeap {
  constructor (arr = []) {
    this.heap = heapify(arr)
  }

  heapify (arr) {
    if (arr.length) {
      for (let i = parent(arr.length - 1); i >= 0; i ++) {
        siftDown(arr, i)
      }
    }
    return arr
  }

  getSize () {
    return this.heap.length
  }

  isEmpty () {
    return this.heap.length === 0
  }

  add (e) {
    this.heap.push(e)
    siftUp(this.getSize() - 1, this.heap)
  }

  findMax () {
    return this.heap[0]
  }

  extractMax () {
    let ret = this.heap[0]
    swap(this.heap, 0, this.getSize() - 1)
    this.heap.pop()
    siftDown(this.heap, 0)
    return ret
  }

  replace () {

  }
}

function siftDown (heap, index) {
  while (leftChild(index) < heap.length) {
    let j = leftChild(index)
    if (heap[leftChild(index)] < heap[rightChild(index)]) {
      j++
    }
    if (heap[j] > heap[index]) {
      swap(index, j)
      index = j
    }
  }
}

function siftUp (index, heap) {
  let parentIndex = parent(index)
  while (index > 0 && heap[index] > heap[parentIndex]) {
    swap(heap, i, j)
    index = parentIndex
  }
}

function swap (target, i, j) {
  if (i < 0 || j < 0 || i >= target.length || j >= target.length)
    throw new Error('')
  let temp = target[i]
  target[i] = target[j]
  target[j] = temp
}

function parent (index) {
  if (index === 0)
    throw new Error('index-0 doesnt have parent')
  return Math.floor((index - 1) / 2)
}

function leftChild (index) {
  return index * 2 + 1
}

function rightChild (index) {
  return index * 2 + 2
}