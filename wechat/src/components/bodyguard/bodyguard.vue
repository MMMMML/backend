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
          <img src="../../assets/image/product/biao1.png" alt="" style="width:100px;height:100px;">
                <img src="../../assets/image/product/biao2.png" alt="" style="width:100px;height:100px;">
                <img src="../../assets/image/product/biao3.png" alt=""  style="width:100px;height:100px;">
      </div>
      <div class="notice-part" @click="showToggle3">
        <p>地面120服务</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>

      <div v-show="isShow3" style="padding:0 20px;border-bottom:1px dashed #ccc">
         <p class="title-icon">【权益说明】</p>
              <p >空降联盟为权益人提供地面救护车协调服务</p>
              <p class="title-icon">【服务内容】</p>
              <p >1、在权益人符合院前救援服务范围的情况下，如因客观原因不适航而无法出动直升机，或必须联合120急救中心开展空地联运时，空降联盟将提供地面救护车协调服务，并承担相应的救护车费用
                  2、在权益人不符合院前救援服务范围的情况下，空降联盟将提供地面救护车协调服务，但由此产生的救援费用由权益人自行承担
              </p>
      </div>
      <div @click="showToggle4" class="notice-part">
        <p>免责申明</p>
        <div>
          <img src="../../assets/image//product/arrow@3x.png" alt="">
        </div>
      </div>
      <div v-show="isShow4" style="padding:0 20px;border-bottom:1px dashed #ccc">
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
        this.priceinfo = {}
        this.priceinfo.pickerVisible = this.pickerVisible
        this.priceinfo.pickerEnd = this.pickerEnd
        this.priceinfo.count = this.count
        this.priceinfo.price = this.price
        if(this.pickerEnd=='请选择失效日期'||this.pickerStart=='请选择生效日期'){
          alert('请选择生效失效日期')
          return  
        }else{
          window.sessionStorage.setItem('priceinfo', JSON.stringify(this.priceinfo))
          this.$router.push('/guarantee')
        }
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
