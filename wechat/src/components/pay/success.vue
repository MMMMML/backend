<template>
  <div class="container">
    <div class="content">
      <img src="../../assets/image/mine/complete@2x.png" alt="">
      <div class="success">
        <p>恭喜您获得</p>
        <h4>{{resp.packageMainName}}</h4>
        <p>{{resp.benefitEffectTime | format}} 至 {{resp.benefitExpireTime | format}}</p>
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
        resp:''
    }
  },
  mounted(){
      this.resp =JSON.parse(window.sessionStorage.getItem('businessInfo'))
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    goMine() {
      this.$router.push('/mine')
    }
  },
  filters: {
    format(val) {
      if (val) {
        return val.substr(0, 10)
      }
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
    .success {
      text-align: center;
      h4 {
        color: #4B4B4B;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 5px;
      }
      p {
        color: #4B4B4B;
        line-height: 20px;
        margin: 0;
        font-size: 16px;
        // font-weight: 700;
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
