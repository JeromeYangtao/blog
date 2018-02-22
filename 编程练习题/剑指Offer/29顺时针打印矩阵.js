// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix) {
  if (!matrix || !matrix.length) return null
  var result = []
  var rows = matrix.length,
    cols = matrix[0].length
  var len = rows * cols
  var i = 0,
    j = 0
  var circle = 0
  while (1) {
    while (j < cols - circle) {
      result.push(matrix[i][j])
      j++
    }
    if (result.length === len) break
    j--, i++
    while (i < rows - circle) {
      result.push(matrix[i][j])
      i++
    }
    if (result.length === len) break
    i--, j--
    while (j >= circle) {
      result.push(matrix[i][j])
      j--
    }
    if (result.length === len) break
    j++, i--
    circle++
    while (i >= circle) {
      result.push(matrix[i][j])
      i--
    }
    if (result.length === len) break
    j++, i++
  }
  return result
}
module.exports = {
  printMatrix: printMatrix
}
