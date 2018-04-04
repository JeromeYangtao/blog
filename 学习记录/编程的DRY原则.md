DRY--Don't repeat yourself。
这个原则其实就是说不要写重复的代码，能抽象的代码就抽象出来。在开发的时候可能由于时间比较紧等原因没有对代码进行抽象，在维护的时候就会带来不少麻烦。
举一个简单的例子,在做简单静态服务器的时候新手可能会写出类似的代码
```
let body = ''
if (url === '/index.html') {
    body = fs.readFileSync('./public/index.html')
}
if (url === '/css/index.css') {
    body = fs.readFileSync('./public/css/index.html')
}
if (url === '/js/index.js') {
    body = fs.readFileSync('./public/js/index.html')
}
response.end(body)
```
这就是一个根据不同URL返回不同数据的路由。当然实际情况不止这几种，只是举例简单说明。当情况比较多之后，这么一个简单的功能的代码量就会变得非常庞当，而且更麻烦的是维护的过程中，如果文件夹位置改变或者文件名改动，就会牵一发而动全身，如果某个位置漏改了，就会引起程序出错。即便改完所有地方，也是一件挺麻烦的事。
如果能对代码进行抽象一下，维护过程中就会省力不少。
```
let body = ''

function getPath(url) {
    return './public/${url}'
}
let _path = getPath(url);
body = fs.readFileSync(_path)
response.end(body)
```
### 小结
其实所谓的DRY，所谓的抽象，就是把代码当中相同的部分提取出来。比较两段代码，逻辑基本不变，但却能少些不少重复的代码，代码维护的时候需要改动的地方也少了很多，减轻了维护成本。
不过所有事物都是过犹不及，代码抽象是也着好处，但如果对于一些简单而又只出现一两次的代码花大量的时间去抽象也会得不偿失，抽象之后可能对代码的可读性有影响。
总的来说还是视情况而定，但心里面有DRY这么个概念还是比较好的，即便不遵循