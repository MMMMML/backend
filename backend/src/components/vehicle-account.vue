<template>
  <div>
    <p class="header">保障人员信息</p>
    <el-form :inline="true" label-width='110px' class="demo-form-inline">
      <el-form-item label="号牌号码">
        <el-input  readonly v-model="user.plate_number"></el-input>
      </el-form-item>
      <el-form-item label="车辆类型">
        <el-input readonly v-model="user.vehicle_type"></el-input>
      </el-form-item>
      <el-form-item label="使用性质">
        <el-input readonly v-model="user.using_nature"></el-input>
      </el-form-item>
      <el-form-item label="品牌型号">
        <el-input readonly v-model="user.brand"></el-input>
      </el-form-item>
      <el-form-item label="车辆识别代号">
        <el-input readonly v-model="user.vin"></el-input>
      </el-form-item>
      <el-form-item label="发动机号">
        <el-input readonly v-model="user.engine_no"></el-input>
      </el-form-item>
      <el-form-item label="所有人">
        <el-input readonly v-model="user.owner"></el-input>
      </el-form-item>
      <el-form-item label="住所">
        <el-input readonly v-model="user.owner_address"></el-input>
      </el-form-item>
      <el-form-item label="注册日期">
        <el-input readonly v-model="user.reg_date"></el-input>
      </el-form-item>
      <el-form-item label="发证日期">
        <el-input readonly v-model="user.release_date"></el-input>
      </el-form-item>
      <el-form-item label="车辆联系人">
        <el-input readonly v-model="user.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系人手机号">
        <el-input readonly v-model="user.contact_mobile"></el-input>
      </el-form-item>
    </el-form>


        <div>
      <p class="header">会员记录</p>
       <div>
      <el-table :data="members" border style="width: 100%"  @cell-click='check'>
        <el-table-column fixed prop="serviceType" label="业务类型" :formatter='formatter'>
        </el-table-column>
        <el-table-column prop="serviceId" label="业务编号">
        </el-table-column>
        <el-table-column prop="num" label="变更数量">
        </el-table-column>
        <el-table-column prop="changeTime" label="变更时间">
        </el-table-column>
        <el-table-column prop="effectTime" label="生效时间">
        </el-table-column>
        <el-table-column prop="expireTime" label="失效时间">
        </el-table-column>
         <el-table-column fixed prop="remark" label="备注">
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
export default {
data(){
    return{
        members:[],
        user:[]
    }
},
created(){
    var url = `member/getCMemberChanges?carId=${window.sessionStorage.getItem('carid')}&memberId=${window.sessionStorage.getItem('memberId')}`
     this.http.get(url).then(data => {
         const {members,user} = data.data.payload
         this.members = members
         this.user = user
         this.members.map(item=>{
            // item.periodUnit = item.periodUnit =
            if(item.periodUnit==1){
                item.period='天'
            }
             if(item.periodUnit==2){
                item.period='月'
            }
            if(item.periodUnit==3){
                item.period='年'
            }
            item.num = item.periodLimit +item.period
        })
          console.log(data)
        });
},
  methods:{
        formatter(row, column) {
        var service = ''
        switch (row.serviceType) {
          case 1:
            service = '订单购买'
            break
          case 2:
            service = "兑换码"
            break
          case 3:
            service = "空降联盟权益活动"
            break
        }
        return service
      },
      check:function(row){
      if(row.serviceType==1){
        window.sessionStorage.setItem('getOrderDetail',row.serviceId)
        window.location.hash='/layout/particular'
      }
      
    }
  }
}
</script>


