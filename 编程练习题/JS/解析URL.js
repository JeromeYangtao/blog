let path = 'www.u.com/home?id=2&type=0&dtype=-1'

function parseUrl (url) {
  let result = []
  let query = url.split('?')[1]
  let queryArr = query.split('&')
  queryArr.forEach(function (item) {
    let obj = {}
    let value = item.split('=')[1]
    let key = item.split('=')[0]
    obj[key] = value
    result.push(obj)
  })
  return result
}

console.log(parseUrl(path))
//[{id: '2'},{type: '0'},{dtype: '-1'}]

let regex = /[^&=?]+=[^&]*/g
let res = path.match(regex)
console.log(res)