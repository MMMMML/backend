<template>
  <div class="box">
    <div class="text" @click='select'>{{ province }}</div>
    <div class="mask" v-show='selectFlag' @click='selectFlag = !selectFlag'></div>
    <transition name='fade'>
      <div class="select" v-show='selectFlag'>
        <p v-for='item of provinces' :key='item' @click='hnadleSelect(item)'>{{ item }}</p>
        <div class="close" @click='deleteProvince'>
          <img src="../assets/image/product/button-Back@2x.png" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    propProvince: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      province: '',
      selectFlag: false,
      provinces: [
        '京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏',
        '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼', 
        '川', '贵', '云', '陕', '甘', '青', '蒙', '宁', '新',
        '藏', '使', '领', '警', '学', '港', '澳'
      ]
    }
  },
  methods: {
    select() {
      this.selectFlag = true
    },
    hnadleSelect(province) {
      this.province = province
      this.selectFlag = false
    },
    deleteProvince() {
      this.province = ''
    }
  },
  watch: {
    propProvince(newVal) {
      if (newVal) {
        this.province = newVal
      }
    }
  }
}
</script>

<style scoped lang="less">
.box {
  .text {
    width: 24px;
    height: 24px;
    border: 1px solid #666;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    &:after {
      display: block;
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 10px solid transparent;
      border-right: 10px solid #4b4b4b;
    }
  }
  .select {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 215px;
    width: 100%;
    background: #C9CCD1;
    z-index: 101;
    display: flex;
    flex-flow: row wrap;
    // justify-content: space-between;
    justify-content: center;
    padding-top: 7px;
    p {
      width: 8.53333vw;
      height: 11.2vw;
      border-radius: 5px;
      background: #fff;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2px;
      box-shadow: 0px 2px 7px #333333;
    }
    .close {
      position: absolute;
      right: 3vw;
      bottom: 2.3vw;
      width: 42px;
      height: 42px;
      background: #A4AAB4;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      img {
        width: 23px;
        height: 17px;
      }
    }
  }
  .mask {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .6);
    z-index: 100;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    transform: translateY(100%);
  }
}
</style>
