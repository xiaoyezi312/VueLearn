this.$set() 数组
showChildren:[false,false,false]
flag = true;
index = 3
this.$set(this.showChildren,index,flag);改完后showChildren的前两个默认插入undefined

点击第一级 第二级 出现第三极后点击第一级收回在点开后，第三极不在显示了但我们想保留之前的状态 将v-if换为v-show      但是会耗费性能，因为可能不会点开所有的但v-show会都展示
可以用<keep-alive></keep-alive>