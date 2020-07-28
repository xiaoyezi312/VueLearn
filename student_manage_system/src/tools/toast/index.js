import Vue from 'vue';
import toastContrutor from './index.vue'

const Toast = Vue.extend(toastContrutor);

function showToast(options = {
    type: 'success',
    msg: 'success'
}, duration = 2000) {
    const toast = new Toast({
        el: document.createElement("div"),
        data: {
            showNotify: true,
            exit: true,
            type: options.type,
            msg: options.msg
        }
    });
    document.body.appendChild(toast.$el)
    setTimeout(_ => {
        toast.showNotify = false
    }, duration - 200)
    setTimeout(_ => {
        toast.exit = false
    }, duration)
}
export default showToast