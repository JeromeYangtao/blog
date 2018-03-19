// 假设你有一个函数，产生[0, 5)之间的随机整数，每个数字概率1/5，如何使用这个函数产生[0, 7)之间的随机整数，每个数字概率1/7

function rand5 () {

}

function rand7 () {
  let result
  //直到产生6~26之间的数跳出循环
  do {
    result = rand5() * 5 + rand5()
  } while (result > 26)
  return (result - 3) / 3
}
// 参考文章:
// 给定能随机生成整数1到5的函数，写出能随机生成整数1到7的函数(均匀概率问题）
// http://www.cnblogs.com/youxin/p/3351213.html


function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start);
}
// 参考文章
// 关于JavaScript中的随机数方法
// https://segmentfault.com/a/1190000002972940