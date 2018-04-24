<template>
  <div>
    <!-- picture -->
    <div class="banner">
      <img src="../../assets/image/product/banner-空降骑士@3x.png" alt="">
    </div>
    <!-- nav -->
    <div class="nav-word">
      <p>单人短期直升机院前急救权益</p>
      <div class="tips">
        <div class="tips-bor" style="margin-left:0">两天起购</div>
        <div class="tips-bor">日期自定义</div>
        <div class="tips-bor">连续购买满15天享8折优惠</div>
      </div>
      <div class="nav-text">户外徒步，独自旅行，商务出差…随心所欲却不小心遭遇突发意外？？？ 别担心！你的飞行保镖已上线！第一时间为你出动直升机紧急医疗救援，争分夺秒赶来你身边！同时还有地面救护车随时待命，双重应急方案上天入地守护你！即日起，还可为你的小伙伴雇佣飞行保镖哦！</div>
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
      </div>
      <!-- 日期 -->
      <div style="display:flex;margin-top:10px">
        <p style="width:50%">生效日期</p>
        <p>失效日期</p>
      </div>
      <div class="picker">
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0" @click="openPicker()">{{pickerStart}}</div>
          <mt-datetime-picker ref="picker" v-model="pickerVisible" :startDate='startDate' :endDate='endDate' type="date" @confirm="handleConfirm"
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
          <img style="width:14px;position: absolute;right: 8vw;top: 50%;transform: translateY(-50%);" class="date-icon" src="../../assets/image/product/icon-calendar@3x.png"
            alt="">
        </div>
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0;" @click="twoPicker()">{{pickerEnd}}</div>
          <mt-datetime-picker ref="pickers" v-model="Visible" :startDate='startDates' :endDate='endDate' type="date" @confirm="confirm "
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
          <img style="width:14px;position: absolute;right: 8vw;top: 50%;transform: translateY(-50%);" class="date-icon" src="../../assets/image/product/icon-calendar@3x.png"
            alt="">
        </div>
      </div>
      <!-- 加减号 -->
      <div class="num">
        <p>权益人数</p>
        <div class='wrapper'>
          <div class='box minus' @click='minus' ref='minus'>-</div>
          <span class='count'>{{ count }}</span>
          <div class='box add' @click='add'>+</div>
        </div>
      </div>
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
      <div @click="showToggle4" class="notice-part">
        <p>免责申明</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow4" style="padding:0 20px;border-bottom:1px dashed #ccc">
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
      <p>合计：￥{{price||10}}</p>
      <p class="payment-buy" @click="buy()">立即购买</p>
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
  import Check from '@/util/checkIDAuth'
  export default {
    data() {
      return {
        pickerVisible: '',
        Visible: '',
        count: 1,
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 90),
        startDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        startDates: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 2),
        pickerStart: '请选择生效日期',
        pickerEnd: '请选择失效日期',
        price: '',
        resultdate: '',
        isShow1: false,
        isShow2: false,
        isShow3: false,
        isShow4: false,
      }
    },
    created() {
      var id = 'B'
      var url = `wechat/package/queryPackageById?id=${id}`
      this.$http.get(url).then(data => {
        console.log(data)
        this.specifics = JSON.parse(data.data.payload.specifics)
        console.log(this.specifics)
        this.one = this.specifics.main.price
        this.discount = this.specifics.main.discount

      })
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
      openPicker() {
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
        this.resultdate = differenceInDays(this.Visible, this.pickerVisible) + 1
        this.price = this.resultdate * this.one
        console.log(this.resultdate)
      },
      minus() {
        if (this.count === 1) {
          return
        }
        this.count--
      },
      add() {
        if (this.count < 10) {
          this.count++
        }
      },
      _changeNum() {
        if (this.count < 1) {
          this.count = 1
        }
      },
      buy: function () {
        var url = location.hash.slice(1)
        Check(url).then(res => {
          this.priceinfo = {}
          this.priceinfo.pickerVisible = this.pickerVisible
          this.priceinfo.pickerEnd = this.pickerEnd
          this.priceinfo.count = this.count
          this.priceinfo.price = this.price
          if (this.pickerEnd == '请选择失效日期' || this.pickerStart == '请选择生效日期') {
            alert('请选择生效失效日期')
            return
          } else {
            window.sessionStorage.setItem('priceinfo', JSON.stringify(this.priceinfo))
            this.$router.push('/guarantee')
          }
        })

      }
    },
    watch: {
      count(newVal) {
        if (this.resultdate >= 15) {
          this.price = this.one * newVal * this.resultdate * this.discount
        } else {
          this.price = this.one * newVal * this.resultdate
        }
      },
      resultdate(newVal) {
        if (newVal >= 15) {
          this.price = this.one * newVal * this.discount * this.count
        } else {
          this.price = this.one * newVal * this.count
        }
      }
    }
  }

</script>
