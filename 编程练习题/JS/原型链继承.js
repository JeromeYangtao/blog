var Parent = function (name) {
  this.name = name
}

Parent.prototype.getName = function () {
  return this.name
}

var Son = function (parentName, name) {
  Parent.call(this, parentName)
  this.childName = name
}
// 关键
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

Son.prototype.getChildName = function () {
  return this.childName
}