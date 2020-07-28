<template>
     <div class="search">
      <label for="search-word">关键字搜索:</label>
      <input type="text" id="search-word" v-model="keyWord"/>
      <button id="search-submit" @click="search">搜索</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  data(){
    return{
      keyWord:'',
    }
  }
  ,
   methods: {
      search() {
        this.$store.dispatch('getStuList', 1)
      }
    },
    watch: {
      keyWord() {
        this.$store.commit('setKeyWord', this.keyWord)
      }
    }
}
</script>