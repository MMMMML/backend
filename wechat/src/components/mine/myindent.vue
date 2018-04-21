<template>
  <div>
    <div v-for="(item,index) in indent" :key='index'>
      <div class="indent-box" @click="confirm(item.id)">
        <div class="indent-header">
          <p>{{item.createTime}}</p>
        </div>
        <div class="indent-pay">
          <p>订单编号:{{item.id}}</p>
          <p style="color:red">{{item.Status}}</p>
        </div>


        <div class="ident-img">

          <img style="width:30%;height:15%" :src="item.url" alt="">
          <div style="margin-left:8vw">
            <p>{{item.name}}</p>
            <p>{{item.mainName}}</p>
          </div>
        </div>
        <div class="indent-price">
          <p>合计：￥{{item.totalPrice}}</p>
          <div>
            <button v-show="item.paidStatus==0" @click.stop="cancel(item.id)">取消订单</button>
            <button v-show="item.paidStatus==0" @click="payment()">去支付</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
  .indent-box {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    background: #fff;
    padding-top: 20px;
    .indent-header {
      display: flex;
      padding: 0 20px;
    }
    .indent-pay {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
    .ident-img {
      display: flex;
      padding: 10px 20px;
      background: #F0DCDC;
    }
    .indent-price {
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;

    }
  }

</style>
<script>
  import {
    MessageBox
  } from 'mint-ui';
  export default {
    data() {
      return {
        indent: ''
      }
    },
    mounted() {
      //   let id = window.sessionStorage.getItem('')
        this._list()
    },
    methods: {
      _list() {
        let url = `wechat/order/getListForFront?userid=${window.sessionStorage.getItem('id')}`
        this.$http.get(url).then(data => {
          this.indent = data.data.payload
          console.log(data)

          this.indent.map(item => {
            if (item.paidStatus == 0) item.Status = '待买家支付'
            if (item.paidStatus == 1) item.Status = '已支付'
            if (item.paidStatus == -2) item.Status = '用户取消'
            if (item.paidStatus == -1) item.Status = '未支付'

          })
        })
      },
      confirm: function (id) {
        window.sessionStorage.setItem('indentid', id)
        this.$router.push('/myindentinfo')
      },
      cancel: function (id) {
        MessageBox.confirm('确定取消订单？').then(action => {
          let url = `wechat/order/cancelOrder?id=${id}`
          this.$http.post(url).then(data => {
            // this.indent = data.data.payload
            console.log(data)
            if (data.data.code == 200) {
                this._list()
            }

          })
        });

      },
      payment:function(){
          
      }
    }
  }

</script>
