<template>
  <div class="container">
    <div class="mainlogo" @click="goProduct('/product')"></div>
    <div class="swiper_list">
      <div class="title">
        <div class="content">
          <span>空降服务</span><span><img src="../../assets/image/home/icon-logo-color.png"></span>
        </div>
      </div>
      <div class="swiper_wrapper">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <swiper-slide v-for='(item, index) of banners' :key='index' @click.native='goProduct(item.path)'>
            <img :src="item.src">
          </swiper-slide>
        </swiper>
        <div class="content_wrapper">
          <h3 class='small_title'>{{ banners[index].title }}</h3>
          <p>{{ banners[index].content }}</p>
        </div>
      </div>
    </div>
    <div class="tab_box vux-1px-t">
      <router-link tag='div' class="tab-item" to='/home'>
        <img src="../../assets/image/home/button-homepage.png" alt="">
        <span class="tab-label">首页</span>
      </router-link>
      <div class="tab-item">
        <img src="../../assets/image/home/button-help.png" alt="">
        <span class="tab-label"> <a href="tel:10086" style='color: #4B4B4B;'>一键呼救</a></span>
      </div>
      <router-link tag='div' class="tab-item" to='/mine'>
        <img src="../../assets/image/home/button-me.png" alt="">
        <span class="tab-label">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
let index = 1
export default {
  data() {
    return {
      banners:[
        {
          src: require('../../assets/image/home/banner4.png'),
          title: '世界真大，任性出发',
          content: '自驾7日直升机院前救援+地面120协调+道路救援+出险代步车服务',
          path: '/product'
        }, {
          src: require('../../assets/image/home/banner2.png'),
          title: '都说我太过严肃，我只在意你是否需要保护',
          content: '单人短期空中直升机院前救援+地面120协调服务',
          path: '/bodyguard'
        }, {
          src: require('../../assets/image/home/banner1.png'),
          title: '命运可以改变，我永远在你身边',
          content: '单人全年空中直升机医疗救援+地面120协调服务',
          path: '/knight'
        }, {
          src: require('../../assets/image/home/banner.png'),
          title: '每天都要保护你，我比时间更爱你',
          content: '双人全年空中直升机医疗救援+地面120协调+道路救援服务',
          path: '/cpb'
        }, {
          src: require('../../assets/image/product/banner-皇家护卫@3x.png'),
          title: '守护你们，是我一生最重要的决定',
          content: '家庭全年直升机医疗救援+地面120协调+道路救援+出险代步车服务',
          path: '/protect'
        }
      ],
      index: 0,
      notNextTick: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10
      }
    }
  },
  created() {
    if (!Cookies.get('sessionId')) {
      const redirect = `http://aj.kingwingaviation.com/alliance-java/wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance-html/wechat/#/home')}`
      window.location.href = redirect
    }
  },
  mounted() {
    let that = this
    this.swiper.on('slideChangeTransitionEnd', () => {
      that.index = this.swiper.activeIndex
    })
  },
  methods:{
    goProduct(path) {
      this.$router.push(path)
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style scoped lang='less'>
@import '~vux/src/styles/1px.less';
.container {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  padding-bottom: 45px;
  color: #4B4B4B;
  .mainlogo {
    width: 100vw;
    height: 112vw;
    background: url('../../assets/image/home/banner3.jpg') 0 0 ~'/' 100% 100%;
  }
  .swiper_list {
    height: 328px;
    .title {
      height: 60px;
      padding: 20px 20px 12px 20px;
      .content {
        height: 28px;
        display: flex;
        align-items: center;
        span:first-child {
          line-height: 28px;
          margin-right: 10px;
        }
        span:last-child {
          height: 24px;
          width: 24px;
          display: flex;
          align-items: center;
        }
      }
    }
    .swiper_wrapper {
      width: 100%;
      .swiper-container {
        .swiper-slide {
          width: 89.333vw;
          height: 169px;
          border-radius: 5px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .content_wrapper {
        padding: 10px 20px;
        h3 {
          font-size: 14px;
        }
        p {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
  .tab_box {
    position: fixed;
    bottom: 0;
    left: 0;
    // height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 9;
    .tab-item {
      flex: 1;
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      padding: 4px 0;
      img {
        width: 17px;
        height: 23px;
        margin-bottom: 6px;
      }
      &:nth-of-type(1) {
        img {
          width: 24px;
          height: 22px;
        }
      }
      &:nth-of-type(3) {
        img {
          width: 14px;
          height: 22px;
        }
      }
    }
  }
}
</style>
