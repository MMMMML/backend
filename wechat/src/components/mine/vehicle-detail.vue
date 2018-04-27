<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">车牌号码</p>
        <input type="text" class="inputs-name" style="font-size:14px" v-model="plateNumber" placeholder="请输入车牌号码">
      </div>
      <div class="man">
        <p class="human-name">车辆类型</p>
        <!-- <p>{{list.vehicleType}}</p> -->
        <p id="trigger" style="width:58%;margin-left: 1rem;">{{idType}}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">所有人</p>
        <!-- <p>{{list.owner}}</p> -->
        <input type="text" class="inputs-name" style="font-size:14px" v-model="owner" placeholder="请输入所有人">
      </div>
      <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text" readonly class="inputs-name" style="font-size:14px" v-model="text" placeholder="请输入所有人">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">车辆识别代号</p>
        <!-- <p>{{list.vin}}</p> -->
        <input type="text" class="inputs-name" style="font-size:14px" v-model="vin" placeholder="请输入车辆识别代号">
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
        plateNumber: '',
        vehicleType: '',
        owner: '',
        vin: '',
        text: '非运营车辆',
        idType: '请选择证件类型',
      }
    },
    mounted() {
      var mobileSelect1 = new MobileSelect({
        trigger: '#trigger',
        title: '选择证件类型',
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
          console.log(this.idType)
        }
      });
      var _mtac = {};
      (function () {
        var mta = document.createElement("script");
        mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.2";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500608350");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
      })();
    },
    methods: {
      confirm: function () {
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
            this.$router.push('/vehicle')
          }
        })
      }


    }
  }

</script>
