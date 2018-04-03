// 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n) {
  if (n < 0) {
    n = n >>> 0
  }
  var arr = n.toString(2).split('')
  return arr.reduce(function(sum, a) {
    return a === '1' ? sum + 1 : sum
  }, 0)
}

module.exports = {
  NumberOf1: NumberOf1
}
