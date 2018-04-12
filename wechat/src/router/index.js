import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件
import home from '../components/home/home.vue'
import Vip from '../components/vip/Vip.vue'
import Search from '../components/search/Search.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack' },
    { path: '/vip', component: Vip },
    { path: '/search', component: Search }
  ]
})
// 导出路由对象
export default router
