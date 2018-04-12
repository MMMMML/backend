<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="保障人">
        <el-input v-model="realName" placeholder="请输入保障人"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="证件号">
        <el-input v-model="idNumber" placeholder="请输入证件号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
      </el-form-item>
    </el-form>



    <div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="realName" label="姓名">
        </el-table-column>
        <el-table-column prop="mobile" label="性别">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号">
        </el-table-column>
        <el-table-column prop="idtype" label="证件类型" :formatter='formatter'>
        </el-table-column>
        <el-table-column prop="idNumber" label="证件号">
        </el-table-column>
         <el-table-column prop="benefits" label="享有权益">
        </el-table-column>
        <el-table-column prop="expireTime" label="权益状态">
        </el-table-column>
        <el-table-column fixed="right" label="查看记录" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="check(scope.row)" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import moment from 'date-fns'
  export default {
    data() {
      return {
        list: [],
        realName: '',
        mobile: '',
        idType: '',
        idNumber: '',
        expireTime: '',
        idtype: '',
        id: '',
        listnum: 0,
        pageSize: 20,
        currentPage: 1,
      }
    },
    created() {
      var url = 'member/umemberList';
      this._handlePage(url)
    },
    methods: {
      _handlePage(...args) {
        this.http.get(...args).then(data => {
          const {list,total} = data.data.payload
          this.list = list
          this.listnum = total
          var date = moment.format((new Date()), "YYYY-MM-DD HH:mm:ss")
          this.list.map(item => {
            item.expireTime = item.expireTime >= date ? '有效' : '过期'
          })
        })
      },
      getPageData(val){
        this.currentPage = val;
        var url = 'member/umemberList';
        var params = {
          realName: this.realName,
          mobile: this.mobile,
          idNumber: this.idNumber,
          pageIndex:val,
        }
        this._handlePage(url, params)
      },
      formatter(row, column) {
        var idtype = ''
        switch (row.idType) {
          case 0:
            idtype = '身份证'
            break
          case 1:
            idtype = "台胞证"
            break
          case 2:
            idtype = "港澳通行证"
            break
          case 3:
            idtype = "护照"
            break
        }
        return idtype
      },
      search: function () {
       this.getPageData(1)
      },
      check:function(row){
          window.sessionStorage.setItem('memberid',row.id)
          window.sessionStorage.setItem('id',row.uid)
          window.location.hash='/layout/safe'
      }
    }
  }

</script>
