<template>
  <div id='cbp'>
      <div class="tab">
          <img src="../../assets/image/home/banner1.png" alt="">
      </div>
      <div class="title">
          <p> 单人全年直升机救援权益</p>
            <div class="tips">
                <div class="tip1">全年守护</div>
                <div class="tip2">多项特权</div>
                <div class="tip3">可享增值服务</div>
            </div>
            <div class='word'>
                像骑士的忠诚，不畏惧意外的残忍，一整年为你尽忠职守发挥骑士精神！愿生活温柔以待却也难免遭遇意外？有了空降骑士再也不怕命运多劫，每分每秒紧急待命，随时为你出发！ 即日起，空降骑士还提供个人全年道路救援和代步车服务，尽显绅士风度，随时为你守护！
            </div>
      </div>
<!-- 特权图标 -->
        <div class="tq">
            <p>专属特权</p>
            <div class="tip_img">
                <div class="tg1">
                    <img src="../../assets/image/product/icon-helicopter.png" alt="">
                        <p>直升机院前急救</p>
                </div>
                <div class="tg2">
                    <img src="../../assets/image/product/icon-call.png" alt="">
                    <p>120协调</p>
                </div>
                <div class="tg3">
                    <img src="../../assets/image/product/icon-stretcher.png" alt="">
                    <p>医疗转运9折</p>
                </div>
            </div>
                <!-- 增值权益 -->
                <div class="more">
                    <p>增值权益</p>
                        <ul class="mo">
                               <li> <div v-bind:class="{bgc: active}" v-on:click="change"></div></li>
                               <li>  ￥69</li>       
                        </ul>
                        
                    <div class="tg5">
                        <img src="../../assets/image/product/icon-car.png" alt="">
                        <p>代步车</p>
                    </div>
                        <div class="tg6">
                            <img src="../../assets/image/product/icon-truck.png" alt="">
                            <p>道路救援</p>
                        </div>

                </div>
        </div>
<!-- 文本 -->
            <div class="notice">
                <div class="notice-part">
                    <p>权益人须知</p>
                    <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-part">
                    <p>直升机救援服务</p>
                    <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-part">
                    <p>地面120服务</p>
                    <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-part">
                    <p>道路救援服务</p>
                    <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-part">
                    <p>代步车服务</p>
                    <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-part">
                    <p>免责申明</p>
                     <img src="../../assets/image/mine/Chevron@3x.png" alt="">
                </div>
                <div class="notice-logo">
                    <img src='../../assets/image/product/icon_logo_color.png' alt="">
                </div>
            </div>

            <!-- 付款 -->
                    <div class="payment">
                        <p style='font-size:20px;color:red;font-weight:bolder;'>合计：￥449</p>
                        <p class="payment-buy" v-on:click='buy'>立即购买</p>
                    </div>

  </div>
</template>


<script>
import Check from '@/util/checkIDAuth'
    export default{
        data(){
            return{
                active:false
            }
        },

    methods:{
        change:function () { 
            this.active = true
         },
        buy:function(){
            Check().then(res => {
                console.log('success');

                this.$router.push(`/payC?packageId=C&`)
            })
        }
    }

    }
</script>


<style scoped>
.title{
    background-color: #fff;
}
.title p{
    margin-left: 20px;
    font-size: 18px;
    color:#4B4B4B;
    font-weight: bolder;
}
.tip1{
    width: 60px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    padding-right: 5px;
    margin-left: 20px;
    border-radius: 4px;
}
.tips div:nth-child(2){
    margin-left: 90px;
    margin-top: -20px;
    border-radius: 4px;
}

.tip2{
    width: 76px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    margin-left: 170px;
    margin-top: -20px;
    padding-right: 5px;
    border-radius: 4px;
}

.tip3{
    width: 86px;
    height: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #FF0000;
    border: 1px solid #FF0000;
    padding-left: 4px;
    margin-left: 180px;
    margin-top: -20px;
    padding-right: 5px;
    border-radius: 4px;
}
.word{
    margin-top: 7px;
    font-size: 14px;
    margin-left: 20px;
    padding-right: 10px;
    color: #4B4B4B;
}
.tq{
    margin-top: 10px;
    width: 100%;
    height: 228px;
    background-color: #fff;
}
.tq p{
    display: block;
    width: 64px;
    height: 22px;
    font-size: 16px;
    color: #4B4B4B;
    font-weight: bolder;
    margin-left: 10px;
}
.tg1 img{
    margin-left: 30px;
}
.tg1 p{
    font-size: 12px;
    color: #4B4B4B;
    width: 84px;
}
.tg2{
    margin-left: 100px;
    margin-top: -80px;
}
.tg2 img{
    margin-left: 10px;
}
.tg2 p{
    font-size: 12px;
    color: #4B4B4B;
    
}
.tg3{
    margin-left: 190px;
    margin-top:-80px ;
}
.tg3 p{
    font-size: 12px;
    color: #4B4B4B;
    width: 68px;
    margin-left: -10px;
}
.tg6{
    margin-left: 180px;
    margin-top: -80px;
}
.tg6 img{
margin-left: 20px;
}
.mo{
    list-style: none;
}
.mo li{
    float: left;
}
.mo li div{
    margin-top: 4px;
    border-radius: 10px;
    background-color:#fff;
    border: 1px solid #4B4B4B;
    width:10px;
    height:10px;
}
.mo li .bgc{
    width:10px;
    height:10px;
     margin-top: 4px;
    border-radius: 10px;  
    background-color: #f00;
}
.tg5 img{
margin-left: 20px;
margin-top: -10px;
}
.tg5 p{
    margin-left: 106px;
}




.notice{
     background: #fff;
        width: 100%;
        height: 100%;
        margin-top: 10px;
}
.notice-part{
            height: 40px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
}
.notice-part img{
    width: 12px;
}
.notice-logo{
                text-align: center;
                padding: 40px;
                margin-top: 10px;
        }
.payment{
        height: 50px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        line-height: 50px;
}

.payment-buy{
        height: 100%;
        width: 100px;
        color: white;
        line-height: 50px;
        background: red;
        text-align: center;
    }
</style>
