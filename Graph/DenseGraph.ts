import Edge from './type'

// 邻接矩阵
class DenseGraph {
  private n: number
  private m: number
  private directed: boolean
  private g: boolean[][]

  constructor (n: number, directed: boolean) {
    this.n =  n
    this.m = 0
    this.directed = directed
    for (let i = 0; i < n; i ++) {
      this.g[i] = new Array(n).fill(false)
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
    if (this.hasEdge(v, w)) {
      return
    }
    this.g[v][w] = true
    if (!this.directed) {
      this.g[w][v] = true
    }
    this.m ++
  }

  hasEdge (v: number, w: number): boolean {
    return this.g[v][w]
  }
  // 遍历某个顶点的所有邻边
  adjIterator (v: number) {
    let index = 0
  
    function next () {
      for (index += 1; index < this.g[v].length; index ++) {
        if (this.g[v][index]) {
          return index
        }
      }
      return -1
    }
  
    return {
      begin () {
        index = -1
        return next()
      },
      next,
      end () {
        return index >= this.g[v].length
      }
    }
  }
}

export default DenseGraph