 /**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let queue = []
    let visited = new Array(n).fill(false)

    queue.push({num: n, step: 0})
    visited[n] = true
    while (queue.length) {
      let item = queue.shift()
      let num = item.num
      let step = item.step

      for (let i = 1; ; i ++) {
        let cur = num - i * i

        if (cur === 0) {
          return step + 1
        }
        if (cur < 0) {
          break
        }
        if (!visited[cur]) {
          queue.push({num: cur, step: step + 1})
          visited[cur] = true
        }
      }
    }
}; 