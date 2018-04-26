<template>
  <div class="tab_box vux-1px-t">
    <router-link tag='div' class="tab-item" to='/home'>
      <img src="../assets/image/home/button-homepage.png" alt="">
      <span class="tab-label">首页</span>
    </router-link>
    <div class="tab-item">
      <img src="../assets/image/home/button-help.png" alt="">
      <span class="tab-label"> <a href="tel:10086" style='color: #4B4B4B;'>一键呼救</a></span>
    </div>
    <router-link tag='div' class="tab-item" to='/mine'>
      <img src="../assets/image/home/button-me.png" alt="">
      <span class="tab-label">我的</span>
    </router-link>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
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