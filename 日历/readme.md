# 行为的实现过程

## 进入页面后初始数据的展示
1. default: ()=> new Date(),//默认值要跟Type相同，但Type是一个数组或者对象时，要求default是有返回值的函数
2. 月份返回的是从0至11

## 点击组件展示日历面板，点击其它位置不展示
想法1：v-if/v-show -->不可行
### v-if VS v-show
1. v-if 是惰性的，如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会开始渲染条件块。v-show则不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
2. v-if 有更高的切换开销，v-show 有更高的初始渲染开销，如果需要非常频繁地切换，则使用 v-show 较好，如果在运行时条件很少改变，则使用 v-if 较好
3. v-show不支持```<template>```元素
4. v-show不支持v-else/v-else-if

想法2：编写一个自定义指令v-click-outside

监听document的点击事件

el.contains(dom)
返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点。 如果传入的参数是它本身？
vnode只需关心context

```css
.date-picker{
display:inline-block;
}
.picker-panel {
  position: absolute;//由relative改为absolute
}
```
```
```
