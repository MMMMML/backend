<template>
  <div>
    <tab class='tab vux-1px-t' :animate='true' :line-width='0' ref='tab' active-color='#5eb29e'>
      <tab-item :selected="index === 0" @on-item-click='go(0)'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye1"></use>
        </svg>
      </tab-item>
      <tab-item :selected="index === 1" class='shopcart' @on-item-click='go(1)'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenleisousuo2"></use>
        </svg>
      </tab-item>
      <tab-item :selected="index === 2" class='shopcart' @on-item-click='go(2)'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shopping-cart"></use>
        </svg>
        <div class='num' ref='num' v-show='num > 0'>{{num}}</div>
      </tab-item>
      <tab-item :selected="index === 3" @on-item-click='go(3)'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
      </tab-item>
    </tab>
  </div>
</template>
<script>
  import { Tab, TabItem } from 'vux'
  export default {
    data () {
      return {
        index: 0
      }
    },
    created () {
      this.arr = ['/home', '/category', '/shopcart', '/my']
    },
    methods: {
      go (idx) {
        this.$router.push(this.arr[idx])
      }
    },
    watch: {
      $route () {
        let idx = this.arr.indexOf(this.$route.path)
        if (idx > -1) {
          this.$refs.tab.$el.style.display = 'flex'
          this.index = idx
        } else {
          this.$refs.tab.$el.style.display = 'none'
        }
        if (idx === 1) {
          this.$refs.tab.$el.style.background = 'rgba(255, 255, 255, .4)'
        } else {
          this.$refs.tab.$el.style.background = 'rgb(255, 255, 255)'
        }
      },
      num () {
        this.$nextTick(() => {
          this.$refs.num.classList.add('change')
          setTimeout(() => {
            this.$refs.num.classList.remove('change')
          }, 1000)
        })
      }
    },
    components: {
      Tab,
      TabItem
    }
  }
</script>
<style lang="less" scoped>
  @import '~common/less/variable.less';
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 49px;
    z-index: 1;
    .icon {
      width: 30px; height: 30px;
      vertical-align: middle;
      fill: currentColor;
      overflow: hidden;
    }
    .active{
      color: @color;
    }
  }
</style>