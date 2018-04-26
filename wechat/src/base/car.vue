<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <div class="content">
      <div>
        <label for="carNo">车牌号码</label>
        <input type="text" id='carNo'>
      </div>
      <div class='vux-1px-t'>
        <label for="carType">车辆类型</label>
        <div id='trigger'>请选择车辆类型</div>
      </div>
      <div class='vux-1px-t'>
        <label for="carUser">所有人</label>
        <input type="text" id='carUser'>
      </div>
      <div class='vux-1px-t'>
        <label for="carNature">使用性质</label>
        <input type="text" id='carNature'>
      </div>
      <div class='vux-1px-t'>
        <label for="carWPMI">车辆识别代号</label>
        <input type="text" id='carWPMI'>
      </div>
    </div>
  </div>
</template>

<script>
import MobileSelect from 'mobile-select'
export default {
  props: {
    title: {
      type: String,
      default: '权益车辆'
    }
  },
  data() {
    return {
      value: []
    }
  },
  mounted() {
    new MobileSelect({
      trigger: "#trigger",
      title: "单项选择",
      wheels: [
          {data: ['轿车', '越野车', '商务车', '皮卡', '微型客车']}
      ],
      callback:function(indexArr, data) {
        console.log(data)
      }
    })
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.container {
  padding-left: 20px;
  h3 {
    margin: 0;
  }
  .content {
    > div {
      padding-right: 35px;
      margin: 0;
      height: 50px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      label {
        width: 90px;
        height:24px;
        line-height: 24px;
        background: red;
        font-size: 12px;
      }
      input, #trigger {
        flex: 1;
        border: 0;
        height:24px;
        margin: 0;
        padding: 2px 0 2px 5px;
      }
    }
  }
}
</style>
