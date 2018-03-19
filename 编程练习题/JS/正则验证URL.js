let regex = new RegExp('(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]')
let url = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions'
console.log(regex.test(url))
