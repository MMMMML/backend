<template>
  <div class='container'>
    <div class="init" style='display: none;'></div>

    <div class="must" v-for='(item, index) of personUserInfo' :key='index'>
      <div class='info_wrapper' v-if='item.active'>
        <h4>权益人{{ index + 1 }}</h4>
        <div class="item vux-1px-b">
          <p class="item_label">姓名</p>
          <input type="text" class="item_value" v-model='item.realName' placeholder="请输入姓名">
          <div class="warning" v-show="validateArr[index].isChinaName">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>姓名格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class="item_label">证件类型</p>
          <p class="item_value" @click='handleCheckID(index)'>{{ item.idType | format }}</p>
        </div>
        <div class="item vux-1px-b">
          <p class="item_label">证件号码</p>
          <input type="text" v-model='item.idNumber' class="item_value" placeholder="请输入证件号码">
          <div class="warning" v-show="validateArr[index].isIdNumber">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item">
          <p class="item_label">手机号码</p>
          <input type="text" v-model='item.mobile' class="item_value" placeholder="请输入手机号码">
          <div class="warning" v-show="validateArr[index].isPhoneNo">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>手机格式错误，请重新填写</span>
          </div>
        </div>
      </div>
      <div class='info_wrapper' v-else>
        <div class="item" @click='write(index)'>
          <p class="item_label" style='font-weight: bolder;'>权益人{{ index + 1 }}</p>
          <div class="item_value" style='color: #666;'>
            未填写
            <button>填写</button>
          </div>
        </div>
      </div>
      <div class='info_wrapper' v-if='(packageId === "A" && index === 0) || (packageId === "C" && activePro)'>
        <h4>权益车辆</h4>
        <div class="item vux-1px-b">
          <p class='item_label'>车牌号码</p>
          <input type="text" class="item_value" v-model="carInfo.plateNumber" placeholder="请输入车牌号码">
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarNo'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车牌号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>车辆类型</p>
          <p class="item_value" @click='handleCheckCarType'>{{ carInfo.vehicleType || '请选择车辆类型' }}</p>
          <!-- <div>
            <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
          <div class="warning" >
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码不能为空</span>
          </div> -->
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>所有人</p>
          <input class="item_value" type="text" v-model="carInfo.owner" placeholder="请输入所有人">
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarUser'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>所有人格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>使用性质</p>
          <p class="item_value" @click='handleCheckCarNature'>{{ carInfo.usingNature | formatCarNature }}</p>
        </div>
        <div class="item">
          <p class='item_label'>车辆识别代号</p>
          <input class="item_value" type="text" v-model="carInfo.vin" placeholder="请输入车辆识别代号">
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarWPMI'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车辆识别代号格式错误，请重新填写</span>
          </div>
        </div>
      </div>
    </div>

    <pay-btn :total='price' @buy='handlePay'></pay-btn>
  </div>
</template>

