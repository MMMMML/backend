<template>
  <div class="container">
    <div class="content">
      <textarea v-model="value" name="" id="" cols="30" rows="10" placeholder="请输入您的建议"></textarea>      
    </div>
    <div class='btn' @click="commit()">提交</div>
  </div>
</template>
<style scoped lang='less'>
.container {
  width: 100vw;
  height: 100vh;
  .content {
    width: 100%;
  }
  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;    
    color: white;
    background: red;
    letter-spacing: 4px;
  }
}
</style>
<script>
export default {
  data(){
    return{
      value:''
    }
  },
  methods:{
    commit() {
      let url = 'wechat/auth/commitFeedback'
      let params = {suggestion:this.value}
      this.$http.post(url,params).then(data => {
        if(data.data.code==200){
          alert('提交成功')
          this.$router.push('/mine')
        }
      })
    }
  }
}
</script>


