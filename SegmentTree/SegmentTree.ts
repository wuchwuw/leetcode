interface Merger<E> {
  (a: E, b: E): E
}

class SegmentTree<E> {
  private tree: E[]
  private data: E[]
  private merger: Merger<E>

  constructor (arr: E[], merger: Merger<E>) {
    this.merger = merger
    this.data = new Array(arr.length)
    for (let i = 0; i < arr.length; i ++)
      this.data[i] = arr[i]
    
    this.tree = new Array(arr.length * 4)

    this.buildSegmentTree(0, 0, this.data.length - 1)
  }

  private buildSegmentTree (treeIndex: number, l: number, r: number): void {
    if (l === r) {
      this.tree[treeIndex] = this.data[l]
      return
    }

    let leftTreeIndex = this.leftChild(treeIndex)
    let rightTreeIndex = this.rightChild(treeIndex)

    let mid = Math.floor(l + (r - l) / 2)
    this.buildSegmentTree(leftTreeIndex, l, mid)
    this.buildSegmentTree(rightTreeIndex, mid + 1, r)
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex])
  }

  private _query (treeIndex: number, l: number, r: number, queryL: number, queryR: number): E {
    if (l === queryL && r === queryR) {
      return this.tree[treeIndex]
    }
    let mid = Math.floor(l + (r - l) / 2)
    let leftTreeIndex = this.leftChild(treeIndex)
    let rightTreeIndex = this.rightChild(treeIndex)
    if (queryL >= mid + 1) {
      return this._query(rightTreeIndex, mid + 1, r, queryL, queryR)
    } else if (queryR <= mid) {
      return this._query(leftTreeIndex, l, mid, queryL, queryR)
    }
    return this.merger(this._query(leftTreeIndex, l, mid, queryL, mid), this._query(leftTreeIndex, mid + 1, r, mid + 1, queryR))
  }

  private _set (treeIndex: number, l: number, r: number, index: number, val: E): void {
    if (l === r) {
      this.tree[treeIndex] = val
      return
    }
    let mid = Math.floor(l + (r - l) / 2)
    let leftTreeIndex = this.leftChild(treeIndex)
    let rightTreeIndex = this.rightChild(treeIndex)
    if (index <= mid) {
      this._set(leftTreeIndex, l, mid, index, val)
    } else {
      this._set(rightTreeIndex, mid + 1, r, index, val)
    }
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex])
  }

  private leftChild (treeIndex: number): number {
    return treeIndex * 2 + 1
  }

  private rightChild (treeIndex: number): number {
    return treeIndex * 2 + 2
  }

  set (index: number, val: E): void {
    if (index < 0 || index > this.data.length - 1)
      throw new Error('')
    this.data[index] = val
    this._set(0, 0, this.data.length - 1, index, val)
  }

  query (queryL: number, queryR: number): E {
    if (queryL < 0 || queryR > this.data.length - 1 || queryL > queryR) {
      throw new Error('')
    }
    return this._query(0, 0, this.data.length - 1, queryL, queryR)
  }

  toString (): string {
    return this.tree.toString()
  }
}

// test
let nums = [-2, 0, 3, -5, 2, -1]
let segTree = new SegmentTree(nums, (a, b) => a + b)
console.log(segTree.toString)