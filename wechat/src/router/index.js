import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件
import home from '../components/home/home.vue'
import pay from '../components/home/pay.vue'
import cpb from '../components/home/cpb.vue'
import cpa from '../components/home/cpa.vue'
import payd from '../components/home/payd.vue'
import knight from '../components/home/knight.vue'
import payC2 from '../components/home/payC2.vue'
// 测试实名登录页
import Auth from '@/components/auth'

// mine模块
import mine from '../components/mine/mine.vue'

// personnel 模块
import commonpeople from '@/components/mine/personnel/commonpeople.vue'
import familyhistory from '@/components/mine/personnel/familyhistory.vue'
import otherinfo from '@/components/mine/personnel/otherinfo.vue'

import personal from '../components/mine/personal.vue'
import contact from '../components/mine/contact.vue'
import vehicle from '../components/mine/commonvehicle.vue'
import vehicledetail from '../components/mine/vehicle-detail.vue'
// import editcommonpeople from '../components/mine/editcommonpeople.vue'
// import editfamilyhistory from '../components/mine/editfamilyhistory.vue'
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

// SpawN
const Product = () => import('@/components/product')

Vue.use(VueRouter)
Vue.use(require('vue-wechat-title'))
/* eslint-disable */
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'jack', meta: {
      title: '空降联盟'
    }},
    { path: '/mine', component: mine, meta: {
      title: '我的'
    }},
    { path: '/personal', component: personal, meta: { title : '个人信息'} },
    // { path: '/commonpeople', component: commonpeople },
    { path: '/commonpeople', name: 'commonpeople', component: commonpeople,
      children: [
        { path: 'familyhistory', component: familyhistory },
        { path: 'otherinfo', component: otherinfo }
      ]
    },
    { path: '/contact', component: contact, meta:{title : '权益人管理'} },
    { path: '/vehicle', component: vehicle ,meta:{title : '车辆管理'}},
    { path: '/vehicledetail', component: vehicledetail,meta:{title : '添加车辆'}},
    { path: '/auth', component: Auth },
    { path: '/pay', component: pay },
    { path: '/cpb', component: cpb },
    { path: '/cpa', component: cpa },
    { path: '/payE', component: payE },
    { path: '/knight', component: knight },
    { path: '/payC', component: payC },
    { path: '/payC2', component: payC2 },
    { path: '/payd', component: payd },
    { path: '/editotherinfo', component: editotherinfo },
    { path: '/editmobile', component: editmobile },
    { path: '/attestation', name: 'attestation', component: attestation, meta:{title : '身份认证'} },
    { path: '/bodyguard', name: 'bodyguard', component: bodyguard,meta:{title : '飞行保镖'} },
    { path: '/guarantee', name: 'guarantee', component: guarantee,meta:{title : '飞行保镖'} },
    { path: '/protect', name: 'protect', component: protect,meta:{title : '皇家护卫队'} },
    { path: '/protectdetail', name: 'protectdetail', component: protectdetail,meta:{title : '皇家护卫队'} },
    { path: '/myindent', name: 'myindent', component: myindent,meta:{title : '我的订单'} },
    { path: '/myindentinfo', name: 'myindentinfo', component: myindentinfo, meta:{title : '订单详情'}},
    { path: '/member', name: 'member', component: member, meta:{title : '我的权益'} },
    { path: '/memcar', name: 'memcar', component: memcar, meta:{title : '我的权益'} },
    { path: '/bindcar', name: 'bindcar', component: bindcar },
    { path: '/bindcardetail', name: 'bindcardetail', component: bindcardetail },
    { path: '/product', component: Product }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router
