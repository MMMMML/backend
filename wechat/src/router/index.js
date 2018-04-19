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
  mode: 'history',
  routes: [
    { path: '/alliance-html/wechat/', redirect: '/home' },
    { path: '/alliance-html/wechat/home', component: home, name: 'jack' },
    { path: '/alliance-html/wechat/mine', component: mine },
    { path: '/alliance-html/wechat/personal', component: personal },
    { path: '/alliance-html/wechat/commonpeople', component: commonpeople },
    { path: '/alliance-html/wechat/contact', component: contact },
    { path: '/alliance-html/wechat/vehicle', component: vehicle },
    { path: '/alliance-html/wechat/vehicledetail', component: vehicledetail },
    { path: '/alliance-html/wechat/familyhistory', component: familyhistory },
    { path: '/alliance-html/wechat/editfamilyhistory', component: editfamilyhistory },
    { path: '/alliance-html/wechat/otherinfo', component: otherinfo },
    { path: '/alliance-html/wechat/editotherinfo', component: editotherinfo },
    { path: '/alliance-html/wechat/editmobile', component: editmobile },
    { path: '/alliance-html/wechat/editcommonpeople/:id',name:'editcommonpeople', component: editcommonpeople },
    { path: '/alliance-html/wechat/attestation',name:'attestation', component: attestation },
    { path: '/alliance-html/wechat/bodyguard',name:'bodyguard', component: bodyguard },
    { path: '/alliance-html/wechat/guarantee',name:'guarantee', component: guarantee },
    { path: '/alliance-html/wechat/protect',name:'protect', component: protect },
  ]
})
// 导出路由对象
export default router
