import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件
// 首页的
import home from '../components/home/home.vue'
import product from '../components/home/product.vue'
import id from '../components/home/id.vue'
import pay from '../components/home/pay.vue'
import cpb from '../components/home/cpb.vue'
import cpa from '../components/home/cpa.vue'
import payd from '../components/home/payd.vue'
// 测试实名登录页
import Auth from '@/components/auth'

// 马哥的
import mine from '../components/mine/mine.vue'
import personal from '../components/mine/personal.vue'
import commonpeople from '../components/mine/commonpeople.vue'
import contact from '../components/mine/contact.vue'
import vehicle from '../components/mine/commonvehicle.vue'
import vehicledetail from '../components/mine/vehicle-detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack' },
    { path: '/product', component: product },
    { path: '/id', component: id, name: '' },
    { path: '/mine', component: mine },
    { path: '/personal', component: personal },
    { path: '/commonpeople', component: commonpeople },
    { path: '/contact', component: contact },
    { path: '/vehicle', component: vehicle },
    { path: '/vehicledetail', component: vehicledetail },
    { path: '/auth', component: Auth },
    { path: '/pay', component: pay },
    { path: '/cpb', component: cpb },
    { path: '/cpa', component: cpa },
    { path: '/payd', component: payd }
  ]
})
// 导出路由对象
export default router
