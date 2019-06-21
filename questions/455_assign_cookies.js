/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
   g.sort((a, b) => b - a)
   s.sort((a, b) => b - a)
   
   let res = 0
   let x = 0
   let y = 0
   while (x < g.length && y < s.length) {
     if (g[x] <= s[y]) {
       res ++
       x ++
       y ++
     } else {
       x ++
     }
   }
   return res
};
