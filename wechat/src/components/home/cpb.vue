<template>
  <div id='cbp'>
    <div class="tab">
      <img src="../../assets/image/home/banner.png" alt="">
    </div>
    <div class="title">
      <p> 双人全年综合救援权益</p>
      <div class="tips">
        <div class="tip1">双人专享</div>
        <div class="tip1">全年守护</div>
        <div class="tip2">赠道路救援</div>
        <div class="tip3">可享增值服务</div>
      </div>
      <div class='word'>
        上辈子一百次的回眸才换来这辈子的一个TA。别再偷偷爱着她！即刻传递你的丘比特之心！意外来临再也不怕！ 爱神丘比特穿越时空，为你和你最爱的人带来一整年的生命守护！现在购买还可获赠双人专享的免费道路救援服务，潇洒出行，一起浪迹天涯为爱出发！
      </div>
    </div>
    <!-- 特权图标 -->
    <div class="tq">
      <p>专属特权</p>
      <div class="tip_img">
        <div class="tg1">
          <img src="../../assets/image/product/icon-helicopter.png" alt="">
          <p>直升机院前急救</p>
        </div>
        <div class="tg2">
          <img src="../../assets/image/product/icon-call.png" alt="">
          <p>120协调</p>
        </div>
        <div class="tg3">
          <img src="../../assets/image/product/icon-stretcher.png" alt="">
          <p>医疗转运9折</p>
        </div>
        <div class="tg4">
          <img src="../../assets/image/product/icon-truck.png" alt="">
          <p>道路救援</p>
        </div>
      </div>
      <!-- 增值权益 -->
      <div class="more">
        <p>增值权益</p>
        <ul class="mo">
          <li>
            <input type='checkbox' v-model="car">
          </li>
          <li> ￥69</li>
        </ul>

        <div class="tg5">
          <img src="../../assets/image/product/icon-car.png" alt="">
          <p>代步车</p>
        </div>
      </div>
    </div>
    <!-- 文本 -->
    <div class="notice">
      <div class="notice-part">
        <p>权益人须知</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part">
        <p>直升机救援服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part">
        <p>地面120服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part">
        <p>道路救援服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part">
        <p>代步车服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part">
        <p>免责申明</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-logo">
        <img src='../../assets/image/product/icon_logo_color.png' alt="">
      </div>
    </div>

    <!-- 付款 -->
    <div class="payment">
      <p style='font-size:20px;color:red;font-weight:bolder;'>合计：￥449</p>
      <p class="payment-buy" v-on:click='buy'>立即购买</p>
    </div>

  </div>
</template>


<script>
  import Check from '@/util/checkIDAuth'
  export default {
    data() {
      return {
        car: '',
      }
    },
    methods: {
      buy: function () {
        Check().then(res => {
          console.log('success');
          console.log(this.car)
          if (this.car == true) {
            this.$router.push(`/payd?packageId=D&`)
          } else {
            this.$router.push(`/payE?packageId=D&`)
          }

        })
      }
    }

  }

</script>


<style scoped>
  .title {
    background-color: #fff;
  }

  .title p {
    margin-left: 20px;
    font-size: 18px;
    color: #4B4B4B;
    font-weight: bolder;
  }

  .tip1 {
    width: 60px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    padding-right: 5px;
    margin-left: 20px;
    border-radius: 4px;
  }

  .tips div:nth-child(2) {
    margin-left: 90px;
    margin-top: -20px;
    border-radius: 4px;
  }

  .tip2 {
    width: 76px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    margin-left: 170px;
    margin-top: -20px;
    padding-right: 5px;
    border-radius: 4px;
  }

  .tip3 {
    width: 86px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    margin-left: 260px;
    margin-top: -20px;
    padding-right: 5px;
    border-radius: 4px;
  }

  .word {
    margin-top: 7px;
    font-size: 14px;
    margin-left: 20px;
    padding-right: 10px;
    color: #4B4B4B;
  }

  .tq {
    margin-top: 10px;
    width: 100%;
    height: 228px;
    background-color: #fff;
  }

  .tq p {
    display: block;
    width: 64px;
    height: 22px;
    font-size: 16px;
    color: #4B4B4B;
    font-weight: bolder;
    margin-left: 10px;
  }

  .tg1 img {
    margin-left: 30px;
  }

  .tg1 p {
    font-size: 12px;
    color: #4B4B4B;
    width: 84px;
  }

  .tg2 {
    margin-left: 100px;
    margin-top: -80px;
  }

  .tg2 img {
    margin-left: 10px;
  }

  .tg2 p {
    font-size: 12px;
    color: #4B4B4B;

  }

  .tg3 {
    margin-left: 190px;
    margin-top: -80px;
  }

  .tg3 p {
    font-size: 12px;
    color: #4B4B4B;
    width: 68px;
    margin-left: -10px;
  }

  .tg4 {
    margin-left: 260px;
    margin-top: -80px;
  }

  .tg4 img {
    margin-left: 16px;
  }

  .tg4 p {
    font-size: 12px;
    color: #4B4B4B;
    width: 68px;
  }

  .mo {
    list-style: none;
  }

  .mo li {
    float: left;
  }

  .mo li div {
    margin-top: 4px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #4B4B4B;
    width: 10px;
    height: 10px;
  }

  .mo li .bgc {
    width: 10px;
    height: 10px;
    margin-top: 4px;
    border-radius: 10px;
    background-color: #f00;
  }

  .tg5 img {
    margin-left: 20px;
    margin-top: -10px;
  }

  .tg5 p {
    margin-left: 106px;
  }




  .notice {
    background: #fff;
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }

  .notice-part {
    height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .notice-part img {
    width: 12px;
  }

  .notice-logo {
    text-align: center;
    padding: 40px;
    margin-top: 10px;
  }

  .payment {
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 50px;
  }

  .payment-buy {
    height: 100%;
    width: 100px;
    color: white;
    line-height: 50px;
    background: red;
    text-align: center;
  }

</style>
