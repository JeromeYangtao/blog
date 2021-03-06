// 请写出一个柯里化其他函数的函数 curry，这个函数能够将接受多个参数的函数，变成多个接受一个参数的函数，
// 具体见示例（这是 lodash.curry 的文档示例
//https://yi-love.github.io/blog/javascript/2016/12/08/js-func-curry.html
function curry (fn, thisArg) {
  let length = fn.length
  if (!Array.isArray(thisArg)) {
    thisArg = []
  }
  return function () {
    let args = Array.prototype.slice.call(arguments)
    // 已经添加的参数数量小于预期数量,继续递归
    if ((args.length + thisArg.length) < length) {
      return curry(fn, thisArg.concat(args))
    }
    return fn.apply(this, thisArg.concat(args))
  }
}


// 测试代码
let abc = function (a, b, c) {
  return [a, b, c]
}

let curried = curry(abc)

console.log(curried(1)(2)(3))
// => [1, 2, 3]

console.log(curried(1, 2)(3))
// => [1, 2, 3]

console.log(curried(1, 2, 3))
// => [1, 2, 3]