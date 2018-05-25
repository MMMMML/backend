<template>
  <div>
    <!-- 头像部分 -->
    <div class="portrait">
      <div class="portrait-img" style="width:25%">
        <!-- <img :src="user.avatarUrl" alt=""> -->
        <van-uploader class='upload_item img_wrapper' :after-read="store">
                <img v-lazy="user.avatarUrl">
        </van-uploader>
      </div>

      <div class="portrait-name">
        <p style="font-weight:700;margin-bottom:0.5rem">{{user.realName}}</p>
        <p >修改头像</p>
      </div>

      <!-- <div class="portrait-arr">
              <img src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div> -->
    </div>

    <!-- message -->
    <div>
      <div class="message">
        <div class="msg">
          <p style="width:23%;margin-left: 12%;">昵称</p>
          <!-- <p style="width:60%">{{user.realName}}</p> -->
          <input type="text" class="inputs" v-model="user.nickName" @focus="aaa()">
        </div>
      </div>
      <!-- 性别 -->
      <!-- 生日 -->
      <div class="message">
        <div class="msg">
          <p style="width:20%;margin-left: 12%;">性别</p>
          <!-- <p style="width:60%">{{user.gender}}</p> -->
          <p id="trigger" style="color:black;width:60%" class="human-input">{{user.gender}}</p>
        </div>
      </div>
      <!-- 所在地 -->
      <div class="message">
        <div class="msg" @click='selectProvince = !selectProvince'>
          <p style="width:20%;margin-left: 12%;">所在地</p>
          <p style="width:60%;color:black">{{user.address}}</p>
          <van-popup v-model='selectProvince' position='bottom'>
            <van-area :area-list='areaList' @confirm='handleConfirm'></van-area>
          </van-popup>
        </div>
      </div>
      <!-- 手机号 -->
      <router-link tag='div' class="message" to='/editmobile'>
        <div class="msg">
          <p style="width:20%;margin-left: 12%;">手机号</p>
          <p style="width:60%;color:black">{{user.mobile?user.mobile:'未填写'}}</p>
          <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </router-link>
      <!-- 身份证 -->
      <div class="message">
        <div class="msg">
          <p style="width:20%;margin-left: 12%;">身份证</p>
          <p style="width:50%">{{user.idNumber?user.idNumber:'未填写'}}</p>
          <p style="width:15%;">{{user.verified==false?'未绑定':'已绑定'}}</p>
        </div>
      </div>
      <!-- 常用车辆 -->
      <router-link tag='div' class="message" to='/bindcar'>
        <div class="msg">
          <p style="width:20%;margin-left: 12%;">绑定车辆</p>
          <p style="width:60%;color:black">{{user.bindVehicleCount}}</p>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </router-link>
      <!-- 邮箱 -->
      <!-- <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">邮箱</p>
              <p style="width:60%">未绑定</p>
          </div>
      </div> -->
      <button class="btn" v-show="foucus" @click="confirm()">提交</button>
    </div>

  </div>
</template>
<style scoped>
  .portrait {
    background: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    /* line-height: 100px; */
  }

  p {
    margin: 0;
  }

  .portrait-img img {
    width: 60px;
  }

  .portrait-name {
    width: 60%;
    margin-top: 0.5rem
  }

  .portrait-img {
    padding-left: 3%;
  }

  .portrait-arr img {
    width: 8px;
  }

  .message {
    background: #fff;
  }

  .msg {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
  }

  .msg img {
    width: 8px;
  }

  .inputs {
    margin-bottom: 0;
    border: none;
    font-size: 14px;
  }

  .btn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: red;
    color: white;
  }

</style>
<script>
  import {
    Area,
    Popup,
    Uploader
  } from 'vant'
  import 'vant/lib/vant-css/index.css'
  import areaList from '@/util/area'
   import compress from '@/util/compress'
  import MobileSelect from 'mobile-select'
  export default {
    data() {
      return {
        user: '',
        foucus: false,
        value4: [],
        areaList: areaList,
        selectProvince: false,
        url: '',
      }
    },
    created() {

      //  console.log(this.user)
      this._reload()
    },
    mounted() {
      this.IDType = new MobileSelect({
        trigger: '#trigger',
        title: '选择性别',
        triggerDisplayData: false,
        wheels: [{
          data: [{
              id: '1',
              value: '男'
            },
            {
              id: '2',
              value: '女'
            },
          ]
        }],
        callback: (indexArr, data) => {
          this.user.gender = data[0].value
          console.log(data[0].id)
          let url = 'wechat/auth/updateGender'
          let params = {
            gender: data[0].id
          }
          this.$http.post(url, params).then(data => {
            if (data.data.code == 200) {
              alert('修改成功')
              this.foucus = false
            }
          })
        }
      })
    },
    methods: {
      _reload() {
        var id = JSON.parse(window.sessionStorage.getItem('id'))
        var url = `wechat/auth/getUserInfo?id=${id}`
        this.$http.get(url).then(data => {
          this.user = data.data.payload
          console.log(data)
          if (this.user.gender == 0) this.user.gender = '未知'
          if (this.user.gender == 1) this.user.gender = '男'
          if (this.user.gender == 2) this.user.gender = '女'

          window.sessionStorage.setItem('mobile', this.user.mobile)
        })
      },
      aaa: function () {
        this.foucus = true
      },
      confirm: function () {
        let url = 'wechat/auth/updateNickName'
        let params = {
          nickName: this.user.nickName
        }
        this.$http.post(url, params).then(data => {
          if (data.data.code == 200) {
            alert('修改成功')
            this.foucus = false
          }
        })
      },
      store (files) {
          console.log(files.file)
        compress(files.file).then(res => {
          this.user.avatarUrl = res
          console.log(res)
          let url = 'wechat/auth/uploadHeadPhoto'
          let params = {
              file: this.user.avatarUrl
          }
          this.$http.post(url, params).then(data => {
        //   if (data.data.code == 200) {
        //     alert('修改成功')
        //     this.foucus = false
        //   }
            console.log(data)
        })
        }).catch(e => {
          this.user.avatarUrl = files.content
        })
      },
      handleConfirm(arr) {
        console.log(arr)
        if (arr[1].name == '选择城市') arr[1].name = ''
        if (arr[2].name == '选择地区') arr[2].name = ''
        this.user.province = arr[0].name + arr[1].name + arr[2].name
        let url = 'wechat/auth/updateAddress'
        if (arr[1].code == -1) arr[1].code = ''
        if (arr[2].code == -1) arr[2].code = ''
        let params = {
          province: arr[0].code,
          city: arr[1].code,
          area: arr[2].code,
          address: arr[0].name + arr[1].name + arr[2].name
        }
        this.$http.post(url, params).then(data => {
          if (data.data.code == 200) {
            alert('修改成功')
            this._reload()
          }
        })

      }
    },
    components: {
      [Popup.name]: Popup,
      [Area.name]: Area,
      [Uploader.name]: Uploader
    }
  }

</script>
