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

  minimum () {
    if (this.size === 0)
      throw new Error('BST is empty')
    return minimum(this.root)
  }

  maximum () {
    if (this.size === 0)
      throw new Error('BST is empty')
    return maximum(this.root)
  }

  removeMin () {
    let ret = this.minimum()
    this.root = removeMin(this.root)
    this.size --
    return ret.e
  }

  removeMax () {
    let ret = this.maximum()
    this.root = removeMax(this.root)
    this.size --
    return ret.e
  }
  
  remove (e) {
    this.root = remove(this.root, e)
  }
}

function remove (node, e) {
  if (node === null) {
    return  null
  }

  if (node.e > e) {
    node.left = remove(node.left, e)
    return node
  } else if (node.e < e) {
    node.right = remove(node.right.e)
    return node
  } else {
    if (node.left === null) {
      let rightNode = node.right
      node.right = null
      // size --
      return rightNode
    }
    if (node.right === null) {
      let leftNode = node.left
      node.left = null
      // size --
      return leftNode
    }
    // 找到当前要删除的节点的后继节点
    let min = minimum(node.right)
    min.right = removeMin(node.right)
    min.left = node.left
    return min
  }
}

function removeMax (node) {
  if (node.right === null) {
    let leftNode = node.left
    node.left = null
    return leftNode
  }
  node.right = removeMin(node.right)
  return node
}

function removeMin (node) {
  if (node.left === null) {
    let rightNode = node.right
    node.right = null
    return rightNode
  }
  node.left = removeMin(node.left)
  return node
}

function maximum () {
  if (node.right === null)
    return node.e
  return maximum(node.right)
}

function minimum (node) {
  if (node.left === null)
    return node.e
  return minimun(node.left)
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

var uniqueMorseRepresentations = function(words) {
  let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let set = new Set()
  words.forEach((item) => {
    let str = ''
    for (let i = 0, len = item.length; i < len; i++) {
      str += code[item[i].charCodeAt() - 97]
    }
    set.add(str)
  })
  return set.size
};