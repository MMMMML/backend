<template>
  <div>
    <!-- picture -->
    <div class="banner">
      <img src="../../assets/image/product/banner-皇家护卫@3x.png" alt="">
    </div>
    <!-- nav -->
    <div class="nav-word">
      <p>家庭全年综合救援权益</p>
      <div class="tips">
        <div class="tips-bor" style="margin-left:0">全年守护</div>
        <div class="tips-bor">家庭专享</div>
        <div class="tips-bor">赠道路救援</div>
        <div class="tips-bor">蹭代步车服务</div>
      </div>
      <div class="nav-text">幸福没有终点，守护永不停歇，一个人坚强，两个人成长，一家人平安才是生命中最大的幸运！ 今天起，你的私人皇家护卫队已经整装待发，肩负荣誉使命，为你和你的家人提供至高生命保障。 更有家庭专享的全年免费道路救援和代步车服务，全家出行没烦恼，沿途风景无限好！</div>
    </div>

    <!-- privilege  -->
    <div class="privilege">
      <p>专属特权</p>
      <div class="privilege-icon">
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-helicopter.png" alt="">
          <p>直升机院前急救</p>
        </div>
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-call.png" alt="">
          <p>120协调</p>
        </div>
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-stretcher.png" alt="">
          <p>医疗转运9折</p>
        </div>
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-truck.png" alt="">
          <p>道路救援</p>
        </div>
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-car.png" alt="">
          <p>代步车</p>
        </div>
      </div>

      <mt-radio v-model="values" :options="options">
      </mt-radio>

      <div>

      </div>
    </div>
    <!--文本  -->
    <div class="notice">
      <div class="notice-part" @click="showToggle1">
        <p>权益人须知</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow1" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>



      <div class="notice-part" @click="showToggle2">
        <p>直升机救援服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow2" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定1</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>
      <div class="notice-part" @click="showToggle3">
        <p>地面120服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow3" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定3</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>
      <div class="notice-part" @click="showToggle4">
        <p>道路救援服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow4" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定3</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>
      <div class="notice-part" @click="showToggle5">
        <p>代步车服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow5" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定3</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>
      <div @click="showToggle6" class="notice-part">
        <p>免责申明</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow6" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">权益人限定4</p>
        <p>中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益车辆要求</p>
        <p>9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆</p>
        <p class="title-icon">权益有效期</p>
        <p>有效期为所选起始日起的连续7天</p>
        <p class="title-icon"> 价格说明</p>
        <p>【基础99元】包含一位权益人、一辆权益车辆有效期内的直升机院前急救、道路救援和代步车服务费用</p>
        <p>【附加35元】每增加1位权益人需额外支付7天直升机院前急救服务费用</p>
        <p>【每次呼叫1元】实际发生直升机院前急救时，权益人在有效期内每呼叫一次需支付1元呼叫调度费</p>
        <p class="title-icon">服务热线</p>
        <p> 400-111-9299</p>
      </div>
      <div class="notice-logo">
        <img src='../../assets/image/product/icon_logo_color.png' alt="">
      </div>
    </div>

    <!-- 支付 -->
    <div class="payment">
      <p>合计：￥{{price}}</p>
      <p class="payment-buy" @click="buy()">立即购买</p>
    </div>
  </div>
