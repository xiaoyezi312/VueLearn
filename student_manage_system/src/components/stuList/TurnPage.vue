<template>
  <ul id="turn-page">
    <li class="prev-page" :class="{'not-allow': nowPage == 1}" @click="turnPage(-1)">上一页</li>
    <template v-if="totalPage <= 7">
      <li
        v-for="i in totalPage"
        :key="i"
        @click="turnPage(i)"
        :class="{'cur-page':i == nowPage}"
      >{{i}}</li>
    </template>

    <template v-else>
      <template v-if="nowPage <= 4">
        <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page':i == nowPage}">{{i}}</li>
      </template>

      <template v-if="nowPage > 4">
        <li @click="turnPage(1)" :class="{'cur-page':1 == nowPage}">{{1}}</li>
        <span>...</span>
      </template>

      <template v-if="nowPage > 4  && nowPage + 4 <= totalPage">
        <li
          v-for="i in 5"
          :key="i+nowPage-3"
          @click="turnPage(i+nowPage-3)"
          :class="{'cur-page':i==3}"
        >{{i+nowPage-3}}</li>
      </template>

      <template v-if="nowPage+4 <= totalPage">
        <span>...</span>
        <li @click="turnPage(totalPage)" :class="{'cur-page':totalPage == nowPage}">{{totalPage}}</li>
      </template>

      <template v-if="nowPage+4 > totalPage">
        <li
          v-for="i in 6"
          :key="totalPage-6+i"
          @click="turnPage(totalPage-6+i)"
          :class="{'cur-page':totalPage-6+i == nowPage}"
        >{{totalPage-6+i}}</li>
      </template>
    </template>

    <li class="next-page" :class="{'not-allow': nowPage == totalPage}" @click="turnPage(0)">下一页</li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    turnPage(n) {
         if((this.nowPage == 1 && n == -1) || (this.nowPage == this.totalPage && n == 0) || (this.nowPage == n)) {
         } else {
            this.getStuList(n) 
         }
      },
      ...mapActions(['getStuList'])
  },
  computed:{
    ...mapState(['totalPage', 'nowPage'])
  }
};
</script>

<style scoped>
.not-allow {
     cursor: not-allowed!important;
  }
#turn-page li {
  user-select: none;
}
</style>