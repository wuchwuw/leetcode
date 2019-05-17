interface UF {
  isConnected (p: number, q: number): boolean
  unionElements (p: number, q: number): void
  getSize (): number
}

class UnionFind implements UF {

  private id: number[]
  
  constructor (size: number) {
    this.id = new Array(size)
    for (let i = 0; i < this.id.length; i ++)
      this.id[i] = i
  }

  getSize (): number {
    return this.id.length
  }

  isConnected (p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  unionElements (p: number, q: number): void {
    let pId = this.find(p)
    let qId = this.find(q)
    if (pId === qId) {
      return
    }
    for (let i = 0; i < this.id.length; i ++) {
      if (this.id[i] === pId) {
        this.id[i] = qId
      }
    }
  }

  private find (p: number) {
    if (p < 0 || p >= this.id.length) {
      throw new Error()
    }
    return this.id[p]
  }
}