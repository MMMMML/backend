<template>
  <div>
    <button class='btn' :class='{"active": start}'>{{time | change}}</button>
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
  .btn{
    background: red;
    height: 1.5rem;
    border: 0;
    padding: 0 0.1rem;
    color: #fff;
    font-size: 14px;
    border-radius: 10px;
    &.active {
        background: #ccc;
    }
  }
    
</style>