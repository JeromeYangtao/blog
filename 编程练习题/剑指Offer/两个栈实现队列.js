// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let stack1 = []
let stack2 = []
function push(node) {
  // write code here
  stack1.push(node)
}
function pop() {
  // write code here
  let result
  if (stack2.length === 0) {
    let temp = stack1.pop()
    while (temp) {
      stack2.push(temp)
      temp = stack1.pop()
    }
  }
  result = stack2.pop()
  return result
}
module.exports = {
  push: push,
  pop: pop
}
