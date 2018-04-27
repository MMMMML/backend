<template>
  <div class='container'>
    <div class="top">
      <div class="banner">
        <img :src="productInfo.url">
      </div>
      <div class="nav-word">
        <h3>{{ productInfo.title }}</h3>
        <div class="tips">
          <div class="tips-item" v-for='tip of productInfo.tips' :key='tip'>{{ tip }}</div>
        </div>
        <div class="nav-text">{{ productInfo.explain }}</div>
      </div>
    </div>

    <!-- privilege  -->
    <div class="privilege">
      <div class="exclusive">
        <h3>专属特权</h3>
        <div class="privilege-icon">
          <div class="privilege-spuare" v-for='item of productInfo.privilege.base' :key='item.url'>
            <img :src='item.url'>
            <p>{{ item.tip }}</p>
          </div>
        </div>
      </div>
      <!-- 日期 -->
      <div class="date" v-if='id === "A"'>
        <h3>生效日期</h3>
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
      </div>
      <div class="nums" v-if='id === "A"'>
        <h3>权益人数<span style='color: red;margin-left: 10px;'>￥{{main.addPrice || 0 }} / 人</span></h3>
        <div class='wrapper'>
          <div class='box minus' @click='min'>-</div>
          <span class='count'>{{ counter }}</span>
          <div class='box add' @click='add'>+</div>
        </div>
      </div>
      <div class="incre" v-if='id === "C"'>
        <h3>增值权益</h3>
        <div class="incre_content">
          <div class="price" @click='activePro = !activePro'>
            <p class='radio' v-show='!activePro'></p>
            <img class='radio' v-show='activePro' src="../../assets/image/product/icon-选中.png" alt="">
            <span>￥79</span>
          </div>
          <div class="icon_box" v-show='!activePro' v-for='item of productInfo.privilege.pro.init' :key='item.url'>
            <img :src='item.url'>
            <p>{{ item.tip }}</p>
          </div>
          <div class="icon_box" v-show='activePro' v-for='item of productInfo.privilege.pro.active' :key='item.url'>
            <img :src='item.url'>
            <p>{{ item.tip }}</p>
          </div>
        </div>
      </div>
    </div>
    <pay-btn :total='price' @buy='handleBuy'></pay-btn>
  </div>
</template>
<script>
import { differenceInDays, format } from 'date-fns'
import PayBtn from '@/base/pay_bottom_btn'
import Check from '@/util/checkIDAuth'
import banner4 from '@/assets/image/product/banner4.png'
import banner1 from '@/assets/image/product/banner-空降骑士.png'
import helicopter from '@/assets/image/product/icon-helicopter.png'
import call from '@/assets/image/product/icon-call.png'
import truck from '@/assets/image/product/icon-truck.png'
import trans from '@/assets/image/product/icon-stretcher.png'
import car from '@/assets/image/product/icon-car.png'
import carNo from '@/assets/image/product/icon-car-no.png'
import truckNo from '@/assets/image/product/icon-truck-no.png'

