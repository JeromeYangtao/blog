// 6. 现在有一个基准数组 records，先要求你维护其子集 selection 数组（初始为空），维护操作包含删除和插入。
// •	插入：给定 records 数组中的一个元素，插入到 selection 中
// •	删除：给定 records 数组中的一个元素，把它从 selection 中删除
// 现在要求你：
// •	实现 insert() 和 remove() 方法来实现以上操作。
// •	设计一个算法，保证每次维护操作后，保持 selection 数组中的元素的偏序关系与 records 数组中的保持一致，分析你算法的复杂度。
// 请实现：
/** 请自行设计函数的参数 */

// 以此为例
// let records = [1, 2, 3, 4, 5,]
// let selection = []

// 时间复杂度:n
function insert (value, records, selection) {
  if (!selection.includes(value) && records.includes(value)) {
    selection.push(value)
  }
  return selection
}

// 时间复杂度:n
function remove (value, records, selection) {
  let length = selection.length
  if (length > 0 && records.includes(value)) {
    for (var i = 0; i < length; i++) {
      if (this[i] === value) {
        selection.splice(i, 1)
      }
    }
  }
  return selection
}