<template>
  <div>
       <p class="header">保障人员信息</p>
    <el-form :inline="true"  label-width='110px' class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="user.realName" readonly ></el-input>
      </el-form-item>
      <el-form-item label="身份证">
        <el-input readonly v-model="user.idNumber" ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input readonly v-model="user.gender"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input readonly v-model="user.mobile"></el-input>
      </el-form-item>
      <el-form-item label="血型">
        <el-input readonly  v-model="user.blood"></el-input>
      </el-form-item>
      <el-form-item label="既往病史">
        <el-input readonly v-model="user.familyHistory"></el-input>
      </el-form-item>
      <el-form-item label="其他信息">
        <el-input readonly ></el-input>
      </el-form-item>
      <el-form-item label="紧急联系人">
        <el-input readonly v-model="user.emergencyContact"></el-input>
      </el-form-item>
      <el-form-item label="紧急联系人电话">
        <el-input readonly v-model="user.emergencyPhone"></el-input>
      </el-form-item>
    </el-form>


     <div>
      <p class="header">会员记录</p>
       <div>
      <el-table :data="members" border style="width: 100%">
        <el-table-column fixed prop="service" label="业务类型" :formatter='formatter'>
        </el-table-column>
        <el-table-column prop="serviceId" label="业务编号">
        </el-table-column>
        <el-table-column prop="num" label="变更数量">
        </el-table-column>
        <el-table-column prop="changeTime" label="变更时间">
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
          user: '',
          members:[]
      }
  },
  created(){
      var url = `member/getUMemberChanges?memberId=${window.sessionStorage.getItem('memberid')}&userId=${window.sessionStorage.getItem('id')}`
        this.http.get(url).then(data => {
          console.log(data)
        this.members = data.data.payload.members
        this.user = data.data.payload.user
        console.log(this.user.gender === 0)
        if(this.user.gender == 0) this.user.gender ='未知'
        if(this.user.gender == 1) this.user.gender ='男'
        if(this.user.gender == 2) this.user.gender ='女'
        console.log(this.user)
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
        }
        return service
      },
  }
}
</script>

