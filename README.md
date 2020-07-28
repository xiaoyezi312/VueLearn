资源管理器地址栏输入 cmd
命令行中code . 用code打开
//npm install
npm run serve


cd . . 回到桌面
vue ui

删除预设：
找到c盘的当前用户找到
.vuerc 删除预设

运行时版本少了编译器，体积小了30%


el `template` $mount() el.outerHTML


.js文件中 render优先级大于`template`选项
.vue中 template是标签了优先级大于render

子级虚拟节点：字符串  文本节点

过渡：如果子元素也有过渡，父元素用v-show 不用v-if否则
flip
https://my.oschina.net/ahaoboy/blog/4318302/print
https://blog.csdn.net/weixin_34167043/article/details/91477632

ul本身有padding和margin

函数式组件 style不要设置scope否则动画只展示一次，为了防止污染可设置transition的name特性

rel = "prefetch"
预加载，会在浏览器空闲时将文件下载下来，使用时从缓存中拿来。

路由注意：
1. 异步组件
2. 普通组件在components,路由组件在view



vue create xxname