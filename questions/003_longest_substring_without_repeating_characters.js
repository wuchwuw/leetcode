/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    debugger
    let l = 0, r = -1
    let s1 = ''
    let res = 0
    while (r < s.length) {
      r++
      let c = s.charAt(r)
      let index = s1.indexOf(c)
      if (index > -1) {
        l = l + index + 1
        s1 = s1.slice(l)
        s1 += c
      } else {
        s1 += c
        res = Math.max(res, s1.length)
      }
    }
    return res
};
