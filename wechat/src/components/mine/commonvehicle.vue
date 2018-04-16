<template>
  <div>
      <div class="contact">
          <p style="font-size:18px;font-weight:700;">常用车辆</p>
          <router-link class="mui-tab-item" to='/vehicledetail'>
          <div>
              <img src="../../assets/image/mine/button-加号@3x.png" alt="">
          </div>
          </router-link>
      </div>

      <div class="contact-mes">
          <div style="width:10%">
              <img src="../../assets/image/mine/button-减号@3x.png" alt="">
          </div>
          <div style="width:85%;line-height:15px;margin-top:0.8rem">
              <p>所有人：晴天</p>
              <p>车牌号码：沪A D0000</p>
          </div>
          <router-link class="mui-tab-item" to='/vehicledetail'>
          <div>
              <img src="../../assets/image/mine/icon-edit@3x.png" alt="">
          </div>
          </router-link>
      </div>
      <div class="contact-mes">
          <div style="width:10%">
              <img src="../../assets/image/mine/button-减号@3x.png" alt="">
          </div>
          <div style="width:85%;line-height:15px;margin-top:0.8rem">
              <p>所有人：晴天</p>
              <p>车牌号码：沪A D0000</p>
          </div>
          <div>
              <img src="../../assets/image/mine/icon-edit@3x.png" alt="">
          </div>
      </div>
  </div>
</template>
<style scoped>
.contact{
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    padding: 0 5%;
}
.contact img{
    width: 20px;
}
.contact-mes{
    background: #fff;
    display: flex;
     padding: 0 5%;
     margin-top: 5px;
     height: 70px;
     line-height: 70px;
     vertical-align: middle;
}
.contact-mes img{
    width:20px;
    vertical-align: middle;
}
</style>

