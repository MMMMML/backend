<template>
  <div class="container">
    <div class="content">
      <img src="../../../assets/image/mine/error@2x.png" alt="">
      <!-- <img src="../../../assets/image/mine/complete@2x.png" alt=""> -->
      <!-- <div class='text'>
        <span>恭喜您获得</span>
        <p>3天短期</p>
        <span>20180501 至 20180605</span>
      </div> -->
      <div class="fail">
        <h3>兑换失败</h3>
        <p>您输入的权益码已经过期啦</p>
        <p>下次再来吧</p>
      </div>
    </div>
    <div class="btn">
      <div class="left" @click='goHome'>返回首页</div>
      <div class="right" @click='goMine'>我的权益</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    if (1 > 0) {
      document.title = '权益兑换'
    } else {
      document.title = '购买成功'
    }
  },
  methods: {
    view() {
      console.log('view')
    },
    goHome() {
      this.$router.push('/home')
    },
    goMine() {
      this.$router.push('/mine')
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
    .fail {
      text-align: center;
      h3 {
        color: #4B4B4B;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 5px;
      }
      p {
        color: #D24232;
        line-height: 20px;
        margin: 0;
      }
    }
  }
  .btn {
    width: 100%;
    height: 45px;
    color: #fff;
    font-size: 16x;
    line-height: 45px;
    display: flex;
    div {
      flex: 1;
      border: 1px solid #ccc;
      text-align: center;
      color: #4b4b4b;
      background: #fff;
    }
  }
}
</style>
