<template>
  <div>
    <div class="indent-box">
      <div class="indent-header">
        <p>{{benefitOrder.createTime}}</p>
      </div>
      <div class="indent-pay">
        <p>订单编号:{{benefitOrder.id}}</p>
        <p >合计：￥{{benefitOrder.totalPrice}}</p>
      </div>


      <div class="ident-img">
        <img style="width:30%;height:15%" :src="benefitPackage.url" alt="">
        <div style="margin-left:8vw">
          <p>{{benefitPackage.name}}</p>
          <p>{{benefitPackage.mainName}}</p>
        </div>
      </div>
      <div class="indent-price">
          <p>有效期:{{benefitOrder.benefitEffectTime}}至{{benefitOrder.benefitExpireTime}}</p>
      </div>
    </div>
    <div class="equity">
      <p style="text-align:left;padding:1rem 0 1rem 0" class="weight">享有权益</p>
      <div class="equity-list">
        <div>
          <img src="../../assets/image/product/icon-helicopter.png" alt="">
          <p>直升机院前急救</p>
        </div>
        <div>
          <img  src="../../assets/image/product/icon-call.png" alt="">
          <p>120协调</p>
        </div>
        <div>
          <img  src="../../assets/image/product/icon-stretcher.png" alt="">
          <p>直升机医疗转运9折</p>
        </div>
        <div>
          <img  src="../../assets/image/product/icon-truck.png" alt="">
          <p>道路救援</p>
        </div>
        <div>
          <img  src="../../assets/image/product/icon-car.png" alt="">
          <p>代步车服务</p>
        </div>
      </div>
    </div>
    <div  style="margin-bottom:5px" v-for="(item ,index) in personItems" :key='index'>
        
      <div class="message">
          <p style="padding:10px 0 10px 20px">权益人</p>
          <div class="msg">
              <p style="width:20%;margin-left:20px;">姓名</p>
              <p style="width:60%">{{item.realName}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">证件类型</p>
              <p style="width:60%">{{item.idTypes}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">证件号码</p>
              <p style="width:60%">{{item.idNumber}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">手机号码</p>
              <p style="width:60%">{{item.mobile}}</p>
          </div>
      </div>
    </div>
    <div style="margin-top:10px" v-for="(car,key) in vehicleItems" :key='key'>
       
        <div class="message">
          <p style="padding:10px 0 10px 20px">权益车辆</p>
          <div class="msg">
              <p style="width:20%;margin-left:20px;">车牌号码</p>
              <p style="width:60%">{{car.plateNumber}}</p>
          </div>
       </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">车辆类型</p>
              <p style="width:60%">{{car.vehicleType}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">所有人</p>
              <p style="width:60%">{{car.owner}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 20px;">使用性质</p>
              <p style="width:60%">{{car.usingNatures}}</p>
          </div>
      </div>
      <div class="message">
          <div class="msg">
              <p style="width:25%;margin-left: 20px;">车辆识别代号</p>
              <p style="width:60%">{{car.vin}}</p>
          </div>
      </div>
    </div>
    <div class="payment" v-show="benefitOrder.paidStatus==0">
      <p>合计：￥{{benefitOrder.totalPrice}}</p>
      <p class="payment-buy" @click="payment()">支付</p>
    </div>
    
    
  </div>
</template>
<style scoped lang='less'>
  .indent-box {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    background: #fff;
    padding-top: 20px;
    .indent-header {
      display: flex;
      padding: 0 20px;
    }
    .indent-pay {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
    .ident-img {
      display: flex;
      padding: 10px 20px;
      background: #F0DCDC;
    }
    .indent-price{
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        
    }
  }
  .equity {
    background: #fff;
    margin: 10px 0;
    text-align: center;
    padding: 0 20px;
  }

  .equity-list {
    display: flex;
    flex-flow: row wrap;
    
  }

  .equity-list div {
    width: 25%;
  }

  .equity-list img {
    width: 40px;
    height: 40px;
  }
  .message{
    background: #fff;
}
.msg{
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
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
export default {
  data(){
      return{
          benefitOrder:'',
          benefitPackage:'',
          personItems:'',
          vehicleItems:'',
      }
  },
  mounted(){
      let url = `wechat/order/getOrderDetail?id=${window.sessionStorage.getItem('indentid')}`
      this.$http.get(url).then(data => {
        const{ benefitOrder , benefitPackage , personItems, vehicleItems} = data.data.payload
        this.benefitOrder = benefitOrder
        this.benefitPackage = benefitPackage
        this.personItems = personItems
        this.vehicleItems = vehicleItems

        // console.log(data)
        this.personItems.map(item=>{
            if(item.idType==0) item.idTypes = '身份证'
            if(item.idType==1) item.idTypes = '台胞证'
            if(item.idType==2) item.idTypes = '回乡证'
            if(item.idType==3) item.idTypes = '护照'
        })

         this.vehicleItems.map(item=>{
            item.usingNatures = item.usingNature==0?'非运营车辆':'运营车辆'
        })
      })
  },
  created(){
        var url = 'wechat/getJSApiTicket'
      var jsurl = location.href.split('#')[0]
      var params = {
        url: jsurl
      }
      this.$http.post(url, params).then(data => {
        var wxconfig = data.data.payload
        console.log(data)
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
  methods:{
    payment:function(){
      var url = '/wechat/order/unionPay'
      var params = {
          id:window.sessionStorage.getItem('indentid'),
          payMethod:0
      }
       this.$http.post(url,params).then(data => {
             var result = data.data.payload
            console.log(data)
            if(data.data.code==200){
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
            }else{
                alert(data)
            }
            

          })
  }
  }
 
}
</script>
