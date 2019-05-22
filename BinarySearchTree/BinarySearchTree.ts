interface Comparable<E> {
  (a: E, b: E): number
}

class BSTNode<E> {
  e: E
  left: BSTNode<E>
  right: BSTNode<E>

  constructor (e: E) {
    this.e = e
    this.left = null
    this.right = null
  }
}

class BST<E> {

  private root: BSTNode<E>
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

  removeMin (): E {
    
  }

  private _add (node: BSTNode<E>, e: E): BSTNode<E> {
    if (node === null) {
      node = new BSTNode(e)
      this.size ++
      return node
    }
    if (this.compareTo(node.e, e) < 0) {
      node.left = this._add(node.left, e) 
    } else if (this.compareTo(node.e, e) > 0) {
      node.right = this._add(node.right, e)
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
  private recursive_contains (node: BSTNode<E>, e: E): boolean {
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

  private _preOrder (node: BSTNode<E>, callback: any): void {
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
  
  private minimum (node: BSTNode<E>): BSTNode<E> {
    if (node.left === null) {
      return node
    }
    return minimum(node.left)
  }

  private maximum (node: BSTNode<E>): BSTNode<E> {
    if (node.right === null) {
      return node
    }
    return minimum(node.right)
  }

}