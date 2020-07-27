<template>
  <ul class="tree">
    <li class="tree-node">
      <i class="iconfont icon-down"></i>
      <span class="node-label">一级 1</span>
    </li>
    <li class="tree-node">
      <i class="iconfont icon-down"></i>
      <span class="node-label">一级 2</span>
    </li>
    <li class="tree-node">
      <i class="iconfont icon-down"></i>
      <span class="node-label">一级 3</span>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'base-tree',
    props: {
        data: Array,
    },
}
</script>

<style scoped>
@import "./assets/font.css";

li {
  list-style: none;
}

.tree-node {
  cursor: pointer;
}

.tree-node .iconfont {
  color: #c0c4cc;
  font-size: 12px;
  margin-right: 5px;
  vertical-align: middle;
}

.tree-node .node-label {
  font-size: 14px;
  color: #606266;
  vertical-align: middle;
}
</style>