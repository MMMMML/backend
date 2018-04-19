<template>
<div class="pay">
<!-- 权益人 -->
    <div class="qyr" v-for='(item, index) of meg.personUserInfo' :key='index'>
        <!-- 填写页面 -->
        <div class="tianx"  v-show='!isShow'>
                <p>权益人</p>
                <span>未填写</span>
                <button v-on:click="toggle()">填写</button>
        </div>
        <!-- 真正的人 -->
<div v-show='isShow'> 
 <div class="must" >
        <p style="padding:10px 20px 0 ;margin-left:20px">权益人</p> 
    <div class="man">
        <p class="human-name">姓名</p>
        <input type="text" class="human-input"  placeholder="请输入姓名" v-model='item.realName'>
        <div style="display:flex;align-items: center;" >
          <div class="btn"  id='member' @click='member'>选择权益人</div>
        </div>
        <div class="warning" v-show="isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:25%;padding-left:5%">证件类型</p>
        <p  id='createId' @click='createId' style="width:62%;padding-left: 1rem;"> </p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="" >
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text"  class="human-input" v-model='item.idNumber'>
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>
       <!-- 手机号码 -->
       <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" class="human-input"  placeholder="请输入手机号码" v-model="item.mobile">
        <div class="warning" v-show="isPhone">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div>
       </div>

</div>

</div>
<!-- 权益车 -->
    <div class="qyc">
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
        <input type="text" class="human-input"  placeholder="请输入车牌号" v-model="meg.plateNumber">
        <div style="display:flex;align-items: center;" >
          <div class="btn" v-on:click='car' >选择车辆</div>
        </div>
        <div class="warning" v-show="isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:30%;padding-left:5%">车辆类型</p>
        <p  style="width:62%;padding-left: 1rem;" id='createId1' @click='createId1' ></p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">所有人</p>
        <input type="text"  class="human-input" v-model="meg.owner">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

             <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text"  class="human-input" v-model="meg.usingNature">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

       <!-- 手机号码 -->
       <div class="man">
        <p class="human-name1">车辆识别代号</p>
        <input type="text" class="human-input"  placeholder="请输入代号" v-model="meg.vin">
        <div class="warning" v-show="isPhone">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
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
import wx from 'weixin-js-sdk'
export default{
    data(){
        return{
           isChinaName: false,
            isIdNumber: false,
            isPhone: false,
            isShow:false,
            show1:false,
        meg:{
            plateNumber:'',
            owner:'',
            benefitEffectTime:'2018-04-13 09:30:30',
            packageId: this.$route.query.packageId,
            peopleNum: this.$route.query.counter,
            vehicleType: '小型汽车',
            realName:'',
            personUserInfo:[
            ]
        },
        counter: 1,



        }
    },
mounted(){
    this.$http.post(`http://aj.kingwingaviation.com/alliance-java/wechat/getJSApiTicket?url=${encodeURIComponent(location.href.split('#')[0])}`).then(res => {
            let js_sdk = res.data.payload
             console.log('~~~')
             console.log(js_sdk)
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: js_sdk.appId, // 必填，公众号的唯一标识
                timestamp: js_sdk.timestamp, // 必填，生成签名的时间戳
                nonceStr: js_sdk.nonceStr, // 必填，生成签名的随机串
                signature: js_sdk.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        })
        wx.ready(() => {
            console.log('jssdk ok!')
        })
},

created(){
         let { counter, pageckageId } = this.$route.query
      counter = ~~counter
      this.counter += counter || 0
      for(let i = 0; i < ~~this.counter; i++) {
        this.meg.personUserInfo.push({
            realName: '',
            idNumber: '',
            idType: '',
            mobile:''
        })
      }
      console.log(this.meg.peopleNum)
},


methods:{
   _isChinaName(name) {
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
      },
      _isPhone(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },

      toggle:function(){
            this.isShow = !this.isShow;
        },
    tog:function(){
            this.show1=!this.show1;
        },
// 支付接口

// 点击下拉
    createId:function() {
        var mobileSelect1 = new MobileSelect({
          trigger: '#createId' ,
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
            // console.log(this.personUser[index].idType)
            // console.log(data);
            
          }
        });
      },
       createId1:function() {
        var mobileSelect1 = new MobileSelect({
          trigger: '#createId1' ,
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
            // this.personUser[index].idType = data[0].id;
            // console.log(this.personUser[index].idType)
            // console.log(data);
            
          }
        });
      },
    //   付款验证
    payfor:function(){
      // 验证功能
      this.isChinaName = false
        this.isPhone = false
        this.isIdNumber = false
        this.isChinaName = !this._isChinaName(this.meg.realName)
        if (this.isChinaName) {
          return;
        }
        this.isPhone = !this._isPhone(this.meg.personUserInfo.mobile)
        if (this.isPhone) {
          return;
        }
// 支付
        console.log(1);
        let obj = JSON.stringify(this.meg)
         obj = JSON.parse(obj)

        obj.personUserInfo = JSON.stringify(obj.personUserInfo)
        obj.peopleNum= ~~obj.peopleNum +1 
         this.$http({
             method:'post',
             url:'wechat/order/addOrder',
             params: obj        
         }).then(res =>{
             //JSON.stringify(this.meg.personUserInfo)
           console.log(res);
        
            if(res.data.code==200){
                    const payload=res.data.payload
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
            }else{
                console.log('hh')
            }
            


         })
    },
    member:function(){
         var mobileSelect1 = new MobileSelect({
          trigger: '#member' ,
          title: '选择证件类型',
          wheels: [{
            data: [{
                id: '0',
                value: '马哥'
              },
              {
                id: '3',
                value: 'arron'
              },
              {
                id: '2',
                value: '贤弟'
              },
              {
                id: '1',
                value: '同志'
              }
            ]
          }],
          callback: (indexArr, data) => {
            // this.personUser[index].idType = data[0].id;
            // console.log(this.personUser[index].idType)
            //  console.log(data);
            
          }
        });
      this.$http.get('wechat/commonContact/list').then(res=>{
            console.log(res);
      })
},
    car:function(){
      this.$http.get('wechat/commonVehicle/list').then(res=>{
        console.log(res);
      })
    }

}

}  
</script>


<style scoped>
.pay{
    background-color: #fff;
 }
/* 填写人 */
.tianx{
    width: 100%;
    height: 50px;
    background-color: #fff;
}
.tianx P{
    font-size: 16px;
    color:#A0A0A0; 
    padding-top: 10px;
    margin-left: 20px;
}
.tianx span{
    display: block;
    width: 50px;
    height: 10px;
    font-size: 14px;
    color:#A0A0A0;
    margin-left: 90px;
   margin-top:-30px;
}
.tianx button{
    float: right;
    width: 22vw;
    color: white;
    background: #ccc;
    font-size: 0.5rem;
    text-align: center;
    height: 25px;
    line-height: 10px;
    border-radius: 20px;
    margin-top:-10px;
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
  .human-name1{
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
