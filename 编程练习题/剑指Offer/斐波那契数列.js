// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39

function Fibonacci(n) {
  // write code here
  let fibonacciOne = 0
  let fibonacciTwo = 1
  let result
  if (n === 0 || n === 1) return n
  for (let i = 0; i < n - 1; i++) {
    result = fibonacciOne + fibonacciTwo
    fibonacciOne = fibonacciTwo
    fibonacciTwo = result
  }
  return result
}
module.exports = {
  Fibonacci: Fibonacci
}
