import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home'
import auth from './utils/auth'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home', //要做到在点击学术讨论时，社区也是被选中的状态所以上面导航栏中的组件被选中央视就不能写完全匹配的了，但是如果包含的话/也被包含所以首页也被选中
        component: Home, //但是如果把path改掉用户习惯输入/时就跳转到首页而非后面加path，所以要用到别名
        //    alias: '/' //别忘了在to中改  但是用别名首页就不会被加上一个特殊的class了(一进来未点击时首页没被选中)所以还是用重定向
    },
    {
        path: '/learn',
        component: () =>
            import ('./views/Learn'),
    },
    {
        path: '/student',
        component: () =>
            import ('./views/Student'),
    },
    {
        path: '/about',
        component: () =>
            import ('./views/About'),
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: '/activity',
        component: () =>
            import ( /*webpackChunkName:'academic'*/ './views/Activity'),
        meta: {
            requiresLogin: true,
        },
        redirect(to) {
            return {
                name: 'academic'
            }
        },
        children: [
            //     {
            //         path: '', //点击社区时默认展示学术讨论组件，配置一个路径为空
            //         redirect: 'academic',
            //         component: () => //问题这样展示学术讨论不会被选中，因为选中样式写在和路径完全匹配的.router-link-exact-active中,而此时路径并不完全匹配，用重定向
            //             import ('./views/Academic'),
            //     },
            {
                path: 'academic', //不要留/否则会认为是根路径下的academic
                name: 'academic',
                component: () =>
                    import ( /*webpackChunkName:'academic'*/ './views/Academic'),
            },
            {
                path: 'personal',
                name: 'personal',
                component: () =>
                    import ('./views/Personal'),
            },
            {
                path: 'download',
                name: 'download',
                component: () =>
                    import ('./views/Download'),
            }
        ],
    },
    {
        path: '/question/:id',
        name: 'question',
        props: route => ({
            id: route.params.id
        }),
        component: () =>
            import ('./views/Question'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('./views/Login'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});
router.beforeEach((to, from, next) => {
    const isrequiresLogin = to.matched.some(item => item.meta.requiresLogin);
    if (isrequiresLogin) {
        const isLogin = auth.isLogin();
        if (isLogin) {
            next();
        } else {
            const isToLogin = window.confirm("要登录后才可以浏览，要去登录吗？");
            isToLogin ? next('/login') : next(false);
        }

    } else {
        next();
    }
})

export default router;