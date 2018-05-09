<template>
  <div class="container">
    <div class="content" v-show="isshow">
      <img class="content1" src="../../assets/image/evcard/5.png" alt="">
      <img  @click="close()" class="content2" src="../../assets/image/evcard/close.png" alt="">
    </div>
    <div class="content" v-show="isshow1">
      <img class="content1" src="../../assets/image/evcard/6.png" alt="">
      <img  @click="close()" class="content2" src="../../assets/image/evcard/close.png" alt="">
    </div>
    <div class="content" v-show="isshow2">
      <img class="content1" src="../../assets/image/evcard/7.png" alt="">
      <img  @click="close()" class="content2" src="../../assets/image/evcard/close.png" alt="">
    </div>
    <div class="content" style=" padding-top:50%;" v-show="isshow3">
      <img class="content3" src="../../assets/image/evcard/8.png" alt="">
      <img @click="close()" class="content4" src="../../assets/image/evcard/close.png" alt="">
    </div>
  </div>
</template>
<style scoped lang='less'>
  .container{
    background: url(../../assets/image/evcard/背景.jpg) no-repeat;
    width: 100vw;
    height: 100vh;
    background-size: 100%;
    .content{
      text-align:center;
      padding-top:30%;
      position: relative;
      .content1{
        width:70%
      }
      .content2{
        position: absolute;
        top: 98%;
        left: 45%;
        width: 10%;
      }
       .content3{
        width:70%
      }
      .content4{
        position: absolute;
        top: 43%;
        right: 14%;
        width: 10%;
      }
    }
  }
</style>
<script>
export default {
  data(){
    return{
      isshow:'',
      isshow2:'',
      isshow1:'',
      isshow3:''
    }
  },
  mounted(){
    let result = window.sessionStorage.getItem('result')
    if(result==1){
      this.isshow=true
    }
    if(result==2){
      this.isshow3=true
    }
    if(result==3){
      this.isshow2=true
    }
    if(result==4){
      this.isshow1=true
    }
  },
  methods:{
    close:function(){
      this.$router.push('/home')
    }
  }
}
</script>
