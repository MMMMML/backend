<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>请登录</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
        <el-form-item label="帐号" prop="username">
          <el-input type="input" style="width:100%" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" style="width:100%" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'));
        }
        callback()
      };
      var checkPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        }
        callback()
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' },
          ],
          password:[
            { validator: checkPassword, trigger: 'blur' }
          ]
        }
      };
    },
    mounted:function(){
      this.auth.clearUser();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var params = {
              name:this.$refs[formName].model.username,
              password:this.$refs[formName].model.password
            }
            var url = 'auth/loginByName'+'?name='+params.name+'&password='+params.password
            this.http.post(url).then(data=>{
              console.log(data)
            if(data.data.code==200){
              console.log(data.data.payload.access_token)
               this.auth.setUser(data.data.payload.access_token)
               console.log(data.data.payload.sessionId)
               window.sessionStorage.setItem('sesstionid',data.data.payload.sessionId)
              this.$router.push('/layout')
            }else if(data.data.code==506){
              alert('密码输入错误，请重新输入')
            }else if(data.data.code==505){
              alert("用户不存在")
            }
            })
            .catch(data=>{
              console.log(data)
            })
          } 

        });
      }
    }
  }
</script>
<style>
  .login{
    width:350px;
    margin:200px auto;
  }
  .submit{
    display:block;
    width:100%;
  }
  
</style>
