<template>
   <div>
       <el-form :inline="true"  class="demo-form-inline">
  <el-form-item label='昵称'>
    <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="realName" placeholder="请输入姓名"></el-input>
  </el-form-item>
   <el-form-item label="证件号">
    <el-input v-model="idNumber" placeholder="请输入证件号"></el-input>
  </el-form-item>
   <el-form-item label="注册时间">
    <el-date-picker
      v-model="startDate"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
   <el-form-item label="结束时间">
    <el-date-picker
      v-model="endDate"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="search()">查询</el-button>
  </el-form-item>
</el-form>


 <div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="id" label="账号ID">
        </el-table-column>
        <el-table-column fixed prop="nick_name" label="昵称">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号">
        </el-table-column>
        <el-table-column prop="real_name" label="姓名">
        </el-table-column>
        <el-table-column prop="id_number" label="证件号">
        </el-table-column>
        <el-table-column prop="create_time" label="注册时间">
        </el-table-column>
        <el-table-column prop="consume_limit" label="消费额度" >
        </el-table-column>
        <el-table-column fixed="right" label="账号信息" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="check(scope.row)" size="small">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="消费记录" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="examine(scope.row)" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        class="mart" 
        style="float:right"
        :page-size="pageSize" 
        @current-change="getPageData"
        :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>

   </div>


<!-- 结果页 -->

</template>


<script>
 import moment from 'date-fns'
export default {
  data(){
      return{
        startDate:'',
        endDate:'', 
        list:[],
        id:'',
        nickName:'',
        realName:'',
        mobile:'',
        idNumber:'',
        centerDialogVisible : false,
        listnum: 0,
        pageSize: 20,
        currentPage: 1,
      }
      
  },
  created(){
    var url = 'user/queryList';
    this._handlePage(url)
  },
  methods:{
    _handlePage(...args) {
      this.http.get(...args).then(data => {
        const { list, total } = data.data.payload
        this.list = list
        this.listnum = total
        this.list.map(item=>{
          item.create_time = moment.format(item.create_time, "YYYY-MM-DD")
        })
      });
    },
    getPageData(val){
      this.currentPage = val;
      var url = 'user/queryList';
      var params = {
          nickName:this.nickName,
          mobile:this.mobile,
          realName:this.realName,
          idNumber:this.idNumber,
          startDate:this.startDate,
          endDate:this.endDate,
          pageIndex: val,
      }
      // let obj = { params }
      this._handlePage(url, params)
    },
    search:function(){
      this.getPageData(1)
    },
    check:function(row){
      console.log(row.id)
      window.sessionStorage.setItem('userId',row.id)
      window.location.hash='/layout/account'
    },
    examine:function(row){
      console.log(row.id)
      window.sessionStorage.setItem('userId',row.id)
      window.location.hash='/layout/expenditure'
    }
  }
}
</script>


