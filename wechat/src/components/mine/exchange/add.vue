<template>
  <div class='container'>
    <div class="init" style='display: none;'></div>
    <div class="select-date" v-if='initialTimeLimit'>
      <div class="item">
        <div class="item_label">生效日期</div>
        <p @click='selectDate'>{{ datePlaceholder }}</p>
        <mt-datetime-picker ref="pickers" v-model="Visible" type="date" @confirm="confirm"
          year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
          :startDate='startDate' :endDate='endDate'
        >
        </mt-datetime-picker>
        <div>
          <img width='8' height='13' class="up-arrow" src="../../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
    </div>
    <div class="must" v-for='(item, index) of personUserInfo' :key='index'>
      <div class='info_wrapper' v-if='item.active'>
        <h4 v-if='index === 0'>主权益人</h4>
        <h4 v-else>权益人{{ index + 1 }}</h4>
        <div class="item vux-1px-b">
          <p class="item_label">姓名</p>
          <button @click='selectPerson(index)' class='select'>选择权益人</button>
          <input type="text" class="item_value" v-model='item.realName' placeholder="请输入真实姓名">
          <div class="warning" v-show="validateArr[index].isChinaName">
            <img style="width: 14px;height: 14px;" src="../../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>姓名格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class="item_label">证件类型</p>
          <p class="item_value" @click='handleCheckID(index)'>{{ item.idType | format }}</p>
          <div>
            <img class="up-arrow" src="../../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class="item_label">证件号码</p>
          <input type="text" v-model='item.idNumber' class="item_value" placeholder="请输入证件号码">
          <div class="warning" v-show="validateArr[index].isIdNumber">
            <img style="width: 14px;height: 14px;" src="../../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item">
          <p class="item_label">手机号码</p>
          <input type="text" v-model='item.mobile' class="item_value" placeholder="请输入手机号码">
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
      <div class='info_wrapper' v-if='vehicleNum && index === 0'>
        <h4>权益车辆</h4>
        <div class="item vux-1px-b">
          <p class='item_label'>车牌号码</p>
          <button @click='selectCar' class='select'>选择车辆</button>
          <div class="carInput">
            <select-province :propProvince='carInfo.pre' @province='getProvince'></select-province>
            <input type="text" style='font-size: 14px;' v-model="carInfo.end" placeholder="请输入车牌号码">
          </div>
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarNo'>
            <img style="width: 14px;height: 14px;" src="../../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车牌号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>车辆类型</p>
          <p class="item_value" @click='handleCheckCarType'>{{ carInfo.vehicleType || '请选择车辆类型' }}</p>
          <div>
            <img class="up-arrow" src="../../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
          <!-- 
          <div class="warning" >
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码不能为空</span>
          </div> -->
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>所有人</p>
          <input class="item_value" type="text" v-model="carInfo.owner" placeholder="请输入所有人">
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarUser'>
            <img style="width: 14px;height: 14px;" src="../../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>所有人格式错误，请重新填写</span>
          </div>
        </div>
        <div class="item vux-1px-b">
          <p class='item_label'>使用性质</p>
          <p class="item_value">{{ carInfo.usingNature | formatCarNature }}</p>
        </div>
        <div class="item">
          <p class='item_label'>车辆识别代号</p>
          <input class="item_value" type="text" v-model="carInfo.vin" placeholder="请输入车辆识别代号">
          <div class="warning" v-show='validateArr[validateArr.length - 1].isCarWPMI'>
            <img style="width: 14px;height: 14px;" src="../../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车辆识别代号格式错误，请重新填写</span>
          </div>
        </div>
      </div>
    </div>
    <div class="submit" @click='handlePay'>确认兑换</div>
  </div>
</template>

