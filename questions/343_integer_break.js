/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let m = new Array(n + 1).fill(-1)
  m[1] = 1
  for (let i = 2; i <= n; i ++) {
    for(let j = 1; j <= i - 1; j ++) {
      m[i] = Math.max(m[i], j * (i - j), j * m[i - j])
    }
  }
  return m[n]
};