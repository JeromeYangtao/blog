let obj = {
  name: 'wsscat',
  age: 0
}
let deepCopy = function (source) {
  let result = {}
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        result[key] = deepCopy(source[key])
      } else {
        result[key] = source[key]
      }
    }
  }
  return result
}
let obj3 = deepCopy(obj)
obj.name = 'autumns'
console.log(obj) //Object {name: "autumns", age: 0}
console.log(obj3) //Object {name: "wsscat", age: 0}