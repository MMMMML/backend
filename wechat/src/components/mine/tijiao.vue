<template>
  <div class="container">
      <div>
          <textarea v-model="value" name="" id="" cols="30" rows="10" placeholder="请输入您的建议"></textarea>
          <button @click="commit()">提交</button>
      </div>
  </div>
</template>
<style>
/* .container{
    background: #fff;
} */
button{
    width: 100%;
    color: white;
    background: red;
    position: fixed;
    bottom: 0;
    left: 0;
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
      commit:function(){
          let url = 'wechat/auth/commitFeedback'
          let params = {suggestion:this.value}
          this.$http.post(url,params).then(data => {
        //   let data = response.data.payload
            console.log(data)
            if(data.data.code==200){
                alert('提交成功')
                this.$router.push('/mine')
            }
        })
      }
  }
}
</script>


