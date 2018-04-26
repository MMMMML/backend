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
    <!--文本  -->
    <div class="notice">
      <div class="notice-part" @click="showItem(0)">
        <p>权益人须知</p>
        <img src="../../assets/image/mine/Chevron@3x.png">
      </div>
        <!-- 隐藏的文本内容 -->
      <div v-show="show[0]" style="padding:0 20px;border-bottom:1px dashed #ccc">
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
      <div class="notice-part" @click="showItem(1)"> 
        <p>直升机救援服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div v-show='show[1]'>
        <img src="../../assets/image/product/biao1.png" alt="" style="width:100px;height:100px;">
        <img src="../../assets/image/product/biao2.png" alt="" style="width:100px;height:100px;">
        <img src="../../assets/image/product/biao3.png" alt=""  style="width:100px;height:100px;">
      </div>
      <div class="notice-part" @click="showItem(2)">
        <p>地面120服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div v-show="show[2]" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">【权益说明】</p>
        <p >空降联盟为权益人提供地面救护车协调服务</p>
        <p class="title-icon">【服务内容】</p>
        <p >1、在权益人符合院前救援服务范围的情况下，如因客观原因不适航而无法出动直升机，或必须联合120急救中心开展空地联运时，空降联盟将提供地面救护车协调服务，并承担相应的救护车费用
            2、在权益人不符合院前救援服务范围的情况下，空降联盟将提供地面救护车协调服务，但由此产生的救援费用由权益人自行承担
        </p>
      </div>
      <div class="notice-part" @click="showItem(3)">
        <p>道路救援服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div v-show="show[3]" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">【权益说明】</p>
        <p>成为空降联盟道路救援权益人后，您所绑定的车辆可获得以下权益：</p>
        <p>1、“道路救援服务”包括搭电、换胎、送水、救援拖车（非事故及高速）、困境救援（一般救援及吊装救援）等全国范围内的道路救援服务（港澳台地区除外）；不包括交通管制路段，主干道中、城市高架路桥、地下车库（限高）或禁止实施汽车道路救援服务的路段。</p>
        <p>2、被服务车辆限9座(含)以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆。摩托车、客车、公共车辆、出租车、货车、卡车、重型运输车以及用于出租和营运的车辆、改装车、竞技车等不在本服务范围内。</p>
        <p style="color:red">3、非事故车辆故障定义：“非单方或双方事故，未涉及保险理赔之一般机动车辆故障”</p>
      </div>
      <div class="notice-part">
        <p>代步车服务</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div class="notice-part" @click="showItem(4)">
        <p>免责申明</p>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <div v-show="show[4]" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">一、产品有效期</p>
        <p>1、短期权益用户：用户可自行选择权益生效日期，确定权益生效日期后，根据用户的购买服务周期确认权益资格的有效期时间范围</p>
        <p>2、年度权益用户：用户购买服务产品后次日零时正式生效，有效期为生效之日起一年</p>
        <p class="title-icon">二、救援服务流程</p>
        <p>
          用户在需要救援时可拨打空降联盟救援服务热线( 400-111-9299)寻求帮助
          1、用户拨打专属服务热线提出救援服务请求
          2、客服沟通并确认救援信息（包括被救援对象姓名、突发病症或伤情、事故准确地点）等资料（自费用户还需确认案件的费用标准及支付方式等）；为保证救援服务正确且高效地完成， 用户需积极配合空降联盟客服中心沟通工作
          3、确认用户信息后，空降联盟救援中心将立即实施救援行动，救援工作按照标准流程执行
          4、服务结束后，客服中心将致电客户，确认服务是否结束，并对客户进行回访
        </p>
        <p class="title-icon">三、救援服务注意事项</p>
        <p>
          1、	用户致电空降联盟服务热线提出服务需求并获得确认后10分钟内，若客户要求取消服务，空降联盟可为用户免费取消该次服务
          2、	用户应谨慎选择拨打救援服务热线，如因故意或重大过失造成服务资源浪费，空降联盟有权对该用户账号进行暂停服务处理，并保留追究法律责任的权利
          3、	空降联盟救援服务人员或指定120车辆到达服务现场后，用户未在现场且未收到用户取消服务的请求，则该次服务将被计入有效服务；空降联盟有权对用户进行回访了解原因，如出现恶意谎报救援行为，空降联盟有权对该用户账号中所有权益进行暂停服务处理，并保留追究法律责任的权利
          4、	客户车辆故障发生地区属于交管部门管辖范围（如高架等），且必须由交管单位指定的服务厂商进行拖吊作业，施救人员及救援车辆将于就近位置提供接车服务；交管单位指定的服务厂商拖吊服务需由客户另行与该服务厂商确认费用
          5、	由于特殊原因造成直升机无法实施救援时（相关情况请参考直升机救援服务条款），空降联盟将协调120进行地面救援
          6、	本服务属于出行救援权益，请用户确保信息填写正确完整、如信息填写有误或需变更，请及时致电空降联盟服务热线进行修改（400-111-9299），因用户原因导致信息填写错误或未及时申请变更造成救援延误，空降联盟将不负相关责任
        </p>
        <p class="title-icon">四、服务对象</p>
        <p> 空降联盟为目前已部署救援直升机的省市范围内的用户和车辆提供救援保障服务，包括该范围内购买空降联盟服务产品的中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士（空降联盟救援已覆盖区域：辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南23个省市）    </p>
        <p class="title-icon">五、产品费用</p>
        <p>
          1、在符合产品服务标准且在权益有效期内的用户，每次只需支付一元调度费即可呼救直升机救援，当申请道路救援或其他服务时，用户无需支付额外费用
          2、用户车辆故障发生地区属于交管部门管辖范围（如高架等），且必须由交管单位指定的服务厂商进行拖吊作业，相关费用由用户与该服务厂商进行结算
          3、用户所需服务范围如超过所购买产品规定的服务范围，相关费用按照标准进行收费（标准费用见各项服务相关条款）
          4、用户购买相关权益后，有权利不接受产品服务，并可申请取消或终止权益资格，但已支付的权益产品费用将不会获得返还

        </p>
        <p class="title-icon">六、产品服务商及标准费用</p>
        <p>
            1、空降联盟作为综合性救援平台，提供各种不同类型的救援服务产品，不同的救援服务产品由不同服务商提供，如需了解服务商详细信息请致电联系
            2、产品服务标准费用
          （1）直升机院前救援费用：综合费用人民币20万—30万/每次，根据机型不同费用有所不同
          （2）直升机转运费用：人民币7万/每小时，飞行小时数是指直升机实际飞行时间，自旋翼转动起至旋翼停止转动止。起步计费1小时，超出部分以0.5小时为单位计费，具体计费细则以转运前签署的《直升机医疗转运服务合同》为准
          （3）道路救援服务费用：搭电、换胎、送水等轻救援单项价格人民币200元起， 一般困境救援人民币500元起，如需吊车人民币1800元起；拖车起步价人民币200-500元（包含15Km），地库拖车人民币400-700元，如需架小轮服务，每小轮人民币80元；道路救援费用根据事发地点及救援难度会进行调整 （4）出险代步车服务费用：以车辆提供服务商的门店/官网公示价为准，因地域限制，如需更多资讯，请致电空降联盟服务热线（400-111-9299）
        </p>
        <p class="title-icon">七、免责条款</p>
        <p>
          1、由于战争、暴乱、叛乱、政治示威、抢劫、罢工、军事或反恐行动，地震、气候反常等情况造成救援无法进行
          2、任何生物、化学、原子武器，原子装置造成的爆炸、辐射、灼伤或污染造成救援无法进行
        </p>
        <p class="title-icon">八、追责条款</p>
        <p>
          救援是稀缺社会资源，若权益人有谎报或故意夸大病症，恶意扰乱救援秩序的行为，空降联盟将追究由此造成的一切经济损失，并保留进一步追究其他法律责任的权利
        </p>
      </div>
      <div class="notice-logo">
        <img src='../../assets/image/product/icon_logo_color.png' alt="">
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
              tip: '直升机院前急救',
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
              tip: '直升机院前急救',
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
        id: '',
        car: '',
        activePro: false
      }
    },
    created() {
      this.id = this.$route.query.id || 'A'
      this._getProductData()
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
  }
</style>
