function dfs (g) {
  let visited = new Array(g.length).fill(false)
  let id = new Array(g.length).fill(-1)
  let ccount = 0
  for (let i = 0; i < g.length; i ++) {
    if (!visited[i]) {
      dfs1(i, g, visited, id, ccount)
      ccount = ccount + 1
    }
  }
}

function dfs1 (v, g, visited, id, ccount) {
  visited[v] = true
  id[v] = ccount
  let iter = g.adjIterator(v)

  for (let i = iter.begin(); !iter.end(); i = iter.next()) {
    if (!visited[i]) {
      dfs1(i, g, visited, id, ccount)
    }
  }
}