<script>
  import MobileSelect from 'mobile-select'
  import PayBtn from '@/base/pay_bottom_btn'
  import Storage from 'good-storage'
  import SelectProvince from '@/base/selectProvince'
  import { format } from 'date-fns'
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
          usingNature: '0',
          vin: ''
        },
        activePro: false,
        Visible: false,
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        startDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        datePlaceholder: '请选择开始日期',
        initialTimeLimit: 0,
        vehicleNum: 0
      }
    },
    mounted() {
      this.initialTimeLimit = Number(this.$route.query.initialTimeLimit) || 0
      this.peopleNum = Number(this.$route.query.personNum) || 0
      this.vehicleNum = Number(this.$route.query.vehicleNum) || 0
      this.codepwd = this.$route.query.codepwd || ''
      if (this.initialTimeLimit) {
        this.endDate = new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * this.initialTimeLimit)
      }
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
          isIdNumber: false
        })
      }
      // 在最后一个增加对权益车辆的校验 在A产品和C产品中activePro为true
      if (this.vehicleNum) {
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
      // 初始化权益人
      this._initPeople()
      // 初始化权益车
      this._initCar()
      
    },
    methods: {
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
              }
            ]
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
              }
            ]
          }],
          callback: (indexArr, data) => {
            this.personUserInfo[this.index].idType = data[0].id
          }
        })
      },
      _initPeople() {
        var urls = 'wechat/commonContact/list'
        this.$http.get(urls).then(data => {
          this.list = data.data.payload
          this.objlist = []
          this.list.map(item => {
            this.obj = {}
            this.obj.value = item.realName
            this.obj.realName = item.realName
            this.obj.idType = item.idType
            this.obj.mobile = item.mobile
            this.obj.idNumber = item.idNumber
            this.obj.active = true
            this.objlist.push(this.obj)
          })
          let arr = [{
            data: this.objlist
          }]
          this.peopleSelect = new MobileSelect({
            trigger: '.init',
            title: '选择权益人',
            wheels: arr,
            triggerDisplayData: false,
            callback: (indexArr, data) => {
              let obj = JSON.stringify(data[0])
                  obj = JSON.parse(obj)
              this.personUserInfo.splice(this.index, 1, obj)
              // this.item = data[0]
            }
          });
        })
      },
      _initCar() {
        this.$http.get('wechat/commonVehicle/list').then(res => {
          let arr = res.data.payload
          let newArr = []
          arr.forEach(item => {
            newArr.push({
              id: item.id,
              value: item.plateNumber,
              owner: item.owner,
              vehicleType: item.vehicleType,
              vin: item.vin,
              usingNature: '0'
            })
          })
          let obj = {
            data: newArr
          }
          this.carSelect = new MobileSelect({
            trigger: '.init',
            title: '选择权益车',
            wheels: [obj],
            triggerDisplayData: false,
            callback: (indexArr, data) => {
              let res = data[0]
              this.$set(this.carInfo, 'pre', '')
              this.$set(this.carInfo, 'end', '')
              Object.keys(this.carInfo).forEach(item => {
                if (item === 'plateNumber') {
                  this.carInfo['pre'] = res['value'].substr(0, 1)
                  this.carInfo['end'] = res['value'].substr(1)
                } if (item === 'pre' || item === 'end') {
                } else {
                  this.carInfo[item] = res[item]
                }
              })
              console.log(this.carInfo)
            }
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
      write(index) {
        let oldObj = this.personUserInfo[index]
        let newObj = { ...oldObj,
          active: true
        }
        this.personUserInfo.splice(index, 1, newObj)
      },
      _isChinaName(name) {
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/
        return pattern.test(name)
      },
      _isIdNumber(number) {
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return pattern.test(number);
      },
      _isCarNo(no) {
        let pattern =
          /^([\\u4e00-\\u9fa5][a-zA-Z](([DF](?![a-zA-Z0-9]*[IO])[0-9]{4,5})|([0-9]{5}[DF])))|([冀豫云辽黑湘皖鲁苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼渝京津沪新京军空海北沈兰济南广成使领A-Z]{1}[a-zA-Z0-9]{5,6}[a-zA-Z0-9挂学警港澳]{1})$/
        return pattern.test(no)
      },
      _isCarvin(vin) {
        return vin.length === 17
      },
      getProvince(province) {
        this.$set(this.carInfo, 'pre', province)
      },
      handlePay() {
        // 做表单校验
        let arr = []
        this.personUserInfo.forEach((item, index) => {
          Object.keys(item).forEach((key, idx) => {
            if (key === 'realName') {
              this.validateArr[index].isChinaName = !this._isChinaName(item[key])
            } else if (key === 'idNumber' && item['idType'] === '0') {
              this.validateArr[index].isIdNumber = !this._isIdNumber(item[key])
            } else if (key === 'idNumber') {
              arr.push(item[key])
            }
          })
        })

        if (this.initialTimeLimit && this.datePlaceholder === '请选择开始日期') {
          alert('请选择开始日期')
          return
        }

        // 对carInfo做处理
        if (this.vehicleNum) {
          this.carInfo.plateNumber = this.carInfo.pre + this.carInfo.end
          Object.keys(this.carInfo).forEach(item => {
            if (item === 'owner') {
              this.validateArr[this.validateArr.length - 1].isCarUser = !this._isChinaName(this.carInfo[item])
            } else if (item === 'plateNumber') {
              this.validateArr[this.validateArr.length - 1].isCarNo = !this._isCarNo(this.carInfo[item])
            } else if (item === 'vin') {
              this.validateArr[this.validateArr.length - 1].isCarWPMI = !this._isCarvin(this.carInfo[item])
            }
          })
        }

        let flag = true
        this.validateArr.forEach(item => {
          if (item.isChinaName === true || item.isIdNumber === true || item.isCarWPMI === true || item.isCarUser === true) {
            flag = false
          }
        })
        if (!flag) return

        let newArr = Array.from(new Set(arr))
        if (this.personUserInfo.length > 1 && newArr.length !== arr.length) {
          alert('同一个产品中不能重复填写一个证件信息')
          return
        }

        // 正式发起请求 先做是否实名认证校验
        var params = {
          codepwd: this.codepwd,
          benefitEffectTimeStr: this.datePlaceholder,
          BenefitUsers: JSON.stringify(this.personUserInfo),
          ...this.carInfo
        }
        this.$http.post('wechat/redeemCode/verifyAction', params).then(res => {
          let data = res.data
          let str = ''
          if (data.code === 200) {
            let effectTime = data.payload.effectTime.substr(0, 10).replace(/-/g, '/'),
                expireTime = data.payload.expireTime.substr(0, 10).replace(/-/g, '/'),
                name = data.payload.packageName
            str += `effectTime=${effectTime}&expireTime=${expireTime}&name=${name}`
          } else {
            str += `msg=${data.message}`
          }
          this.$router.push(`/result?${str}`)
        })
      },
      selectPerson(index) {
        this.index = index
        this.peopleSelect.show()
      },
      selectCar() {
        this.carSelect.show()
      },
      confirm(date) {
        this.datePlaceholder = format(date, 'YYYY-MM-DD')
      },
      selectDate() {
        this.$refs.pickers.open()
      }
    },
    filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照']
        return enums[val] || '请选择证件类型'
      },
      formatCarNature(val) {
        let enums = ['非营运车辆', '营运车辆']
        return enums[val] || '请选择车辆使用性质'
      }
    },
    components: {
      PayBtn,
      SelectProvince
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
    .select-date {
      height: 50px;
      background: #fff;
      padding-left: 20px;
      margin-bottom: 10px;
      .item {
        display: flex;
        height: 48px;
        line-height: 48px;
        padding-right: 10px;
        .item_label {
          width: 90px;
          height: 100%;
          font-size: 16px;
          font-weight: bold;
        }
        p {
          flex: 1;
          height: 100%;
          padding-left: 15px;
          font-size: 14px;
          margin: 0;
        }
      }
    }
    .must {
      background: #F0F0F0;
      width: 100%;
      margin-bottom: 10px;
      .info_wrapper {
        background: #fff;
        padding-left: 20px;
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
          padding-right: 10px;
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
              right: 10px;
              width: 80px;
              height: 24px;
              border-radius: 10px;
              background: #ccc;
              color: #fff;
              text-align: center;
              line-height: 24px;
              padding: 0;
              top: 50%;
              transform: translate3d(0, -50%, 0);
            }
          }
          .carInput {
            flex: 1;
            height: 100%;
            padding-right: 25vw;
            font-size: 14px;
            border: 0;
            display: flex;
            align-items: center;
            input {
              margin: 0;
              border: 0;
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
          .select {
            position: absolute;
            left: 72%;
            top: 50%;
            width: 80px;
            height: 24px;
            border-radius: 10px;
            background: #ccc;
            text-align: center;
            line-height: 24px;
            padding: 0;
            font-size: 12px;
            color: #fff;
            transform: translate3d(0, -50%, 0);
            z-index: 99;
          }
        }
        &~.info_wrapper {
          margin-top: 10px;          
        }
      }
    }
    .submit {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 45px;
      z-index:100;
      background: #f00;
      color: #fff;
      text-align: center;
      line-height: 45px;
    }
  }

</style>
