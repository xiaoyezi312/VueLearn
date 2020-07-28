import Axios from 'axios';
import URLS from './urls.js';
const size = 5;
const appkey = {
    appkey: '048_chenyehua_1568605199811'
}

const myAjax = Axios.create({
    baseURL: URLS.baseURL,
    method: 'get',
    params: {
        ...appkey
    }
})

export default {
    findByPage(page = 1) {
        return myAjax.get(URLS.findByPage, {
            params: {
                page,
                size,
                ...appkey
            }
        })
    },
    updateStudent(data) {
        return myAjax.get(URLS.upDateStudent, {
            params: {
                ...data
            }
        })
    },
    searchStudent(search, page) {
        return myAjax.get(URLS.searchStudent, {
            params: {
                search,
                page,
                size,
                sex: -1,
                ...appkey
            }
        })
    },
    delStuBySno(sNo) {
        return myAjax.get(URLS.delBySno, {
            params: {
                sNo,
                ...appkey
            }
        })
    },
    addStu(data) {
        return myAjax.get(URLS.addStudent, {
            params: {
                ...data,
                ...appkey
            }
        })
    }
}