### 共同点：

都是保存在浏览器端，且同源的。只能存字符串(json)

### 区别：

|  比较项    |    cookie       | sessionStorage    |   localStorage  |
| :------:  | :-------------: | :-------------:   | :-------------: |
| 请求携带 |  每次HTTP请求都会携带  | 不携带  | 不携带 |
| 大小限制| 4k     | 5M |     5M   |    
| 有效期|cookie在设置的cookie过期时间之前一直有效 | 浏览器关闭后失效       |    只要不主动删除始终有效 |
| 作用域 | 在所有同源窗口中都是共享的 | 不同的浏览器窗口中不共享，即使是同一个页面 | 在所有同源窗口中都是共享的 |

Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。
Web Storage 的 api 接口使用更方便。
安全性的考虑：
需要注意的是，不是什么数据都适合放在 Cookie、localStorage 和 sessionStorage 中的。使用它们的时候，需要时刻注意是否有代码存在 XSS 注入的风险。因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有 XSS 的风险，它们就能对你的 localStorage 肆意妄为。所以千万不要用它们存储你系统中的敏感数据。



参考文章：

[Javascript本地存储](https://segmentfault.com/a/1190000002593935)
[使用 Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
