<template>
  <div class='down_box' :class='{"active": start}'>
    <span>{{time | change}}</span>
  </div>
</template>

<script>
  let flag = false
  export default {
    data () {
      return {
        time: '获取验证码'
      }
    },
    props: {
      start: {
        type: Boolean
      }
    },
    watch: {
      start (value, oldvalue) {
        if (value === true) {
          this.countDown()
        }
      }
    },
    methods: {
      countDown () {
        this.time = 60
        let time = setInterval(() => {
          this.time--
          if (this.time === 0) {
            this.$emit('countDown')
            this.time = '重新获取'
            flag = true
            clearInterval(time)
          }
        }, 1000)
      }
    },
    filters: {
      change (value) {
        if (!value) return ''
        if (!isNaN(value)) {
          if (flag === true) {
            return `重新发送${value}S`
          }
          return value + 'S'
        } else {
          return value
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.down_box {
  text-align: center;
  height: 25px;
  font-size: 14px;
  line-height: 25px;
  border-radius: 20px;
  background: #f44336;
  height: 1.5rem;
  width: 22vw;
  font-size: 12px;
  color: #fff;
  &.active {
    background: #ccc;
  }
}
    
</style>