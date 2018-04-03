/**
 * 对两个超过JavaScript安全范围的数求和
 * @param {string} d1 - 参与计算的数
 * @param {string} d2 - 参与计算的数
 * @returns {string} -返回计算结果
 */
function getSum(d1, d2) {
  // 确保输入的是string
  d1 = d1.toString()
  d2 = d2.toString()
  // 如果第一个数较小则交换两个数,位数上 d1 >= d2
  if (d1.length < d2.length) {
    ;[d1, d2] = [d2, d1]
  }
  // 将两个数转为数组形式,并反转
  let arr1 = d1.split('').reverse()
  let arr2 = d2.split('').reverse()
  // num用作当对应位数相加大于10时做进位
  let num = 0
  let result = []
  // 循环arr1.length次求和
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i]) {
      result[i] = Number.parseInt(arr1[i]) + Number.parseInt(arr2[i]) + num
    } else {
      result[i] = Number.parseInt(arr1[i]) + num
    }
    // 大于10进1
    if (result[i] >= 10) {
      result[i] = result[i] % 10
      num = 1
    } else {
      num = 0
    }
  }
  // 如果最后进位为1，则结果前应加1为
  if (num === 1) {
    result[arr1.length] = num
  }
  // 返回结果字符串
  return result.reverse().join('')
}
