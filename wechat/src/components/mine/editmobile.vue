<template>
  <div>
    <div class="message">
      <div class="msg">
        <p style="width:20%;margin-left: 12%;">手机号码</p>
        <!-- <p style="width:60%">{{mobile}}</p> -->
        <input type="text" class="inputs" v-model="mobile" placeholder="请输入新手机号">
      </div>
    </div>
    <!-- 邮箱 -->
    <div class="message">
      <div class="msg">
        <p style="width:20%;margin-left: 12%;">验证码</p>
        <input type="text" v-model="vcode" class="inputs">
        <div style="width:25%;display: flex;align-items: center;">
          <div class="code" @click="gain()">获取验证码</div>
        </div>
      </div>
    </div>
    <button class="button" @click="sure()">确认</button>
  </div>
</template>
<style scoped>
  .button {
    color: #fff;
    background: red;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .inputs {
    width: 45%;
    border: none;
    height: 49px;
    line-height: 50px;
    margin-bottom: 0;
    font-size: 12px;
  }

  .code {
    font-size: 13px;
    height: 35px;
    background: #aaa;
    line-height: 35px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    margin-right: 10%;
    width: 100%;

  }

  .message {
    background: #fff;
  }

  .msg {
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
  }

  .msg img {
    width: 8px;
  }

</style>
<script>
  export default {
    data() {
      return {
          vcode:'',
      }
    },
    created() {
      // this.mobile = window.sessionStorage.getItem('mobile')
    },
    methods: {
      gain: function () {
        var url = 'common/sendVCode'
        var params = {
          mobile: this.mobile,
          type: 'updateMobile'
        }
        this.$http.post(url, params).then(data => {
          if (data.data.code = 200) {
            alert('短信发送成功，请注意查收')
          }
          console.log(data)
        })
      },
      sure: function () {
          var url = 'wechat/auth/updateMobile'
          var params = {
              id:window.sessionStorage.getItem('id'),
              mobile:this.mobile,
              vcode:this.vcode
          }
          this.$http.post(url, params).then(data => {
          if (data.data.code = 200) {
            this.$router.go(-1)
          }
          console.log(data)
        })
      }
    }
  }

</script>
