// 包含对象的数组去重
//https://www.jianshu.com/p/131ca13e7f28
function unique (arr, key) {
  let result = {}
  let finalResult = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i][key]] = arr[i]
  }
  for (let item in result) {
    finalResult.push(result[item])
  }
  return finalResult
}

