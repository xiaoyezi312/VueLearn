<template>
  <div class="student-list content" id="student-list">
    <app-search></app-search>
        <app-table></app-table>
        <turn-page></turn-page>
        <transition name="modal">
         <show-modal v-show="modalStatus"></show-modal>
        </transition>
       
  </div>
  
</template>

<script>
import AppSearch from '@/components/stuList/AppSearch.vue'
import AppTable from '@/components/stuList/AppTable.vue'
import ShowModal from '@/components/stuList/ShowModal.vue'
import TurnPage from '@/components/stuList/TurnPage.vue'

import { mapActions, mapState } from 'vuex'

export default {
  components:{
    AppSearch,
    AppTable,
    ShowModal,
    TurnPage,
  },
  created() {
        this.getStuList(1)
    },
    methods: {
        ...mapActions(['getStuList'])
    },
    computed: {
        ...mapState(['modalStatus'])
    }
}
</script>

<style>
    /* v-enter, v-enter-to, v-leave, v-leave-to,  */
    /* v-enter-active, v-leave-active */
    .modal-enter {
        height: 0;
        top: -100%;
    }
    .modal-enter-to {
        height: 100%;
        top: 0;
    }
    .modal-leave {
        height: 100%;
        top: 0;
    }
    .modal-leave-to {
         height: 0;
         top: -100%;
    }
    .modal-enter-active, .modal-leave-active {
        transition: all .7s;
    }
</style>