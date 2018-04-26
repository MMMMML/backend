<template>
  <div>
    <div class="must" v-for="(item, index) of personUser" :key='index'>
      <p style="padding:10px 20px 0">权益人{{index+1}}</p>
      <div class="man">
        <p class="human-name">姓名</p>
        <!-- <p>马玲</p> -->
        <input type="text" class="human-input" v-model="item.realName" placeholder="请输入姓名">
        <div style="display:flex;align-items: center;" >
          <div class="btn" @click="select(index)">选择权益人</div>
        </div>
        <div class="warning" v-show="!validateArr[index].isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
      </div>
      <div class="man">
        <p style="width:25%;padding-left:5%">证件类型</p>
        <p class="createId" @click="createId(index)" style="width:62%;padding-left: 1rem;">{{item.idType && item.idType | format}}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <input type="text" v-model="item.idNumber" class="human-input" placeholder="请输入证件号码">
        <div class="warning" v-show="isIdNumber">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>证件号码不能为空</span>
        </div>
      </div>
      <div class="man">
        <p class="human-name">手机号码</p>
        <input type="text" class="human-input" v-model="item.mobile" placeholder="请输入手机号码">
        <!-- <div class="warning" v-show="!validateArr[index].isPhoneNo">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>手机格式错误，请重新填写</span>
        </div> -->
      </div>
    </div>
    <div class="payment">
      <p>合计：￥{{commonprice}}</p>
      <p class="payment-buy" @click="confirm()">立即购买</p>
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
  import MobileSelect from 'mobile-select'
  import { Indicator } from 'mint-ui';
  export default {
    data() {
      return {
        isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false,
        personUser: [],
        count:1,
        list: '',
        validateArr: []
      }
    },
    created() {
      this.count = JSON.parse(window.sessionStorage.getItem('priceinfo'))
      this.counts = this.count.count
      this.commonprice = this.count.price
      console.log(this.count)
      for (let i = 0; i < this.count.count; i++) {
        let item = {
          realName: '',
          idType: '',
          idNumber: '',
          mobile: ''
        };
        let obj = {
          isChinaName: true,
          isPhoneNo: true,
          isIdNumber: true
        }
        this.personUser.push(item);
        this.validateArr.push(obj)
      }
    },
    mounted() {
      var urls = 'wechat/commonContact/list'
      this.$http.get(urls).then(data => {
        this.list = data.data.payload
        console.log(this.list)
        this.objlist = []
        this.list.map(item => {
          this.obj = {}
          this.listid = item.id
          this.listrealName = item.realName
          this.obj.value = item.realName
          this.obj.realName = item.realName
          this.obj.idType = item.idType
          this.obj.mobile = item.mobile
          this.obj.idNumber = item.idNumber
          this.objlist.push(this.obj)
        })

        let arr = [{
          data: this.objlist
        }]
        console.log(arr)
        this.mobileSelect = new MobileSelect({
          trigger: '.btn',
          title: '选择权益人',
          wheels: arr,
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            console.log(data[0])
            this.personUser.splice(this.idx, 1, data[0])
            this.item = data[0]
          }
        });
      })
      this.mobileSelect1 = new MobileSelect({
        trigger: '.createId',
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
          let idx = this.index || 0
          this.personUser[idx].idType = data[0].value;
          if (data[0].value == '身份证') this.personUser[idx].idType = '0'
          if (data[0].value == '护照') this.personUser[idx].idType = '3'
          if (data[0].value == '回乡证') this.personUser[idx].idType = '2'
          if (data[0].value == '台胞证') this.personUser[idx].idType = '1'
        }
      })
    },
    methods: {
      _isChinaName(name) {
        console.log(name)
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
      },
      _isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },
      confirm: function () {
        Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
        this.personUser.forEach((item, index) => {
          Object.keys(item).forEach((key, idx) => {
            if (key === 'realName') {
              // console.log(this._isChinaName(item[key]))
              this.validateArr[index].isChinaName = this._isChinaName(item[key])
            } else if (key === 'mobile') {
              this.validateArr[index].isPhoneNo = this._isPhoneNo(item[key])              
            }
          })
        })
       
        var url = 'wechat/order/addOrder'
        this.priceinfo = JSON.parse(window.sessionStorage.getItem('priceinfo'))
        console.log(this.priceinfo)
        var params = {
          packageId: 'B',
          benefitEffectTime: this.priceinfo.pickerVisible,
          benefitExpireTime: this.priceinfo.pickerEnd,
          peopleNum: this.priceinfo.count,
          personUserInfo: JSON.stringify(this.personUser)
        }
        this.$http.post(url, params).then(data => {
          var result = data.data.payload
          if(data.data.code==500){
            Indicator.close();
            alert(data.data.message)
          }
          if (data.data.code == 200) {
            Indicator.close();
            window.sessionStorage.setItem('orderId',data.data.payload.orderId)
           this.$router.push('/myindentinfo')
          }

        })
      },

      createId(index) {
        this.index = index
        this.mobileSelect1.show()
      },
      select(index) {
        this.idx = index
        this.mobileSelect.show()
      }
    },
    filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照', ]
        return enums[val] || '请输入证件类型'
      }
    }
  }

</script>
