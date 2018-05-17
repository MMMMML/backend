<template>
  <div class="container">
    <div class="content">
      <img src="../../assets/image/product/success.png" alt="">
      <span>购买成功</span>
      <!-- <img src="../../assets/image/mine/complete@2x.png" alt="">
      <div class="success">
        <p>恭喜您获得</p>
        <h4>{{resp.packageMainName}}</h4>
        <p>{{resp.benefitEffectTime | format}} 至 {{resp.benefitExpireTime | format}}</p>
      </div> -->
    </div>
    <div class="text">
      <div class="success">
        <p>
          <span>权益名称</span>
          <span>{{resp.packageMainName}}</span>
        </p>
        <p>
          <span>订单编号</span>
          <span>{{ resp.outTradeNo }}</span>
        </p>
        <p>
          <span>有效期</span>
          <span>{{resp.benefitEffectTime | format}} 至 {{resp.benefitExpireTime | format}}</span>
        </p>
        <p>
          <span>合计</span>
          <span>￥{{ resp.totalPrice }}元</span>
        </p>
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
        let x = val.substr(0, 10)
        return x.replace(/-/g, '/')
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  .content {
    height: 100px;
    width: 100%;
    background: #fff;
    display: flex;
    padding: 0 20px;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    span {
      color: #4b4b4b;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .text {
    padding: 16px 20px 14px;
    background: #fff;
    margin-top: 10px;
    color: #4b4b4b;    
    p {
      line-height: 20px;
      margin: 0;
      span:first-child {
        display: inline-block;
        width: 56px;
        margin-right: 14px;
      }
      span:last-child {
        color: #4a4a4a;
      }
      &~p {
        margin-top: 5px;
      }
    }
  }
  .btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    color: #fff;
    font-size: 16x;
    line-height: 45px;
    display: flex;
    div {
      flex: 1;
      box-shadow: 0px -1px 2px #ccc;
      text-align: center;
    }
    .left {
      background: #fff;
      color: #f00;
    }
    .right {
      background: #f00;
      color: #fff;
    }
  }
}
</style>
