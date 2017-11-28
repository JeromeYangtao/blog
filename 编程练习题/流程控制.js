// 实现一个run函数：1，2，3按顺序输出
run(next => {
  console.log('1')
  setTimeout(next, 1000)
}, next => {
  console.log(2)
  next()
}, next => {
  console.log(3)
  next()
})

function run () {
  let middlewares = Promise.resolve()
  for (let argument of arguments) {
    middlewares = middlewares.then(() => {
      return Promise.resolve({
        then: (resolve) => {
          argument(resolve)
        }
      })

    })
  }
  middlewares.then(() => {
    console.log('end')
  })
}


