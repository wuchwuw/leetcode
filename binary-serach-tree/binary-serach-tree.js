function Node (e) {
  this.e = e
  this.left = null
  this.right = null
}

class BinarySearchTree {
  constructor () {
    this.root = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  add (e) {
    addTreeNode(this.root)
  }

  /**
   * 前序遍历
   */
  preOrder () {
    preOrder(this.root)
  }

  preOrderNR () {
    preOrderNR(this.root)
  }

  /**
   * 中序遍历
   */
  inOrder () {
    inOrder(this.root)
  }

  /**
   * 后序遍历
   */
  postOrder () {
    postOrder(this.root)
  }

  contains (e) {
    return contains(this.root, e)
  }

  levelOrder () {
    levelOrder(this.root)
  }
}

function addTreeNode(node, e) {
  if (node === null) {
    size++
    return new Node(e)
  }

  if (node.e > e) {
    node.left = addTreeNode(node.left, e)
  } else if (node.e < e){
    node.right = addTreeNode(node.right, e)
  }

  return node
}

function preOrder (node) {
  if (node === null) {
    return
  }
  console.log(node.e)
  preOrder(node.left)
  preOrder(node.right)
}

function inOrder (node) {
  if (node === null) {
    return
  }
  preOrder(node.left)
  console.log(node.e)
  preOrder(node.right)
}

function postOrder (node) {
  if (node === null) {
    return
  }
  preOrder(node.left)
  preOrder(node.right)
  console.log(node.e)
}

function contains (node, e) {
  if (node === null) {
    return false
  }

  if (node.e > e) {
    return contains(node.left, e)
  } else if (node.e > e) {
    return contains(node.right, e)
  }
}

function preOrderNR (node) {
  if (node === null) {
    return
  }
  let stack = []
  stack.push(node)
  while (stack.length !== 0) {
    let cur = stack.pop()
    console.log(cur.e)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
}

function levelOrder (node) {
  if (node === null) {
    return
  }
  let queue = []
  queue.push(node)
  while (queue.length !== 0) {
    let cur = stack.shift()
    console.log(cur.e)
    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
  }
}

if (node.left === null) {
  if (node.right) {
    return node.right
  } else {
    return null
  }
}
node.left = x(node.left)
return node