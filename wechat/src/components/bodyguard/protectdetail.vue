<template>
  <div class='container'>
    <div>
      <div @click.stop class="must" v-for='(item, index) of list' :key='index' v-show="showcase">
        <p style="padding: 10px 20px 0px;font-size: 16px;font-weight: 700; color: #4b4b4b;">{{ item.type === '1' ? '成年人' : '未成年人' }}</p>

        <div class="man">
          <p class="human-name">姓名</p>
          <input type="text" class="human-input" style="width: 42%;" v-model='item.realName' placeholder="请输入真实姓名">
          <div style="display:flex;align-items: center;">
            <div class="btn" @click.stop="select(index)">选择权益人</div>
          </div>
          <div class="warning" v-show="!validateArr[index].isChinaName">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>姓名格式错误，请重新填写</span>
          </div>
        </div>
        <div class="man">
          <p style="width:32%;padding-left:5%">证件类型</p>
          <p class='createId' style="width:62%;padding-left: 1rem;">身份证</p>

        </div>
        <div class="man">
          <p class="human-name">证件号码</p>
          <input type="text" v-model='item.idNumber' class="human-input" placeholder="请输入证件号码">
          <div class="warning" v-show="!validateArr[index].isIdNumber">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="man">
          <p class="human-name">手机号码</p>
          <input type="text" v-model='item.mobile' class="human-input" placeholder="请输入手机号码">
          <!-- <div class="warning" v-show="!validateArr[index].isPhoneNo">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>手机格式错误，请重新填写</span>
          </div> -->
        </div>

      </div>
    </div>

    <div @click.stop>
      <div style="background:white" v-show="carshow">
        <p style="padding: 10px 20px 0px;font-size: 16px;font-weight: 700;">权益车辆</p>
        <div class="man">
          <p class="human-name">车牌号码</p>
          <div class="carInput">
            <select-province :propProvince='pre' @province='handleProvince'></select-province>
            <input type="text" class="human-input" v-model="end" placeholder="请输入车牌号码">
          </div>
          <div style="display:flex;align-items: center;">
            <div class="btns" @click.stop="selectcar(idx)">选择权益车辆</div>
          </div>
          <div class="warning" v-show='isCarNo'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车牌号码格式错误，请重新填写</span>
          </div>
        </div>
        <div class="man">
          <p class="human-name">车辆类型</p>
          <p id="trigger" @click.stop style="width:58%;margin-left: 1rem;">{{vehicleType ||'请选择车辆类型'}}</p>
          <div>
            <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
        </div>
        <div class="man">
          <p class="human-name">所有人</p>
          <input type="text" class="human-input" v-model="owner" placeholder="请输入所有人">
          <div class="warning" v-show='isCarUser'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>所有人格式错误，请重新填写</span>
          </div>
        </div>
        <div class="man">
          <p class="human-name">使用性质</p>
          <input readonly type="text" class="human-input" v-model="usingNature">
        </div>
        <div class="man">
          <p class="human-name">车辆识别代号</p>
          <input type="text" class="human-input" v-model="vin" placeholder="请输入车辆识别代号">
          <div class="warning" v-show='isCarWPMI'>
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>车辆识别代号格式错误，请重新填写</span>
          </div>
        </div>
      </div>
    </div>

    <div class="payment vux-1px-t">
      <p>合计：￥{{price}}</p>
      <p class="payment-buy" @click.stop="payment()">立即购买</p>
    </div>
    <Confirm @confirm='handleConfirm' ref='confirm' title='提示' text='确定要放弃道路救援和出险代步车服务?'></Confirm>    
  </div>
