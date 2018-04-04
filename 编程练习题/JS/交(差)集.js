let a = [1, 2, 3]
let b = [2, 3, 4]
// 交集
let intersection = a.filter(v => b.includes(v))
// 差集
let difference = a.concat(b).filter(v => !a.includes(v) || !b.includes(v))
//并集
let common = Array.from(new Set(a.concat(b)))