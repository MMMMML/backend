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
        <input type="text" class="human-input"  placeholder="请输入姓名"  v-model='name'>
        <div style="display:flex;align-items: center;" >
          <div class="btn"  >证件类型</div>
        </div>
        <div class="warning"  v-show='!isname'>
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:30%;padding-left:5%">证件类型</p>
        <p  style="width:62%;padding-left: 1rem;"  ></p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text"  class="human-input" >
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

       <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text"  class="human-input" >
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机号码不能为空</span>
        </div>
       </div>

    

     </div>
</div>

      
<div class="qyc" >
                        <!-- 填写页面 -->
        <div class="tianx" v-show="!ishow">
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
        <input type="text" class="human-input"  placeholder="请输入车牌号" >
        <div style="display:flex;align-items: center;" >
          <div class="btn"  >选择车辆</div>
        </div>
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
    </div>
<!-- 证件类型  -->
      <div class="man">
        <p style="width:30%;padding-left:5%">车辆类型</p>
        <p  style="width:62%;padding-left: 1rem;"  ></p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
       </div>

      </div> 
<!-- 证件号码 -->
     <div class="man">
        <p class="human-name">所有人</p>
        <input type="text"  class="human-input" >
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

             <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text"  class="human-input" >
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
       </div>

       <!-- 手机号码 -->
       <div class="man">
        <p class="human-name1">车辆识别代号</p>
        <input type="text" class="human-input"  placeholder="请输入代号" >
        <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>车辆识别代号错误</span>
        </div>
       </div>




     </div>
</div>








            <!-- 付款 -->
            <div class="payment">
                    <p>合计：￥998</p>
                    <p class="payment-buy" @click="payfor">立即购买</p>
            </div>
  </div>


</template>

<script>
  export default{
      data(){
          return{
                isshow:false,
                ishow:false,
                isname:false,
        personUserInfo:[],


          }
      },


methods:{
        payfor:function(){
            console.log(1);
        },
        tx:function(){
            this.isshow=true
        },
        txr:function(){
            this.ishow=true
        }
}

  }  

</script>



<style scoped>
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

