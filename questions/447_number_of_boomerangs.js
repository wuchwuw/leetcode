/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let res = 0
  for (let i = 0; i < points.length; i ++) {
    let map = new Map()
    for (let j = 0; j < points.length; j ++) {
      if (i !== j) {
        let currentDis = dis(points[i], points[j])
        let n = map.get(currentDis)
        if (n) {
          map.set(currentDis, ++n)
        } else {
          map.set(currentDis, 1)
        }
      }   
    }
    map.forEach((value, key) => {
      res += value * (value - 1)
    })
  }
  return res
};

function dis (p1, p2) {
  return (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2
}