<template>
  <div v-show='modalFlag' class="container" @touchmove='move'>
    <div class="modal_box">
      <div class="content">
        <div class="title">{{ title }}</div>
        <input type="text" v-model='code'>
      </div>
      <div class="btn_box vux-1px-t">
        <div class="left" @click='close'>{{ left }}</div>
        <div class="right" @click='sure'>{{ right }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '请输入权益码'
    },
    left: {
      type: String,
      default: '取消'
    },
    right: {
      type: String,
      default: '立刻兑换'
    }
  },
  data() {
    return {
      code: '',
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
      this.$emit('sure', this.code)
      this.code = ''
    }
  }
}
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';
  .container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
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
        .title {
          line-height: 60px;
          font-size: 14px;
        }
        input {
          text-align: center;
          font-size: 14px;
        }
      }
      .btn_box {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-flow: row nowrap;
        font-size: 14px;
        .left {
          width: 50%;
        }
        .right {
          width: 50%;
          background: #f00;
          color: #fff;
        }
      }
    }
  }
</style>
