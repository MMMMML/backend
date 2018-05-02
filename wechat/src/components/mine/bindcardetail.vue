<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">车牌号码</p>
        <input type="text" class="inputs-name" style="font-size:14px" v-model="list.plateNumber" placeholder="请输入车牌号码">
        <div style="height:30px;margin-top: 2vh">
            <button class="btn" >选择车辆</button>
        </div>
      </div>
      <div class="man">
        <p class="human-name">车辆类型</p>
        <!-- <p>{{list.vehicleType}}</p> -->
        <p id="trigger" style="width:58%;margin-left: 1rem;">{{list.vehicleType}}</p>
        <div>
          <img class="up-arrow" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">所有人</p>
        <!-- <p>{{list.owner}}</p> -->
        <input type="text" class="inputs-name" style="font-size:14px" v-model="list.owner" placeholder="请输入所有人">
      </div>
      <div class="man">
        <p class="human-name">使用性质</p>
        <input type="text" readonly class="inputs-name" style="font-size:14px" v-model="text">
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">车辆识别代号</p>
        <!-- <p>{{list.vin}}</p> -->
        <input type="text" class="inputs-name" style="font-size:14px" v-model="list.vin" placeholder="请输入车辆识别代号">
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
  .btn{
    cursor: pointer;
    height: 30px;
    line-height: 19px;
    font-size: 14px;
  }
  .inputs-name {
    width: 45%;
    border: none;
    height: 59px;
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
        list:{
            vehicleType: '请选择车辆类型',
        },
        lists: [],
        plateNumber: '',
        plateNumber: '',
        vehicleType: '',
        owner: '',
        vin: '',
        text: '非运营车辆',
       
      }
    },
    mounted() {
      var mobileSelect1 = new MobileSelect({
        trigger: '#trigger',
        title: '选择车辆类型',
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
    },
    created(){
        var url = 'wechat/commonVehicle/list'
          this.$http.get(url).then(data => {
              console.log(data)
          this.lists = data.data.payload
        //   if(data.data.code==200){
        //     this.$router.push('/bindcar')
        //   }
        this.objlist = []
           this.lists.map(item => {
          this.obj = {}
          this.owner = item.owner
          this.plateNumber = item.plateNumber
          this.obj.owner = item.owner
          this.obj.value = item.plateNumber
           this.obj.vehicleType = item.vehicleType
          this.obj.plateNumber = item.plateNumber
          this.obj.vin = item.vin
          this.objlist.push(this.obj)
        })
         let arr = [{
          data: this.objlist
        }]
        console.log(arr)
          var mobileSelect = new MobileSelect({
          trigger: '.btn',
          title: '选择保障车辆',
          wheels: arr,
          triggerDisplayData: false,
          callback: (indexArr, data) => {
            this.list = data[0]
          }
        });
        })
    },
    methods: {
      confirm: function () {
        var url = 'wechat/auth/bindVehicle'
        var params = {
          userid: window.sessionStorage.getItem('id')
        }
        this.$http.post(url, Object.assign(this.list, params)).then(data => {
          this.list = data.data.payload
          if(data.data.code==200){
            this.$router.push('/bindcar')
          }
        })
      },
     


    }
  }

</script>
