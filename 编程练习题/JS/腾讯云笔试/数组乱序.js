// 完成方法shuffle(arr)，传入数组arr，返回随机打乱后的数组

function shuffle (a) {
  var b = []
  while (a.length) {
    var index = ~~(Math.random() * a.length)
    b.push(a[index])
    a.splice(index, 1)
  }
  return b
}

// 参考文章:
// JavaScript 数组乱序:https://github.com/hanzichi/underscore-analysis/issues/15