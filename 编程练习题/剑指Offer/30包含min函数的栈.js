// 题目描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。

var stack = []
function push(node) {
  stack.push(node)
}
function pop() {
  return stack.pop()
}
function top() {
  return stack[stack.length - 1]
}
function min() {
  return Math.min.apply(null, stack)
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min
}
