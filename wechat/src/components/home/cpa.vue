<template>
  <div>
    <!-- picture -->
    <div class="banner">
      <img src="../../assets/image/product/banner4.png" alt="">
    </div>
    <!-- nav -->
    <div class="nav-word">
      <p>7天自驾综合救援权益</p>
      <div class="tips">
        <div class="tips-bor" style="margin-left:0">日期自定义</div>
        <div class="tips-bor">一人一车</div>
        <div class="tips-bor">可增加同行人</div>
        <div class="tips-bor">私家车专享</div>
      </div>
      <div class="nav-text"> 一个人看风景，一群人去狂欢，自驾旅途的无限美好怎能因一点“意外”就戛然而止？！爱车突发状况需要帮助？急需代步车继续旅程？赶快带上你的急速全明星，帮你解决各种小意外，更有直升机紧急医疗救援全程为你保驾护航！还犹豫什么？记得给同行伙伴也送上一份贴心直升机救援守护哦！</div>
    </div>

    <!-- privilege  -->
    <div class="privilege">
      <p>专属特权</p>
      <div class="privilege-icon">
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-helicopter.png" alt="">
          <p>直升机院前急救</p>
        </div>
        <div class="privilege-spuare" style="margin-left:10px">
          <img src="../../assets/image/product/icon-call.png" alt="">
          <p>120协调</p>
        </div>
        <div class="privilege-spuare" style="margin-left:30px">
          <img src="../../assets/image/product/icon-truck.png" alt="">
          <p>道路救援</p>
        </div>
        <div class="privilege-spuare" style="margin-left:40px">
          <img src="../../assets/image/product/icon-car.png" alt="">
          <p>代步车</p>
        </div>
      </div>
      <!-- 日期 -->
             <p >生效日期</p>
      <div class="picker">
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0" @click="openPicker()">{{pickerStart}}</div>
          <mt-datetime-picker ref="picker" v-model="pickerVisible" :startDate='startDate' :endDate='endDate' type="date" @confirm="handleConfirm"
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
          <img style="width:14px;position: absolute;margin-left:100px;top: 50%;transform: translateY(-50%);" class="date-icon" src="../../assets/image/product/icon-calendar@3x.png"
            alt="">
        </div>
        
      </div>
      <!-- 加减号 -->
      <div class="num">
        <p>权益人数</p> <span style="margin-top:-30px;display:block;margin-left:70px;color:red;font-weight:bolder">￥{{main.addPrice || 0 }}/人</span> 
        <div class='wrapper'>
          <div class='box minus' v-on:click='min' >-</div>
          <span class='count'>{{ counter }}</span>
          <div class='box add' v-on:click='add'>+</div>
        </div>
      </div>
      <div>

      </div>
    </div>
    <!--文本  -->
    <div class="notice">
        <div class="notice-part" @click="showpage1">
            <p>权益人须知</p>
            <img src="../../assets/image/mine/Chevron@3x.png" alt="" >
        </div>
              <!-- 隐藏的文本内容 -->
                <div v-show="show1" style="padding:0 20px;border-bottom:1px dashed #ccc">
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


         <div class="notice-part" @click="showpage2"> 
            <p>直升机救援服务</p>
            <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
          <div v-show='show2'>
                <img src="../../assets/image/product/biao1.png" alt="" style="width:100px;height:100px;">
                <img src="../../assets/image/product/biao2.png" alt="" style="width:100px;height:100px;">
                <img src="../../assets/image/product/biao3.png" alt=""  style="width:100px;height:100px;">
          </div>

         <div class="notice-part" @click="showpage3">
            <p>地面120服务</p>
            <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
        <div v-show="show3">
              <p class="title-icon">【权益说明】</p>
              <p class="title-icon">空降联盟为权益人提供地面救护车协调服务</p>
              <p class="title-icon">【服务内容】</p>
              <p class="title-icon">1、在权益人符合院前救援服务范围的情况下，如因客观原因不适航而无法出动直升机，或必须联合120急救中心开展空地联运时，空降联盟将提供地面救护车协调服务，并承担相应的救护车费用
