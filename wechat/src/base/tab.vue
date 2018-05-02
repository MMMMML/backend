<template>
  <div class="tab_box vux-1px-t">
    <router-link tag='div' class="tab-item item1" to='/home'>
      <img class='img1' src="../assets/image/home/button-homepage@2x.png"/>
      <span class="tab-label">首页</span>
    </router-link>
    <a class="tab-item item2" href="tel:02160554929">
      <img class='img2' src="../assets/image/home/button-help@2x.png" alt="">
      <span style='color: #4B4B4B;' class="tab-label">一键呼救</span>
    </a>
    <div @click='toMine' class="tab-item item3">
      <img class='img3' src="../assets/image/home/button-me@2x.png" alt="">
      <span class="tab-label">我的</span>
    </div>
  </div>
</template>
<script>
import Check from '@/util/checkIDAuth'
import Storage from 'good-storage'
import Cookies from 'js-cookie'
export default {
  data() {
    return {}
  },
  methods: {
    toMine() {
      Check('/mine', this).then(res => {
        this.$router.push('/mine')
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  .tab_box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 9;
    .tab-item {
      height: 100%;  
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      padding: 4px 0;
      &.item1 {
        img {
          width: 24px;
          height: 22px;
        }
        span {
          margin-top: 4px;
        }
      }
      &.item2 {
        img {
          width: 17px;
          height: 23px;
        }
        span {
          margin-top: 3px;
        }
      }
      &.item3 {
        img {
          width: 14px;
          height: 22px;
        }
        span {
          margin-top: 4px;
        }
      }
     
    }
  }
</style>