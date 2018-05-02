<template>
  <div>
      
<div class="qyr" >
                        <!-- 填写页面 -->
        <div class="tianx" v-show="!ishow">
                <p>权益人</p>
                <span>未填写</span>
                <button  @click="txr">填写</button>
        </div>
        <!-- 车 -->
<div v-show="ishow" >        
        <div class="must">
        <p style="padding:10px 20px 0;margin-left:20px">权益人</p> 
    <div class="man">
        <p class="human-name">姓名</p>
        <input type="text" class="human-input"  placeholder="请输入真实姓名"  v-model='realName'>
        <div style="display:flex;align-items: center;" >
          <div class="btn" v-on:click='people'>选择权益人</div>
        </div>
        <div class="warning"  v-show='isname'>
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:30%;padding-left:5%">证件类型</p>
        <p  style="width:62%;padding-left: 1rem;" class='choseid' v-on:click='chose'></p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text"  class="human-input"  v-model="idNumber">
        <div class="warning" v-show="isnumber" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

       <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text"  class="human-input" v-model="mobile">
        <div class="warning" v-show='ismobile'>
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机号码不能为空</span>
        </div>
       </div>

    

     </div>
</div>

      
<div class="qyc" >
                        <!-- 填写页面 -->
        <div class="tianx" v-show="!isshow">
                <p>权益车</p>
                <span>未填写</span>
                <button  @click="tx">填写</button>
        </div>
        <!-- 车 -->
<div v-show="isshow" >        
        <div class="must">
        <p style="padding:10px 20px 0;margin-left:20px">权益车辆</p> 
    <div class="man">
        <p class="human-name">车牌号码</p>
        <input type="text" class="human-input"  placeholder="请输入车牌号" v-model="plateNumber">
        <div style="display:flex;align-items: center;" >
          <div class="btn car"  >选择车辆</div>
        </div>
        <div class="warning" v-show='isplateNumber'>
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>车牌号格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:30%;padding-left:5%">车辆类型</p>
        <p  style="width:62%;padding-left: 1rem;" class="carid"  v-on:click='car'></p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">所有人</p>
        <input type="text"  class="human-input" v-model="owner">
        <div class="warning" v-show="isowner">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>所有人不能为空</span>
        </div>
       </div>

             <div class="man">
        <p class="human-name">使用性质</p>
                <p>非运营车辆</p>
        <div class="warning" v-show="isusingNature">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>使用性质不能为空</span>
        </div>
       </div>

       <!-- 手机号码 -->
       <div class="man">
        <p class="human-name1">车辆识别代号</p>
        <input type="text" class="human-input"  placeholder="请输入代号" v-model='vin'>
        <div class="warning" v-show='isvin'>
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>车辆识别代号错误</span>
        </div>
       </div>




     </div>
</div>








            <!-- 付款 -->
            <div class="payment">
                    <p>合计：￥8</p>
                    <p class="payment-buy" @click="payfor">立即购买</p>
            </div>
  </div>


</template>

