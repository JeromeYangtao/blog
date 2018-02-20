### 响应式原理
Vue.js的响应式原理依赖于**Object.defineProperty**，这也是Vue.js不支持IE8 以及更低版本浏览器的原因,Object.defineProperty无法shim成ES3。

Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。

在Vue的构造函数constructor中为data执行一个代理proxy。这样我们就把data上面的属性代理到了vm实例上。

### 依赖收集
data中双向绑定的部分数据渲染时并不需要，他们的变动不需要触发重绘。
如下列代码中的text3
```js
new Vue({
    template: 
        `<div>
            <span>text1:</span> {{text1}}
            <span>text2:</span> {{text2}}
        <div>`,
    data: {
        text1: 'text1',
        text2: 'text2',
        text3: 'text3'
    }
});
```

Vue内部实现了一个依赖收集类Dep

Dep -> Watcher
### 从源码角度再看数据绑定
![数据响应.png](http://upload-images.jianshu.io/upload_images/3474707-ae18d9aae9801250.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Vue内部还实现了一个Observer作为被观察的对象

Observer(观察对象) -> Dep(发布者) -> Watcher(订阅者)

如果是修改一个数组的成员，该成员是一个对象，那只需要递归对数组的成员进行双向绑定即可。
但这时候出现了一个问题，如果我们进行pop、push等操作的时候，push进去的对象根本没有进行过双向绑定，更别说pop了，那么我们如何监听数组的这些变化呢？
 Vue.js提供的方法是重写push、pop、shift、unshift、splice、sort、reverse这七个数组方法。

一般不推荐我们手动改观察对象，Vue对外暴露了$set(),$remove()两个接口

但是修改了数组的原生方法以后我们还是没法像原生数组一样直接通过数组的下标或者设置length来修改数组，可以通过Vue.set以及splice方法

### 事件机制
Vue.js为我们提供了四个事件API，分别是[$on](https://cn.vuejs.org/v2/api/#vm-on-event-callback)，[$once](https://cn.vuejs.org/v2/api/#vm-once-event-callback)，[$off](https://cn.vuejs.org/v2/api/#vm-off-event-callback)，[$emit](https://cn.vuejs.org/v2/api/#vm-emit-event-%E2%80%A6args)。

### VNode节点
在刀耕火种的年代，我们需要在各个事件方法中直接操作DOM来达到修改视图的目的。但是当应用一大就会变得难以维护。

那我们是不是可以把真实DOM树抽象成一棵以JavaScript对象构成的抽象树，在修改抽象树数据后将抽象树转化成真实DOM重绘到页面上呢？于是虚拟DOM出现了，它是真实DOM的一层抽象，用属性描述真实DOM的各个特性。当它发生变化的时候，就会去修改视图。

可以想象，最简单粗暴的方法就是将整个DOM结构用innerHTML修改到页面上，但是这样进行重绘整个视图层是相当消耗性能的，我们是不是可以每次只更新它的修改呢？

所以Vue.js将DOM抽象成一个以JavaScript对象为节点的虚拟DOM树，以VNode节点模拟真实DOM，可以对这颗抽象树进行创建节点、删除节点以及修改节点等操作，在这过程中都不需要操作真实DOM，只需要操作JavaScript对象后只对差异修改，相对于整块的innerHTML的粗暴式修改，大大提升了性能。

修改以后经过diff算法得出一些需要修改的最小单位，再将这些小单位的视图进行更新。这样做减少了很多不需要的DOM操作，大大提高了性能。

为了达到这个目的，Vue内部实现了VNode基类及其一系列增删改查方法

### VirtualDOM与diff(Vue实现)
patch的核心在于diff算法，这套算法可以高效地比较virtual DOM的变更，得出变化以修改视图。
![层级比较.png](http://upload-images.jianshu.io/upload_images/3474707-570a639142646cde.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



首先说一下patch的核心diff算法，diff算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有O(n)，是一种相当高效的算法。

双指针遍历比较
![双指针.png](http://upload-images.jianshu.io/upload_images/3474707-b13ecd018e1a5461.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Vue的template编译
createCompiler - compileToFunctions - compile - baseCompile - parse - optimize - generate

baseCompile首先会将模板template进行parse得到一个AST语法树，再通过optimize做一些优化，最后通过generate得到render以及staticRenderFns。

AST会经过generate得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点

### Vue.js异步更新DOM策略及nextTick

Vue.js默认是使用[异步执行DOM更新](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)。 当异步执行update的时候，会调用queueWatcher函数

查看queueWatcher的源码我们发现，Watch对象并不是立即更新视图，而是被push进了一个队列queue，此时状态处于waiting的状态，这时候会继续会有Watch对象被push进这个队列queue，等待下一个tick时，这些Watch对象才会被遍历取出，更新视图。同时，id重复的Watcher不会被多次加入到queue中去，因为在最终渲染时，我们只需要关心数据的最终结果。

优先使用Promise，在Promise不存在的情况下使用MutationObserver，这两个方法的回调函数都会在microtask中执行，它们会比setTimeout更早执行，所以优先使用。 如果上述两种方法都不支持的环境则会使用setTimeout，在task尾部推入这个函数，等待调用执行。
```
<template>
  <div>
    <div ref="test">{{test}}</div>
    <button @click="handleClick">tet</button>
  </div>
</template>
```

```
export default {
    data () {
        return {
            test: 'begin'
        };
    },
    methods () {
        handleClick () {
            this.test = 'end';
            console.log(this.$refs.test.innerText);//打印“begin”
        }
    }
}
```
现在有这样的一种情况，mounted的时候test的值会被++循环执行1000次。 每次++时，都会根据响应式触发setter->Dep->Watcher->update->patch。 如果这时候没有异步更新视图，那么每次++都会直接操作DOM更新视图，这是非常消耗性能的。 
所以Vue.js实现了一个queue队列，在下一个tick的时候会统一执行queue中Watcher的run。同时，拥有相同id的Watcher不会被重复加入到该queue中去，所以不会执行1000次Watcher的run。最终更新视图只会直接将test对应的DOM的0变成1000。 保证更新视图操作DOM的动作是在当前栈执行完以后下一个tick的时候调用，大大优化了性能。

Vue.js暴露了一个的global API的$nextTick方法

### keep-alive原理
Vue.js内部将DOM节点抽象成了一个个的VNode节点，keep-alive组件的缓存也是基于VNode节点的而不是直接存储DOM结构。它将满足条件（pruneCache与pruneCache）的组件在cache对象中缓存起来，在需要重新渲染的时候再将vnode节点从cache对象中取出并渲染。

总结自:
[Vue.js 源码解析](https://github.com/answershuto/learnVue)