// import duan1 from '@/assets/image/new_product/small_1.png'
// import duan2 from '@/assets/image/new_product/small_2.png'
// import duan3 from '@/assets/image/new_product/small_3.png'
// import chang1 from '@/assets/image/new_product/lang_1.png'
// import chang2 from '@/assets/image/new_product/lang_2.png'
// import chang3 from '@/assets/image/new_product/lang_3.png'
// import chang4 from '@/assets/image/new_product/lang_4.png'
// import chang5 from '@/assets/image/new_product/lang_5.png'
// import chang6 from '@/assets/image/new_product/lang_6.png'
import axios from 'axios'
  export default {
    data() {
      return {
        show: [false, false, false, false, false],
        pickerVisible: '',
        counter: 1,
        startDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 83),
        resultdate: '',
        main: '',
        pickerStart: '请选择日期',
        pickerEnd: '',
        allInfo: [{
          url: banner4,
          title: '7天自驾综合救援权益',
          tips: ['一人一车', '日期自定义', '私家车专享', '可增加同行人'],
          explain: '一个人看风景，一群人去狂欢，自驾旅途的无限美好怎能因一点“意外”就戛然而止？！爱车突发状况需要帮助？急需代步车继续旅程？赶快带上你的急速全明星，帮你解决各种小意外，更有直升机紧急医疗救援全程为你保驾护航！还犹豫什么？记得给同行伙伴也送上一份贴心直升机救援守护哦！',
          privilege: {
            base: [{
              tip: '直升机院前救援',
              url: helicopter
            }, {
              tip: '120协调',
              url: call
            }, {
              tip: '道路救援',
              url: truck
            }, {
              tip: '代步车',
              url: car
            }]
          }
        }, {
          url: banner1,
          title: '单人全年直升机救援权益',
          tips: ['全年守护', '多项特权', '可享增值服务'],
          explain: '愿生活温柔以待却也难免发生意外？空降骑士驾到，每分每秒如影随形，时刻为你紧急待命！即日起，召唤空降骑士还可私享全年道路救援和出险代步车服务，尽显绅士风度，陪你纵情旅途！',
          privilege: {
            base: [{
              tip: '直升机院前救援',
              url: helicopter
            }, {
              tip: '120协调',
              url: call
            }, {
              tip: '医疗转运9折',
              url: trans
            }],
            pro: {
              init: [{
                tip: '道路救援',
                url: truckNo
              }, {
                tip: '代步车',
                url: carNo
              }],
              active: [{
                tip: '道路救援',
                url: truck
              }, {
                tip: '代步车',
                url: car
              }]
            }  
          }
        }],
        offcial: [],
        id: '',
        car: '',
        activePro: false
      }
    },
    created() {
      this.id = this.$route.query.id || 'A'
      let x = {
        'A': '急速全明星',
        'C': '空降骑士'
      }
      document.title = x[this.id]
      this._getProductData()
      // this._createOffical()
    },
    methods: {
      _getProductData() {
        this.$http.get(`wechat/package/queryPackageById?id=${this.id}`).then(response => {
          let data = response.data.payload
          this.main = JSON.parse(data.specifics).main
        }).catch(e => {
          console.log(e)
        })
      },
      // _createOffical() {
      //   if (this.id === 'A') {
      //     this.offcial.push({
      //       title: '权益人须知',
      //       desc: [{
      //         small_title: '权益人限定',
      //         content: '中国公民（含港澳台地区）或在中国持合法证件的外籍人士'
      //       }, {
      //         small_title: '权益车辆要求',
      //         content: '9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆'
      //       }, {
      //         small_title: '权益有效期',
      //         content: '有效期为所选起始日起的连续7天'
      //       }, {
      //         small_title: '权益覆盖城市',
      //         content: '辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南共23个省市'
      //       }, {
      //         small_title: '价格说明',
      //         content: '【基础99元】<br />包含一位权益人、一辆权益车辆有效期内的直升机院前救援、地面120协调、道路救援和出险代步车服务费用<br />【附加35元】<br />每增加1位权益人需额外支付7天直升机院前救援和地面120协调服务费用</br />【每次呼叫1元】<br />实际发生直升机院前救援时，权益人在有效期内每呼叫一次需支付1元呼叫调度费'
      //       }, {
      //         small_title: '服务热线',
      //         content: '400-111-9299 &nbsp; 021-60554929'
      //       }]
      //     })
      //   } else if (this.id === 'C') {
      //     this.offcial.push({
      //       title: '权益人须知',
      //       desc: [{
      //         small_title: '权益人限定',
      //         content: '中国公民（含港澳台地区）或在中国持合法证件的外籍人士'
      //       }, {
      //         small_title: '权益车辆要求',
      //         content: '9座（含）以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆'
      //       }, {
      //         small_title: '权益覆盖城市',
      //         content: '辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南共23个省市'
      //       }, {
      //         small_title: '价格说明',
      //         content: '<h6>【基础365元】</h6>包含一位权益人在有效期内的直升机院前救援、地面120协调和直升机医疗转运9折权益服务费用<h6>【附加79元】</h6>包含权益人在有效期内的非营运性四轮机动车辆道路救援和出险代步车服务费用<h6>【每次呼叫1元】</h6>实际发生直升机院前救援时，权益人在有效期内每呼叫一次需支付1元呼叫调度费'
      //       }, {
      //         small_title: '服务热线',
      //         content: '400-111-9299 &nbsp; 021-60554929'
      //       }]
      //     })
      //   }
      //   // 短期 or 长期
      //   if (this.id === 'A') {
      //     this.offcial.push({
      //       title: '直升机救援服务',
      //       desc: [duan1, duan2, duan3]
      //     })
      //   } else {
      //     this.offcial.push({
      //       title: '直升机救援服务',
      //       desc: [chang1, chang2, chang3, chang4, chang5, chang6]
      //     })
      //   }
      // },
      add() {
        this.counter < 8 && (this.counter += 1)
      },
      min() {
        this.counter > 1 && (this.counter -= 1)
      },
      showItem(idx) {
        this.show.splice(idx, 1, !this.show[idx])
      },
      openPicker() {
        this.$refs.picker.open()
      },
      handleConfirm(v) {
        this.$refs.picker.close()
        this.pickerStart = this.pickerVisible = format(v, 'YYYY-MM-DD')
      },
      handleBuy() {
        if (this.id === 'A') {
          this.priceinfo = {}
          this.priceinfo.pickerVisible = this.pickerVisible
          if (this.pickerStart=='请选择日期') {
            alert('请选择日期')
            return
          }
        }
        Check().then(res => {
          if (this.id === 'A') {
            this.$router.push(`/pay?packageId=A&counter=${this.counter}&price=${this.price}&benefitEffectTime=${this.pickerStart}`)
          } else if (this.id === 'C') {
            this.$router.push(`/pay?packageId=C&activePro=${this.activePro}&price=${this.price}`)
          }
        })
      }
    },
    computed: {
      price() {
        if (!this.main.price) {
          return 0
        } else {
          if (this.id === 'A') {
            return (100 * this.main.price + (this.counter - 1) * this.main.addPrice * 100) / 100
          } else if (this.id === 'C') {
            return this.activePro ? (this.main.price * 100 + 79 * 100) / 100 : this.main.price
          }
        }
      },
      productInfo() {
        let enums = {
          'A': 0,
          'C': 1
        }
        return this.allInfo[enums[this.id]]
      }
    },
    watch: {
      // counter: {
      //   immediate: true,
      //   handler(newVal) {
      //     console.log(this.main.price)
      //     this.price = 
      //   }
      // }
    },
    components: {
      PayBtn
    }
  }
