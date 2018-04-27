// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue
import Vue from 'vue'
// 导入APP.vue
import App from './App'
import qs from 'qs'
import FastClick from 'fastclick'
import store from './store'
// 导入mui的样式
import './lib/mui/css/mui.css'
// 导入 购物车的小图标（注意：引入样式顺序的问题，先引入mui，再引入extra）
import './lib/mui/css/icons-extra.css'
// 导入自定义样式
import './assets/css/app.css'
/* eslint-disable */
import axios from 'axios'
import router from './router'
import { getSessionId, getWxFrom } from '@/util'
import Storage from 'good-storage'

import { Field, DatetimePicker, Radio } from 'mint-ui'
Vue.component(Field.name, Field)
Vue.component(DatetimePicker.name, DatetimePicker)
// Vue.use(VeeValidate)

FastClick.attach(document.body)

axios.defaults.baseURL = 'http://aj.kingwingaviation.com/alliance-java/'
// axios.defaults.baseURL = '172.28.2.59:8101/'
axios.interceptors.request.use(
  config => {
    config.headers = {
      ['X-WxFrom']: getWxFrom(),
      // ['X-SessionId']: getSessionId(),
      ['X-SessionId']: '0976b8430cb3490bbdcdf102b9e08018'
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    // let whiteWord = ['/abc', '/132']
    // if (!whiteWord.includes(config.url)) {  //如果不是这些url 就加入x-wxform
    // }
    return config
  }
)
// axios.interceptors.response.use(
//   error => {
//     if (error.toString().includes('401')) {
//       router.replace({
//         path: '/home'
//       })
//     }
//   }
// )
// 将 axios 添加到 Vue 的原型对象中
Vue.prototype.$http = axios
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Radio.name, Radio)

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
