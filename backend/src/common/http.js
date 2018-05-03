import axios from 'axios'
import appConfig from '../appconfig'
import auth from './auth'
import qs from 'qs'
// axios.defaultsURL = '/apis'
axios.interceptors.request.use(
    config => {
      if (window.sessionStorage.getItem('sesstionid')) {
        config.headers['X-SessionId']  = `${window.sessionStorage.getItem('sesstionid')}`
      }
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )
class Http{
    constructor(){
        
    }
    getRequestUrl(url){
        return appConfig.serverRootUrl+url
    } 
    get(url,params){
        var $this = this
        var header = {}
        if(auth.token) header={"X-Access-Token":auth.token}
        return axios({
            method:'get',
            url:$this.getRequestUrl(url),
            params:params||{},
            headers:header
        }).catch(this.errHandler)
    }
    post(url,data){
        var $this = this
        var header = {}
        if(auth.token) header={"X-Access-Token":auth.token}
        return axios({
            method:'post',
            url:$this.getRequestUrl(url),
            params:data||{},
            headers:header
        }).catch(this.errHandler)
    }
    put(url,data){
        var $this = this
        var header = {}
        if(auth.token) header={"X-Access-Token":auth.token}
        return axios({
            method:'put',
            url:$this.getRequestUrl(url),
            data:data||{},
            headers:header
        }).catch(this.errHandler)
    }
    delete(url,data){
        var $this = this
        var header = {}
        if(auth.token) header={"X-Access-Token":auth.token}
        return axios({
            method:'delete',
            url:$this.getRequestUrl(url),
            data:data||{},
            headers:header
        }).catch(this.errHandler)
    }
    errHandler(err){
        if(err.toString().indexOf('status code 401')!==-1){
            window.location.hash = '/login'
        }else{
            throw err
        }
    }


}
export default new Http()