interface Comparable<E> {
  (a: E, b: E): number
}

const RED = true
const BLACK = false

class RBTNode<E> {
  e: E
  left: RBTNode<E>
  right: RBTNode<E>
  color: boolean

  constructor (e: E) {
    this.e = e
    this.left = null
    this.right = null
    this.color = RED
  }
}

class RBTree<E> {

  private root: RBTNode<E>
  private size: number
  private compareTo: Comparable<E>

  constructor (compareTo: Comparable<E>) {
    this.root = null
    this.size = 0
    this.compareTo = compareTo
  }

  getSize (): number {
    return this.size
  }

  isEmpty (): boolean {
    return this.size === 0
  }

  add (e: E): void {
    this.root = this._add(this.root, e)
    this.root.color = BLACK
  }

  contains (e: E): boolean {
    return this.recursive_contains(this.root, e)
  }

  preOrder (callback: any): void {
    this._preOrder(this.root, callback)
  }

  levelOrder (callback: any): void {
    this._levelOrder(callback)
  }

  minimum (): E {
    if (this.size === 0) {
      throw new Error('')
    }
    return this._minimum(this.root).e
  }

  maximum (): E {
    if (this.size === 0) {
      throw new Error('')
    }
    return this._maximum(this.root).e
  }

  removeMin (): E {
    let ret: E = this.minimum()
    this.root = this._removeMin(this.root)
    return ret
  }

  removeMax (): E {
    let ret: E = this.maximum()
    this.root = this._removeMax(this.root)
    return ret
  }

  remove (e: E): void {
    this.root = this._remove(this.root, e)
  }

  private flipColors (node: RBTNode<E>): void {
    node.color = RED
    node.left.color = node.right.color = BLACK
  }

  private leftRotate (node: RBTNode<E>): RBTNode<E> {
    let x = node.right
    node.right = x.left
    x.left = node
    x.color = node.color
    node.color = RED
    return x
  }

  private rightRotate (node: RBTNode<E>): RBTNode<E> {
    let x = node.left
    node.left = x.right
    x.right = node
    x.color = node.color
    node.color = RED
    return x
  }

  private isRed (node: RBTNode<E>): boolean {
    if (node === null) {
      return BLACK
    }
    return RED
  }

  private _remove (node: RBTNode<E>, e: E): RBTNode<E> {
    if (this.compareTo(node.e, e) === 0) {
      if (node.left === null) {
        let rightNode = node.right
        node.right = null
        this.size --
        return rightNode
      } else if (node.right === null) {
        let leftNode = node.left
        node.left = null
        this.size --
        return leftNode
      } else {
        let minNode = this._minimum(node.right)
        minNode.right = this._removeMin(node.right)
        minNode.left = node.left
        node.left = node.right = null
        return minNode
      }
    } else if (this.compareTo(node.e, e) > 0) {
      node.right = this._remove(node.right, e)
      return node
    } else {
      node.left = this._remove(node.left, e)
      return node
    }
  }

  private _removeMin (node: RBTNode<E>): RBTNode<E> {
    if (node.left === null) {
      let rightNode = node.right
      node.right = null
      this.size --
      return rightNode
    }
    node.left = this._removeMin(node.left)
    return node
  }

  private _removeMax (node: RBTNode<E>): RBTNode<E> {
    if (node.right === null) {
      let leftNode = node.left
      node.left = null
      this.size --
      return leftNode
    }
    node.right = this._removeMin(node.right)
    return node
  }

  private _add (node: RBTNode<E>, e: E): RBTNode<E> {
    if (node === null) {
      node = new RBTNode(e)
      this.size ++
      return node
    }
    if (this.compareTo(node.e, e) < 0) {
      node.left = this._add(node.left, e) 
    } else if (this.compareTo(node.e, e) > 0) {
      node.right = this._add(node.right, e)
    }

    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node)
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rightRotate(node)
    }
    if (this.isRed(node.right) && this.isRed(node.left)) {
      this.flipColors(node)
    }

    return node
  }

  // 遍历查询
  private traversing_contains (e: E): boolean {
    let cur = this.root
    while (cur) {
      if (this.compareTo(cur.e, e) === 0) {
        return true
      } else if (this.compareTo(cur.e, e) < 0) {
        cur = cur.left
      } else {
        cur = cur.right
      }
    }
    return false
  }

  // 递归查询
  private recursive_contains (node: RBTNode<E>, e: E): boolean {
    if (node === null) {
      return false
    }
    if (this.compareTo(node.e, e) === 0) {
      return true
    } else if (this.compareTo(node.e, e) < 0) {
      return this.recursive_contains(node.left, e)
    } else {
      return this.recursive_contains(node.right, e)      
    }
  }

  private _preOrder (node: RBTNode<E>, callback: any): void {
    if (node === null) {
      return
    }
    callback(node)
    this._preOrder(node.left, callback)
    this._preOrder(node.right, callback)
  }

  private _preOrderNR (callback: any): void {
    let stack = []
    stack.push(this.root)
    while (stack.length) {
      let cur = stack.pop()
      callback(cur)
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
    }
  }

  private _levelOrder (callback: any): void {
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let cur = queue.shift()
      callback(cur)
      cur.left && cur.push(cur.left)
      cur.right && cur.push(cur.right)
    }
  }
  
  private _minimum (node: RBTNode<E>): RBTNode<E> {
    if (node.left === null) {
      return node
    }
    return this._minimum(node.left)
  }

  private _maximum (node: RBTNode<E>): RBTNode<E> {
    if (node.right === null) {
      return node
    }
    return this._minimum(node.right)
  }

}