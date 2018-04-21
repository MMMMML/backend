<template>
  <div>
    <div class="must" v-for='(item, index) of list' :key='index'>
      <p style="padding:10px 20px 0">{{ item.type === 'big' ? '大人' : '小孩' }}</p>
      <div class="man">
        <p class="human-name">姓名</p>
        <input type="text" class="human-input" v-model='item.realName'  placeholder="请输入姓名">
        <div style="display:flex;align-items: center;">
          <div class="btn">选择权益人</div>
        </div>
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div> -->
      </div>
      <div class="man">
        <p style="width:25%;padding-left:5%">证件类型</p>
        <p class="createId" style="width:62%;padding-left: 1rem;">1</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text" v-model='item.idNumber'  class="human-input" placeholder="请输入证件号码">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div> -->
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" v-model='item.mobile' class="human-input" placeholder="请输入手机号码">
        <!-- <div class="warning" >
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div> -->
      </div>
    </div>
    <div class="payment">
      <p>合计：￥10</p>
      <p class="payment-buy">立即购买</p>
    </div>
  </div>
</template>
<style scoped>
  .warning {
    position: absolute;
    bottom: 2.6rem;
    left: 24vw;
    height: 0;
  }

  .warning span {
    font-size: 12px;
  }

  .warning img {
    width: 14px;
    height: 14px;
  }

  .btn {
    width: 22vw;
    color: white;
    background: #ccc;
    font-size: 3vw;
    text-align: center;
    height: 25px;
    line-height: 25px;
    border-radius: 20px;
  }

  .human-input {
    border: none !important;
    height: 59px !important;
    margin: 0;
    font-size: 14px;
    width: 50%;

  }

  .button {
    color: #fff;
    background: red;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .must {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
  }

  .human-name {
    width: 25%;
    padding-left: 5%;
  }

  .man {
    display: flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .man img {
    width: 8px;
    height: 13px;
  }

  .payment {
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 50px;
    padding-left: 20px;

  }

  .payment-buy {
    height: 100%;
    width: 100px;
    color: white;
    line-height: 50px;
    background: red;
    text-align: center;
  }

</style>
<script>
export default {
  data(){
      return{
          list: []
      }
  },
  mounted(){
      let big = {
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
      }
      let small = {
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
      }

      
      let type = window.sessionStorage.getItem('type') || 1
      if (~~type === 1) {
        //   this.list = [big, big, small]
        this.list.push({
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
      })
      } else if (~~type === 2) {
        //   this.list = [big, small, small]
        this.list.push({
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
      } else if (~~type === 3) {
        this.list.push({
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'big',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
        this.list.push({
          type: 'small',
          realName: '',
          idType: '',
          mobile: '',
          idNumber: ''
        })
      }
  }
}
</script>

