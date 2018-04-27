<template>
  <div class="pay">
    <!-- 权益人 -->
    <div class="qyr" v-for='(item, index) of meg.personUserInfo' :key='index'>
      <!-- 填写页面 -->
      <div class="tianx" v-show='!isShow'>
        <p>权益人</p>
        <span>未填写</span>
        <button v-on:click="toggle()">填写</button>
      </div>
      <!-- 真正的人 -->
      <div v-show='isShow'>
        <div class="must">
          <p style="padding:10px 20px 0 ;margin-left:20px">权益人</p>
          <div class="man">
            <p class="human-name">姓名</p>
            <input type="text" class="human-input" placeholder="请输入姓名" v-model='item.realName'>
            <div style="display:flex;align-items: center;">
              <div class="btn" @click='member'>选择权益人</div>
            </div>
            <div class="warning" v-show="isname">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>姓名格式错误，请重新填写</span>
            </div>
          </div>
          <!-- 证件类型  -->
          <div class="man">
            <p style="width:25%;padding-left:5%">证件类型</p>
            <p id='createId' @click='createId' style="width:62%;padding-left: 1rem;"> </p>
            <div>
              <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
            </div>
          </div>

        </div>
        <!-- 证件号码 -->
        <div class="man">
          <p class="human-name">证件号码</p>
          <input type="text" class="human-input" v-model='item.idNumber'>
          <div class="warning" v-show="isnumber">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>证件号码不能为空</span>
          </div>
        </div>
        <!-- 手机号码 -->
        <div class="man">
          <p class="human-name">手机号码</p>
          <input type="text" class="human-input" placeholder="请输入手机号码" v-model="item.mobile">
          <div class="warning" v-show="ismobile">
            <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
            <span>手机格式错误，请重新填写</span>
          </div>
        </div>

      </div>
      <div class="qyr" v-for='(item, index) of meg.personUserInfo' :key='index'>
        <!-- 填写页面 -->
        <div class="tianx" v-show='!isShow'>
          <p>权益人</p>
          <span>未填写</span>
          <button v-on:click="toggle()">填写</button>
        </div>
        <!-- 真正的人 -->
        <div v-show='isShow'>
          <div class="must">
            <p style="padding:10px 20px 0 ;margin-left:20px">权益人</p>
            <div class="man">
              <p class="human-name">姓名</p>
              <input type="text" class="human-input" placeholder="请输入姓名" v-model='meg.user.realName'>
              <div style="display:flex;align-items: center;">
                <div class="btn people" @click="people1">选择权益人</div>
              </div>
              <div class="warning" v-show="isname">
                <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
                <span>姓名格式错误，请重新填写</span>
              </div>
            </div>
            <!-- 证件类型  -->
            <div class="man">
              <p style="width:25%;padding-left:5%">证件类型</p>
              <p id='createId1' @click='createId1' style="width:62%;padding-left: 1rem;"> </p>
              <div>
                <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
              </div>
            </div>

          </div>
          <!-- 证件号码 -->
          <div class="man">
            <p class="human-name">证件号码</p>
            <input type="text" class="human-input" v-model='meg.user.idNumber'>
            <div class="warning" v-show="isnumber">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>证件号码不能为空</span>
            </div>
          </div>
          <!-- 手机号码 -->
          <div class="man">
            <p class="human-name">手机号码</p>
            <input type="text" class="human-input" placeholder="请输入手机号码" v-model="meg.user.mobile">
            <div class="warning" v-show="ismobile">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>手机格式错误，请重新填写</span>
            </div>
          </div>

        </div>

      </div>
      <!-- 权益车 -->
      <div class="qyc" v-if='index === 0'>
        <!-- 填写页面 -->
        <div class="tianx" v-show="!show1">
          <p>权益车</p>
          <span>未填写</span>
          <button v-on:click="tog()">填写</button>
        </div>
        <!-- 车 -->
        <div v-show="show1">
          <div class="must">
            <p style="padding:10px 20px 0;margin-left:20px">权益车辆</p>
            <div class="man">
              <p class="human-name">车牌号码</p>
              <input type="text" class="human-input" placeholder="请输入车牌号" v-model="meg.plateNumber">
              <div style="display:flex;align-items: center;">
                <div class="btn car" v-on:click='car'>选择车辆</div>
              </div>
              <div class="warning" v-show="isplateNumber">
                <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
                <span>车牌号格式错误，请重新填写</span>
              </div>
            </div>
            <!-- 证件类型  -->
            <div class="man">
              <p style="width:30%;padding-left:5%">车辆类型</p>
              <p style="width:62%;padding-left: 1rem;" id='createIdcar' @click='createIdcar'></p>
              <div>
                <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
              </div>
            </div>

          </div>
          <!-- 证件号码 -->
          <div class="man">
            <p class="human-name">所有人</p>
            <input type="text" class="human-input" v-model="meg.owner">
            <div class="warning" v-show="isowner">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>所有人不能为空</span>
            </div>
          </div>

          <div class="man">
            <p class="human-name">使用性质</p>
            <input type="text" class="human-input" v-model="meg.usingNature">
            <div class="warning" v-show="isusingNature">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>使用性质不能为空</span>
            </div>
          </div>

          <!-- 手机号码 -->
          <div class="man">
            <p class="human-name1">车辆识别代号</p>
            <input type="text" class="human-input" placeholder="请输入代号" v-model="meg.vin">
            <div class="warning" v-show="isvin">
              <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
              <span>车辆识别代号错误</span>
            </div>
          </div>




        </div>
      </div>



    </div>

    <!-- 支付功能 -->
    <div class="payment">
      <p>合计：￥998</p>
      <p class="payment-buy" @click="payfor">立即购买</p>
    </div>



  </div>


