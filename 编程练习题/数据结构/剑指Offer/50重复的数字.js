function duplicate (numbers, duplication) {
  if (!numbers || !numbers.length) {
    return false
  }
  var len = numbers.length
  for (var i = 0; i < len; i++) {
    var curr = numbers[i]
    if (numbers.indexOf(curr) !== i) {
      duplication[0] = curr
      return true
    }
  }
  return false
}