// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloor(number) {
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
  jumpFloor: jumpFloor
}
