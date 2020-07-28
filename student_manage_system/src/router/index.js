import Vue from 'vue'
import VueRouter from 'vue-router'
import AddStudent from '../views/AddStudent.vue'
import StudentList from '../views/StudentList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/studentList',
        component: StudentList,
    },
    {
        path: '/addStudent',
        component: AddStudent,
    },
    {
        path: '*',
        redirect: StudentList
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: 'active',
})

export default router