</template>
<style scoped lang='less'>
  .mint-radiolist {
    display: flex;
    .mint-cell-wrapper {
      padding: 0 !important;
      font-size: 12px !important;
    }
  }

  .mint-cell {
    width: 33.33%;
  }

  .mint-radiolist-label {
    padding: 0;
  }

  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .nav-word {
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    margin-top: -4px;
    p {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 700;
    }
    .tips {
      display: flex;
      .tips-bor {
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 5px;
        margin-left: 5px;
        padding: 2px 5px;
      }

    }
    .nav-text {
      font-size: 14px;
      margin-top: 10px;
      color: #4B4B4B;
    }
  }

  .privilege {
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 10px 20px;
    p {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 700;
    }
    .privilege-icon {
      display: flex;
      flex-flow: row wrap;
      .privilege-spuare {
        text-align: center;
        width: 25%;
        p {
          font-size: 12px;
          font-weight: 100;

        }
      }
    }
    .picker {
      display: flex;
      .datepicker {
        width: 90%;
        border: 1px solid #ccc;
        height: 35px;
        margin-left: 5%;
        border-radius: 10px;
        font-size: 3vw;
        line-height: 35px;
        padding-left: 5px;
      }
    }
    .num {
      padding: 20px 15px 0 0;
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 5px;
        .box {
          width: 40px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 16px;
          background: #eee;
          font-weight: 700;
          color: #aaa;
        }
        .count {
          height: 35px;
          width: 50px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          border: 0;
          background: #eee;
          margin: 0 6px;
        }
        .cue {
          color: black;
          line-height: 30px;
          margin-left: 20px;
          letter-spacing: 1px;
        }
      }
    }

  }

  .notice {
    background: #fff;
    width: 100%;
    height: 100%;
    .notice-part {
      height: 50px;
      line-height: 35px;
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      img {
        width: 12px;
        height: 8px;
      }
    }
    .notice-logo {
      text-align: center;
      padding: 40px;
      margin-top: 10px;
    }
    .title-icon {
      font-size: 14px;
      color: #4B4B4B;
      font-weight: 700;
      margin-bottom: 0;
      margin-top: 10px;
    }
  }

  .payment {
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 50px;
    padding-left: 20px;
    .payment-buy {
      height: 100%;
      width: 100px;
      color: white;
      line-height: 50px;
      background: red;
      text-align: center;
    }
  }

</style>
<script>
  import {
    differenceInDays
  } from 'date-fns'
  export default {
    data() {
      return {
        values: '1',
        isShow1: false,
        isShow2: false,
        isShow3: false,
        isShow4: false,
        isShow5: false,
        isShow6: false,
        options: '',
        one:'',
        price:999,
        addPrice:''


      }
    },
    created() {
       this.options = [{
            label: '2大1小',
            value: '1'
          },
          {
            label: '1大2小',
            value: '2'
          },
          {
            label: '2大2小',
            value: '3'
          }
        ];

      var id = 'E'
      var url = `wechat/package/queryPackageById?id=${id}`
      this.$http.get(url).then(data => {
        console.log(data)
        this.specifics = JSON.parse(data.data.payload.specifics)
        console.log(this.specifics)
        this.one = this.specifics.main.price
        this.addPrice = this.specifics.main.addPrice
        // this.discount = this.specifics.main.discount
       

      })
    },
    watch:{
      values(newVal, oldVal){
        if(newVal==3){
        this.price = this.one +this.addPrice
        console.log(newVal)
      }else{
        this.price = this.one
      }
      }
      
      
    },
    methods: {
      showToggle1: function () {
        this.isShow1 = !this.isShow1
      },
      showToggle2: function () {
        this.isShow2 = !this.isShow2
      },
      showToggle3: function () {
        this.isShow3 = !this.isShow3
      },
      showToggle4: function () {
        this.isShow4 = !this.isShow4
      },
      showToggle5: function () {
        this.isShow5 = !this.isShow5
      },
      showToggle6: function () {
        this.isShow6 = !this.isShow6
      },
     
      confirm: function (c) {
        // this.$refs.pickers.close();
        // this.pickerEnd = this.Visible = this.formatDate(c)
        // // 用户选择了几天
        // // console.log(this.)
        // this.resultdate = differenceInDays(this.Visible, this.pickerVisible) + 1
        // this.price = this.resultdate * this.one
        // console.log(this.resultdate)
      },
      buy:function(){
        window.sessionStorage.setItem('type',this.values)
        window.sessionStorage.setItem('pirce',this.price)
        this.$router.push('/protectdetail')
      }
    },

  }

</script>
