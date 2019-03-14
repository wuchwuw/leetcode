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

  add (e) {
    this.heap.push(e)
    siftUp(this.getSize() - 1, this.heap)
  }

  remove () {
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