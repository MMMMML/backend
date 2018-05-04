<template>
  <div>
      <div class="md-subhead">
        <span>Free Mode / No Fixed Positions</span>
        <span>（</span>
        <span>free 模式 / 不贴合边缘</span>
        <span>）</span>
      </div>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class='haha'>Slide 1</swiper-slide>
        <swiper-slide class='haha'>Slide 2</swiper-slide>
        <swiper-slide class='haha'>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped lang='less'>
  .swiper-wrapper {
    display: flex !important;
    .haha {
      display: inline-block;
    }
  }
</style>
