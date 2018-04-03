let arr = [1, 2, 3, [4, 5, [6, 7]]]

function flatten (arr) {
  return arr.reduce(function (pre, next) {
    return pre.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

console.log(flatten(arr))