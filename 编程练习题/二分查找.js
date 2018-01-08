/**
 * 二分查找，递归实现。
 * @param target
 * @param arr
 * @param start
 * @param end
 * @returns {*}
 */
function binarySearch (target, arr, start, end) {
  let start = start || 0
  let end = end || arr.length - 1

  let mid = parseInt(start + (end - start) / 2)
  if (target === arr[mid]) {
    return mid
  } else if (target > arr[mid]) {
    return binarySearch(target, arr, mid + 1, end)
  } else {
    return binarySearch(target, arr, start, mid - 1)
  }
  return -1
}

let task = {
  action_data: (0, function (x, y) {
    return x + y
  })(0, 2)
}
console.log(task)