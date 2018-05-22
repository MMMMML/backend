<template>
  <div>
    <p class="header">账号信息</p>
    <el-form :inline="true"  label-width='110px' class="demo-form-inline">
      <el-form-item label="账号ID">
        <el-input readonly v-model="userInfo.id"></el-input>
      </el-form-item >
      <el-form-item label="手机号">
        <el-input readonly  v-model="userInfo.mobile"></el-input>
      </el-form-item>
      <el-form-item label="消费额度">
        <el-input readonly v-model="userInfo.consumeLimit"></el-input>
      </el-form-item>
    </el-form>



    <div>
      <p class="header">订单列表</p>
      <div>
      <el-table :data="orderList" border style="width: 100%">
        <el-table-column fixed prop="id" label="订单编号">
        </el-table-column>
        <el-table-column prop="createTime" label="购买日期">
        </el-table-column>
        <el-table-column prop="mainName" label="产品名称">
        </el-table-column>
        <el-table-column prop="totalPrice" label="价格">
        </el-table-column>
        <el-table-column prop="paidStatus" label="订单状态">
        </el-table-column>
        <el-table-column fixed="right" label="订单详情" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="check(scope.row)"  size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </div>
    <el-button type="primary" class="history" onclick="javascript:history.back(-1);">返回</el-button>
  </div>
</template>
<style>
.header{
    font-size: 20px;
    margin: 25px 0;
}
.history{
    float:right;
    padding:15px 50px;
    margin-top:20px;
}
</style>
<script>
import moment from 'date-fns'
export default {
  data(){
    return{
      userInfo:"",
      orderList:""
    }
  },
  mounted(){
    let url =`/user/consumptionLog?userId=${window.sessionStorage.getItem('userId')}`
    this.http.get(url).then(data => {
          console.log(data)
          const {orderList,userInfo} = data.data.payload
          this.orderList = orderList.list
          this.userInfo = userInfo
          this.orderList.map(item=>{
            if(item.paidStatus==0) item.paidStatus ='待支付'
            if(item.paidStatus==1) item.paidStatus ='已支付'
            if(item.paidStatus==-2) item.paidStatus ='用户主动取消'
            if(item.paidStatus==-3) item.paidStatus ='订单支付超时'
             item.createTime = moment.format(item.createTime,'YYYY-MM-DD')
          })
    });
  },
  methods:{
    check:function(row){
      console.log(row.id)
      window.sessionStorage.setItem('getOrderDetail',row.id)
      window.location.hash='/layout/particular'
    }
  }
}
</script>

