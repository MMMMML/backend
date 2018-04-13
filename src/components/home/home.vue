<template>
  <div class="home">
        <div class="banner">
                <button> 点击购买</button>
        </div>
<div class="title">
    <i>空中服务</i>
    <span>
        <img src="../../assets/image/home/icon-logo-color.png" alt="">
    </span>
</div>

  <!-- 轮播图 -->
  <mt-swipe :auto="0"  >
      <mt-swipe-item >
        <img src="../../assets/image/home/icon-logo-color.png" alt="">
      </mt-swipe-item>
       <mt-swipe-item>
        <img src="../../assets/image/home/button-me.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/image/home/button-homepage.png" alt="">
      </mt-swipe-item> 
    </mt-swipe>

  </div>

 
</template>


<script>
export default{
   data() {

    },
    created() {
        console.log(this.$http);
        this.login();

    },
    methods:{
        login(){
            const redirect = `http://aj.kingwingaviation.com/alliance-java/wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance-html/wechat/#/home')}`
            

            // this.$http
            // .get(``)
            // .then(res => {
            //  console.log(res);
            // });
           function getCookie(name){

             }
    if(document.cookie.getCookie("sessionId") == null ){
            window.location.href = redirect;
   }

        }

        }
    }
  

    
</script>



<style>

.banner{
    width: 100%;
    height: 430px;
    background-color: deepskyblue;
}
.banner button{
    width: 235px;
    height: 46px;
    margin:307px 70px auto ;
    border-radius: 25px;
    font-size: 0.8rem;
    color: #fff;
    background-color: transparent;
}
/* 轮播图区域 */
.title{
    width: 80px;
    height: 28px;
    margin-left: 20px;
    margin-top:10px;
    position: absolute;
}
.title i{
    position: relative;
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
}
.title span{
    margin-left: 80px;
top: -20px;;  
  position: relative;
  display: block;
}
.mint-swipe-items-wrap{
    margin-top: 50px;
    width: 400px;
    height: 100px;
    /* background-color: red; */
}


</style>
