import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Manage from '../views/MgtSys.vue'

Vue.use(VueRouter)

// 获取原型对象push函数
const originalPush = VueRouter.prototype.push
// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace
// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
    }

const routes = [
    {
        path: '/',
        component: HomeView
    }, {
        path: '/manage',
        name: '',
        component: Manage,
        meta: [],
        children: [
            {
                path: 'ioStoreMgt',
                name:'出入库管理',
                component: () => import ('../views/storeMgt/ioStoreMgt.vue')
            },
            {
                path: 'accessoryTime',
                name:'配件时限',
                component: () => import('../views/storeMgt/accessoryTime.vue')
            },
            {
                path: 'accessoryMgt',
                name:'配件管理',
                component: () => import('../views/storeMgt/accessoryMgt.vue')
            }
        ]
    },
    // 无效地址 重定向
    {
        path: '*',
        name: 'any',
        redirect: '/manage'
    }
]

// 全局守卫
// router.beforeEach((to, from, next) => {
//     if(to.path == '/'){

//     }
// });

export default new VueRouter({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
