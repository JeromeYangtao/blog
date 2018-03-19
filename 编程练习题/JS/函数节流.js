/*
 * 函数节流
 * 不让某些代码在没有间断的情况下连续执行
 */
let processor = {
  timeoutId: null,
  //实际进行处理的方法
  performProcessing: function () {
    //实际执行的代码
  },
  //初始处理调用的方法
  process: function () {
    clearTimeout(this.timeoutId)
    this.timeoutId = setTimeout(() => {
      this.performProcessing()
    }, 100)
  }
}

function throttle (method, context) {
  clearTimeout(method.tId)
  method.tId = setTimeout(function () {
    method.call(context)
  }, 100)
}