function merge (left, right) {
  var tmp = []
  while (left.length && right.length) {
    left[0] < right[0] ? tmp.push(left.shift()) : tmp.push(right.shift())
  }
  return tmp.concat(left, right)
}

function mergeSort (arr) {
  if (arr.length === 1) return arr

  // ~~相当于parseInt的简化
  let mid = ~~(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

// 不用递归
// function mergeSort(a) {
//   if (a.length === 1) return a

//   var work = []
//   for (var i = 0, len = a.length; i < len; i++) work.push([a[i]])

//   work.push([]) // 如果数组长度为奇数

//   for (var lim = len; lim > 1; lim = ~~((lim + 1) / 2)) {
//     for (var j = 0, k = 0; k < lim; j++, k += 2)
//       work[j] = merge(work[k], work[k + 1])

//     work[j] = [] // 如果数组长度为奇数
//   }

//   return work[0]
// }
