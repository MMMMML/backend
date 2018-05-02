<template>
  <!-- 支付 -->
  <div class="payment vux-1px-t">
    <p class='price'><span>合计：</span>￥{{ total }}</p>
    <p class="payment-buy" @click='buy' :class='{"sure": sure}'>立即购买</p>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    sure: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    buy() {
      this.$emit('buy')
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.payment {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 45px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  p {
    margin: 0;
  }
  .price {
    height: 24px;
    line-height: 24px;
    padding-left: 20px;
    color: red;
    span {
      color: #4B4B4B;
    }
  }
  .payment-buy{
    height: 100%;
    width: 120px;
    color: #fff;
    line-height: 45px;
    background: #A0A0A0;
    text-align: center;
    &.sure {
      background: red;
    }
  }
}
</style>
