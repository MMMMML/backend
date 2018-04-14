import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件
import home from '../components/home/home.vue'
import mine from '../components/mine/mine.vue'
import personal from '../components/mine/personal.vue'
import commonpeople from '../components/mine/commonpeople.vue'
import contact from '../components/mine/contact.vue'
import vehicle from '../components/mine/commonvehicle.vue'
import vehicledetail from '../components/mine/vehicle-detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack' },
    { path: '/mine', component: mine },
    { path: '/personal', component: personal },
    { path: '/commonpeople', component: commonpeople },
    { path: '/contact', component: contact },
    { path: '/vehicle', component: vehicle },
    { path: '/vehicledetail', component: vehicledetail },
  ]
})
// 导出路由对象
export default router
