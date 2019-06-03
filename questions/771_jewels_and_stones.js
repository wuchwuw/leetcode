/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let map = new Map()
  let res = 0
  for (let i = 0; i < S.length; i ++) {
      let c = S.charCodeAt(i)
      let num = map.get(c)
      if (num) {
          map.set(c, ++num)
      } else {
          map.set(c, 1)
      }
  }
  for (let i = 0; i < J.length; i ++) {
      let c = J.charCodeAt(i)
      if (map.get(c)) {
          res += map.get(c)
      }
  }
  return res
};