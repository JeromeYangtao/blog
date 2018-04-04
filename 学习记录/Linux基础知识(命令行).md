# 1. 为何要学Linux?
通常认为后端和一些底层的工程师才会用到Linux，前端只需要学好html，css和js就可以了，并不需要Linux。但是其实并不是这样的，国内多数公司的生产服务器环境都是Linux，Linux对于每一个开发者都很重要。
对于前端，Linux的作用主要体现在这几个方面
```
1. 登录远程服务器，自己部署文件
2. 在线调试代码，查看日志
3. 静态文件路径确认
4. 查看数据库数据
```
# 2. 一些常用命令
##### 2.1  ssh
用途：用于远程登录服务器
mac和Linux自带ssh命令，Windows需要一些额外的工具，如putty和cygwim
推荐putty，简单易用
```
语法： ssh root@用户ip
```
只谈在Windows下使用
这是putty的默认界面：
![](http://upload-images.jianshu.io/upload_images/3474707-2b02ece9c76ce17a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
输入Host Name后点击Open即可登录

##### 2.2  ls(list)&ll
ls命令用于显示当前文件夹下存在的文件
ll命令用于显示当前文件夹下存在的文件的详细信息

![](http://upload-images.jianshu.io/upload_images/3474707-20081da4ce9b2e70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ls -a
ll -a
显示全部文件，包括隐藏文件

![](http://upload-images.jianshu.io/upload_images/3474707-15953af3ea304647.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ll -h
可以查看文件大小


![](http://upload-images.jianshu.io/upload_images/3474707-a72b2ed34d155eba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 2.3  pwd&cd
pwd:显示当前文件夹路径
cd：转换路径
小技巧：输入文件夹路径部分字母后按Tab键自动补全路径
相对路径：不加\,直接输入想要进入的文件（以当前文件夹为基准）
绝对路径：输入完整路径
回到根路径：cd /
回退一级：cd ..
回退两级：cd ../..（其他类推）
##### 2.4  mv(move)
移动或者重命名
mv 【参数1：源文件或目录】 【参数2：目标文件或目录】
```
1.当参数2是文件时该命令会将源文件或目录移动到目标文件指定目录并且重命名成目标文件
```
*例：移动文件testFile1，并重命名成testFile2*
![](http://upload-images.jianshu.io/upload_images/3474707-63a67d39172e71e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
2.当参数2是目录时，该命令将源文件或目录移动到目标目录
```
*例：移动testFile2文件到home目录下*

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3474707-c494114c1e63d636.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*例：重命名testFile2文件*
![](http://upload-images.jianshu.io/upload_images/3474707-222ed18a28047588.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 2.5  cp(copy)
复制
```
cp [选项:-R] [参数1:源文件或目录] [参数2:目标文件或目录]
```
1. 目标文件或目录不存在，生产新文件或目录

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3474707-4683fb3276936174.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2.目标文件存在，覆盖文件
3.目标目录存在，复制到目标目录内
4.第一个参数都是目录需要加上-R
##### 2.6  scp(security copy) 
不同服务器间复制
情形：
1.从本地复制文件到远程
```
scp -P 22 localfile 远程目录
```
2.从远程复制到本地
```
scp -P 22 远程目录 .
```
3.以上两种情形是文件夹时，加上-r
```
scp -r -P 22 远程目录 .
```
##### 2.7 touch与mkdir(make directory)
touch:创建新文件


![](http://upload-images.jianshu.io/upload_images/3474707-58bd1bfcb19c91a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

mkdir:创建新文件夹

![](http://upload-images.jianshu.io/upload_images/3474707-1d059b0fa0592bee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 2.8 rm(remove)
删除文件

```
情形：
1.删除文件，系统给提示           rm testfile
2.强制删除文件,系统不给提示       rm -f testfile
3.删除文件夹，系统给提示          rm -r testdir
4.删除文件夹，系统不给提示        rm -rf testdir
5.删除当前目录所有文件（慎用）     rm * -rf
```
##### 2.9 clear
清空界面
##### 2.10其他
chown(change owner):修改文件拥有者
chmod:修改文件读，写，运行权限
wget：下载文件
tail：查看文本的末尾信息
ping：判断服务器正常运行
# 3. 其他小知识
```
回车
Windows            \r\n
Linux\Unix\Mac     \n
```
```
当前目录   .
父目录     ..
```
```
图形界面(GUI)  鼠标点击  弹出对话框
命令行         键入文字  输出文字
```
```
$ 命令 -选项缩写
  结果
```
```
命令缩写规则
省略a e i o u五个元音字母，留下两到三个字母（有时例外）
```
```
~ 表示当前用户
\ 整个硬盘
```
```
跳回到当前用户的根目录：cd ~
回到上一次目录：cd -
重复上一个命令：!! 
```
[自学网站](http://explainshell.com/)



```
vim
打开：命令行输入vim
退出 : Esc键+:q
自学：vimtutor
```