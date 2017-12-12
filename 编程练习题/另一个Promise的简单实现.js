function MyPromise (fn) {
  let value = null
  let events = []
  this.then = function (f) {
    events.push(f)
    return this
  }

  function resolve (newValue) {
    let f = events.shift()
    f(newValue, resolve)
  }

  fn(resolve)
}

//测试代码
function a () {
  return new MyPromise(function (resolve) {
    console.log('get...')
    setTimeout(function () {
      console.log('get 1')
      resolve(1)
    }, 1000)
  })
}

a().then(function (value, resolve) {
  console.log('get...')
  setTimeout(function () {
    console.log('get 2')
    resolve(2)
  }, 1000)
}).then(function (value, resolve) {
  console.log(value)
})

let promise = new MyPromise(function(x, y) {
  setTimeout(() => {
    x(101)
  }, 3000)
})
promise.then((z) => {
  console.log(z) // 101
})