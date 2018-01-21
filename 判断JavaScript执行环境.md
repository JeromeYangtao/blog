JavaScript能在Node中运行也能在浏览器中运行,浏览器也有各种各样的浏览器。有时候我们需要知道我们的JS代码是在什么环境下运行的:

### 判断是Node还是浏览器
依据:Node和浏览器的全局对象不一样,global和window
```js
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
```

### 浏览器检测
主要通过http请求头中的User-Agent字段

navigatior当中也有userAgent
