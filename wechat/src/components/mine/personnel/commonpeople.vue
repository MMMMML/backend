<template>
  <div class='container'>
    <div class="must">
      <h3>权益人</h3>
      <div class="man vux-1px-b">
        <p class="human-name">姓名</p>
        <input type="text" class="human-input" v-model='form.realName' placeholder="请输入姓名">
      </div>
      <div class="man vux-1px-b">
        <p class="human-name">证件类型</p>
        <p id="trigger" class="human-input">{{ form.idType | format }}</p>  
      </div>
      <div class="man vux-1px-b">
        <p class="human-name">证件号码</p>
        <input type="text" class="human-input" v-model='form.idNumber' placeholder="请输入证件号码">        
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" v-model="form.mobile" class="human-input" placeholder="请输入手机号码">
      </div>
    </div>
    <!-- 选填部分 -->
    <div class="must">
      <h3>选填</h3>
      <div class="man vux-1px-b">
        <p class="human-name">血型</p>
        <input type="text" class="human-input"  v-model="form.blood">
      </div>
      <router-link class="mui-tab-item" to='/commonpeople/familyhistory'>
        <div class="man vux-1px-b">
          <p class="human-name">既往病史</p>
          <p class="human-input">
            <span>{{ commonPeople.familyHistory ? '已填写' : '未填写' }}</span>
            <img src="../../../assets/image/mine/Chevron@3x.png" alt="">
          </p>
        </div>
      </router-link>
      <router-link class="mui-tab-item" to='/commonpeople/otherinfo'>
        <div class="man vux-1px-b">
          <p class="human-name">其他信息</p>
          <p class="human-input">
            <span>{{ commonPeople.otherInfo ? '已填写' : '未填写' }}</span>
            <img src="../../../assets/image/mine/Chevron@3x.png" alt="">
          </p>
        </div>
      </router-link>
      <div class="man vux-1px-b">
        <p class="human-name">紧急联系人</p>
        <input type="text" v-model="form.emergencyContact" class="human-input">
      </div>
      <div class="man">
        <p class="human-name">联系人电话</p>
        <input type="text" v-model="form.emergencyPhone" class="human-input">
      </div>
    </div>
    <div class="button" @click="confirm()">确认</div>
    <router-view></router-view>
  </div>
</template>
<style scoped lang='less'>
@import '~vux/src/styles/1px.less';
.container {
  width: 100vw;
  height: 100vh;
  .must {
    background: #fff;
    width: 100%;
    padding-left: 20px;
    h3 {
      margin: 0;
      line-height: 42px;
      font-size: 16px;
      color: #4B4B4B;
    }
    .man {
      display: flex;
      align-items: center;
      height: 50px;
      .human-name {
        width: 90px;
        margin: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .human-input{
        flex: 1;
        margin: 0;
        border: 0;
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0;
        position: relative;
        img {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translate3d(0, -50%, 0);
          width: 8px;
          height: 13px;
        }
      }
    }
    &~.must {
      margin-top: 10px;
    }
  }
  .button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    text-align: center;
    color: #fff;
    background: red;
    line-height: 45px;
    font-size: 16px;
    letter-spacing: 4px;
  }
}
</style>
<script>
import MobileSelect from 'mobile-select'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form:{
        realName: '',
        idType: '',
        idNumber: '',
        mobile: '',
        blood: '',
        emergencyContact: '',
        emergencyPhone: '',
        familyHistory: '',
        otherInfo: '',
        id: ''
      }
    }
  },
  created() {
    this.form.id = this.$route.query.id
    if (this.form.id) {
      this._getPeopleInfo()
      document.title = '编辑权益人'
    } else {
      document.title = '添加权益人'
    }
  },
  mounted() {
    this.IDType = new MobileSelect({
      trigger: '#trigger',
      title: '选择证件类型',
      triggerDisplayData: false,
      wheels: [{
        data: [{
          id: '0',
          value: '身份证'
        },
        {
          id: '1',
          value: '台胞证'
        },
        {
          id: '2',
          value: '回乡证'
        },
        {
          id: '3',
          value: '护照'
        }]
      }],
      callback: (indexArr, data) => {
        this.form.idType = data[0].id
      }
    })
  },
  methods: {
    _getPeopleInfo() {
      var url = `wechat/commonContact/getById?id=${this.form.id}`
      this.$http.get(url).then(res => {
        let data = res.data.payload
        this.SET_COMMON_PEOPLE(data)
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.commonPeople[item] || ''
        })
      })
    },
    confirm() {
      let proUrl = this.form.id ? 'editContact' : 'add'
      let url = `wechat/commonContact/${proUrl}`
      this.$http.post(url, this.form).then(data => {
        this.$router.go(-1)
      })
    },
    ...mapMutations(['SET_COMMON_PEOPLE'])
  },
  filters: {
    format(val) {
      let enums = ['身份证', '台胞证', '回乡证', '护照']
      return enums[val] || '请输入证件类型'
    }
  },
  computed: {
    ...mapGetters(['commonPeople'])
  },
  watch: {
    $route() {
      if (this.commonPeople) {
        this.form.familyHistory = this.commonPeople.familyHistory
        this.form.otherInfo = this.commonPeople.otherInfo
      }
    }
  }
}

</script>
