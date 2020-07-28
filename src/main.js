import Vue from 'vue';
import App from './App';
import router from './router';
import "./assets/reset.css";
import axios from './http';
import store from './store';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')