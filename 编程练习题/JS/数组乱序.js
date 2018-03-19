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