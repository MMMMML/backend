<template>
  <div class="container">
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
        <p> 021-60554929</p>
      </div>



      <div class="notice-part" @click="showToggle2">
        <p>直升机救援服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow2" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">一、权益说明</p>
        <p>1、服务类型： 院前救援服务</p>
        <p>2、服务内容：（1）直升机空中运输（2）空中医疗救护（3）地面救护车协调</p>
        <p>3、权益说明：权益期内，无限次呼叫直升机救援且每次需支付1元呼叫调度费</p>
        <p class="title-icon">二、服务前提</p>
        <p>1、权益人病症符合本手册第四项约定的院前救援适应症 </p>
        <p>2、若地面救援无法及时到达或需要较长等待时间且危及生命安全，经120急救医生或我司授权医生确认后可提供空中紧急救援服务 </p>
        <p>3、气象条件、法律法规、空中管制等客观原因满足直升机适航条件</p>
        <p style="color:red">4、根据国际惯例及民航总局关于目视飞行的规定，救援直升机运行时间为每天 8：00 至日落前半小时。日落时间以各地气象局官网当天数据为判定</p>
        <p>备注：当地面救援可以及时到达并实施医疗救护时，将优先选择地面救援</p>
        <p class="title-icon">三、服务内容及标准</p>
        <div>
          <img style="width:100%" src="../../assets/image/product/biao3.png" alt="">
        </div>
        <p class="title-icon">四、院前救援适应症</p>
        <div>
          <img style="width:100%" src="../../assets/image/product/biao2.png" alt="">
        </div>
        <p class="title-icon">五、除外责任及限制责任</p>
        <p>（一）除外责任</p>
        <p>在下列情况下，空降联盟将无法提供服务且不承担任何责任：</p>
        <p>1、服务实施过程中，任何因为被救援人及其家属不服从机组人员及医务人员安排所造成的任何后果</p>
        <p>2、无法控制的事件，包括但不限于罢工、禁运、飞行状况、当地政策、法律法规所造成服务的延误或无法实施，以及其他不被允许提供救援服务的情况</p>
        <p>3、因不适航因素（包括但不限于天气情况、空中管制、法律法规等）造成救援服务无法实施或延误实施而导致的后果</p>
        <p>4、因权益人所提供的信息有误，导致我司无法核实身份或及时制定救援计划的情况</p>
        <p>5、权益人吸食或注射毒品</p>
        <p>6、权益人因违法行为或被拘捕而产生的后果</p>
        <p>7、服务过程中，因被救援人病情恶化等客观原因产生的损害</p>
        <p>8、因医院医疗救治过错或过失导致被救援人伤情变重、死亡的。空降联盟仅对飞行及运输安全负责</p>
        <p>9、其他法律法规规定的免责事由</p>
        <p>（二）限制责任</p>
        <p>在下列情况下，空降联盟将不提供服务折扣或优惠价格，且在权益人愿意承担全部费用的前提下，空降联盟仍有主动权选择是否为权益人提供救援服务</p>
        <p>1、权益人忽视媒体预期发生的罢工、动乱或骚乱而发生的后果</p>
        <p>2、权益人故意自残、精神错乱、自杀或试图自杀导致的后果</p>
        <p>3、权益人因酗酒、斗殴，或受酒精、管制药品的影响而产生的后果</p>
        <p>4、权益人因精神和行为障碍导致的伤害</p>
        <p>5、权益人酒后驾驶、无合法有效驾驶证驾驶，或驾驶无有效行驶证的机动车而发生的后果</p>
      </div>



      <div class="notice-part" @click="showToggle3">
        <p>地面120服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow3" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">一、权益说明</p>
        <p>空降联盟为权益人提供地面救护车协调服务</p>
        <p class="title-icon">二、服务内容</p>
        <p>1、在权益人符合院前救援服务范围的情况下，如因客观原因不适航而无法出动直升机，或必须联合120急救中心开展空地联运时，空降联盟将提供地面救护车协调服务，并承担相应的救护车费用 2、在权益人不符合院前救援服务范围的情况下，空降联盟将提供地面救护车协调服务，但由此产生的救援费用由权益人自行承担
        </p>
      </div>
      <div class="notice-part" @click="showToggle4">
        <p>道路救援服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow4" style="padding:0 20px;border-bottom:1px dashed #ccc">
        <p class="title-icon">一、权益说明</p>
        <p>成为空降联盟道路救援权益人后，您所绑定的车辆可获得以下权益：</p>
        <p>1、“道路救援服务”包括搭电、换胎、送水、救援拖车（非事故及高速）、困境救援（一般救援及吊装救援）等全国范围内的道路救援服务（港澳台地区除外）；不包括交通管制路段，主干道中、城市高架路桥、地下车库（限高）或禁止实施汽车道路救援服务的路段。</p>
        <p>2、被服务车辆限9座(含)以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆。摩托车、客车、公共车辆、出租车、货车、卡车、重型运输车以及用于出租和营运的车辆、改装车、竞技车等不在本服务范围内。</p>
        <p style="color:red">3、非事故车辆故障定义：“非单方或双方事故，未涉及保险理赔之一般机动车辆故障”</p>
        <p class="title-icon">二、服务内容及标准</p>
        <div>
          <img style="width:100%" src="../../assets/image/product/表格-道路.png" alt="">
        </div>
        <p class="title-icon">三、除外责任</p>
        <p>在下列情况下，空降联盟将无法提供服务且不承担任何责任：</p>
        <p>1、对于处于醉酒状态中的客户，则不可享有除酒后拖车服务之外的其他服务；若当事人血液中的酒精含量超过《中华人民共和国道路交通安全法》，《中华人民共和国道路交通安全法实施条例》或者事发所在地的类似法规的规定标准，则视为醉酒</p>
        <p>2、车辆驾驶人处于毒品、毒物、非处方的麻醉剂的影响</p>
        <p>3、不具备承保车辆类别应有的相对应的机动车登记证、行驶证或驾驶证；或行驶证及驾驶证因违规而被吊销或吊扣</p>
        <p>4、车辆参与赛车、拉力赛、速度或耐久性测试以及未在正常道路上驾驶</p>
        <p>5、因救援本身可能会影响车辆保险的理赔，空降联盟及服务商对此不承担责任，但对于可能造成的影响会在施救前告知</p>
        <p>6、因故意损坏、破坏或者参与违法犯罪行为引发的故障</p>
        <p>7、车辆的抛锚是由直接或间接因警方或其他有关部门介入引起的</p>
        <p>8、车辆的操作因驾驶人故意违反该车使用说明而引起的损坏</p>
        <p>9、车辆故障后引发的任何相关费用或财产损失</p>
        <p>10、车辆因驾驶人故意未保持在适合于在道路上行驶的状况或未根据车辆制造商的建议保养车辆</p>
        <p>11、车辆用于出租车或租赁等商业用途</p>
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
        <p> 021-60554929</p>
      </div>
      <div @click="showToggle6" class="notice-part">
        <p>免责声明</p>
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
        <p> 021-60554929</p>
      </div>
      <div class="notice-logo">
        <img style='width:70%' src='../../assets/image/product/icon_logo_color.png' alt="">
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
  .container {
    padding-bottom: 50px;
  }

  .mint-radiolist {
    display: flex;
   
  }
   .mint-cell-wrapper {
      padding: 0 !important;
      font-size: 12px !important;
      background-size: 120% 0;
    }
  // .mint-cell {
  //   width: 33.33%;
  // }

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
      line-height: 20px;
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
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #eee;
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
        values: '1',
        isShow1: false,
        isShow2: false,
        isShow3: false,
        isShow4: false,
        isShow5: false,
        isShow6: false,
        options: '',
        one: '',
        price: 999,
        addPrice: ''


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
      })
    },
    watch: {
      values(newVal, oldVal) {
        if (newVal == 3) {
          this.price = this.one + this.addPrice
          console.log(newVal)
        } else {
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
      buy: function () {
        var url = location.hash.slice(1)
        Check(url).then(res => {
          window.sessionStorage.setItem('type', this.values)
          window.sessionStorage.setItem('pirce', this.price)
          this.$router.push('/protectdetail')
        })

      }
    },

  }

</script>