</template>
<style scoped lang='less'>
  @import '~vux/src/styles/1px.less';  
  .container {
    padding-bottom: 55px;
  }
  .warning {
    position: absolute;
    bottom: 2.05rem;
    left: 30vw;
    height: 0;
  }

  .warning span {
    font-size: 12px;
  }

  .warning img {
    width: 14px;
    height: 14px;
  }

  .btn,
  .btns {
    width: 22vw;
    color: white;
    background: #ccc;
    font-size: 3vw;
    text-align: center;
    height: 25px;
    line-height: 25px;
    border-radius: 20px;
    margin-right: 5vw;
  }

  .human-input {
    border: none !important;
    height: 49px !important;
    margin: 0;
    font-size: 14px;
    width: 50%;
  }

  .button {
    color: #fff;
    background: red;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .must {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
  }

  .human-name {
    width: 32%;
    padding-left: 5%;
  }

  .man {
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    position: relative;
    .carInput {
      display: flex;
      flex: 1;
      align-items: center;
      input {
        flex: 1;
        border: 1px solid red;
        padding: 10px;
      }
      // background: red;
    }
    img {
      width: 8px;
      height: 13px;
    }
  }

  .payment {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 45px;
    padding-left: 20px;
    .payment-buy {
      height: 100%;
      width: 100px;
      color: white;
      line-height: 45px;
      background: red;
      text-align: center;
    }
  }
</style>
<script>
  import MobileSelect from 'mobile-select'
  import SelectProvince from '@/base/selectProvince'
  import Confirm from '@/base/confirm'  
  export default {
    data() {
      return {
        list: [],
        vasVehicle: '',
        vasRoadRescue: '',
        plateNumber: '',
        vin: '',
        vehicleType: '',
        owner: '',
        usingNature: '非运营性质',
        price: '',
        isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false,
        validateArr: [],
        human: '',
        showcase: true,
        ishow: false,
        carshow: true,
        iscarshow: false,
        cars: '',
        pre: '',
        end: '',
        isCarUser: false,
        isCarNo: false,
        isCarWPMI: false
      }
    },
    mounted() {
      let big = {
        type: '1',
        realName: '',
        idType: '',
        mobile: '',
        idNumber: ''
      }
      let small = {
        type: '2',
        realName: '',
        idType: '',
        mobile: '',
        idNumber: '',
        vehicleType: '',
      }
      let type = window.sessionStorage.getItem('type') || 1
      this.price = window.sessionStorage.getItem('pirce') || 0
      if (~~type === 1) {
        this.list.push({
          type: '1',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '1',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '2',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
      } else if (~~type === 2) {
        //   this.list = [big, small, small]
        this.list.push({
          type: '1',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '2',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '2',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
      } else if (~~type === 3) {
        this.list.push({
          type: '1',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '1',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '2',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: '2',
          realName: '',
          idType: 0,
          mobile: '',
          idNumber: ''
        })
      }

      var mobileSelect = new MobileSelect({
        trigger: '#trigger',
        title: '选择证件类型',
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
          this.vehicleType = data[0].id; //返回选中的json数据
        }
      });
      let num
      if (~~type === 1 || ~~type === 2) {
        num = 3
      } else if (~~type === 3) {
        num = 4
      }
      for (let i = 0; i < num; i++) {
        this.validateArr.push({
          isChinaName: true,
          isPhoneNo: true,
          isIdNumber: true
        })
      }

      var urls = 'wechat/commonContact/list'
      this.$http.get(urls).then(data => {
        this.human = data.data.payload
        this.objlist = []
        this.human.map(item => {
          this.obj = {}
          this.listid = item.id
          this.listrealName = item.realName
          this.obj.value = item.realName
          this.obj.realName = item.realName
          this.obj.idType = item.idType
          // this.obj.type = 1
          this.obj.mobile = item.mobile
          this.obj.idNumber = item.idNumber
          this.objlist.push(this.obj)
        })

        let arr = [{
          data: this.objlist
        }]
        this.mobileSelect = new MobileSelect({
          trigger: '.btn',
          title: '选择权益人',
          wheels: arr,
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            let obj = { ...data[0],
              type: this.list[this.idx].type
            }
            this.list.splice(this.idx, 1, obj)
          }
        });
      })



      var urlss = 'wechat/commonVehicle/list'
      this.$http.get(urlss).then(data => {
        this.cars = data.data.payload
        this.objlists = []
        this.cars.map(item => {
          this.objs = {}
          this.objs.value = item.plateNumber
          this.objs.plateNumber = item.plateNumber
          this.objs.vehicleType = item.vehicleType
          this.objs.owner = item.owner
          this.objs.vin = item.vin
          this.objlists.push(this.objs)
        })

        let arrary = [{
          data: this.objlists
        }]
        this.mobileSelect2 = new MobileSelect({
          trigger: '.btns',
          title: '选择权益车辆',
          wheels: arrary,
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            // this.list.splice(this.idx, 1, obj)
            this.owner = data[0].owner
            this.plateNumber = data[0].plateNumber
            this.pre = this.plateNumber.substr(0, 1)
            this.end = this.plateNumber.substr(1)
            this.vin = data[0].vin
            this.vehicleType = data[0].vehicleType
          }
        });
      })
    },
    methods: {
      _isChinaName(name) {
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
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
      payment() {
        if (this.end) {
          this.plateNumber = this.pre + this.end
        }
        this.showcase = true
        this.ishow = false
        this.isChinaName = false
        this.isIdNumber = false
        this.list.forEach((item, index) => {
          Object.keys(item).forEach((key, idx) => {
            if (key === 'realName') {
              this.validateArr[index].isChinaName = this._isChinaName(item[key])
            } else if (key === 'idNumber') {
              this.validateArr[index].isIdNumber = this._isIdNumber(item[key])
            }
          })
        })

        this.mealType = JSON.parse(window.sessionStorage.getItem('type'))
        if (this.plateNumber != '' || this.vehicleType != '' || this.owner != '' || this.vin != 0) {
          this.vasVehicle = true
          this.vasRoadRescue = true
        } else {
          this.vasVehicle = false
          this.vasRoadRescue = false
        }

        let flag = true
        this.validateArr.map(item => {
          if (item.isChinaName == false || item.isPhoneNo == false || item.isIdNumber == false) {
            flag = false
          }
        })
        if (!flag) return

        if (this.owner || (this.plateNumber && this.plateNumber.length !== 10) || this.vin) {
          // 去校验
          this._formatProduct()
          this.handleConfirm()
        } else {
          this.$refs.confirm.show()
        }
      },
      select(index) {
        this.idx = index
        this.mobileSelect.show()
      },
      selectcar(idx) {
        this.idxs = idx
        this.mobileSelect2.show()
      },
      handleProvince(province) {
        this.pre = province
      },
      handleConfirm() {
        if (this.isCarUser || this.isCarNo || this.isCarWPMI) {
          return
        }
        let url = 'wechat/order/addOrder'        
        var params = {
          packageId: 'E',
          personUserInfo: JSON.stringify(this.list),
          mealType: this.mealType,
          plateNumber: this.plateNumber,
          vehicleType: this.vehicleType,
          owner: this.owner,
          usingNature: 0,
          vin: this.vin,
          vasVehicle: this.vasVehicle,
          vasRoadRescue: this.vasRoadRescue,
        }
        
        this.$http.post(url, params).then(data => {
          var result = data.data.payload
          if (data.data.code == 500) {
            alert(data.data.message)
          }
          if (data.data.code == 200) {
            window.sessionStorage.setItem('orderId', data.data.payload.orderId)
            this.$router.push('/myindentinfo')
          }
        })
      },
      _formatProduct() {
        this.isCarUser = !this._isChinaName(this.owner)
        this.isCarNo = !this._isCarNo(this.plateNumber)
        this.isCarWPMI = !this._isCarvin(this.vin)
      },
    },
    filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照', ]
        return enums[val] || '请选择证件类型'
      }
    },
    components: {
      SelectProvince,
      Confirm
    }
  }

</script>