</script>
<style scoped lang='less'>
  .container {
    width: 100vw;
    min-height: 100vh;
    color: #4B4B4B;
    padding-bottom: 60px;
    .top {
      width: 100%;
      .banner {
        width: 100%;
        height: 56vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nav-word {
        background: #fff;
        width: 100%;
        height: 100%;
        padding: 16px 15px 0 20px;
        h3 {
          font-size: 16px;
          line-height: 25px;
          margin: 0 0 5px 0;
          color: #4B4B4B;
        }
        .tips {
          display: flex;
          .tips-item {
            font-size: 12px;
            color: red;
            border: 1px solid red;
            border-radius: 5px;
            padding: 3px 5px;
            &~.tips-item {
              margin-left: 5px;
            }
          }
        }
        .nav-text {
          font-size: 14px;
          color: #4B4B4B;
          line-height: 20px;
          margin: 8px 0 10px 0;
        }
      }
    }
    .privilege {
      width: 100%;
      height: 100%;
      background: #fff;
      margin-top: 10px;
      padding: 8px 14px;
      h3 {
        line-height: 22px;
        font-size: 16px;
        color: #4B4B4B;
        margin-left: 4px;
        &~h3 {
          margin-top: 10px;
        }
      }
      .privilege-icon {
        width: 100%;
        display: flex;
        align-items: center;
        .privilege-spuare {
          text-align: center;
          width: 25%;
          p {
            margin-top: 2px;
            font-size: 12px;
            white-space: nowrap;
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
          display: flex;
          align-items: center;
          padding-left: 5px;
          font-size: 12px;
        }
      }
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 15px;
        margin-left: 5px;
        .box {
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          background: #eee;
        }
        .count {
          height: 40px;
          width: 48px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          border: 0;
          background: #eee;
          margin: 0 5px;
        }
        .cue {
          color: black;
          line-height: 30px;
          margin-left: 20px;
          letter-spacing: 1px;
        }
      }
      .incre_content {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .price {
          display: flex;
          flex-flow: row nowrap;
          width: 46px;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          margin-top: -20px;
          margin-right: 10px;
          p {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #ccc;
            margin: 0;
          }
          span {
            color: red;
          }
        }
        .icon_box {
          width: 20%;
          text-align: center;
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
        align-items: center;
        padding: 10px 20px;
        img {
          width: 12px;
          height: 8px;
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
        margin-top: 10px;
        margin-bottom: 6px;        
      }
      .showText {
        padding:0 20px;
        border-bottom:1px dashed #ccc;
        img {
          width: 100%;
        }
        .title_normal {
          line-height: 24px;
        }
      }
    }
  }
</style>
