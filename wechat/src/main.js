
import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'
import FastClick from 'fastclick'
import Vuelazyload from 'vue-lazyload'
import store from './store'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './assets/css/app.css'
/* eslint-disable */
import axios from 'axios'
import router from './router'
import { getSessionId, getWxFrom } from '@/util'
import Storage from 'good-storage'

// import VConsole from 'vconsole'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
// import './common/mixin.less'
import { Field, DatetimePicker, Radio, Indicator } from 'mint-ui'
Vue.component(Field.name, Field)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.use(Vant)

// let vConsole = new VConsole()

FastClick.attach(document.body)

axios.defaults.baseURL = 'http://aj.kingwingaviation.com/alliance/api/'
// axios.defaults.baseURL = '/apis'
axios.defaults.withCredentials = true
axios.interceptors.request.use(
  config => {
    config.headers = {
      ['X-WxFrom']: getWxFrom(),
      ['X-SessionId']: getSessionId()
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

axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.toString().includes('401')) {
      const redirect = `http://aj.kingwingaviation.com/alliance/api/wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance/wechat/#/home')}`
      window.location.href = redirect
    }
    return Promise.reject(error)
  }
)

Vue.prototype.$http = axios
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Radio.name, Radio)
Vue.use(Vuelazyload, {
  loading: require('./assets/image/loading.png')
})

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
