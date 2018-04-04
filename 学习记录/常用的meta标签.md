我们知道，用一些编辑器(如vscode)生成HTML文件时，会自动生成一些内容，其中就一些meta元素，如下图：

![](http://upload-images.jianshu.io/upload_images/3474707-1bcbc13a5e502e71.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
但常用的meta元素不仅仅是这三个，下面是我从各种途径和日常使用总结出来的常用meta标签及一些属性的解释

常见属性及参数:
### 1.charset属性
告诉浏览器字符编码的方式,常用(优先)的是utf-8
```
<meta charset='utf-8' />
```

### 2.name属性
name属性主要用于描述网页，如关键字、叙述，与之相对于的属性值为content；
```
<mate name="参数" content="具体描述">
```
主要常用的有以下几种参数：
**keyword**:告诉搜索引擎，你的网页关键词
```
<meta name="keywords" content="商品 前端 书籍">

```
**description**:用于告诉搜索引擎网页主要内容
```
<meta name="description" content="这是我写的第一篇关于meta的博客">
```
**author**:用于标注网页作者
```
<meta name="author" content="杨涛">
```
**renderer**:用于指定双核浏览器默认以何种方式渲染页面
webkit（默认以webkit内核告诉浏览）；ie-comp（默认IE兼容模式）；ie-stand（默认IE标准模式/旧版）
```
<meta name="renderer" content="webkit | ie-comp">
```
**generator**:用于标明网页是什么软件做的
```
<meta name="generator" content="Visual Studio Code">
```
**revisit-after**:搜索引擎爬虫重访时间。如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。
```
<meta name="revisit-after" content="3 days">
```
**viewport**：常用于手机端或者无线端


```
<meta name="viewport" content="width=device-width,initial-scale=1">
```
**强制竖屏**
```
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
```
### 3.http-equiv属性

网页字符集**content-Type**:
```
<meta charset="utf-8">
```

浏览器渲染方式**X-UA-Compatible**:

用于告知浏览器以何种版本来渲染页面。
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

```
说明用IE和Chrome的最新版本渲染当前页面

**Refresh**:自动刷新并指向新页面
```
<meta http-equiv="Refresh" content="2,URL=yangtao.website”>
```
停留2s，自动刷新到新的页面。





