import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件
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
import familyhistory from '../components/mine/familyhistory.vue'
import otherinfo from '../components/mine/otherinfo.vue'
import editcommonpeople from '../components/mine/editcommonpeople.vue'
import editfamilyhistory from '../components/mine/editfamilyhistory.vue'
import editotherinfo from '../components/mine/editotherinfo.vue'
import editmobile from '../components/mine/editmobile.vue'
import attestation from '../components/attestation/attestation.vue'
import bodyguard from '../components/bodyguard/bodyguard.vue'
import guarantee from '../components/bodyguard/guarantee.vue'
import protect from '../components/bodyguard/protect.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack' },
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
    { path: '/familyhistory', component: familyhistory },
    { path: '/editfamilyhistory', component: editfamilyhistory },
    { path: '/otherinfo', component: otherinfo },
    { path: '/editotherinfo', component: editotherinfo },
    { path: '/editmobile', component: editmobile },
    { path: '/editcommonpeople/:id',name:'editcommonpeople', component: editcommonpeople },
    { path: '/attestation',name:'attestation', component: attestation },
    { path: '/bodyguard',name:'bodyguard', component: bodyguard },
    { path: '/guarantee',name:'guarantee', component: guarantee },
    { path: '/protect',name:'protect', component: protect },
  ]
})
// 导出路由对象
export default router
