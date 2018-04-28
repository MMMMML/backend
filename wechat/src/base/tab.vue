<template>
  <div class="tab_box vux-1px-t">
    <router-link tag='div' class="tab-item" to='/home'>
      <picture>
        <source srcset='../assets/image/home/banner1.png' media='(min-device-pixel-ratio: 2)'/>
        <source srcset='../assets/image/home/banner2.png' media='(min-device-pixel-ratio: 3)'/>
        <img src="../assets/image/home/button-homepage.png"/>
      </picture>
      <span class="tab-label">首页</span>
    </router-link>
    <a class="tab-item" href="tel:02160554929">
      <img src="../assets/image/home/button-help.png" alt="">
      <span style='color: #4B4B4B;' class="tab-label">一键呼救</span>
    </a>
    <div @click='toMine' class="tab-item">
      <img src="../assets/image/home/button-me.png" alt="">
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
      this.$http.get("wechat/auth/getCurrentUser").then(res => {
        const userinfo = res.data.payload
        Storage.session.set('userInfo', JSON.stringify(userinfo))
        Check('/mine').then(res => {
          this.$router.push('/mine')
        })
      }).catch(e => {
        Cookies.remove('sessionId')
        const redirect = `http://aj.kingwingaviation.com/alliance-java/wechat/auth/fuwuLogin?state=${encodeURIComponent('http://aj.kingwingaviation.com/alliance-html/wechat/#/home')}`
        window.location.href = redirect
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
</style>