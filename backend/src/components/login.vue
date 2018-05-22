<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">空降联盟</h3>
      <el-form-item prop="name">
        <span class="svg-container svg-container_login">
          <!-- <svg-icon icon-class="user" /> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
          </svg>
        </span>
        <el-input name="name" type="text" v-model="loginForm.name" autoComplete="on" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <svg-icon icon-class="password"></svg-icon> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-password"></use>
          </svg>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <img src="" alt="">
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // ajax
          var url = 'auth/loginByName'+'?name='+this.loginForm.name+'&password='+this.loginForm.password
          this.http.post(url).then(data=>{
              console.log(data)
            if(data.data.code==200){
              console.log(data.data.payload.access_token)
               this.auth.setUser(data.data.payload.access_token)
               console.log(data.data.payload.sessionId)
               window.sessionStorage.setItem('sesstionid',data.data.payload.sessionId)
              this.$router.push('/layout')
            }else if(data.data.code==1002){
              alert('密码输入错误，请重新输入')
            }else if(data.data.code==1001){
              alert("用户不存在")
            }
            })
            .catch(data=>{
              console.log(data)
            })
          // this.loading = false
          // this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style  rel="stylesheet/scss" lang="scss">
  $bg: transparent;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width:100%;
    background:url(../assets/2.jpg) no-repeat;
    background-size: 100%;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #9e8f94 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 100%;
    }
    .el-input {
      display: inline-block;
      height: 53px;
      width: 343px;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
      border-bottom: 1px solid #ccc; 
      padding: 20px 0 20px 0;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      display: block;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
  .icon {
   width: 14px; 
   height: 14px;
   vertical-align: -0.15em;
   fill: #fff;
   overflow: hidden;
   &:last-child {
     width: 16px;
     height: 16px;
   }
}
</style>
