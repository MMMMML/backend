<template>
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
</template>
<style scoped lang='less'>
</style>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'  
  export default {
    data() {
      const INIT = 1
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 8,
          initialSlide: INIT,
          idx: INIT,
          onSlideChangeStart (swiper) {
            this.idx = swiper.activeIndex
          }
        },
        banners:[
          {
            src: require('./assets/image/home/banner_2.jpeg'),
            title: '都说我太过严肃，我只在意你是否需要保护',
            content: '单人短期空中直升机院前救援+地面120协调服务',
            path: '/bodyguard'
          }, {
            src: require('./assets/image/home/banner_1.jpeg'),
            title: '命运可以改变，我永远在你身边',
            content: '单人全年空中直升机医疗救援+地面120协调服务',
            path: '/product?id=C'
          },
          {
            src: require('./assets/image/home/banner_4.jpeg'),
            title: '世界真大，任性出发',
            content: '自驾7日直升机院前救援+地面120协调+道路救援+出险代步车服务',
            path: '/product?id=A'
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
