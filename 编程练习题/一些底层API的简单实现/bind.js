function bind (fn, obj) {
  return function () {
    return fn.apply(obj, arguments)
  }
}