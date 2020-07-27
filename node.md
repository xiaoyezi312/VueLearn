# 课程准备
1. 下载谷歌vpn插件 setupVpn(git)
2. 下载插件vue-devtools

仓库：DuYi-Edu

Push操作：
1. gitBash here   //用这个管理工具能看到当前所属分支
2. git checkout -b 1.课程准备 //新建并转到新分支
3. git add .  //追踪文件变化，将变化的文件放到暂存区
4. git commit -m '1' //这里相当于一个注释告诉别人谁做了什么操作,我写了1代表第一节课
5. git push origin 1.课程准备  //打出新分支的第一个字后按tab键就可以补齐，将暂存区的文件上传到git仓库

# 开始使用Vue
1. 
el和vm.$mount控制本质上没有区别，vm.$mount可用于延迟控制

2. {{}} 插值表达式可以写：数据（boolean number array object string） 和 表达式和（运算表达式 逻辑表达式 三元表达式 会进行计算在显示） undefined、null
在{{}}中写字符串要加‘’，否则报错

    在data中未声明：在作用域上找不到，报错{{ cheng }}；在原型链(对象的属性)上找不到，值为undefined不报错{{ cheng.mm }}  

# Vue响应式1
1. 什么叫Vue的响应式？
数据一变，页面就重新渲染

2. 数据变化，页面渲染
vm.cheng = 'ddd';

- 问：为什么data会直接出现在vm实例对象中咧？
> 答：当创建vue实例时，vue会将data中的成员代理给vue实例，目的是为了实现响应式，监控数据变化，执行某个监听函数（怎么实现的？想一想，提示：Object.defineProperty，试着实现一下）

Object.defineProperty的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
```js
vue 2.0 数据劫持是用Object.defineProperty写的
vue 3.0 据说是用proxy写的
Object.defineProperty(obj, prop, desc)
obj 需要定义属性的当前对象
prop 当前需要定义的属性名
desc 属性描述符
```

- 问：实例中除了data数据外，其他东西是啥子？
> 为了防止名称冲突。因为会将data中数据代理给vue的实例对象，假如说我们自己写的data名称和vue中自带的属性冲突了，那么就会覆盖vue内部的属性，所以vue会把自己内部的属性成员名称前加上\$或\_，如果加上的是\$，代表是我们可以使用的，如果加上的是\_，是vue自己内部使用的方法或属性，我们不需要调用

- 更改的数据必须是存在且已经渲染的的数据否则不会重新渲染页面

- 更改数据后，页面会立刻重新渲染吗？
> vue更新DOM的操作是异步执行的，只要侦听到数据变化，将开启一个异步队列，如果一个数据被多次变更，那么只会被推入到队列中一次，这样可以避免不必要的计算和DOM操作。


3. vm.$nextTick(()=>{
    console.log(vm.$el.innerHTML);
})
当页面重新渲染之后会立刻执行vm.$nextTick

Vue.$nextTick(()=>{})

两者都可以当做一个promise使用，区别vm的this指向Vue;Vue的指向window

- 在nextTick的实现源码中，会先判断是否支持微任务，不支持后，才会执行宏任务
  ```js
    if(typeof Promise !== 'undefined') {
      // 微任务
      // 首先看一下浏览器中有没有promise
      // 因为IE浏览器中不能执行Promise
      const p = Promise.resolve();

    } else if(typeof MutationObserver !== 'undefined') {
      // 微任务
      // 突变观察
      // 监听文档中文字的变化，如果文字有变化，就会执行回调
      // vue的具体做法是：创建一个假节点，然后让这个假节点稍微改动一下，就会执行对应的函数
    } else if(typeof setImmediate !== 'undefined') {
      // 宏任务
      // 只在IE下有
    } else {
      // 宏任务
      // 如果上面都不能执行，那么则会调用setTimeout
    }
  ```
  即nextTick首先选择promise的微任务进行实现，IE中没有promise则选择MutationObserver，然后选择宏任务setTimeout,IE中没有则选择setImmediate

  从中可看出Vue的缺点，即主线程执行完后才进行异步队列，如果主线程有错误则会一直卡死。react则是在主线程一有空闲就执行。

  # Vue响应式2
  - 除了未被声明过和未被渲染的数据外，还有什么数据更改后不会渲染页面？
  1. 不改变数组引用的情况下的修改数组
  利用索引直接设置一个数组项时：
  修改数组的长度时：
  2.添加或删除对象：
  ```js
    vm.deng.secondWife = '铁锤妹妹'; // 不是响应式的
  delete vm.deng.height; // 不是响应式的
  ```
  
  # Vue相关指令
  
  1. v-bind
  ```html
  动态特性名vue版本要2.6.0以上
  <div :[key]=value></div>
  键值对 值可从data中找
  <div v-bind="{id:name, color:key}">
  ```

  # todoList
  - 清空input框中的内容
  > 绑定特性:value="mark" 可在vue实例对象data中控制mark为空

  - input触发change事件
  > 当失焦或点击enter的时候
  change 事件被<input>, <select>, 和<textarea> 元素触发, 当用户提交对元素值的更改时。与  input 事件不同，change 事件不一定会对元素值的每次更改触发。
  当一个 <input>, <select>, 或 <textarea> 元素的 value 被修改时，会触发 input 事件。

  - ul是否显示可v-if li数组的length

  - console.log()是异步的吗？
  因为代码在运行的时候控制台没有打开。

首先明确一点，a所储存的是一个引用类型值的地址，所有对a的操作都会具体到这个地址所对应的那个对象上。其次，console并不是JavaScript提供的对象，而是浏览器的控制台提供的。这具体到不同的浏览器，比如Chrome中是由Devtool的控制台提供，Firefox中是由Firebug的控制台提供。

在Chrome中，console.log在控制台打开后才起作用，也就是说，当你打开控制台时，console.log才会将之前被传进去的参打印出来。
那么问题来了，在上述代码中，传进console.log中的参是一个地址，当代码执行完毕后，打开控制台，console.log开始起作用，那么它打印出的实际上是已经做完全部处理后的对象。
【https://www.cnblogs.com/sunsie/p/7171380.html】

# bilibili

1. 多行文字溢出打点处理
```css
span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

```
因为手机端内核大部分都是webkit所以没关系

2. 使滚动条消失
```css
.nav-box .nav-list::-webkit-scrollbar {
    display: none;
}
```
3. 节省性能
```html
<div v-if="bannerList.length" class="banner-box"></div>
```
4. 

5. html对大小写不敏感，但是如果写在模板中就不是了，即若模板中class="posterL" ,则显示出来也会是class="posterL"

6. falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。