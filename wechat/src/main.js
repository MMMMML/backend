// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue
import Vue from 'vue'
// 导入APP.vue
import App from './App'
import qs from 'qs'
import FastClick from 'fastclick'
// 导入mui的样式
import './lib/mui/css/mui.css'
// 导入 购物车的小图标（注意：引入样式顺序的问题，先引入mui，再引入extra）
import './lib/mui/css/icons-extra.css'
// 导入自定义样式
import './assets/css/app.css'
/* eslint-disable */
// 导入 axois 发送ajax请求
import axios from 'axios'
// 导入路由
import router from './router'
import {
  Field,
  DatetimePicker,
  Radio
} from 'mint-ui'
import {
  getSessionId,
  getWxFrom
} from '@/util'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.component(Field.name, Field)
Vue.component(DatetimePicker.name, DatetimePicker)

FastClick.attach(document.body)

axios.defaults.baseURL = 'http://aj.kingwingaviation.com/alliance-java/'
// axios.defaults.baseURL = '172.28.2.59:8101/'
axios.interceptors.request.use(
  config => {
    config.headers = {
      ['X-WxFrom']: getWxFrom(),
      ['X-SessionId']: getSessionId()
      // ['X-SessionId']: '8d45169ffb154d53adc2b518e0171cc2'
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
  // 将路由与vue实例关联到一起
  router,
  render: c => c(App)
})
