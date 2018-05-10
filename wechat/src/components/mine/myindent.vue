<template>
  <div>
    <p v-show="isshow" style="text-align: center;padding: 20px;">您还没有订单记录哦，赶紧获取您的守护权益吧！</p>
    <div v-for="(item,index) in indent" :key='index'>
      <div class="indent-box" @click="confirm(item.id)">
        <div class="indent-header">
          <p>{{item.createTime}}</p>
        </div>
        <div class="indent-pay">
          <p>订单编号&nbsp;  {{item.id}}</p>
          <p class='status' :class='{"ok": (item.Status === "已支付")}'>{{item.Status}}</p>
        </div>
        <div class="ident-img" :class='{"pid1": item.pdId === "A", "pid2": item.pdId === "B", "pid3": item.pdId === "C", "pid4": item.pdId === "D", "pid5": item.pdId === "E"}'>
          <img style="width:30%;height:15%" :src="item.url" alt="">
          <div class='content'>
            <p>{{item.name}}</p>
            <p>{{item.mainName}}</p>
          </div>
        </div>
        <div class="indent-price">
          <p>合计：￥{{item.totalPrice}}</p>
          <div v-show="item.paidStatus==0">
            <button @click.stop="cancel(item.id)">取消</button>
            <button @click="payment()">支付</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
  .indent-box {
    color: #4b4b4b;
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
      // background: #F0DCDC;
      &.pid1 {
        background: #f0e9e1;
      }
      &.pid2 {
        background: #f0dcdc;
      }
      &.pid3 {
        background: #e1e6f0;
      }
      &.pid4 {
        background: #fff4f4;
      }
      &.pid5 {
        background: #eeebf0;
      }
    }
    .indent-price {
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;
      align-items: center;
      height: 46px;
      p {
        margin: 0;
      }
    }
    p {
      color: #4B4B4B;
    }
    .content {
      margin-left:10px;
      p {
        margin: 0;
        line-height: 25px;
        &:first-child {
          font-weight: bold;
        }
      }
    }
    .status {
      color: #ff0000;
      &.ok {
        color: #a0a0a0;
      }
    }
    button {
      width: 40px;
      height: 26px;
      border: 1px solid #ddd;
      font-size: 12px;
      text-align: center;
      border-radius: 3px;
      padding: 0;
      &:last-child {
        color: #fff;
        background: #ff0000;
      }
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
        indent: '',
        isshow:false,
      }
    },
    mounted() {
      this._list()
    },
    methods: {
      _list() {
        let url = `wechat/order/getListForFront?userid=${window.sessionStorage.getItem('id')}`
        this.$http.get(url).then(data => {
          this.indent = data.data.payload
          if(data.data.payload ==''){
            this.isshow = true
          }
          this.indent.map(item => {
            if (item.paidStatus == 0) item.Status = '待买家支付'
            if (item.paidStatus == 1) item.Status = '已支付'
            if (item.paidStatus == -2) item.Status = '用户取消'
            if (item.paidStatus == -1) item.Status = '未支付'
            if (item.paidStatus == -3) item.Status = '订单支付超时'

          })
        })
      },
      confirm: function (id) {
        window.sessionStorage.setItem('orderId', id)
        this.$router.push('/myindentinfo')
      },
      cancel: function (id) {
        MessageBox.confirm('确定取消订单？').then(action => {
          let url = `wechat/order/cancelOrder?id=${id}`
          this.$http.post(url).then(data => {
            if (data.data.code == 200) {
                this._list()
            }
          })
        })
      },
      payment:function(){
          
      }
    }
  }

</script>
