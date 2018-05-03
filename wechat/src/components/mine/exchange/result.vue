<template>
  <div class="container">
    <div class="content">
      <!-- <img src="../../../assets/image/mine/error@2x.png" alt=""> -->
      <img src="../../../assets/image/mine/complete@2x.png" alt="">
      <div class='text'>
        <span>恭喜您获得</span>
        <p>3天短期</p>
        <span>20180501 至 20180605</span>
      </div>
    </div>
    <div class="btn" @click='view'>查看</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    view() {
      console.log('view')
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  .content {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: #fff;
    padding-top: 70px;
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 22px;
    }
    .text {
      text-align: center;
      color: #888;
      font-size: 14px;
      p {
        color: #656565;
        margin: 0;
        line-height: 28px;
        font-size: 18px;
      }
      span {
        display: inline-block;
        height: 20px;
        line-height: 20px;
      }
    }
  }
  .btn {
    width: 100%;
    height: 45px;
    background: #f00;
    color: #fff;
    font-size: 16x;
    text-align: center;
    line-height: 45px;
  }
}
</style>
