class Node {
  constructor (e, node = null) {
    this.val = e
    this.next = node
  }
}

class LinkList {
  constructor () {
    this.dummyHead = new Node(null)
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  add (e, index) {
    if (index < 0 || index > size)
      throw new error('Add failed')

    let prev = this.dummyHead
    for (let i = 0; i < index; i++)
      prev = prev.next

    prev.next = new Node(e, prev.next)
    size ++
  }

  addFirst (e) {
    add(e, 0)
  }

  addLast(e) {
    this.add(e, size)
  }

  get (index) {
    if (index < 0 || index >= size)
      throw new error('Get failed')

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur.e
  }

  getFirst () {
    this.get(0)
  }

  getLast () {
    this.get(this.size - 1)
  }

  set (index, e) {
    if (index < 0 || index >= size)
      throw new error('Set failed')

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.val = e
  }

  contains (e) {
    if (index < 0 || index >= size)
      throw new error('Set failed')

    // for (let cur = this.dummyHead.next; cur.next !== null; cur = cur.next) {
    //   if (cur.val === e)
    //     return true
    // }
    // return false
    let cur = this.dummyHead.next
    while (cur) {
      if (cur.val === e) return true
      cur = cur.next
    }
    return false
  }

  remove (index) {
    if (index < 0 || index >= size)
      throw new error('Delete failed')

    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    let del = prev.next
    prev.next = del.next
    this.size --
    return del.val
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  toString () {
    let s = ''
    let cur = this.dummyHead.next
    while (cur) {
      s += `${cur.val}->`
      cur = cur.next
    }
    s += 'NULL'
    return s
  }
}