import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        stuList: [],
        editStudent: {},
        modalStatus: false,
        totalPage: 1,
        nowPage: 1,
        keyWord: '',
    },
    mutations: {
        setStuList(state, list) {
            state.stuList = list;
        },
        setEditStudent(state, stu = {}) {
            state.editStudent = stu
        },
        setStatus(state, bool) {
            state.modalStatus = bool;
        },
        setTotalPage(state, count) {
            state.totalPage = Math.ceil(count / 5)
        },
        setNowPage(state, page) {
            if (page == -1) {
                if (state.nowPage > 1) {
                    state.nowPage--;
                }
            } else if (page == 0) {
                if (state.totalPage > state.nowPage) {
                    state.nowPage++;
                }
                if (state.nowPage == 1) {
                    state.nowPage = 0;
                    state.stuList = [];
                }
            } else {
                state.nowPage = page
            }
        },
        setKeyWord(state, word) {
            state.keyWord = word
        },
    },
    actions: {
        getStuList({
            commit,
            state
        }, page) {
            if (typeof page == 'number') {
                commit('setNowPage', page);
            }
            if (state.keyWord) {
                api.searchStudent(state.keyWord, page)
                    .then(result => {
                        if (result.data.status == 'success') {
                            commit('setStuList', result.data.data.searchList);
                            commit('setTotalPage', result.data.data.cont)
                        }
                    })
                    .catch(err => console.log(err))
            } else {
                api.findByPage(state.nowPage)
                    .then(result => {
                        commit('setStuList', result.data.data.findByPage)
                        commit('setTotalPage', result.data.data.cont)
                    })
                    .catch(err => console.log(err))
            }

        },
        updateStudent({
            commit,
            dispatch
        }, stu) {
            return api.updateStudent(stu)
                .then(result => {
                    if (result.data.status == 'fail') {
                        return Promise.reject(result.data.msg);
                    } else {
                        commit('setStatus', false);
                        dispatch('getStuList')
                        return Promise.resolve(result.data.msg);
                    }
                })
        },
        delBySno({ dispatch, state }, sNo) {
            return api.delStuBySno(sNo)
                .then(data => {
                    if (state.stuList.length == 1) {
                        dispatch('getStuList', state.nowPage - 1)
                    }
                    dispatch('getStuList')
                    return '删除成功'
                })
        }
    },
    modules: {}
})