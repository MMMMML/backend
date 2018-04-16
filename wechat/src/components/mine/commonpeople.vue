<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">姓名</p>
        <!-- <p>马玲</p> -->
        <input type="text" class="human-input" v-model="form.realName" placeholder="请输入姓名">
      </div>
      <div class="man">
        <p style="width:29%;padding-left:5%">证件类型</p>
        <p id="trigger" style="width:62%">{{ form.idType }}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text" v-model="form.idNumber" class="human-input" placeholder="请输入证件号码">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">手机号码</p>
        <input type="text" v-model="form.mobile" class="human-input" placeholder="请输入手机号码">
      </div>
    </div>

    <!-- 选填部分 -->
    <div class="must" style="margin-top:5px">
      <p style="padding-left: 5%;height: 30px;line-height: 30px;font-size: 18px;font-weight: 700;">选填</p>
      <div class="man">
        <p class="human-name">血型</p>
        <input type="text" class="human-input" v-model="form.blood" placeholder="请输入血型">
      </div>
      <router-link class="mui-tab-item" to='/familyhistory'>
        <div class="man">
          <p class="human-name">既往病史</p>
          <p style="width:60%"></p>
          <div>
            <img src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
        </div>
      </router-link>
      <router-link class="mui-tab-item" to='/otherinfo'>
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
        <input type="text" v-model="form.emergencyContact" class="human-input" placeholder="紧急联系人">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">联系人电话</p>
        <input type="text" v-model="form.emergencyPhone" class="human-input" placeholder="联系人电话">
      </div>
    </div>
    <div class="button" @click="confirm()">确认</div>
  </div>
</template>
<style scoped>
  .human-input {
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
        form: {
          idType: '请选择证件类型',
          realName: '',
          idNumber: '',
          emergencyContact: '',
          emergencyPhone: '',
          familyHistory: '',
          otherInfo: '',
          blood: '',
          mobile: ''
        }
      };
    },
    mounted() {
      console.log(MobileSelect)
      var mobileSelect1 = new MobileSelect({
        trigger: '#trigger',
        title: '选择证件类型',
        wheels: [{
          data: [{
              id: '0',
              value: '身份证'
            },
            {
              id: '3',
              value: '护照'
            },
            {
              id: '2',
              value: '回乡证'
            },
            {
              id: '1',
              value: '台胞证'
            }
          ]
        }],
        callback: (indexArr, data) => {
          this.form.idType = data[0].id; //返回选中的json数据
          console.log(this.form.idType)
        }
      });
    },
    created() {
      // console.log('start')
      const mess = JSON.parse(window.sessionStorage.getItem('message'))
      Object.keys(this.form).forEach(item => {
        this.form[item] = mess[item]
      })
      console.log(mess)
    },
    methods: {
      confirm: function () {
        const obj = Object.assign({}, this.form, {
          otherInfo: window.sessionStorage.getItem('otherinfo'),
          familyHistory: window.sessionStorage.getItem('familyhistory'),
        })
        var url = 'wechat/commonContact/add'
        this.$http.post(url, obj).then(data => {
          console.log(data)
          this.user = data.data.payload
        })
      }

    },
    beforeDestroy() {
      const obj = Object.assign({}, this.form)
      window.sessionStorage.setItem('message', JSON.stringify(obj))
    }
  };

</script>
