<template>
    <div class="msg">

        <div class="must" v-for="(item, index) of personUser" :key='index'>
         <p style="padding:10px 20px 0">权益人{{index+1}}</p>
      <div class="man">
        <p class="human-name">姓名</p>
        <!-- <p>马玲</p> -->
        <input type="text" class="human-input" v-model="item.realName" placeholder="请输入姓名">
        <div style="display:flex;align-items: center;" v-show="index==0">
          <div class="btn" @click="select()">选择权益人</div>
        </div>
        <div class="warning" v-show="isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p style="width:25%;padding-left:5%">证件类型</p>
        <p :id="'createId' + index" @click='createId(index)' style="width:62%;padding-left: 1rem;">{{item.idType && item.idType}}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text" v-model="item.idNumber" class="human-input">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" class="human-input" v-model="item.mobile" placeholder="请输入手机号码">
        <div class="warning" v-show="isPhoneNo">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div>
      </div>
    </div>

        <!-- 权益车辆 -->
        <div class="qyc">
                <div class="first" v-if='!sShow'>
                    <p>权益车辆</p>
                    <span>未填写</span>
                    <button v-on:click="tag()">填写</button>              
                </div>
                <div v-else>
                <div class="second">
                    <p>权益车辆</p>
                    <input type="text" value="车牌号码" v-model="meg.plateNumber"> 
                    <button class="tx">选择车辆</button>
                </div>
                <div class="sfz">
                    <p>车辆类型</p>
                    <p>小型轿车</p>
                    <button> > </button>
                </div>
                <!--号码  -->
                <div class="hm">
                <span>所有人</span> <input type="text" style="width:160px;" v-model="meg.owner">
                </div>
                <div class="phone">
                <span>使用性质</span> <input type="text" style="width:160px;" v-model="meg.usingNature">     
            </div>
            <div class="car">
                <span>车辆识别代码</span>  <input type="text" style="width:160px;" v-model="meg.vin"> 
            </div>
            </div>
        </div>

     
   
        <!-- 支付模块 -->
        <div class="mz">
            <p>合计：<i>￥889</i> </p>
            <button v-on:click='buy'> 支付</button>
        </div>



    </div>    
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  data() {
    return {
        isShow:false,
        sShow:false,
        meg:{
            plateNumber:'',
            owner:'',
           // usingNature:'',
            vin:'',
            benefitEffectTime:'2018-04-13 09:30:30',
            packageId: this.$route.query.packageId,
            peopleNum: this.$route.query.counter,
            vehicleType: '小型汽车',
            //idNumber: '',
            //idType: '0',
           //idNumber:'',
            //mobile:'',
            //realName:'1',
                personUserInfo:[
            ]
        },
        
        counter: 1,
    
      
    }
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
  methods: {
    toggle:function(){
            this.isShow = !this.isShow;
        },

    tag:function(){
      this.sShow = !this.sShow;
        },

//  buy:function(){
//     this.$http.post("wechat/order/addOrder",this.meg).then(res => {
//         console.log(res)
//            })
     buy:function(){
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
    
        
}
}
}
</script>


<style scoped>
.msg{
    background: #fff;
}


.first {
  background-color: #fff;
  height: 40px;
  line-height: 40px;
}
.first p {
  display: block;
  color: #a0a0a0;
  font-size: 16px;
}
.first span {
  display: block;
  width: 50px;
  height: 20px;
  margin-left: 80px;
  margin-top: -50px;
  font-size: 14px;
  color: #a0a0a0;
}
.first button {
  float: right;
  width: 80px;
  height: 24px;
  border-radius: 12px;
  line-height: 10px;
  margin-top: -10px;
  background: #a0a0a0;
}
.second {
  margin-left: 20px;
  border-bottom: 2px dashed #a0a0a0;
}
.second p {
  color: #4b4b4b;
  font-size: 16px;
}
.second input {
  width: 140px;
  height: 30px;
}
.tx {
  float: right;
  width: 100px;
  height: 32px;
  border-radius: 12px;
  line-height: 10px;
  background: #a0a0a0;
}
.sfz{
    margin-left:20px;
    margin-top: 5px;
    border-bottom: 1px solid #A0A0A0;
}

.hm {
    margin-top:10px;
    margin-left: 20px;
   
}
.hm input{
    float:right;
    height: 10px;
    border: 0;
}
.phone{
     margin-top:10px;
    margin-left: 20px;
    border-top: 1px solid #A0A0A0;
}
.phone span{
    margin-top:5px;
    display: block;
}
.phone input{  
  float: right;
  height: 10px;
  margin-top:-16px;
  border: 0;
}
.qyc{
    margin-top: 10px;
}
.car{
    margin-top:10px;
    margin-left: 20px;
    border-top: 1px solid #A0A0A0;
}
.car span{
    margin-top:5px;
    display: block;
}
.car input{  
  float: right;
  height: 10px;
  margin-top:-20px;
  border: 0;
}
.mz{
    background-color: #fff;
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
}
.mz button{
    color: #fff;
   float: right;
    margin-top:-30px;
    background-color: #FF0000;
}
.mz p{
    font-size: 18px;
    font-weight: bolder;
}
.mz i{
    color: #FF0000;
    font-style: normal;
    font-size: 20px;

}


</style>
