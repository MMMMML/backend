<template>
  <div>
    <p class="header">账号信息</p>
    <el-form :inline="true"  label-width='110px' class="demo-form-inline">
      <el-form-item label="账号ID">
        <el-input readonly v-model="userInfo.id"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-input readonly v-model="userInfo.create_time" ></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input readonly v-model="userInfo.mobile" ></el-input>
      </el-form-item>
    </el-form>

    <div>
      <p class="header">个人信息</p>
      <el-form :inline="true" :label-position="labelPosition" label-width='110px' class="demo-form-inline">
        <el-form-item label="昵称">
          <el-input readonly v-model="userInfo.nick_name"></el-input>
          <!-- <span>{{userInfo.real_name}}</span> -->
        </el-form-item>
        <el-form-item label="性别">
          <el-input readonly v-model="userInfo.gender"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input readonly v-model="userInfo.birthday"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input readonly v-model="userInfo.city" ></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <p class="header">绑定证件</p>
      <el-form :inline="true" :label-position="labelPosition" label-width='110px' class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input readonly v-model="userInfo.real_name" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input readonly v-model="userInfo.gender" ></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input readonly v-model="userInfo.id_number" ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input readonly v-model="userInfo.mobile" ></el-input>
        </el-form-item>
        <el-form-item label="血型">
          <el-input readonly v-model="userInfo.blood"></el-input>
        </el-form-item>
        <el-form-item label="既往病史">
          <el-input readonly v-model="userInfo.family_history" ></el-input>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input readonly v-model="userInfo.other_info" ></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人">
          <el-input readonly v-model="userInfo.emergency_contact" ></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
          <el-input readonly v-model="userInfo.emergency_phone" ></el-input>
        </el-form-item>
      </el-form>
    </div>


    <!-- 绑定车辆 -->
    <div>
      <p class="header">绑定车辆</p>
      <div>
      <el-table :data="carInfo" border style="width: 100%">
        <el-table-column fixed prop="owner" label="所有人">
        </el-table-column>
        <el-table-column prop="plate_number" label="号码号牌">
        </el-table-column>
        <el-table-column prop="vehicle_type" label="车辆类型">
        </el-table-column>
         <el-table-column fixed prop="using_nature" label="使用性质">
        </el-table-column>
        <el-table-column prop="vin" label="车辆识别代号">
        </el-table-column>
      </el-table>
    </div>
    </div>
    <el-button type="primary" class="history" onclick="javascript:history.back(-1);">返回</el-button>
  </div>
</template>
<style scoped>
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
          list:'',
          userInfo:'',
          usergender:'',
          carInfo:'',
      }
  },
  created(){
      var url = 'user/getUserInfoById'+'?userId='+window.sessionStorage.getItem('userId')
        this.http.get(url).then(data => {
          console.log(data)
         this.userInfo=data.data.payload.userInfo
         this.carInfo=data.data.payload.carInfo
         if(data.data.payload.userInfo.gender==0) data.data.payload.userInfo.gender='未知'
         if(data.data.payload.userInfo.gender==1) data.data.payload.userInfo.gender='男'
         if(data.data.payload.userInfo.gender==2) data.data.payload.userInfo.gender='女'


          this.carInfo.map(item => {
            item.using_nature = item.using_nature ==0?'非运营':'运营'
        })
        });
  }
}
</script>


