   Webpack几乎可以说是现在前端必备的开发插件，可以帮我们打包各种文件和依赖，实现前端项目的模块化工程化。但随着项目的不断庞大，打包时间也越来越长，打包时间甚至可能达到一分钟以上，尤其是在电脑不是特别好的时候。所以对webpack打包速度进行相应的优化是很有必要的
   其实现在已经有了相关的webpack加速插件 [HappyPack](https://github.com/amireh/happypack)
   本文主要简单总结一下webpack加速的原理
   ### 多进程
   webpack是用JavaScript写的，JavaScript本身性能就不是特别好，再加上单线程的限制，速度自然不算很快。Webpack在打包Loader的时候，是通过异步的方式进行的。如果Loader互不依赖，我们就可以通过**并发**的方式来加速这个编译过程
   ### 缓存
   在我们开发项目的时候，其实大部分文件是不会修改的，修改的部分往往只有几个文件。如果能只编译修改了的文件，而未修改的文件进行缓存，不再进行编译，无疑能大大提高打包效率。
   
   ### 其他小技巧
   缩小文件搜索范围：
   > webpack的resolve.modules配置模块库（通常是指node_modules）所在的位置，在js里出现import 'redux'这样不是相对也不是绝对路径的写法时会去node_modules目录下找。但是默认的配置会采用向上递归搜索的方式去寻找node_modules，但通常项目目录里只有一个node_modules在项目根目录，为了减少搜索我们直接写明node_modules的全路径
   ```js
    module.exports = {
        resolve: {
            modules: [path.resolve(__dirname, 'node_modules')]
        }
    };
   ```
   合理的正则表达式
   
   设置 babel 的 cacheDirectory 为true
   
   参考文章：
   
   [HappyPack - Webpack 的加速器](http://blog.yunfei.me/blog/happypack_webpack_booster.html)
   
   [webpack2 终极优化](http://imweb.io/topic/5868e1abb3ce6d8e3f9f99bb)
   
   [Webpack 打包优化之速度篇](https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)
   
   [webpack 构建性能优化策略小结](https://segmentfault.com/a/1190000007891318)
   