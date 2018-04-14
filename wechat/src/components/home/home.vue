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
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <img src="../../assets/image/home/icon-logo-color.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/image/home/button-me.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/image/home/button-homepage.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-bars">

      <router-link class="mui-tab-item" to='/home'>
        <div>
          <img src="../../assets/image/home/button-homepage.png" alt="">
        </div>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <div class="mui-tab-item" @click="callphone()">
        <div>
          <img src="../../assets/image/home/button-help.png" alt="">
        </div>
        <span class="mui-tab-label">一键呼救</span>
      </div>

      <router-link class="mui-tab-item" to='/mine'>
        <div>
          <img src="../../assets/image/home/button-me.png" alt="">
        </div>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </div>


  </div>


</template>


<script>
  import Cookies from 'js-cookie'
  export default {
    data() {
      return {}
    },
    created() {
      if (!Cookies.get('sessionId')) {
          const redirect = `http://aj.kingwingaviation.com/alliance-java/wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance-html/wechat/#/home')}`
          window.location.href = redirect
      }
    }

  }

</script>



<style>
  .banner {
    width: 100%;
    height: 19rem;
    background-color: deepskyblue;
  }

  .banner button {
    width: 13rem;
    height: 1.6rem;
    margin: 307px 70px auto;
    border-radius: 25px;
    font-size: 0.8rem;
    color: #fff;
    background-color: transparent;
  }

  .mui-bars {
    display: flex;
    justify-content: space-around;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
    width: 100%;
    background: #fff;
    /* border-top: 1px solid #ccc; */
    box-shadow: 0px 0px 15px -2px #bbb;
  }

  .mui-bars span {
    color: #4b4b4b;
    font-size: 0.6rem;
  }

  .mui-tab-item {
    padding-top: 0.1rem;
  }

  /* 轮播图区域 */

  .title {
    width: 10rem;
    height: 2rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: absolute;
  }

  .title i {
    position: relative;
    display: block;
    margin-top: 0.3rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
  }

  .title span {
    margin-left: 4.5rem;
    margin-top: -1rem;
    position: relative;
    display: block;
  }

  .mint-swipe-items-wrap {
    margin-top: 2.5rem;
    width: 400px;
    height: 100px;
    /* background-color: red; */
  }

</style>
