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
   
  
}
    
</script>



<style>
.banner{
    width: 100%;
    height: 19rem;
    background-color: deepskyblue;
}
.banner button{
    width: 13rem;
    height: 1.6rem;
    margin:307px 70px auto ;
    border-radius: 25px;
    font-size: 0.8rem;
    color: #fff;
    background-color: transparent;
}
/* 轮播图区域 */
.title{
    width: 10rem;
    height: 2rem;
    margin-left: 1rem;
    margin-top:0.5rem;
    position: absolute;
}
.title i{
    position: relative;
    display: block;
    margin-top:0.3rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
}
.title span{
    margin-left: 4.5rem;
  margin-top: -1rem;
  position: relative;
  display: block;
}
.mint-swipe-items-wrap{
    margin-top: 2.5rem;
    width: 400px;
    height: 100px;
    /* background-color: red; */
}


</style>
