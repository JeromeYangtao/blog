// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number) {
  // write code here
  if (number < 1) {
    return 0
  } else if (number === 1) {
    return 1
  } else if (number === 2) {
    return 2
  }
  let result = 0
  let a = 1
  let b = 2
  for (let i = 3; i <= number; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
}
module.exports = {
  rectCover: rectCover
}
