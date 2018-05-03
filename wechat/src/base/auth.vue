<template>
  <div v-show='modalFlag' class="container" @touchmove='move'>
    <div class="modal_box">
      <div class="content">
        <div class="top">
          <div class="logo"></div>
        </div>
        <div class="text">
          <h3>欢迎进入空降联盟</h3>
          <p>请先进行身份认证，开启你的守护之旅！</p>
        </div>
      </div>
      <div class="btn_box" @click='sure'>前往认证
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalFlag: false
    }
  },
  methods: {
    move(e) {
      e.preventDefault()
    },
    show() {
      this.modalFlag = true
    },
    close() {
      this.modalFlag = false
    },
    sure() {
      // code 校验
      this.$emit('sure')
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, .6);
    .modal_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 280px;
      height: 170px;
      border-radius: 8px;
      background: #fff;
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
      overflow: hidden;
      color: #4b4b4b;
      .content {
        flex: 1;
        padding: 0 10px;
        .top {
          height: 34px;
          width: 100%;
          border-bottom: 1px solid #ffc2c2;
          position: relative;
          .logo {
            position: absolute;
            left: 50%;
            top: 20px;
            transform: translate3d(-50%, 0, 0);
            width: 120px;
            height: 32px;
            padding: 0 10px;
            background: #fff no-repeat url('../assets/image/product/icon-logo-color@2x.png') 10px 0 ~'/' calc(100% - 20px) 100%;
            // background-origin: padding-box;
          }
        }
        .text {
          margin-top: 26px;
          color: #4B4B4B;
          h3 {
            font-size: 18px;
            line-height: 26px;
          }
          p {
            line-height: 20px;
            margin: 0;
          }
        }
      }
      .btn_box {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background: red;
      }
    }
  }
</style>
