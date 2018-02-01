痛点：

1.localStorage在浏览器一般能有5M的容量，尽管已经很大了，但还是有超出容量的可能

2.localStorage是以域名为单位的，在多人协作开发的时候，有重复存储key值的风险

3.相比cookie，localStorage没有时间过期的概念, 一些已经不用的数据一直存在用户的机器上，更容易导致问题1的出现。

对应解决方案:

1.key值前加一个每个人独有的前缀，默认添加一个时间的hash值

2.LRU(Least Recently Used) 进行缓存淘汰

3.加一个内置属性_time,取出前和now进行比较

4.极端情况下考虑localStorage和sessionStorage的升降级

代码链接：

https://github.com/JeromeYangtao/component/tree/master/LRU-storage%E6%8F%92%E4%BB%B6