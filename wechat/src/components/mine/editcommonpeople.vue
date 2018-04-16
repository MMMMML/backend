<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">姓名</p>
        <!-- <p>马玲</p> -->
        <p>{{ form.realName }}</p>
      </div>
      <div class="man">
        <p style="width:29%;padding-left:5%">证件类型</p>
        <p id="trigger" style="width:62%">{{ form.idType }}</p>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <p>{{ form.idNumber}}</p>
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">手机号码</p>
        <input type="text" v-model="form.mobile"  class="human-input" placeholder="请输入手机号码">
      </div>
    </div>

    <!-- 选填部分 -->
    <div class="must" style="margin-top:5px">
      <p style="padding-left: 5%;height: 30px;line-height: 30px;font-size: 18px;font-weight: 700;">选填</p>
      <div class="man">
        <p class="human-name">血型</p>
        <input type="text" class="human-input"  v-model="form.blood" placeholder="请输入血型">
      </div>
       <router-link class="mui-tab-item" to='/editfamilyhistory'>
      <div class="man">
        <p class="human-name">既往病史</p>
        <p style="width:60%"></p>
        <div>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      </router-link>
      <router-link class="mui-tab-item" to='/editotherinfo'>
      <div class="man">
        <p class="human-name">其他信息</p>
        <p style="width:60%"></p>
        <div>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      </router-link> 
      <div class="man">
        <p class="human-name">紧急联系人</p>
        <input type="text"  v-model="form.emergencyContact" class="human-input" placeholder="紧急联系人">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">联系人电话</p>
        <input type="text"  v-model="form.emergencyPhone" class="human-input" placeholder="联系人电话">
      </div>
    </div>
    <div class="button" @click="confirm()">确认</div>
  </div>
</template>
<style scoped>
  .human-input{
    border: none !important;
    height: 47px !important;
    margin: 0;
    font-size: 14px;
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
  }

  .human-name {
    width: 32%;
    padding-left: 5%;
  }

  .man {
    display: flex;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #eee;
  }

  .man img {
    width: 8px;
    height: 13px;
  }

</style>
<script>
  import MobileSelect from 'mobile-select'
  export default {
    data() {
      return {
        //   user:'',
        form:{
            realName: '',
            idType: '',
            idNumber: '',
            mobile:'',
            blood:'',
            emergencyContact:'',
            emergencyPhone:'',
            familyHistory: '',
            otherInfo: '',
            id:this.$route.params.id
        }
      };
    },
    created(){
        var url = `wechat/commonContact/getById?id=${this.$route.params.id}`
        this.$http.get(url).then(res => {
            let data = res.data
            this.form = data.payload
            // 取msg数据
            const msg = JSON.parse(window.sessionStorage.getItem('msg'))
            const familyHistory = window.sessionStorage.getItem('familyHistory')
            const otherInfo = window.sessionStorage.getItem('otherInfo')
            // 合并处理
            const dict = ['realName', 'idType', 'idNumber']
            Object.keys(this.form).forEach(item => {
                if (!dict.includes(item)) {
                    this.form[item] = msg[item]
                }
            })
            this.form['otherInfo'] = otherInfo || this.form['otherInfo']
            this.form['familyHistory'] = familyHistory || this.form['familyHistory']
            window.sessionStorage.setItem('familyHistory',this.form.familyHistory || '')
            window.sessionStorage.setItem('otherInfo',this.form.otherInfo || '')
      })
    },
    methods:{
      confirm:function(){
      var url = 'wechat/commonContact/editContact'
      this.$http.post(url,this.form).then(data => {
       
        console.log(data)
      })
      }
     
    },
    beforeDestroy(){
      const obj = Object.assign({}, this.form)
      window.sessionStorage.setItem('msg', JSON.stringify(obj))
    }
  };

</script>
