export default class Edge {
  private a: number
  private b: number
  private weight: any

  constructor (a: number, b: number, weight: any) {
    this.a = a
    this.b = b
    this.weight = weight
  }

  v () {
    return this.a
  }

  w () {
    return this.b
  }

  wt () {
    return this.weight
  }

  other (x) {
    // x === a || x === b
    return x === this.a ? this.b : this.a
  }
}