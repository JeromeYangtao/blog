// 写一个正则来验证url的合法性

let regex = new RegExp('(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]')
let url = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions'
console.log(regex.test(url))

// 参考文章:
// 正确匹配URL的正则表达式
// http://www.cnblogs.com/speeding/p/5097790.html