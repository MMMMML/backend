// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue
import Vue from 'vue'
// 导入APP.vue
import App from './App'

// 导入mui的样式
import './lib/mui/css/mui.css'
// 导入 购物车的小图标（注意：引入样式顺序的问题，先引入mui，再引入extra）
import './lib/mui/css/icons-extra.css'
// 导入自定义样式
import './assets/css/app.css'
// 导入 axois 发送ajax请求
import axios from 'axios'

// 导入路由
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui'
import { getSessionId, getWxFrom } from '@/util'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
axios.defaults.baseURL = 'http://aj.kingwingaviation.com/alliance-java/wechat'
axios.interceptors.request.use(
  config => {
    // let whiteWord = ['/abc', '/132']
    // if (!whiteWord.includes(config.url)) {  //如果不是这些url 就加入x-wxform
      config.headers = {
        ['X-WxFrom']: getWxFrom(),
        ['X-SessionId']: getSessionId() 
      }
    // }
    return config
  }
)

// 将 axios 添加到 Vue 的原型对象中
Vue.prototype.$http = axios

const vm = new Vue({
  el: '#app',
  // 将路由与vue实例关联到一起
  router,
  render: c => c(App)
})
