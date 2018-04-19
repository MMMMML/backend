<template>
    <div class="product">
        <div class="tp">
            <img src="../../assets/image/product/banner4.png" alt="">
        </div>
     <div class="title">
         <div class="title_o">7天自驾综合救援权益</div>
         <div class="title_1">
             日期自定义  <i>·</i>  一人一车 <i>·</i>  可增加同行人  <i>·</i>  私家车专享
         </div>
         <div class="title_2">
             一个人看风景，一群人去狂欢，自驾旅途的无限美好怎能因一点“意外”就戛然而止？！爱车突发状况需要帮助？急需代步车继续旅程？赶快带上你的急速全明星，帮你解决各种小意外，更有直升机紧急医疗救援全程为你保驾护航！还犹豫什么？记得给同行伙伴也送上一份贴心直升机救援守护哦！
         </div>
         </div> 
           <!--字体图标部分  -->
        <div class="t_tp">
            <p>专属特权</p>
            <div class="tp_1">
           <img src="../../assets/image/product/icon-helicopter.png" alt="">
                <span>直升机院前急救</span> 
                </div>
                <div class="tp_2">
            <img src="../../assets/image/product/icon-call.png" alt="">
                <span>120协调</span>
                </div>
                <div class="tp_3">
                     <img src="../../assets/image/product/icon-truck.png" alt="">
                <span>道路救援</span>
                    </div>     
         
            <div class="tp_4">  
              <img src="../../assets/image/product/icon-car.png" alt="">
                <span>代步车</span>
                </div>
               
        </div>
        <!-- 生效日期 -->
            <div class="time">
                    <p>生效日期</p>
                    <input type="text">
            </div>
   

        <div class="money">
                <i>增加权益人</i> <span>￥{{main.addPrice || 0 }}/人</span>
                
         <div class='wrapper'>
                <div class='box minus' v-on:click='min' ref='minus'>-</div>
                <span class='count'>{{ counter }}</span>
                <div class='box add' v-on:click='add'>+</div>
    
              </div>
                
        </div>
        <!-- 一些基础信息 -->
        <div class="msg">
                <div class="msg_1">
                    权益人须知
                </div>
                <div class="msg_2">
                    直升机救援服务 
                </div>
                <div class="msg_3">
                    地面120服务
                </div>
                <div class="msg_4">
                    道路救援服务
                </div>
                <div class="msg_5">
                    代步车服务
                </div>
                <div class="msg_6">
                    免责申明
                </div>
        </div>
        <div class="ft_t">
                <img src="../../assets/image/product/icon_logo_color.png" alt="">
        </div>
    <div class="mz">
        <p>合计：<i>￥ {{ main.price + counter*main.addPrice ||0}}</i> </p>
        <button v-on:click='buy'> 立即购买</button>
    </div>

    </div>
</template>


<script>
import Check from '@/util/checkIDAuth'
export default{
 data() {
      return {
          birthday: '',
          main: '',  
         counter:0
        
      }
    },
    created (){
        // 发送请求 
     this.$http.get('wechat/package/queryPackageById?id=A').then(response => {
               console.log(response.data);
               var content = response.data.payload.specifics;
            //    console.log(content);
               const x = JSON.parse(content);
            //    console.log(x);
            this.main = x.main;
        // var money=99+this.counter*35;
        //  console.log(money);
   }
   );
        
    },
     methods: {
        add: function() {
            this.counter = parseInt(this.counter) + 1;
        },
        min: function(){
            if(this.counter > 0){
                this.counter = parseInt(this.counter) - 1;
            }
        },
        // 点击
        buy: function(){
            Check().then(res => {
                console.log('success');
                // var money=99+this.counter*35;
                // console.log(money);
                // this.$router.push({
                //     path:'/id', 
                //     params:{
                //         packageId: 'A',
                //         counter: this.counter
                //     }
                // });
                this.$router.push(`/pay?packageId=A&counter=${this.counter}`)
            })
        }
        
    }
}
    
</script>


<style scoped>

.product{
 background-color:#D8D8D8;
 overflow-x: hidden; 
}
.tp{
    width: 100%;
    
    height: 210px;
}
.title{
    background-color: #fff;
    width: 100%;
    height: 203px;
}
.title_o{
    color: #4B4B4B;
    width: 172px;
    height: 25px;
    font-size: 18px;
    margin-left: 8px;
    padding-top: 16px;
    font-weight: bolder;
    
}
.title_1{
    font-size: 14px;
    color: #FF0000;
      padding-left: 8px;
      margin-top:10px;
      font-weight: bold;
}
.title_1 i{
    font-size: 20px;
}
.title_2{
    margin-top:20px;
    font-size: 14px;
    color: #4B4B4B;
    padding-left: 10px;
    line-height: 20px;
    font-family: 'PingFangSC';
    word-wrap: break-word; 
word-break: normal; 
}
/* 字体图标部分 */
.t_tp{
    background-color: #fff;
    margin-top:5px;
}
.t_tp  img{
width: 40px;
height: 40px;
border:1px dashed #4B4B4B;
}
.t_tp span{
    display: block;
    font-size: 12px;
}
.tp_1 img{
margin-left: 25px;
}
.tp_2{
    margin-left: 120px;
    margin-top: -65px;
}
.tp_3{
    margin-left: 210px;
    margin-top: -65px;
}
.tp_4{
    margin-left: 300px;
margin-top: -65px;
}
/* 生效日期 */
.time{
    background-color: #fff;
}
.time p{
    display: block;
    width: 64px;
    height: 22px;
    font-size: 16px;
    color: #4B4B4B;
    margin-left: 20px;
}
.time input{
    width: 80px;
    height: 35px;
    margin-left: 30px;
    background:url('../../assets/image/product/icon-calendar.png') no-repeat right;   
}
.money{
    background-color: #fff;
}
.money i{
    font-weight: bolder;
    font-size: 16px;
    margin-left: 20px;
    font-style: normal;
}
.money span{
    color: #FF0000;
    font-weight: bolder;
}

.num{
        padding: 0 15px;
}
        .wrapper{
          display: flex;
          flex-flow: row nowrap;
          margin-top: 5px;
          margin-left: 20px;
        }
          .box{
            width: 30px;
            height: 30px;
            border: 1px solid #999;
            line-height: 30px;
            text-align: center;
            font-size: 16px;
          }
          .count{
            height: 30px;
            width: 48px;
            line-height: 30px;
            text-align: center;
            
          }
        
      
/* 基础信息 */
.msg{
    background-color: #fff;
    margin-top: 10px;
    padding-top: 15px;
    height: 300px;
    width: 100%;
}
.msg .msg_1{
     border-bottom: 1px dashed #000;
 }
.msg div{
    height: 38px;
    line-height: 38px;
    margin-left: 20px;
    border-bottom: 1px solid #000;
 }
 .ft_t{
     background-color: #fff;
     width: 100%;
     height: 120px;  
 }
 .ft_t img{
     margin-top:37px;
     margin-left: 116px;
 }
.mz{
    background-color: #fff;
    margin-top: 5px;
    height: 40px;
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
