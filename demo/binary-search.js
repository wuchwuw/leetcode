function binary_search (arr = [], target) {

  let l = 0, r = arr.length - 1

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (target < arr[mid]) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1

}
