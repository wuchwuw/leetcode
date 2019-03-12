import LinkList from './link-list.js'

class LinkListStack {
  constructor () {
    this.list = new LinkList()
  }

  getSize () {
    return this.list.getSize()
  }

  push (e) {
    return this.list.addFirst(e)
  }

  pop () {
    return this.list.removeFirst()
  }

  isEmpty () {
    return this.list.isEmpty()
  }

  peek () {
    return this.list.getFirst()
  }
}

function contains (node, e) {
  if (node === null) {
    return false
  }
  if (node.e > e) {
    return contains(node.left, e)
  } else if (node.e < e) {
    return contains(node.right, e)
  } else {
    return true
  }
}