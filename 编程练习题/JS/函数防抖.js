//调用后, 等n毫秒，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。必须等够n毫秒才会执行

function _debounce (fn, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}