2、在权益人不符合院前救援服务范围的情况下，空降联盟将提供地面救护车协调服务，但由此产生的救援费用由权益人自行承担
</p>
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

    <!-- 支付 -->
    <div class="payment">
        <p style='font-size:20px;color:red;font-weight:bolder;'>合计：￥{{ main.price + counter*main.addPrice || 0}}</p>
        <p class="payment-buy" v-on:click='buy'>立即购买</p>
    </div>
  </div>
</template>
<style scoped lang='less'>
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
      .privilege-spuare {
        text-align: center;
        p {
          font-size: 12px;
          font-weight: 100;

        }
      }
    }
    .picker {
      display: flex;
      .datepicker {
        width: 40%;
        border: 1px solid #ccc;
        height: 30px;
        margin-left: 5%;
        border-radius: 10px;
      }
    }
    .num {
      padding: 10px 15px;
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 5px;
        .box {
          width: 30px;
          height: 30px;
          border: 1px solid #999;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
        }
        .count {
          height: 30px;
          width: 48px;
          line-height: 30px;
          text-align: center;
          font-size: 14px;
          border: 0;
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
  .notice{
        background: #fff;
        width: 100%;
        height: 100%;
        .notice-part{
            height: 40px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            img{
                width: 12px;
            }
        }
        .notice-logo{
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

    .payment{
        height: 50px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        line-height: 50px;
    .payment-buy{
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
import {differenceInDays} from 'date-fns'
import Check from '@/util/checkIDAuth'
  export default {
    data() {
      return {
        show1:false,
        show2:false,
        show3:false,
        pickerVisible: '',
        Visible: '',
        count: 0,
        counter:0,
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 90),
        startDate:new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        pickerEnd: '',
        price:'',
        resultdate: '',
        main: '',
        pickerStart: '请选择日期',
      }
    },
    created(){
        this.$http.get('wechat/package/queryPackageById?id=A').then(response => {
               console.log(response.data);
               var content = response.data.payload.specifics;
                // console.log(content);
               const x = JSON.parse(content);
                 console.log(x);
            this.main = x.main;
            console.log(this.count)
        })
        
    },
    methods: {
        add: function() {
            this.counter = parseInt(this.counter) + 1;
        },
    min: function(){
            if(this.counter > 0){
                this.counter = parseInt(this.counter) - 1;
            }
        },
      showpage1:function(){
          this.show1 = !this.show1;
      },
      showpage2:function(){
          this.show2=!this.show2;
      },
      showpage3:function(){
          this.show3=!this.show3;
      },
      openPicker:function() {
        this.$refs.picker.open();
      },
      twoPicker() {
        this.$refs.pickers.open();
      },
      formatDate(date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '-' + m + '-' + d
      },
      
      handleConfirm: function (v) {
        this.$refs.picker.close();
        this.pickerStart = this.pickerVisible = this.formatDate(v)
        console.log(this.pickerVisible)
      },
      confirm: function (c) {
        this.$refs.pickers.close();
        this.pickerEnd = this.Visible = this.formatDate(c)
        // 用户选择了几天
        // console.log(this.)
        this.resultdate  = differenceInDays(this.Visible ,this.pickerVisible) + 1
        this.price = this.resultdate * this.one 
        console.log(this.resultdate)
      },
      _changeNum() {
        if (this.count < 1) {
          this.count = 1
        }
      },
      buy:function(){
        this.priceinfo = {}
        this.priceinfo.pickerVisible = this.pickerVisible
         if(this.pickerStart=='请选择日期'){
          alert('请选择日期')
          return  
        }
        Check().then(res => {
            console.log('success');
            this.$router.push(`/pay?packageId=A&counter=${this.counter}`)
        })
      }
    },
    watch: {
        count(newVal) {
            if(this.resultdate >= 15){
               this.price = this.one * newVal * this.resultdate *this.discount
            } else {
                this.price = this.one * newVal * this.resultdate
            }
        },
        resultdate(newVal) {
            if(newVal >= 15){
               this.price = this.one * newVal *this.discount * this.count 
            } else {
                this.price = this.one * newVal * this.count
            }
        }
    }
  }

</script>
