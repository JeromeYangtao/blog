内容总结自《图解HTT》
### HTTP方法：

GET:获取资源

POST：传输实体主体

PUT：传输文件

HEAD：获取报文首部

DELETE：删除文件

OPTIONS：询问支持的方法

TRACE：追踪路径

CONNECT：要求用隧道协议链接代理P

### 常见问题
[GET和POST的区别](http://www.cnblogs.com/nankezhishi/archive/2012/06/09/getandpost.html)

```
1.GET是用于获取数据的，POST，一般用于将数据发给服务器之用

2.语义的差别。就是个名字而已，如果服务器支持，完全可以把GET改个名字叫GET2
```

一些面试官期待的答案：
```
1. GET使用URL或Cookie传参。而POST将数据放在BODY中。

2. GET的URL会有长度上的限制，则POST的数据则可以非常大。

3. POST比GET安全，因为数据在地址栏上不可见。
```

[从REST的角度理解HTTP方法](https://www.15yan.com/story/7dz6oXiSHeq/)
