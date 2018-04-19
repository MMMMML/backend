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
  <div class="lb_t">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(banner,index) in banners" :key="index" @click.native='goproduct(index)'>
        <img v-if="banner.src" :src="banner.src">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    
    


  </div>


     <!-- 文字信息 -->
      <div class="title_1">
        <p>直升机院前急救+医疗转运9折</p>
        <p class="two">都说我太过严肃，我只在意你是否需要保护</p>
      </div>

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
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {  
            swiper,  
            swiperSlide  
        },

computed:{
  swiper() {  
                return this.$refs.mySwiper.swiper  
            }  
},

    data() {
      
      return {
        banners:[
          { src :require('../../assets/image/home/banner4.png')},
          { src :require('../../assets/image/home/banner1.png')},
          { src :require('../../assets/image/home/banner2.png')},
          { src :require('../../assets/image/home/banner.png')}

          ],
        swiperOption:{
          notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,
                // preventClicks:false, 
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法    
                        this.index = swiper.realIndex;  
                    }  
                }  
        }

      },
    
   
    // created() {
    //   if (!Cookies.get('sessionId')) {
    //       const redirect = `wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance-html/wechat/#/home')}`
    //       window.location.href = redirect
    //   }
    // },
    methods:{
        goproduct:function(index){
           if( index==0){
            this.$router.push('/cpa')
           }
          if(index==3){
            this.$router.push('/cpb')
          } 



          console.log(index)
        },
    }
  }

</script>



<style scoped>

  .banner {
    width:100%;
    height: 403px;
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
   border-top: 1px solid #ccc; 
    box-shadow: 0px 0px 15px -2px #bbb;
    overflow: hidden;
  } 

  .mui-bars span {
    color: #4b4b4b;
    font-size: 0.6rem;
  }

  .mui-tab-item {
    padding-top: 0.1rem;
  }

  /* 轮播图区域 */
   
.swiper-wrapper {
  margin-top: 10px;
  height: 230px;
}

.lb_t img {
  width: 100%;
  height: 100%;
}



/* 轮播结束 */
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
    margin-top: -24px;
    position: relative;
    display: block;
  }
.lb_t{
  margin-top:40px;
}
.lb_cp img{
  width: 335px;
  height: 170px;
  margin-left: 15px;
}

  .title_1{
    display: block;
    height: 100px;
    margin-left: 20px;
  }
  
  .title_1 p{
    font-weight: bolder;
    color: #000;
    font-size: 14px;
  }
  .title_1 .two{
    margin-top:-10px;
    font-weight: normal;
    color: #4b4b4b;;
  }
   

</style>
