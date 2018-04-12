class Auth{
    constructor(){
        this.getUser()
    }
    // 读取缓存
    getUser(){
        this.token = ''
        this.userInfo = {}
        if(window.sessionStorage.token) this.token = window.sessionStorage.token
        if(window.sessionStorage.userInfo) this.userInfo = JSON.parse(window.sessionStorage.userInfo)
    }
    // 写入缓存，令牌和用户信息
    setUser(token,userInfo){
        this.token = token
        // this.userInfo = userInfo
        window.sessionStorage.token = token
        // window.sessionStorage.userInfo = JSON.stringify(userInfo)
    }
    // 清空缓存
    clearUser(){
        this.token = ''
        this.userInfo = ''
        window.sessionStorage.token = ''
        window.sessionStorage.userInfo = ''
    }
}
export default new Auth()
