// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.css'
import App from './App'
import router from './router'
import appConfig from './appconfig'
import http from './common/http'
import auth from './common/auth'
window.common = {
  copy: (obj) => {
    var newObj = obj instanceof Array ? [] : {};
    for (var i in obj) {
      newObj[i] = typeof obj[i] == 'object' ? common.copy(obj[i]) : obj[i]
    }
    return newObj
  }
}

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.appConfig = appConfig
Vue.prototype.http = http
Vue.prototype.auth = auth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
