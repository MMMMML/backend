<template>
  <div class="container">
    <div class="mainlogo" @click="goProduct('/product?id=A')">
      <img src="../../assets/image/home/banner3.jpg">
    </div>
    <div class="swiper_list">
      <div class="title">
        <div class="content">
          <span>空降服务</span><span><img src="../../assets/image/home/icon-logo-color@2x.png"></span>
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
    <Tab></Tab>
    <div v-show='modalFlag' class="mask" @touchmove='handleTouchMove'>
      <div class="modal" @click='handleClick'>
        <div class="btn_image">
          <img class='heart_left' src="./heart5.png" alt="">
          <img class='heart_right' src="./heart5.png" alt="">
        </div>
        <img @click.stop='handleClose' class='close_image' src="./button-window-close@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Tab from '@/base/tab'
import 'swiper/dist/css/swiper.css'
import { mapGetters, mapMutations } from 'vuex'
let index = 1
export default {
  data() {
    return {
      banners:[
        {
          src: require('../../assets/image/home/banner_2.jpeg'),
          title: '都说我太过严肃，我只在意你是否需要保护',
          content: '单人短期空中直升机院前救援+地面120协调服务',
          path: '/bodyguard'
        }, {
          src: require('../../assets/image/home/banner_1.jpeg'),
          title: '命运可以改变，我永远在你身边',
          content: '单人全年空中直升机医疗救援+地面120协调服务',
          path: '/product?id=C'
         },
        {
          src: require('../../assets/image/home/banner_c.jpeg'),
          title: '每天都要保护你，我比时间更爱你',
          content: '双人全年空中直升机医疗救援+地面120协调+道路救援服务',
          path: '/product?id=D'
        }, {
          src: require('../../assets/image/home/banner_e.jpeg'),
          title: '守护你们，是我一生最重要的决定',
          content: '家庭全年直升机医疗救援+地面120协调+道路救援+出险代步车服务',
          path: '/product?id=E'
        }, 
        {
          src: require('../../assets/image/home/banner_4.jpeg'),
          title: '世界真大，任性出发',
          content: '自驾7日直升机院前救援+地面120协调+道路救援+出险代步车服务',
          path: '/product?id=A'
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
  mounted() {
    let that = this
    this.swiper.on('slideChangeTransitionEnd', () => {
      that.index = this.swiper.activeIndex
    })
  },
  methods:{
    goProduct(path) {
      this.$router.push(path)
    },
    handleTouchMove(e) {
      e.preventDefault()
    },
    handleClick() {
      this.$router.push('/product?id=D')
    },
    handleClose() {
      this.SET_MODAL_FLAG(false)
    },
    ...mapMutations(['SET_MODAL_FLAG'])
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    ...mapGetters(['modalFlag'])
  },
  components: {
    swiper,
    swiperSlide,
    Tab
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
    img {
      width: 100%;
      height: 100%;
    }
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
          display: inline-block;
          height: 23px;
          width: 25px;
          display: flex;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
          }
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
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      width: 300px;
      height: 400px;
      border-radius: 4px;
      background: no-repeat url('http://owvihnwpv.bkt.clouddn.com/xiari.png') 0 0 ~'/' 100% 100%;
      position: relative;
      .btn_image {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 131px;
        transform: translate3d(-50%, 0, 0);
        width: 131px;
        height: 70px;
        .heart_left {
          position: absolute;
          left: 27px;
          top: 29px;
          width: 8px;
          height: 8px;
          animation: myLeftUp 1.5s ease-out infinite;
        }
        .heart_right {
          position: absolute;
          right: 27px;
          top: 29px;
          width: 8px;
          height: 8px;
          animation: myRightUp 1.5s ease-out infinite;
        }
      }
      .close_image {
        position: absolute;
        right: 0;
        top: -42px;
        width: 26px;
      }
    }
  }
}
@keyframes myLeftUp {
  0% {
    top: 29px;
    left: 27px;
    opacity: 1;
  }
  70% {
    left: 10px;
    top: -10px;
    opacity: 0;
  }
  90% {
    top: 29px;
    left: 27px;
    opacity: 0;
  }
  100% {
    top: 29px;
    left: 27px;
    opacity: 0;
  }
}
@keyframes myRightUp {
  0% {
    top: 29px;
    right: 27px;
    opacity: 1;
  }
  70% {
    right: 10px;
    top: -10px;
    opacity: 0;
  }
  90% {
    top: 29px;
    right: 27px;
    opacity: 0;
  }
  100% {
    top: 29px;
    right: 27px;
    opacity: 0;
  }
}
</style>
