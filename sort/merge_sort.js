function merge_sort (arr) {
  let n = arr.length
  if (n < 2) {
    return arr
  }
  let mid = Math.floor(n/2)
  let left = arr.slice(0, mid + 1)
  let right = arr.slice(mid + 1)
  return merge(merge_sort(left), merge.sort(right))
}

function merge (left, right) {
  let arr = []
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  return arr.concat(left, right)
}