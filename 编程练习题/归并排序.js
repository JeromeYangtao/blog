function merge(left, right) {
  var tmp = []

  while (left.length && right.length) {
    if (left[0] < right[0]) tmp.push(left.shift())
    else tmp.push(right.shift())
  }

  return tmp.concat(left, right)
}

function mergeSort(arr) {
  if (arr.length === 1) return arr

  // ~~相当于parseInt的简化
  let mid = ~~(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}
