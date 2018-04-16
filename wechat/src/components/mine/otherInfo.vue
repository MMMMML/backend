<template>
  <div>
      <textarea name="" id="" cols="30" rows="10" v-model="text" placeholder="请输入其他信息"></textarea>
      <button class="button" @click="sure()">确认</button>
  </div>
</template>
<style scoped>
.button {
    color: #fff;
    background: red;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>
<script>
export default {
  data(){
      return{
          text:''
      }
  },
  mounted(){
    this.text = window.sessionStorage.getItem('otherInfo')
  },
  methods:{
      sure:function(){
          window.sessionStorage.setItem('otherinfo',this.text)
         this.$router.push('/commonpeople');
      }
      
  }
}
</script>

