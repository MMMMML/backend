<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">姓名</p>
        <!-- <p>马玲</p> -->
        <input type="text" class="human-input" v-model="user.realName" placeholder="请输入真实姓名">
        <!-- <div style="display:flex;align-items: center;">
          <div class="btn" @click="select()">选择权益人</div>
        </div> -->
        <div class="warning" v-show="isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p style="width:25%;padding-left:5%">证件类型</p>
        <p id="trigger" style="width:62%;padding-left: 1rem;">{{user.idType && user.idType | format}}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input style='color: #888;' type="text" v-model="user.idNumber" @focus="aaa()" @blur="bbb()" class="human-input">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" class="human-input" v-model="user.mobile" placeholder="请输入手机号码">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p class="human-name">验证码</p>
        <!-- <p>马玲</p> -->
        <input type="text" class="human-input" v-model="user.vcode" placeholder="请输入验证码">
        <div style="display:flex;align-items: center;">
          <!-- <div class="btn" @click="gaincode()">time </div> -->
          <!-- <time class="btn" @countDown='gaincode'></time> -->
          <count class='btn' :start='start' @countDown ='start = false' @click.native = 'gaincode' :class='{"active": start}'></count>
        </div>

      </div>
    </div>
    <p style="text-align:center;padding-top:20px;">救援类权益需核实身份信息，注册成功后即刻购买权益哦！</p>
    <div class="button" @click="confirm()">确认</div>
  </div>
</template>
<style scoped lang='less'>
  .warning {
    position: absolute;
    bottom: 2.6rem;
    left: 24vw;
    height: 0;
  }

  .warning span {
    font-size: 12px;
  }

  .warning img {
    width: 14px;
    height: 14px;
  }

  .btn {
    width: 22vw;
    color: white;
    background: red;
    /* font-size: 0.5rem; */
    text-align: center;
    height: 25px;
    font-size: 14px;
    line-height: 25px;
    border-radius: 20px;
    &.active {
      background: #ccc;
    }
  }

  .human-input {
    border: none !important;
    height: 59px !important;
    margin: 0;
    font-size: 14px;
    width: 50%;

  }

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
  .must {
    background: #fff;
    width: 100%;
  }

  .human-name {
    width: 25%;
    padding-left: 5%;
  }

  .man {
    display: flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .man img {
    width: 8px;
    height: 13px;
  }

</style>
<script>
  import Storage from 'good-storage'
  import MobileSelect from 'mobile-select'
  import Count from '@/base/countdown'
  import {
    MessageBox
  } from 'mint-ui';
  export default {
    data() {
      return {
        isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false,
        focusState: false,
        vcode: '',
        start: false,
        user: {
          idType: '请选择证件类型',
          idNumber: '请输入证件号码',
          realName: ''
        }
      }
    },
    mounted() {
      var mobileSelect1 = new MobileSelect({
        trigger: '#trigger',
        title: '选择证件类型',
        wheels: [{
          data: [{
              id: '0',
              value: '身份证'
            },
            {
              id: '3',
              value: '护照'
            },
            {
              id: '2',
              value: '回乡证'
            },
            {
              id: '1',
              value: '台胞证'
            }
          ]
        }],
        callback: (indexArr, data) => {
          this.user.idType = data[0].id; //返回选中的json数据
          console.log(this.user.idType)
        }
      })
      let redirect = this.$route.query.redirect
      this.url = redirect || '/'
      console.log(this.url)
    },
    methods: {
      _isChinaName(name) {
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
      },
      _isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },
      select: function () {
        var url = 'wechat/auth/getCurrentUser'
        this.$http.get(url).then(data => {
          console.log(data)
          this.user = data.data.payload
        })
      },
      aaa: function (event) {
        this.user.idNumber = ''
      },
      bbb: function (event) {
        this.user.idNumber = this.user.idNumber || '请输入证件号码'
      },
      gaincode: function () {
        if (this.start) {
          return
        }
        var url = '/common/sendVCode'
        var params = {
          mobile: this.user.mobile,
          type: 'verifyUser'
        }
        this.$http.post(url, params).then(data => {
          if (data.data.code == 200) {
            this.start = true
            alert('验证码已发送，请注意查收')
          }
          if (data.data.code == 500) {
            alert(data.data.message)
          }
          if (data.data.code == 20005) {
            alert('验证码错误，请重新输入')
          }
        })
      },
      confirm: function () {
        this.isChinaName = false
        this.isPhoneNo = false
        this.isIdNumber = false
        this.isChinaName = !this._isChinaName(this.user.realName)
        if (this.isChinaName) {
          return;
        }
        if (this.user.idNumber === '请输入证件号码' || !this.user.idNumber) {
          this.isIdNumber = true
          return
        }
        this.isPhoneNo = !this._isPhoneNo(this.user.mobile)
        if (this.isPhoneNo) {
          return;
        }

        // if (!isChinaName) return
        var url = 'wechat/auth/verifyUser'
        var params = {
          realName: this.user.realName,
          idType: this.user.idType,
          idNumber: this.user.idNumber,
          mobile: this.user.mobile,
          vcode: this.user.vcode
        }
        this.$http.post(url, params).then(data => {
          console.log(data)
          if (data.data.code == 500) {
            alert(data.data.message)
          }
          if (data.data.code == 200) {
            const userInfo = Storage.session.get('userInfo')
            let obj
            if (userInfo) {
              obj = JSON.parse(Storage.session.get('userInfo'))
            } else {
              obj = {}
            }
            obj = {
              ...obj,
              verified: true
            }
            // const userinfo = res.data.payload
            Storage.session.set('userInfo', JSON.stringify(obj))
            console.log(this.url)

            // window.location.href = this.url
            this.$router.push(this.url)
          }
        })
      }
    },
    filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照']
        return enums[val] || val
      }
    },
    components:{
      Count
    },
    beforeDestroy() {
      this.$http.get("wechat/auth/getCurrentUser").then(res => {
        const userinfo = res.data.payload
        Storage.session.set('userInfo', JSON.stringify(userinfo))
      })
    }
  }

</script>
