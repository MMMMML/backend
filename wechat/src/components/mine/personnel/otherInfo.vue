<template>
  <div class='container'>
    <main>
      <textarea cols="30" rows="10" maxlength="200" v-model='text' placeholder="请输入其他信息">
      </textarea>
      <span>{{ text.length }} / 200</span>
    </main>
    <button class="button" @click="sure">确认</button>
  </div>
</template>
<style scoped lang='less'>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background: #F0F0F0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  main {
    padding: 10px;
    flex: 1;
    textarea {
      border-radius: 6px;
      padding: 4px;
    }
    span {
      float: right;
      color: #999;
    }
  }
  .button {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;    
    color: #fff;
    background: red;
    font-size: 16px;
    letter-spacing: 4px;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    this.text = this.commonPeople.otherInfo || ''
  },
  methods: {
    sure() {
      this.SET_COMMON_PEOPLE({
        ...this.commonPeople,
        otherInfo: this.text
      })
      this.$router.go(-1)
    },
    ...mapMutations(['SET_COMMON_PEOPLE'])
  },
  computed: {
    ...mapGetters(['commonPeople'])
  }
}
</script>

