import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        studentList: [],
    },
    getters: {
        studentLength: state => state.studentList.length,
        studentJuveniles: state => state.studentList.filter(item => item.age < 18),
    }
})

export default store;