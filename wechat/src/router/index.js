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
import knight from '../components/home/knight.vue'
import payC2 from '../components/home/payC2.vue'
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
import protectdetail from '../components/bodyguard/protectdetail.vue'
import myindent from '../components/mine/myindent.vue'
import myindentinfo from '../components/mine/myindentinfo.vue'
import member from '../components/mine/member.vue'
import memcar from '../components/mine/memcar.vue'
import bindcar from '../components/mine/bindcar.vue'
import bindcardetail from '../components/mine/bindcardetail.vue'
import payC from '../components/home/payC.vue'
import payE from '../components/home/payE.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack' },
    { path: '/mine', component: mine },
    { path: '/product', components: product },
    { path: '/id', components: id },
    { path: '/personal', component: personal },
    { path: '/commonpeople', component: commonpeople },
    { path: '/contact', component: contact },
    { path: '/vehicle', component: vehicle },
    { path: '/vehicledetail', component: vehicledetail },
    { path: '/auth', component: Auth },
    { path: '/pay', component: pay },
    { path: '/cpb', component: cpb },
    { path: '/cpa', component: cpa },
    { path: '/payE', component: payE },
    { path: '/knight', component: knight },
    { path: '/payC', component: payC },
    { path: '/payC2', component: payC2 },
    { path: '/payd', component: payd },
    { path: '/familyhistory', component: familyhistory },
    { path: '/editfamilyhistory', component: editfamilyhistory },
    { path: '/otherinfo', component: otherinfo },
    { path: '/editotherinfo', component: editotherinfo },
    { path: '/editmobile', component: editmobile },
    { path: '/editcommonpeople/:id', name: 'editcommonpeople', component: editcommonpeople },
    { path: '/attestation', name: 'attestation', component: attestation },
    { path: '/bodyguard', name: 'bodyguard', component: bodyguard },
    { path: '/guarantee', name: 'guarantee', component: guarantee },
    { path: '/protect', name: 'protect', component: protect },
    { path: '/protectdetail', name: 'protectdetail', component: protectdetail },
    { path: '/myindent', name: 'myindent', component: myindent },
    { path: '/myindentinfo', name: 'myindentinfo', component: myindentinfo },
    { path: '/member', name: 'member', component: member },
    { path: '/memcar', name: 'memcar', component: memcar },
    { path: '/bindcar', name: 'bindcar', component: bindcar },
    { path: '/bindcardetail', name: 'bindcardetail', component: bindcardetail },
    { path: '/editcommonpeople/:id', name: 'editcommonpeople', component: editcommonpeople },
    { path: '/attestation', name: 'attestation', component: attestation },
    { path: '/bodyguard', name: 'bodyguard', component: bodyguard },
    { path: '/guarantee', name: 'guarantee', component: guarantee },
    { path: '/protect', name: 'protect', component: protect }
  ]
})
// 导出路由对象
export default router
