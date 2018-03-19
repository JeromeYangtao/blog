// 完成方法subset(arr1,arr2)，传入两个数组，判断数组arr1是否为数组arr2的子集
function subset (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if (arr1.length > arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false
    }
  }
  return true
}

// 参考文章
// javascript 判断某个数组中是否包含另一个数组
// http://blog.csdn.net/qq_25905803/article/details/78677333
