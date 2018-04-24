<template>
  <div class='container'>
    <div @click.stop class="must" v-for='(item, index) of list' :key='index'>
      <p style="padding:10px 20px 0">{{ item.type === '1' ? '大人' : '小孩' }}</p>
      <div class="man">
        <p class="human-name">姓名</p>
        <input type="text" class="human-input" v-model='item.realName'  placeholder="请输入姓名">
        <!-- <div style="display:flex;align-items: center;">
          <div class="btn">选择权益人</div>
        </div> -->
        <div class="warning" v-show="!validateArr[index].isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p style="width:32%;padding-left:5%">证件类型</p>
        <p class='createId'  style="width:62%;padding-left: 1rem;">身份证</p>
       
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text" v-model='item.idNumber'  class="human-input" placeholder="请输入证件号码">
        <div class="warning" v-show="!validateArr[index].isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" v-model='item.mobile' class="human-input" placeholder="请输入手机号码">
        <div class="warning" v-show="!validateArr[index].isPhoneNo">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div>
      </div>
    </div>
    <div style="background:white" @click.stop>
      <p style="padding:10px 20px 0">权益车辆</p>
      <div class="man">
        <p class="human-name">车牌号码</p>
        <input type="text"  class="human-input" v-model="plateNumber" placeholder="请输入车牌号码">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
      <div class="man">
        <p class="human-name">车辆类型</p>
       <p id="trigger"  @click.stop style="width:58%;margin-left: 1rem;">{{vehicleType ||'请选择车辆类型'}}</p>
         <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
      <div class="man">
        <p class="human-name">所有人</p>
        <input type="text"  class="human-input" v-model="owner" placeholder="请输入所有人">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
      <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text"  class="human-input" v-model="usingNature" placeholder="请输入使用性质">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
      <div class="man">
        <p class="human-name">车辆识别代号</p>
        <input type="text"  class="human-input" v-model="vin" placeholder="请输入车辆识别代号">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
    </div>
    <div class="payment">
      <p>合计：￥{{price}}</p>
      <p class="payment-buy" @click.stop="payment()">立即购买</p>
    </div>
  </div>
</template>
<style scoped>
  .warning {
    position: absolute;
    bottom: 2.6rem;
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

  .human-input {
    border: none !important;
    height: 59px !important;
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
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .man img {
    width: 8px;
    height: 13px;
  }

  .payment {
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 50px;
    padding-left: 20px;

  }

  .payment-buy {
    height: 100%;
    width: 100px;
    color: white;
    line-height: 50px;
    background: red;
    text-align: center;
  }

</style>
<script>
import MobileSelect from 'mobile-select'
export default {
  data(){
      return{
          list: [],
          vasVehicle:'',
          vasRoadRescue:'',
          plateNumber:'',
          vin:'',
          vehicleType:'',
          owner:'',
          usingNature:'',
          price:'',
          isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false,
        validateArr:[]
      }
  },
  mounted(){
      let big = {
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
      }
      let small = {
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: '',
          vehicleType:'',
          
      }

      
      let type = window.sessionStorage.getItem('type') || 1
      this.price = window.sessionStorage.getItem('pirce')
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
          console.log(this.vehicleType)
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
        });

      })
  },
  methods: {
     _isChinaName(name) {
        console.log(name)
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
      },
      _isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },
      _isIdNumber(number) {
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return pattern.test(number);
      },
      
    payment:function(){
        this.isChinaName = false
        this.isPhoneNo = false
        this.isIdNumber = false
        console.log(this.list)
         this.list.forEach((item, index) => {
          Object.keys(item).forEach((key, idx) => {
            if (key === 'realName') {
              console.log(this._isChinaName(item[key]))
              this.validateArr[index].isChinaName = this._isChinaName(item[key])
              
            } else if (key === 'mobile') {
              this.validateArr[index].isPhoneNo = this._isPhoneNo(item[key])  
            
            } else if (key === 'idNumber') {
              this.validateArr[index].isIdNumber = this._isIdNumber(item[key])
            }
          })
          
        })



      let url = 'wechat/order/addOrder'
      this.mealType = JSON.parse(window.sessionStorage.getItem('type'))
      if(this.plateNumber!=''&&this.vehicleType!=''&&this.owner!=''&&this.vin!=0){
        this.vasVehicle =true
        this.vasRoadRescue=true
      }else{
        this.vasVehicle =false
        this.vasRoadRescue =false
      }
      var params = {
          packageId: 'E',
          personUserInfo: JSON.stringify(this.list),
          mealType:this.mealType,
          plateNumber:this.plateNumber,
          vehicleType:this.vehicleType,
          owner:this.owner,
          usingNature:this.usingNature,
          vin:this.vin,
          vasVehicle:this.vasVehicle,
          vasRoadRescue:this.vasRoadRescue,
        }
        let flag = true
        this.validateArr.map(item=>{
          if(item.isChinaName==false || item.isPhoneNo==false || item.isIdNumber==false){
            flag = false
          }
        })

        if (!flag) return
         this.$http.post(url, params).then(data => {
           console.log(data)
           var result = data.data.payload
           if(data.data.code==500){
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
                  // 支付成功后的回调函数
                  console.log(res)
                },
                fail: function (res) {
                  console.log(res)
                }
              })
            })

          }
         })
    }
  },
   filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照', ]
        return enums[val] || '请输入证件类型'
      }
    }
}
</script>

