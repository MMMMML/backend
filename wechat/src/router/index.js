import Vue from 'vue'
import VueRouter from 'vue-router'

import personal from '@/components/mine/personal.vue'
import contact from '@/components/mine/contact.vue'
import vehicle from '@/components/mine/commonvehicle.vue'
import vehicledetail from '@/components/mine/vehicle-detail.vue'
import editotherinfo from '@/components/mine/editotherinfo.vue'
import editmobile from '@/components/mine/editmobile.vue'
import attestation from '@/components/attestation/attestation.vue'
import bodyguard from '@/components/bodyguard/bodyguard.vue'
import guarantee from '@/components/bodyguard/guarantee.vue'
import protect from '@/components/bodyguard/protect.vue'
import protectdetail from '@/components/bodyguard/protectdetail.vue'
import bindcar from '@/components/mine/bindcar.vue'
import bindcardetail from '@/components/mine/bindcardetail.vue'

const Home = () => import('@/components/home')
const Mine = () => import('@/components/mine/mine.vue')

// 常用人员
const Commonpeople = () => import('@/components/mine/personnel/commonpeople.vue')
const Otherinfo = () => import('@/components/mine/personnel/otherinfo.vue')
const Familyhistory = () => import('@/components/mine/personnel/familyhistory.vue')

// 我的订单
const MyOrder = () => import('@/components/mine/myindent.vue')
const MyOrderDetail = () => import('@/components/mine/myindentinfo.vue')
const Product = () => import('@/components/product')
const Pay = () => import('@/components/pay')

const ExchangeResult = () => import('@/components/mine/exchange/result')
const ExchangeAdd = () => import('@/components/mine/exchange/add')
const Member = () => import('@/components/mine/member')
const tijiao = () => import('@/components/mine/tijiao')
const success = () => import('@/components/pay/success')

const Test = () => import('@/components/test')
const evcard = () => import('@/components/evcard/evcard')
const draw = () => import('@/components/evcard/draw')
const results = () => import('@/components/evcard/result')

Vue.use(VueRouter)
Vue.use(require('vue-wechat-title'))
/* eslint-disable */
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, name: 'jack', meta: {
      title: '空降联盟'
    }},
    { path: '/mine', component: Mine, meta: {
      title: '我的'
    }},
    { path: '/personal', component: personal, meta: { title : '个人信息'} },
    { path: '/commonpeople', name: 'commonpeople', component: Commonpeople,
      children: [
        { path: 'familyhistory', component: Familyhistory },
        { path: 'otherinfo', component: Otherinfo }
      ]
    },
    { path: '/myindent', name: 'myindent', component: MyOrder, meta:{
      title : '我的订单'
    }},
    { path: '/myindentinfo', name: 'myindentinfo', component: MyOrderDetail, meta:{
      title : '订单详情'
    }},
    { path: '/contact', component: contact, meta:{title : '权益人管理'} },
    { path: '/vehicle', component: vehicle ,meta:{title : '车辆管理'}},
    { path: '/vehicledetail', component: vehicledetail,meta:{title : '添加车辆'}},
    { path: '/pay', component: Pay },
    { path: '/editotherinfo', component: editotherinfo },
    { path: '/editmobile', component: editmobile },
    { path: '/attestation', name: 'attestation', component: attestation, meta:{title : '会员注册'} },
    { path: '/bodyguard', name: 'bodyguard', component: bodyguard,meta:{title : '飞行保镖'} },
    { path: '/guarantee', name: 'guarantee', component: guarantee,meta:{title : '飞行保镖'} },
    { path: '/protect', name: 'protect', component: protect,meta:{title : '皇家护卫队'} },
    { path: '/protectdetail', name: 'protectdetail', component: protectdetail,meta:{title : '皇家护卫队'} },
    { path: '/member', name: 'member', component: Member, meta:{title : '我的权益'} },
    { path: '/bindcar', name: 'bindcar', component: bindcar },
    { path: '/bindcardetail', name: 'bindcardetail', component: bindcardetail },
    { path: '/product', component: Product },
    { path: '/result', component: ExchangeResult },
    { path: '/add', component: ExchangeAdd, meta: { title: '权益兑换' }},
    { path: '/tijiao', component: tijiao, meta: { title: '提交建议'}},
    { path: '/success', component: success, meta: { title: '购买成功'}},
    { path: '/evcard', component: evcard, meta: { title: '主页面'}},
    { path: '/draw', component: draw, meta: { title: '领取页面'}},
    { path: '/results', component: results, meta: { title: '结果页面'}}
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
