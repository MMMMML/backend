<template>
  <div class="container">
    <div>
      <div class="cloud">
      <img src="../../assets/image/evcard/2.png" alt="">
      <p>活动规则</p>
    </div>
    <div class="nav" style="position: relative;">
       <div class="line">
         <p>【权益内容】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>单人5日直升机紧急医疗救援和地面救护车协调权益</span>
       </div>
       <div class="line">
         <p>【权益对象】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>未在空降联盟平台领取或购买过权益的新用户</span>
       </div>
       <div class="line">
         <p>【权益领取时间】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>2018年5月18日-2018年5月20日</span>
       </div>
       <div class="line">
         <p>【权益保障时间】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>2018年5月19日-2018年6月30日内任意连续5天</span>
       </div>
       <div class="line">
         <p>【权益数量】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>5000份权益领完即止（每个证件号限绑定一份）</span>
       </div>
       <div style="position: absolute;top: -10vh;left: -4vw;">
         <img style="width:73%" src="../../assets/image/evcard/爱心.png" alt="">
       </div>
    </div>
    </div>
    <div style="position: relative; ">
      <img style="width: 15%;position: absolute;top: -2vh;right: 0;z-index: 1;" src="../../assets/image/evcard/heart.png" alt="">
    </div>
    <div>
      <div class="cloud" style="padding-top:2vh">
      <img style="width:34%" src="../../assets/image/evcard/2.png" alt="">
      <p>权益人须知</p>
    </div>
    <div class="nav"  style="position: relative;">
       <div class="line">
         <p>【空降热线】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>谨记空降联盟咨询/救援热线<span style="color:#f44975">021-60554929</span></span>
       </div>
       <div class="line">
         <p>【服务范围】</p>
          <img src="../../assets/image/evcard/3.png" alt="">
          <span>覆盖全国23个省市：辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南</span>
       </div>
       <div style="position: absolute;top: -4vh;left:2vw;">
         <img style="width:60%" src="../../assets/image/evcard/4.png" alt="">
       </div>
    </div>
    </div>
    <div @click="sure()">
      <img style="width:100%" src="../../assets/image/evcard/btn.png" alt="">
    </div>
  </div>
</template>
<style scoped lang='less'>
.container{
background: url(../../assets/image/evcard/banner.jpg)  no-repeat;
// width: 100vw;
// height: 100vh;
background-size:100% auto;
.cloud{
  position: relative;
  padding-top: 122%;
  padding-left: 10vw;
  img{
    width: 30%;
  }
   p{
      position: absolute;
      bottom: 0.5vh;
      left: 15vw;
      color: #f44975;
      font-size: 2.5vh;
    }
}
.nav{
background: white;
width: 90vw;
padding: 0 15px;
margin: 0 auto;
border: 1px solid #dcdcdc;
.line{
  margin: 10px 0;
  p{
    color: black;
    font-size: 15px;
  }
  span{
    font-size: 14px;
    color: #636363;
  }
  img{
  width:4%;
  vertical-align: middle;
}
}

}
}
</style>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    sure:function(){
      this.$router.push('/draw')
    }
  }
}
</script>

