<template>
  <div>
    <span id="trigger"></span>
    <div class="must">
      <div class="man">
        <p class="human-name">车牌号码</p>
        <input type="text" :readonly='disabled' class="inputs-name" style="font-size:14px" v-model="plateNumber" placeholder="请输入车牌号码">
      </div>
      <div class="man">
        <p class="human-name">车辆类型</p>
        <!-- <p>{{list.vehicleType}}</p> -->
        <p style="width:58%;margin-left: 1rem;" @click='selectCar'>{{ idType }}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">所有人</p>
        <!-- <p>{{list.owner}}</p> -->
        <input :readonly='disabled' type="text" class="inputs-name" style="font-size:14px" v-model="owner" placeholder="请输入所有人">
      </div>
      <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text" disabled class="inputs-name" style="font-size:14px" v-model="text" placeholder="请输入所有人">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">车辆识别代号</p>
        <!-- <p>{{list.vin}}</p> -->
        <input :readonly='disabled' type="text" class="inputs-name" style="font-size:14px" v-model="vin" placeholder="请输入车辆识别代号">
      </div>
    </div>
    <div class="button" @click="confirm()">确认</div>
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
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 14px !important;
  }

  .inputs-name {
    width: 45%;
    border: none;
    height: 59px;
    line-height: 50px;
    margin-bottom: 0;
    color: gray;
  }

  .title {
    width: 100%;
    padding-left: 5%;
    font-size: 18px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
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
    height: 60px;
    line-height: 60px;
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
        list: [],
        plateNumber: '',
        vehicleType: '',
        owner: '',
        vin: '',
        text: '非运营车辆',
        idType: '请选择车辆类型',
        disabled: false
      }
    },
    created() {
      this.id = this.$route.query.id
      if (this.id) {
        this._getDetail()
        this.disabled = true
      }
    },
    mounted() {
      this.mobileSelect1 = new MobileSelect({
        trigger: '#trigger',
        title: '选择车辆类型',
        triggerDisplayData: false,
        wheels: [{
          data: [{
              id: '轿车',
              value: '轿车'
            },
            {
              id: '越野车',
              value: '越野车'
            },
            {
              id: '商务车',
              value: '商务车'
            },
            {
              id: '皮卡',
              value: '皮卡'
            },
            {
              id: '微型客车',
              value: '微型客车'
            }
          ]
        }],
        callback: (indexArr, data) => {
          this.idType = data[0].id; //返回选中的json数据
        }
      })
    },
    methods: {
      confirm() {
        if (!this.id) {
          var url = 'wechat/commonVehicle/add'
          var params = {
            userid: window.sessionStorage.getItem('id'),
            plateNumber: this.plateNumber,
            vehicleType: this.idType,
            owner: this.owner,
            vin: this.vin
          }
          this.$http.post(url, params).then(data => {
            this.list = data.data.payload
            if(data.data.code ==500){
              alert(data.data.message)
            }
            if(data.data.code==200){
              this.$router.go(-1)
            }
          })
        } else {
          this.$router.go(-1)
        }
      },
      selectCar() {
        if (!this.disabled) {
          this.mobileSelect1.show()          
        }
      },
      _getDetail() {
        this.$http.get(`wechat/commonVehicle/detail?id=${this.id}`).then(res => {
          let data = res.data.payload
          this.plateNumber = data.plateNumber
          this.idType = data.vehicleType
          this.owner = data.owner
          this.vin = data.vin
        })
      }
    }
  }

</script>
