interface TreeMap {
  [key: string]: any
}

class TreeNode {
  isWord: boolean
  next: TreeMap
  constructor (isWord?: boolean) {
    this.isWord = !!isWord
    this.next = new Map()
  }
}

class Trie {
  private root: TreeNode
  // 记录单词数
  private size: number

  constructor () {
    this.root = new TreeNode()
    this.size = 0
  }

  getSize (): number {
    return this.size
  }

  add (word: string): void { 
    let cur = this.root
    for (let i = 0; i < word.length; i ++) {
      let chat = word.charAt(i)
      if (!cur.next.has(chat)) {
        let node = new TreeNode()
        cur.next.set(chat, node)
      }
      cur = cur.next.get(chat)
    }
    if (!cur.isWord) {
      cur.isWord = true
      this.size ++
    }
  }

  contains (word: string): boolean {
    let cur = this.root
    for (let i = 0; i < word.length; i ++) {
      let chat = word.charAt(i)
      if (!cur.next.has(chat)) {
        return false
      }
      cur = cur.next.get(chat)
    }
    return cur.isWord
  }

  isPrefix (prefix: string): boolean {
    let cur = this.root
    for (let i = 0; i < prefix.length; i ++) {
      let chat = prefix.charAt(i)
      if (!cur.next.has(chat)) {
        return false
      }
      cur = cur.next.get(chat)
    }
    return true
  }

}