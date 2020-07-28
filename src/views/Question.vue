<template>
  <div class="question" v-if="question">
    <div class="main">问题：{{ question.title }}</div>

    <div class="other">
      <div 
        v-for="other in otherQuestionList" 
        :key="other.id"
        :class="other.type"
        :title="other.title"
        @click="handleClick(other.id)"
      >
        {{ other.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate (to, from, next) {
    this.clickId = to.params.id;
    this.getData();
    next();
  },
  beforeRouteLeave (to, from, next) {
    const isGo = window.confirm('真的要走吗，不再看看了？');
    isGo ? next() : next(false);
  },
  props: {
    id: {
      type: [String, Number],
    },
  },
  data () {
    return {
      question: null,
      clickId: this.id,
    }
  },
  mounted(){
    this.getData();
  },
  computed: {
    otherQuestionList () {
      const arr = [];
      if(this.question.prev) {
        const { prev, prevId } = this.question;
        arr.push({
          type: 'prev',
          title: prev,
          id: prevId
        })
      }
      if(this.question.next) {
        const { next, nextId } = this.question;
        arr.push({
          type: 'next',
          title: next,
          id: nextId
        })
      }
      return arr;
    },
  },
  methods: {
    handleClick (id) {
      this.$router.push({
        name: 'question',
        params: {
          id,
        }
      });
    },
    getData () {
      this.$axios.get(`/question/${this.clickId}`).then(res => {
        this.question = res;
      })
    },
  },
}
</script>
</script>

<style scoped>
.main {
  margin-bottom: 200px;
}
.prev {
  float: left;
}
.next {
  float: right;
}
.prev,
.next {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3385ff;
  text-decoration: underline;
  cursor: pointer;
}
</style>