function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[minIndex] < arr[j]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]]
  }
}