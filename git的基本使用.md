
###### 1.代码下载
```
git clone https://github.com/JeromeYangtao/test.git
```
###### 2.代码提交

![](http://upload-images.jianshu.io/upload_images/3474707-cd69873d6fbf70bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 3.查看代码git文件状态
```
git status
```
###### 4.更新本地代码
```
git pull
```
###### 5.版本跳跃
查看历史提交情况
```
git log
```
查看所有操作日志(包括回退)
```
git reflog
```

跳跃
```
git reset --hard   5eb0abb045735f6af1d2ddb09f175aa5adc633f8
```
###### 6.撤销代码修改
工作区:
```
git checkout -- filename
```
暂存区:
```
git reset HEAD filename
```
本地代码库(已commit到分支):
```
git reset --hard 版本号
```
远程代码库:
```
等着跪吧!
```
###### 7.分支的创建与切换
![](http://upload-images.jianshu.io/upload_images/3474707-c1efda3d108dd5a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
查看分支状况：
```
git branch
```

创建分支：
```
git branch [branchname]
```
切换分支：
```
git checkout [branchname]
```
创建并切换分支：
```
git checkout -b [branchname]
```
###### 8.分支代码的提交和更新
和master有些许区别,多origin
```
git push origin branchname
git pull origin branchname
```
###### 9.分支合并
为主干增加分支内容
```
git merge devname
```
###### 10.解决代码冲突
代码冲突一般有两种情况：合并分支或pull远程代码时出错

发生冲突的文件：

![](http://upload-images.jianshu.io/upload_images/3474707-cb1784e7c5620529.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
删除不许要的代码即可，重新提交，提交时加上 -i
```
git commit -i filename
```







