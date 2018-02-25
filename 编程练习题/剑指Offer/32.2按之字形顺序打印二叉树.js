// 题目描述
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  var res = []
  if (!pRoot) {
    return res
  }
  var que = []
  que.push(pRoot)
  var flag = false
  while (que.length > 0) {
    var vec = []
    var len = que.length
    for (var i = 0; i < len; i++) {
      var tmp = que.shift() //front
      vec.push(tmp.val)
      if (tmp.left) que.push(tmp.left)
      if (tmp.right) que.push(tmp.right)
    }
    if (flag) {
      vec.reverse()
    }
    res.push(vec)
    flag = !flag
  }
  return res
}
module.exports = {
  Print: Print
}
