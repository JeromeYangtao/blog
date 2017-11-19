一直以来前端向后台请求数据用的都是**XMLHttpRequest**,但这个API设计得其实不是很好。**Fetch**的出现就是为了弥补XMLHttpRequest的不足。
[XMLHttpRequest文档](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
[Fetch文档](https://github.github.io/fetch/)
传统上如果我们发起请求会这么写
```
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  console.log(xhr.response);
};
xhr.onerror = function() {
  console.log('出错了');
};
xhr.send();
```
fetch的写法是这样的
```
fetch(url).then(function (response) {
  return response.json();
}).then(function (jsonData) {
  console.log(jsonData);
}).catch(function () {
  console.log('出错了');
});
```
### fetch的特点
直观上看fetch主要有这几个特点：
1.基于Promise实现的接口，避免了ajax的回调地狱

2.以数据流的形式返回数据，数据量大和传输大文件有优势

3.Fetch API引入三个新的对象（也是构造函数）：Headers, Request和Response。headers用于设置请求头还是比较方便的。浏览器其实是不怎么需要构造请求和处理响应的，这个角度看request和response比较鸡肋。但随着Service Worker的部署，以后浏览器也可以向Service Worker发起请求

4.cors的支持，fetch的response.type有三种不一样的状态。basic：正常的同域请求，cors：CORS机制下的跨域请求，opaque：非CORS机制下的跨域请求，这时无法读取返回的数据，也无法判断是否请求成功

### ajax的封装
原生的XMLHttpRequest并不是很好用，不少库都对其进行了封装。比较常见的有**jQuery**和**axios**
jQuery的特点在于可以实现jsonp跨域
axios则是实现了Promise链式调用
### fetch的不足
首先是现在fetch的兼容性还不是很好，可能需要配置polyfill
其次fetch没办法像XMLHttpRequest一样取消请求的发送