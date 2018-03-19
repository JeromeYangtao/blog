// 完成方法count(str)，传入字符串，返回字符串中出现次数最多的字符及次数
var str = 'qweqrtyuiqqqwrtyudfgerqtywer'
var result = maxN(str)

function maxN (str) {
  //定义一个json对象用于保存str的每一项以及出现次数。
  var json = str.split('').reduce((m, n) => (m[n]++ || (m[n] = 1), m), {})

  //存储出现次数最多的值和次数
  var value = ''
  var num = 0
  //遍历json  使用打擂算法统计需要的值
  for (var j in json) {
    //如果当前项大于下一项
    if (json[j] > num) {
      //就让当前值更改为出现最多次数的值
      num = json[j]
      value = j
    }
  }
  return {
    value: value,
    num: num
  }
}

console.log('该字符串出现' + result.num + '次的' + result.value)

// 参考文章:
//JS中判断字符串中出现次数最多的字符及出现的次数 : https://www.jianshu.com/p/85afc31175d9


