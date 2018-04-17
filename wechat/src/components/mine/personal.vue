<template>
  <div >
      <!-- 头像部分 -->
      <div class="portrait">
          <div class="portrait-img" style="width:25%">
              <img src="../../assets/image/mine/头像@3x.png" alt="">
          </div>

          <div class="portrait-name">
              <p style="font-weight:700;margin-bottom:0.5rem">晴天</p>
              <p >修改头像</p>
          </div>

          <div class="portrait-arr">
              <img src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>

      <!-- message -->
      <div>
          <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">昵称</p>
              <p style="width:60%">{{user.realName}}</p>
                  <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
    <!-- 性别 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">性别</p>
              <p style="width:60%">男</p>
                  <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      <!-- 生日 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">性别</p>
              <p style="width:60%">{{user.gender}}</p>
                  <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      <!-- 所在地 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">所在地</p>
              <p style="width:60%">{{user.province+user.city}}</p>
                  <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      <!-- 手机号 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">手机号</p>
              <p style="width:60%">{{user.mobile?user.mobile:'未填写'}}</p>
                  <img style="" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      <!-- 身份证 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">身份证</p>
              <p style="width:50%">{{user.idNumber?user.idNumber:'未填写'}}</p>
              <p style="width:15%;">{{user.verified==false?'未绑定':'已绑定'}}</p>
          </div>
      </div>
      <!-- 常用车辆 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">绑定车辆</p>
              <p style="width:60%">{{user.bindVehicleCount}}</p>
               <img  src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      <!-- 邮箱 -->
      <div class="message">
          <div class="msg">
              <p style="width:20%;margin-left: 12%;">邮箱</p>
              <p style="width:60%">未绑定</p>
              <img src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
      </div>
      </div>
      
  </div>
</template>
<style scoped>
.portrait{
    background: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    /* line-height: 100px; */
}
.portrait-img img{
    width: 60px;
}
.portrait-name{
width:60%;
margin-top:0.5rem
}
.portrait-img {
    padding-left: 3%;
}
.portrait-arr img{
    width:8px;
}
.message{
    background: #fff;
}
.msg{
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid #eee;
}
.msg img{
    width: 8px;
}
</style>
<script>
export default {
  data(){
      return{
          user:''
      }
  },
  created(){
     var id = JSON.parse(window.sessionStorage.getItem('id')) 
    //  console.log(this.user)
    var url =`auth/getUserInfo?id=${id}`
    this.$http.get(url).then(data => {
       this.user = data.data.payload
        console.log(data)
        if(this.user.gender==0) this.user.gender = '未知'
        if(this.user.gender==1) this.user.gender = '男'
        if(this.user.gender==2) this.user.gender = '女'
      })
  }
}
</script>


