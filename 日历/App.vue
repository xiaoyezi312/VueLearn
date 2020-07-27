<template>
  <div class="app">
    <!-- v-model :value @input :date @choose-date -->
<!-- <date-picker :date="date" @choose-date="chooseDate"/> -->

    <date-picker v-model="date"/>
  </div>
</template>

<script>
import DatePicker from './DatePicker';

export default {
  components: {
    DatePicker,
  },  
  data () {
    return{
      date: new Date()
    }
     // methods: {
  //   chooseDate(date){
  //     this.date =date;
  //   }
  //},
  },
}
</script>

<style scoped>

</style>