HTTP协议是一种无状态的协议，如果进行**会话状态管理**，cookie就是一个不错的选择。
### 增
客户端写入cookie非常简单
```
document.cookie = 'name=Thomson'
```
cookie的值都是以key=value的形式，用分号分隔，且等号两端不能有空格。值得一提的是，cookie是以追加的形式添加而不是覆盖。

服务端写cookie：
```
Set-Cookie: 'message=hello; max-age=60'
```
写入cookie的时候除了可以输入值，还可以带上一些cookie的属性，比如max-age，max-age设置了cookie的过期时间，单位是秒。

如果不主动设置cookie的过期时间的话默认就是sessionCookie，保存一次回话的时间。(大部分浏览器在关闭网页后清除，chrome在关闭整个浏览器后清除)。

除了max-age，expires属性也能用来设置过期时间，它的格式采用Date.toUTCString()的格式。值得注意的是max-age优先级比较高。

除此之外，cookie的属性还有domain(指定子域名)，path(指定从根路径开始的路径) ，secure (安全相关，HTTPS默认设置，但在非https或SSl协议下，会导致cookie不再生效)，HttpOnly(设置该Cookie不能被客户端读取)

### 删
cookie本身并没有提供清除功能，但我们可以通过设置过期时间来达到清除的目的。
```
max-age=0
ocument.cookie = 'name=Thomson;expires=Thu, 01-Jan-1970 00:00:01 GMT';
```

### 改
修改cookie和新增是一样的。都是通过Set-Cookie
```
Set-Cookie: name=Yang; 
```
### 查
如果想获取cookie，只需要通过document.cookie就能获取所有的cookie

### 一些小知识
>Cookie的累加长度限制为4KB。超过这个长度的Cookie，将被忽略，不会被设置。(不同浏览器略有不同)

>浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享Cookie。

>安全相关的有 会话劫持，XSS和跨站请求伪造（CSRF）




