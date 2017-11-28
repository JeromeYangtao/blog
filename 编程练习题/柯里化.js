// 请写出一个柯里化其他函数的函数 curry，这个函数能够将接受多个参数的函数，变成多个接受一个参数的函数，
// 具体见示例（这是 lodash.curry 的文档示例

function curry (fn, thisArg) {
  if (!Array.isArray(thisArg)) {
    thisArg = []
  }
  return function () {
    let args = Array.prototype.slice.call(arguments)
    if ((args.length + thisArg.length) < fn.length) {
      return curry(fn, thisArg.concat(args))
    }
    return fn.apply(this, thisArg.concat(args))
  }
}

var abc = function (a, b, c) {
  return [a, b, c]
}

var curried = curry(abc)

console.log(curried(1)(2)(3))
// => [1, 2, 3]

console.log(curried(1, 2)(3))
// => [1, 2, 3]

console.log(curried(1, 2, 3))
// => [1, 2, 3]