<script>
import MobileSelect from 'mobile-select'
import PayBtn from '@/base/pay_bottom_btn'
import Check from '@/util/checkIDAuth'
export default {
  data() {
    return {
      vasVehicle: '',
      vasRoadRescue: '',
      isChinaName: false,
      isPhoneNo: false,
      isIdNumber: false,
      validateArr: [],
      personUserInfo: [],
      packageId: '',
      benefitEffectTime: '',
      price: 0,
      carInfo: {
        plateNumber: '',
        vehicleType: '',
        owner: '',
        usingNature: '',
        vin: ''
      },
      activePro: false
    }
  },
  mounted() {
    const { counter, packageId, benefitEffectTime, price, activePro } = this.$route.query
    this.packageId = packageId
    this.peopleNum = counter || 1
    this.benefitEffectTime = benefitEffectTime
    this.activePro = activePro === 'true'
    this.price = Number(price)
    for (let i = 0; i < this.peopleNum; i++) {
      this.personUserInfo.push({
        realName: '',
        idType: '',
        idNumber: '',
        mobile: '',
        active: false
      })
      this.validateArr.push({
        isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false
      })
    }
    // 在最后一个增加对权益车辆的校验 在A产品和C产品中activePro为true
    if (this.packageId === 'A' || (this.packageId === 'C' && this.activePro)) {
      this.validateArr.push({
        isCarNo: false,
        isCarUser: false,
        isCarWPMI: false
      })
    }
    // 增加一个active字段来控制显示和隐藏
    this.personUserInfo[0].active = true
    // 初始化选择车辆类型的picker
    this._initPickerCarType()
    // 初始化选择证件类型的picker
    this._initPickerIDType()
    // 初始化车辆类型
    this._initPickerCarNature()
    // 初始化wechat配置
    this._wechat()
  },
  methods: {
    _initPickerCarNature() {
      this.CarNature = new MobileSelect({
        trigger: '.init',
        title: '选择车辆类型',
        triggerDisplayData: false,
        wheels: [{
          data: [{
            id: '0',
            value: '非营运车辆'
          },
          {
            id: '1',
            value: '营运车辆'
          }]
        }],
        callback: (indexArr, data) => {
          this.carInfo.usingNature = data[0].id
        }
      })
    },
    _initPickerCarType() {
      this.CarType = new MobileSelect({
        trigger: '.init',
        title: '选择车辆类型',
        triggerDisplayData: false,
        wheels: [{
          data: [{
            id: '轿车',
            value: '轿车'
          },
          {
            id: '越野车',
            value: '越野车'
          },
          {
            id: '商务车',
            value: '商务车'
          },
          {
            id: '皮卡',
            value: '皮卡'
          },
          {
            id: '微型客车',
            value: '微型客车'
          }]
        }],
        callback: (indexArr, data) => {
          this.carInfo.vehicleType = data[0].id
        }
      })
    },
    _initPickerIDType() {
      this.IDType = new MobileSelect({
        trigger: '.init',
        title: '选择证件类型',
        triggerDisplayData: false,
        wheels: [{
          data: [{
            id: '0',
            value: '身份证'
          },
          {
            id: '1',
            value: '台胞证'
          },
          {
            id: '2',
            value: '回乡证'
          },
          {
            id: '3',
            value: '护照'
          }]
        }],
        callback: (indexArr, data) => {
          this.personUserInfo[this.index].idType = data[0].id
        }
      })
    },
    _wechat() {
      var url = 'wechat/getJSApiTicket'
      var jsurl = location.href.split('#')[0]
      var params = {url: jsurl}
      this.$http.post(url, params).then(data => {
        var wxconfig = data.data.payload
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxconfig.appId, // 必填，公众号的唯一标识
          timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
          signature: wxconfig.signature, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      })
    },
    handleCheckCarType() {
      this.CarType.show()
    },
    handleCheckID(index) {
      this.index = index
      this.IDType.show()
    },
    handleCheckCarNature() {
      this.CarNature.show()
    },
    write(index) {
      let oldObj = this.personUserInfo[index]
      let newObj = { ...oldObj, active: true }
      this.personUserInfo.splice(index, 1, newObj)
    },
    _isChinaName(name) {
      var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/
      return pattern.test(name)
    },
    _isPhoneNo(phone) {
      var pattern = /^1[34578]\d{9}$/;
      return pattern.test(phone);
    },
    _isIdNumber(number) {
      var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      return pattern.test(number);
    },
    _isCarNo(no) {
      let pattern = /^([\\u4e00-\\u9fa5][a-zA-Z](([DF](?![a-zA-Z0-9]*[IO])[0-9]{4,5})|([0-9]{5}[DF])))|([冀豫云辽黑湘皖鲁苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼渝京津沪新京军空海北沈兰济南广成使领A-Z]{1}[a-zA-Z0-9]{5,6}[a-zA-Z0-9挂学警港澳]{1})$/
      return pattern.test(no)
    },
    _isCarvin(vin) {
      return vin.length === 17
    },
    handlePay() {
      // 做表单校验
      this.personUserInfo.forEach((item, index) => {
        Object.keys(item).forEach((key, idx) => {
          if (key === 'realName') {
            this.validateArr[index].isChinaName = !this._isChinaName(item[key])
          } else if (key === 'mobile') {
            this.validateArr[index].isPhoneNo = !this._isPhoneNo(item[key])
          } else if (key === 'idNumber') {
            this.validateArr[index].isIdNumber = !this._isIdNumber(item[key])
          }
        })
      })

      Object.keys(this.carInfo).forEach(item => {
        if (item === 'owner') {
          this.validateArr[this.validateArr.length - 1].isCarUser = !this._isChinaName(this.carInfo[item])
        } else if (item === 'plateNumber') {
          this.validateArr[this.validateArr.length - 1].isCarNo = !this._isCarNo(this.carInfo[item])
        } else if (item === 'vin') {
          this.validateArr[this.validateArr.length - 1].isCarWPMI = !this._isCarvin(this.carInfo[item])
        }
      })

      let flag = true
      this.validateArr.forEach(item => {
        if (item.isChinaName === true || item.isPhoneNo === true || item.isIdNumber === true) {
          flag = false
        }
      })
      if (!flag) return

      // 正式发起请求 先做是否实名认证校验
      Check().then(res => {
        var params = {
          packageId: this.packageId,
          personUserInfo: JSON.stringify(this.personUserInfo),
          ...this.carInfo
        }
        if (this.packageId === 'A') {
          Object.assign(params, {
            benefitEffectTime: this.benefitEffectTime,
            peopleNum: this.peopleNum,            
          })
        } else if (this.packageId === 'C') {
          Object.assign(params, {
            vasVehicle: this.activePro,
            vasRoadRescue: this.activePro
          })
        }
        this.$http.post('wechat/order/addOrder', params).then(data => {
          console.log(data)
          var result = data.data.payload
          if(data.data.code == 500){
            alert(data.data.message)
          }
          if (data.data.code == 200) {
            wx.ready(function () {
              wx.chooseWXPay({
                timestamp: result.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: result.nonceStr, // 支付签名随机串，不长于 32 位
                package: result.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: result.paySign, // 支付签名
                success: function (res) {
                  console.log(res)
                },
                fail: function (res) {
                  console.log(res)
                }
              })
            })
          }
        })
      })
    }
  },
  filters: {
    format(val) {
      let enums = ['身份证', '台胞证', '回乡证', '护照']
      return enums[val] || '请输入证件类型'
    },
    formatCarNature(val) {
      let enums = ['非营运车辆', '营运车辆']
      return enums[val] || '请选择车辆使用性质'
    } 
  },
  components: {
    PayBtn
  },
  watch: {
    // personUserInfo: {
    //   deep: true,
    //   handler(newVal) {
    //     this.sure = true
    //     this.personUserInfo.forEach((item, index) => {
    //       if (!item.active) {
    //         this.sure = false
    //         return
    //       }
    //       Object.keys(item).forEach((key, idx) => {
    //         if (!item[key]) {
    //           this.sure = false
    //           return
    //         }
    //         if (key === 'realName') {
    //           this.validateArr[index].isChinaName = !this._isChinaName(item[key])
    //         } else if (key === 'mobile') {
    //           this.validateArr[index].isPhoneNo = !this._isPhoneNo(item[key])
    //         } else if (key === 'idNumber') {
    //           this.validateArr[index].isIdNumber = !this._isIdNumber(item[key])
    //         }
    //       })
    //     })
    //     Object.keys(this.carInfo).forEach(item => {
    //       if (!this.carInfo[item]) {
    //         this.sure = false
    //       }
    //     })
    //   }
    // },
    // carInfo: {
    //   deep: true,
    //   handler(newVal) {
    //     Object.keys(newVal).forEach(item => {
    //       if (!newVal[item]) {
    //         this.sure = false
    //         return
    //       }
    //       if (item === 'owner') {
    //         this.validateArr[this.validateArr.length - 1].isCarUser = !this._isChinaName(newVal[item])
    //       } else if (item === 'plateNumber') {
    //         this.validateArr[this.validateArr.length - 1].isCarNo = !newVal[item]
    //       } else if (item === 'vin') {
    //         this.validateArr[this.validateArr.length - 1].isCarWPMI = !newVal[item]
    //       }
    //     })
    //   }
    // },
    // validateArr: {
    //   deep: true,
    //   handler(newVal) {
    //     let x = this.sure
    //     newVal.forEach(one => {
    //       Object.keys(one).forEach(item => {
    //         if (one[item] === true) {
    //           this.sure = false
    //         }
    //       })
    //     })
    //   }
    // }
  }
}
</script>
<style scoped lang='less'>
@import '~vux/src/styles/1px.less';
.container {
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 60px;
  background: #F0F0F0;
  .must {
    background: #F0F0F0;
    width: 100%;
    margin-bottom: 10px;
    .info_wrapper {
      background: #fff;
      padding-left: 20px;
      &~.info_wrapper {
        margin-top: 10px;
      }
      h4 {
        margin: 0;
        line-height: 42px;
        font-size: 16px;
      }
      .item {
        display: flex;
        height: 48px;
        line-height: 48px;
        position: relative;
        font-size: 14px;
        .item_label {
          width: 90px;
          height: 100%;
        }
        .item_value {
          flex: 1;
          height: 100%;
          padding-left: 15px;
          font-size: 14px;
          border: 0;
          position: relative;
          button {
            position: absolute;
            right: 20px;
            width: 80px;
            height: 24px;
            border-radius: 10px;
            background: #A0A0A0;
            color: #fafafa;
            text-align: center;
            line-height: 24px;
            padding: 0;
            top: 50%;
            transform: translate3d(0, -50%, 0);
          }
        }
        img {
          width: 8px;
          height: 13px;
        }
        .warning {
          position: absolute;
          bottom: 2rem;
          left: 28vw;
          height: 0;
          img {
            width: 14px;
            height: 14px;
          }
          span {
            font-size: 12px;
          }
        }
        .btn {
          width: 22vw;
          color: white;
          background: #ccc;
          font-size: 3vw;
          text-align: center;
          height: 25px;
          line-height: 25px;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
