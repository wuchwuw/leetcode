// 邻接表
class SparseGraph {
  private n: number
  private m: number
  private directed: boolean
  private g: number[][]

  constructor (n: number, directed: boolean) {
    this.n =  n
    this.m = 0
    this.directed = directed
    for (let i = 0; i < n; i ++) {
      this.g[i] = []
    }
  }

  V (): number {
    return this.n
  }

  E (): number {
    return this.m
  }

  addEdge (v: number, w: number): void {
    // v >= 0 v < n
    // w >= 0 w < n
    this.g[v].push(w)
    if (v !== w && !this.directed) {
      this.g[w].push(v)
    }
    this.m ++
  }

  hasEdge (v: number, w: number): boolean {
    // v >= 0 v < n
    // w >= 0 w < n
    for (let i = 0; i < this.g[v].length; i ++) {
      if (this.g[v][i] === w) {
        return true
      }
    }
    return false
  }

  adjIterator (v) {
    let index = 0
    return {
      begin () {
        index = 0
        if (this.g[v].length) return this.g[v][index]
        return -1
      },
      next () {
        index ++
        if (index < this.g[v].length) return this.g[v][index]
        return -1
      },
      end () {
        return index >= this.g[v].length
      }
    }
  }
}

export default SparseGraph