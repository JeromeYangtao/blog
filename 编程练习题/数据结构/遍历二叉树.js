var tree = {
  value: '-',
  left: {
    value: '+',
    left: {
      value: 'a',
    },
    right: {
      value: '*',
      left: {
        value: 'b',
      },
      right: {
        value: 'c',
      }
    }
  },
  right: {
    value: '/',
    left: {
      value: 'd',
    },
    right: {
      value: 'e',
    }
  }
}
var preListRec = [] //定义保存先序遍历结果的数组
// 前序遍历
var preOrderRec = function (node) {
  if (node) { //判断二叉树是否为空
    preListRec.push(node.value) //将结点的值存入数组中
    preOrderRec(node.left) //递归遍历左子树
    preOrderRec(node.right) //递归遍历右子树
  }
}
// 中序遍历
// var inOrderRec = function(node) {
//   if (node) { //判断二叉树是否为空
//     inOrderRec(node.left); //递归遍历左子树
//     inListRec.push(node.value); //将结点的值存入数组中
//     inOrderRec(node.right); //递归遍历右子树
//   }
// }

//后序遍历
// var postOrderRec = function(node) {
//   if (node) { //判断二叉树是否为空
//     postOrderRec(node.left); //递归遍历左子树
//     postOrderRec(node.right); //递归遍历右子树
//     postListRec.push(node.value); //将结点的值存入数组中
//   }
// }
preOrderRec(tree)
console.log(preListRec)
