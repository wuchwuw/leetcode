function bfs (g) {
  let visited = new Array(g.length).fill(false)
  // 保存路径
  let from = new Array(g.length).fill(-1)
  // 保存最小路径
  let ord = new Array(g.length).fill(-1)
  let queue = []
  queue.push(0)
  visited[0] = true
  while (!queue.length) {
    let v = queue.shift()
    let iter = g.adjIterator(v)
    for (let i = iter.begin(); !iter.end(); i = iter.next()) {
      if (!visited[i]) {
        queue.push(i)
        visited[i] = true
        from[i] = v
        ord[i] = ord[v] + 1
      }
    }
  }
}