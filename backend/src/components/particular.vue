<template>
  <div>
    <p class="header">订单详情</p>
    <div class="just">
      <p>订单编号：{{benefitOrder.id}}</p>
      <p>订单状态：{{benefitOrder.paidStatus}}</p>
      <p>产品名称：{{benefitPackage.mainName}}</p>
      <p>下单时间：{{benefitOrder.benefitExpireTime}}</p>
      <p>服务费用：{{benefitOrder.totalPrice}}</p>
      <p>有效时间：{{benefitOrder.benefitExpireTime}}至{{benefitOrder.benefitEffectTime}}</p>
    </div>

    <div>
      <p class="header">权益人</p>
      <div>
        <el-table :data="personItems" border style="width: 100%">
          <el-table-column fixed prop="realName" label="姓名">
          </el-table-column>
          <el-table-column prop="idType" label="证件类型">
          </el-table-column>
          <el-table-column prop="idNumber" label="证件号">
          </el-table-column>
          <el-table-column prop="mobile" label="手机号">
          </el-table-column>
          <el-table-column prop="myBenefits" label="享有权益">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div>
      <p class="header">权益车辆</p>
      <div>
        <el-table :data="vehicleItems" border style="width: 100%">
          <el-table-column fixed prop="owner" label="所有人">
          </el-table-column>
          <el-table-column prop="plateNumber" label="车牌号码">
          </el-table-column>
          <el-table-column prop="vehicleType" label="车辆类型">
          </el-table-column>
          <el-table-column prop="usingNature" label="使用性质">
          </el-table-column>
          <el-table-column prop="vin" label="车辆识别代码">
          </el-table-column>
          <el-table-column prop="vehicle" label="享有权益">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-button type="primary" class="history" onclick="javascript:history.back(-1);">返回</el-button>
  </div>
</template>
<style scoped>
  .header {
    font-size: 20px;
    margin: 25px 0;
  }

  .history {
    float: right;
    padding: 15px 50px;
    margin-top: 20px;
  }

  .just {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

</style>
<script>
export default {
    data(){
        return{
            personItems:'',
            myBenefits:'',
            benefitPackage:'',
            benefitOrder:'',
            vehicleItems:''
        }
    },
    mounted(){
        let url =`/benefitOrder/getOrderDetail?id=${window.sessionStorage.getItem('getOrderDetail')}`
        this.http.get(url).then(data => {
          console.log(data)
            const{benefitOrder,benefitPackage,myBenefits,personItems,vehicleItems} = data.data.payload
            this.benefitOrder = benefitOrder
            this.benefitPackage = benefitPackage
            this.myBenefits = myBenefits
            this.personItems = personItems
            this.vehicleItems = vehicleItems
            if(this.benefitOrder.paidStatus==1) this.benefitOrder.paidStatus ='已支付'
            if(this.benefitOrder.paidStatus==0) this.benefitOrder.paidStatus ='待支付'
            if(this.benefitOrder.paidStatus==-2) this.benefitOrder.paidStatus ='用户主动取消'
            if(this.benefitOrder.paidStatus==-3) this.benefitOrder.paidStatus ='订单支付超时'
            this.personItems.map(item=>{
                // item.myBenefits = ''
                if (item.idType == 0) item.idType = '身份证'
                if (item.idType == 1) item.idType = '台胞证'
                if (item.idType == 2) item.idType = '回乡证'
                if (item.idType == 3) item.idType = '护照'
                item.ambulance = this.myBenefits.ambulance ==true?'120协调':''
                item.firstAid = this.myBenefits.firstAid ==true?'直升机院前救援':''
                item.medicalTransfer = this.myBenefits.medicalTransfer == true?'医疗转运9折':''
                item.myBenefits = item.ambulance +' '+item.firstAid+' '+item.medicalTransfer
            })
            this.vehicleItems.map(item=>{
                item.roadRescue = this.myBenefits.roadRescue ==true?'道路救援':''
                item.scooter = this.myBenefits.scooter ==true?'代步车':''
                item.vehicle = item.roadRescue +' '+item.scooter
            })
        });
    }
}
</script>

