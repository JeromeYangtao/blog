3在es6中，新增了两种命名变量的方式---let和const。用一篇博客记录一下。
### 1.let
##### 作用域规则
在es6之前，只有var一种命名变量的方式。var在当前的块级和子块都会起作用，这样就会出现一个JS的经典问题---作用域问题。这无疑给编程增加了难度，但没有提高编程的作用。为了解决这个问题，es6引进了**块级作用域：let**


let的声明方法和var相似
```
var a
let b
```
但作用的范围有点不同(块级作用域)。
如果只在当前作用域或子集当中使用，二者功能相似。但当用到内部函数的时候，let可以让代码更加简单。像下面这段代码

```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2,if当中的x覆盖了上一个x
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 不同的变量，和上一个x没有任何关系
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
在这段代码中if语句就是一个代码块，let就是在这个块级代码中声明了一个变量，且只作用于这个块级作用域。
再看另一个经典的问题
```
 for (var i = 0; i <= 5; i++) {
          d.onclick = function() {
              console.log(i);       //6
         };
    }
```
在这段代码中，当我们点击d，输出的结果为6，因为当循环结束的时候（for之外），还会执行一次
但如果把var改成let，结果就换不一样
```
 for (var i = 0; i <= 5; i++) {
          d.onclick = function() {
              console.log(i);       //5
         };
    }
```
这是因为let只在for这个块级中起作用
##### 声明提前
我们知道JavaScript中有一个特性，那就是声明提前
```
console.log(a)  //不会报错
var a
console.log(b)  //报错
let b
```
let不再有声明提前的特性。可以说这也降低了我们使用JavaScript的难度
##### 不能重复声明
如果使用var声明两个变量名一样的变量，后面一个会覆盖前面的，而let不允许这样做。
```
var a = 1
var a = 2
console.log(a)     //2
let b = 1
let b = 2          //报错
```
### 2.const
es6还引入了另一个变量声明的方法const。const和C++中的const一样，都是声明了一个常量。const声明的量是一个只读的量，不能修改
```
const a = 1
a = 2  //报错
```

### 总结
JavaScript是一门10天之内设计出来的语言，设计之初有着许多不完善的地方，但在es6之后，很多地方都完善好了。了解es6的新特性，对于我们学习使用JavaScript，有着巨大的作用