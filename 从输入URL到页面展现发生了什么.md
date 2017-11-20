![流程图](http://upload-images.jianshu.io/upload_images/3474707-909ddcab4ec26d89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 1.输入URL
###### 2.域名解析
1.浏览器缓存--浏览器会缓存DNS记录一段时间。
2.系统缓存--从Hosts文件查找是否有该域名和对应IP。
3.路由器缓存。
4.ISP DNS缓存--比如到电信的DNS上查找缓存。
5.如果缓存中没有，通过[DNS（域名系统）](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F)将该地址解析成IP地址。
###### 3.浏览器向服务器发起http请求
###### 4.服务器处理并返回http响应
###### 5.渲染
根据资源的类型，将资源组织成屏幕上显示的图像，这个过程叫渲染。
1.浏览器显示 HTML
2.浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
3.浏览器发送异步请求