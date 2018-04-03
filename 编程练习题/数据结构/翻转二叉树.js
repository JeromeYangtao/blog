var invertTree = function(root) {
  if(root == null) { // 如果不存在，则返回[]
      return root;
  } else { // 交换左右结点
      var temp = root.left;
      root.left  = root.right;
      root.right = temp;
  }
  invertTree(root.left); // 转换左子树
  invertTree(root.right); // 转换右子树
  return root;//返回最后结果
};

// 参考:
// http://binjs.com/2017/06/01/JS%E5%8F%8D%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91/
