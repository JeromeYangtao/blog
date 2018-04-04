
凭着感觉和平常使用，总结了一些常用指令：
1.插入

i | 	在光标所在字符 进入insert模式
-- | --
a | 在光标的下一个字符 进入insert模式

2.删除

X|	删除光标所在位置的字符
-- | --
d+w|	删除光标所在位置的单词
d+d	|删除光标所在位置整行
d+$|	从当前光标删除到行末

3、撤销

u	|撤销最后执行的命令（最后一次的命令）
-- |  --
U|	撤销对整行的修改（最后一次的批量命令）

5、复制黏贴

y	|点击v进入可视模式，复制选中文本
--|-
p	|黏贴复制或者删除的文本（linux里没有剪切，剪切就是删除黏贴的意思）

6、文件定位

行号 + G|	定位到具体行
--|--
G	|定位到文件最后一行
gg	|定位到文件第一行
CTRL + G|	显示当前打开的文件名和所在行

7、查找

/ + 查找的字符
下一个对象：n
上一个对象：N
**反向查找使用 '?' 替代 '/'

8、配对字符查找

在一行中的任何一个 (、[ 或 { 处，输入 % 可以查找配对的括号 )、]、}

在VIM中执行外部命令的方法
```

:! + xxx外部命令，如 :!ls
```

VIM中右键黏贴的方法
```
:set mouse=<回车>
```


顺带截图了vimtutor的总结：
![](http://upload-images.jianshu.io/upload_images/3474707-62c25b3a55f46aeb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-cef7b0a389d5e716.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-f2f46064e52fee9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-e56f20e3dc08efa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-7d4c41b31beb8c7b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-798d2de620dc3a92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-97f416a90d0c0f76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3474707-f12592b2eff603de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
保存文件：
:w test.txt
输出文件内容
cat test.sh
参数
$1 $2 $3