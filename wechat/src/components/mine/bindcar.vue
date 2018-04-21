<template>
  <div class='container'>
    <div class="contact">
      <p style="font-size:18px;font-weight:700;">绑定车辆</p>
      <router-link class="mui-tab-item" to='/bindcardetail'>
        <div>
          <img style="width:20px" src="../../assets/image/mine/button-加号@3x.png" alt="">
        </div>
      </router-link>
    </div>


    <div class='goods_wrapper'>
      <van-cell-swipe :right-width="65" v-for='(item, index) of contactlist' :key='index'>
        <van-cell-group style="background:#fff;margin-top:5px">
          <div class='contace-mes_content'>
            <div class='contace_text'>
              <p>所有人：{{item.owner}}</p>
              <p>车牌号码：{{item.plateNumber}}</p>
            </div>
          </div>
        </van-cell-group>
        <div class='deltext' slot="right" @click='delOne(item.id)'>删除</div>
      </van-cell-swipe>
    </div>
  </div>
</template>
<style scoped lang='less'>
  .container {
    width: 100vw;
    overflow-x: hidden;
    .contact {
      background: #fff;
      display: flex;
      justify-content: space-between;
      height: 70px;
      line-height: 70px;
      padding: 0 5%;
    }
    .goods_wrapper {
      width: 100%;
      .contace-mes_content {
        width: 100%;
        height: 70px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .images {
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .contace_text {
          flex: 1;
          height: 100%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          font-size: 14px;
          overflow: hidden;
          padding-left: 20px;
          p {
            width: 100%;
            color: #414141;
            height: 16px;
            line-height: 16px;
            font-size: 14px;
          }
        }
      }
      .deltext {
        width: 70px;
        height: 70px;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 70px;
        letter-spacing: 4px;
        position: absolute;
        top: 0px;
        right: -70px;
      }
    }
  }

</style>
<script>
  import {
    CellSwipe,
    CellGroup
  } from 'vant'
  export default {
    data() {
      return {
        contactlist: []
      }
    },
    created() {
        this._reload()
        window.sessionStorage.setItem('mobile', this.contactlist.mobile)
      //   var id = JSON.parse(window.sessionStorage.getItem('id'))
    },
    methods: {
      _reload() {
        var url = `wechat/auth/getBindVehicles?userId=${window.sessionStorage.getItem('id')}`
        this.$http.get(url).then(data => {
          this.contactlist = data.data.payload
          console.log(data)
        //   if (this.contactlist.gender == 0) this.contactlist.gender = '未知'
        //   if (this.contactlist.gender == 1) this.contactlist.gender = '男'
        //   if (this.contactlist.gender == 2) this.contactlist.gender = '女'
        })
      },
      delOne(id) {
        console.log(id)
        var url = `/wechat/auth/unbindVehicle`
        var params = {
           vehicleId:id, 
           userId:window.sessionStorage.getItem('id')
        }
        this.$http.post(url,params).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this._reload()
          }
        })
      }
    },
    components: {
      [CellSwipe.name]: CellSwipe,
      [CellGroup.name]: CellGroup
    }
  }

</script>
