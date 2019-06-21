function insertion_sort (arr) {
  for (let i = 1; i < arr.length; i ++) {
    let j
    let e = arr[i]
    for (j = i; j > 0 && e < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}