<script>
import MobileSelect from 'mobile-select'

  export default{
      data(){
          return{
                isshow:false,
                ishow:false,
                isname:false,
                isnumber:false,
                ismobile:false,
                isplateNumber:false,
                isowner:false,
                isusingNature:false,
                isvin:false,
                realName:'',
                idNumber:'',
                mobile:'',
                plateNumber:'',
                owner:'',
                vin:'',
                packageId: this.$route.query.packageId,
          }
      },
      mounted(){

// 进来加载数据
this.$http.get('wechat/commonContact/list').then(res=>{
    console.log(res.data.payload);
    console.log('~~~~');
        let arr = res.data.payload
        let newArr = []
        arr.forEach(item => {
            newArr.push({
                id: item.id,
                value: item.realName,
                mobile: item.mobile,
                idNumber:item.idNumber,
                idType: item.idType
            })
        })
        let obj = {
            data: newArr
        }
         this.mobileSelect2 = new MobileSelect({
          trigger: '.btn' ,
          title: '选择权益人',
           wheels: [obj],
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(data);
            //    console.log(data[0].value);
            this.realName=data[0].value;
            this.idType=data[0].idType;
            this.mobile=data[0].mobile;
            this.idNumber=data[0].idNumber;
        //    console.log(this.realName);
          }
        });
        
        console.log(this.mobileSelect2)

})
// 进来渲染车子的
    this.$http.get('wechat/commonVehicle/list').then(res=>{
        let arr = res.data.payload
        let newArr = []
        arr.forEach(item => {
            newArr.push({
                id: item.id,
                value: item.plateNumber,
                 owner: item.owner,
                vehicletype:item.vehicletype,
                vin: item.vin
            })
        })
        let obj = {
            data: newArr
        }
         this.mobileSelect4 = new MobileSelect({
          trigger: '.car' ,
          title: '选择权益车',
           wheels: [obj],
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(data);
            //    console.log(data[0].value);
            this.owner=data[0].owner;
            this.plateNumber=data[0].value;
            this.vehicletype=data[0].vehicletype;
            this.vin=data[0].vin;
        //    console.log(this.realName);
          }
        });
        
        // console.log(this.mobileSelect2)

})




        this.mobileSelect1 = new MobileSelect({
          trigger: '.choseid' ,
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
       
       
        this.mobileSelect3 = new MobileSelect({
          trigger: '.carid' ,
          title: '选择车辆类型',
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
            
            
          }
        });

//微信接口
this.$http.post(`http://aj.kingwingaviation.com/alliance/api/wechat/getJSApiTicket?url=${encodeURIComponent(location.href.split('#')[0])}`).then(res => {
            let js_sdk = res.data.payload
             console.log('~~~')
             console.log(js_sdk)
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: js_sdk.appId, // 必填，公众号的唯一标识
                timestamp: js_sdk.timestamp, // 必填，生成签名的时间戳
                nonceStr: js_sdk.nonceStr, // 必填，生成签名的随机串
                signature: js_sdk.signature,// 必填，签名，见附录1
                jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        })
        wx.ready(() => {
            console.log('jssdk ok!')
        })
      },
methods:{
        // 选择权益人的按钮
        people:function(){
            console.log(1)
           this.mobileSelect2.show();
        },
        payfor:function(){
            // 登录验证功能
            if(this.realName==''){
                this.isname=true
            }
            if( this.idNumber==''){
                this.isnumber=true;
            }
            if(this.mobile==''){
                this.ismobile=true;
            }
            if(this.plateNumber==''){
                this.isplateNumber=true;
            }
            if(this.owner==''){
                this.isowner=true;
            }
            if(this.vin =='') {
                this.isvin=true;
            }
            let realName=this.realName;  
                    let mobile=this.mobile;
                    let idType=0;
                    let idNumber=this.idNumber;
                    var array={realName:this.realName,mobile:this.mobile,idType:0,idNumber:this.idNumber };
                    console.log(array);
                    var personUserInfo=[];
                    personUserInfo.push(array);
                    console.log(personUserInfo);

            this.$http({
                method:'post',
                url:'wechat/order/addOrder',
                params:{
                    personUserInfo: JSON.stringify(personUserInfo),
                    packageId:this.packageId,
                    plateNumber:this.plateNumber,
                    vehicleType:this.vehicleType,
                    owner:this.owner,
                    vin:this.vin
                }
               
            }).then(res=>{
                console.log(res);
                    //  console.log(personUserInfo);

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
                  let message=res.data.message
                        alert(message)  
                
                  }

            })
                   
            
        
                  

           


        },
        tx:function(){
            this.isshow=true
        },
        txr:function(){
            this.ishow=true
        },
      chose:function(){
          this.mobileSelect1.show();
      },
      car:function(){
          this.mobileSelect3.show();
      },



}

  }  

</script>



<style scoped>
.qyc{
    background-color: #fff;
}
.qyr{
    background-color: #fff;
}
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