</template>


<script>
  import MobileSelect from 'mobile-select'
  // import wx from 'weixin-js-sdk'
  export default {
    data() {
      return {
        isname: false,
        isnumber: false,
        ismobile: false,
        isplateNumber: false,
        isowner: false,
        isusingNature: false,
        isvin: false,
        isShow: false,
        show1: false,
        meg: {
          plateNumber: '',
          owner: '',
          packageId: this.$route.query.packageId,
          peopleNum: this.$route.query.counter,
          vehicleType: '',
          vasVehicle: 'true',
          personUserInfo: [],
          user: {
            idNumber: '',
            realName: '',
            mobile: '',
          }
        },
        counter: 1,



      }
    },
    mounted() {
      // 选身份证
      this.mobileSelect1 = new MobileSelect({
        trigger: '#createId',
        title: '选择证件类型',
        wheels: [{
          data: [{
              id: '0',
              value: '身份证'
            },
            {
              id: '3',
              value: '护照'
            },
            {
              id: '2',
              value: '回乡证'
            },
            {
              id: '1',
              value: '台胞证'
            }
          ]
        }],
        callback: (indexArr, data) => {


        }
      });

      this.mobileSelect2 = new MobileSelect({
        trigger: '#createId1',
        title: '选择证件类型',
        wheels: [{
          data: [{
              id: '0',
              value: '身份证'
            },
            {
              id: '3',
              value: '护照'
            },
            {
              id: '2',
              value: '回乡证'
            },
            {
              id: '1',
              value: '台胞证'
            }
          ]
        }],
        callback: (indexArr, data) => {
          // this.personUser[index].idType = data[0].id;
          // console.(this.personUser[index].idType)
          // console.(data);

        }
      });

      // 选车的
      this.mobileSelect3 = new MobileSelect({
        trigger: '#createIdcar',
        title: '车辆类型',
        wheels: [{
          data: [{
              id: '0',
              value: '轿车'
            },
            {
              id: '4',
              value: '微型客车'
            },
            {
              id: '3',
              value: '越野车'
            },
            {
              id: '2',
              value: '商务车'
            },
            {
              id: '1',
              value: '皮卡'
            }
          ]
        }],
        callback: (indexArr, data) => {
          this.meg.vehicleType = data[0].value;

        }
      });
      // 渲染车的
      this.$http.get('wechat/commonVehicle/list').then(res => {
        console.log(res)
        console.log(res.data.payload);
        console.log('~~~~');
        let arr = res.data.payload
        let newArr = []
        arr.forEach(item => {
          newArr.push({
            id: item.id,
            value: item.plateNumber,
            owner: item.owner,
            vehicletype: item.vehicletype,
            vin: item.vin
          })
        })
        let obj = {
          data: newArr
        }
        this.mobileSelect4 = new MobileSelect({
          trigger: '.car',
          title: '选择权益车',
          wheels: [obj],
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(data);
            //    console.log(data[0].value);
            this.meg.owner = data[0].owner;
            this.meg.plateNumber = data[0].value;
            this.meg.vehicletype = data[0].vehicletype;
            this.meg.vin = data[0].vin;
            console.log(this.meg.vehicletype);

          }
        });

        // console.log(this.mobileSelect2)

      })
      // 渲染人的
      this.$http.get('wechat/commonContact/list').then(res => {
        console.log(res.data.payload);
        console.log('~~~~');
        let arr = res.data.payload
        let newArr = []
        arr.forEach(item => {
          newArr.push({
            id: item.id,
            value: item.realName,
            mobile: item.mobile,
            idNumber: item.idNumber,
            idType: item.idType
          })
        })
        let obj = {
          data: newArr
        }
        this.mobileSelect5 = new MobileSelect({
          trigger: '.btn',
          title: '选择权益人',
          wheels: [obj],
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(1)
            if (data[0].value) {
              var obj = {};
              obj.realName = data[0].value;
              obj.idType = data[0].idType;
              obj.mobile = data[0].mobile;
              obj.idNumber = data[0].idNumber;
              this.meg.personUserInfo = [obj]
            }
          }
        });

        console.log(this.mobileSelect2)


      })
      // 渲染第二个人
      this.$http.get('wechat/commonContact/list').then(res => {
        console.log(res.data.payload);
        console.log('~~~~');
        let arr = res.data.payload
        let newArr = []
        arr.forEach(item => {
          newArr.push({
            id: item.id,
            value: item.realName,
            mobile: item.mobile,
            idNumber: item.idNumber,
            idType: item.idType
          })
        })
        let obj = {
          data: newArr
        }
        this.mobileSelect6 = new MobileSelect({
          trigger: '.people',
          title: '选择权益人',
          wheels: [obj],
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(data);
            //    console.log(data[0].value);
            this.meg.user.realName = data[0].value;
            this.meg.user.idType = data[0].idType;
            this.meg.user.mobile = data[0].mobile;
            this.meg.user.idNumber = data[0].idNumber;
            //    console.log(this.realName);
          }
        });
        console.log(this.mobileSelect3)

      })


      // 获取产品价格



      this.$http.post(
        `http://aj.kingwingaviation.com/alliance-java/wechat/getJSApiTicket?url=${encodeURIComponent(location.href.split('#')[0])}`
      ).then(res => {
        let js_sdk = res.data.payload
        console.log('~~~')
        console.log(js_sdk)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: js_sdk.appId, // 必填，公众号的唯一标识
          timestamp: js_sdk.timestamp, // 必填，生成签名的时间戳
          nonceStr: js_sdk.nonceStr, // 必填，生成签名的随机串
          signature: js_sdk.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      })
      wx.ready(() => {
        console.log('jssdk ok!')
      })

    },



    created() {
      let {
        counter,
        pageckageId
      } = this.$route.query
      counter = ~~counter
      this.counter += counter || 0
      for (let i = 0; i < ~~this.counter; i++) {
        this.meg.personUserInfo.push({
          realName: '',
          idNumber: '',
          idType: '',
          mobile: ''
        })
      }
      console.log(this.meg.peopleNum)
      // console.log(wx)
    },


    methods: {
      toggle: function () {
        this.isShow = !this.isShow;
      },
      tog: function () {
        this.show1 = !this.show1;
      },
      // 支付接口

      // 点击下拉
      createId: function () {
        this.mobileSelect1.show();
      },
      createId1: function () {
        this.mobileSelect2.show();
      },
      createIdcar: function () {
        this.mobileSelect3.show();
      },
      car: function () {
        this.mobileSelect4.show();
      },
      member: function () {
        this.mobileSelect5.show();
      },
      people1: function () {
        this.mobileSelect6.show();
      },
      //   付款验证
      payfor: function () {
        // 验证功能
        //  if(this.meg.realName==''){
        //         this.isname=true
        //     }
        if (this.meg.personUserInfo[0].idNumber == '') {
          this.isnumber = true;
        }
        if (this.meg.plateNumber == '') {
          this.isplateNumber = true;
        }
        if (this.meg.owner == '') {
          this.isowner = true;
        }
        if (this.meg.vin == '') {
          this.isvin = true;
        }

        // 支付
        console.log(1);
        let obj = JSON.stringify(this.meg)
        obj = JSON.parse(obj)
        obj.personUserInfo.push(this.meg.user)
        //  console.log(obj.personUserInfo)
        console.log(obj)
        delete obj['user'];
        console.log(obj);
        obj.personUserInfo = JSON.stringify(obj.personUserInfo)
        obj.peopleNum = ~~obj.peopleNum + 1
        console.log(obj.personUserInfo)
        // console.log(this.meg.user)
        // obj.push(this.meg.user)
        this.$http({
          method: 'post',
          url: 'wechat/order/addOrder',
          params: obj
        }).then(res => {
          //JSON.stringify(this.meg.personUserInfo)
          console.log(res);
          // console.log(user);
          console.log(obj);
          if (res.data.code == 200) {
            const payload = res.data.payload
            wx.chooseWXPay({
              timestamp: payload.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: payload.nonceStr, // 支付签名随机串，不长于 32 位
              package: payload.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: payload.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: payload.paySign, // 支付签名
              success: function (res) {
                // 支付成功后的回调函数 

                console.log(1);
              }

            });
          } else {
            alert('购买人数和保障人信息不匹配')
          }



        })
      },


    }

  }

</script>


<style scoped>
  .pay {
    background-color: #fff;
  }

  /* 填写人 */

  .tianx {
    width: 100%;
    height: 50px;
    background-color: #fff;
  }

  .tianx P {
    font-size: 16px;
    color: #A0A0A0;
    padding-top: 10px;
    margin-left: 20px;
  }

  .tianx span {
    display: block;
    width: 50px;
    height: 10px;
    font-size: 14px;
    color: #A0A0A0;
    margin-left: 90px;
    margin-top: -30px;
  }

  .tianx button {
    float: right;
    width: 22vw;
    color: white;
    background: #ccc;
    font-size: 0.5rem;
    text-align: center;
    height: 25px;
    line-height: 10px;
    border-radius: 20px;
    margin-top: -10px;
  }

  /* 真正的人 */

  .warning {
    position: absolute;
    bottom: 2.6rem;
    left: 24vw;
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
    font-size: 0.5rem;
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
    width: 28%;
    padding-left: 2%;
  }

  .human-name1 {
    width: 40%;
    padding-left: 2%;
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
