<template>
  <div class="container">
    <div class="content">
      <img v-if='msg' src="../../../assets/image/mine/error@2x.png" alt="">
      <img v-else src="../../../assets/image/mine/complete@2x.png" alt="">
      <div v-if='msg' class="fail">
        <h3>兑换失败</h3>
        <p>{{ msg }}</p>
        <p>下次再来哦！</p>
      </div>
      <div v-else class='text'>
        <span>恭喜您获得</span>
        <p>{{ name }}</p>
        <span>{{ effectTime }} 至 {{ expireTime }}</span>
      </div>
    </div>
    <div class="btn">
      <div class="left" @click='goHome'>返回首页</div>
      <div class="right" v-if='!msg' @click='goMine'>我的权益</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      name: '',
      effectTime: '',
      expireTime: ''
    }
  },
  mounted() {
    const { effectTime, expireTime, name, msg } = this.$route.query
    if (effectTime || expireTime || name || msg) {
      document.title = '权益兑换'
    } else {
      document.title = '购买成功'
    }

    this.msg = msg
    this.effectTime = effectTime
    this.expireTime = expireTime
    this.name = name
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
