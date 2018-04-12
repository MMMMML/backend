<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="所有人">
        <el-input v-model="owner" placeholder="请输入所有人"></el-input>
      </el-form-item>
      <el-form-item label="号牌号码">
        <el-input v-model="plateNumber" placeholder="请输入号牌号码"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="contact" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="contactMobile" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
      </el-form-item>
    </el-form>


    <!-- 结果 -->
    <div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="owner" label="所有人">
        </el-table-column>
        <el-table-column prop="plate_number" label="号牌号码">
        </el-table-column>
        <el-table-column prop="vin" label="车辆识别代号">
        </el-table-column>
        <el-table-column prop="engine_no" label="发动机号">
        </el-table-column>
        <el-table-column prop="contact" label="车辆联系人">
        </el-table-column>
        <el-table-column prop="contact_mobile" label="联系电话">
        </el-table-column>
        <el-table-column prop="benefits" label="享有权益">
        </el-table-column>
        <el-table-column prop="state" label="权益状态">
        </el-table-column>
        <el-table-column fixed="right" label="所有权益" width="100">
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
  export default {
    data() {
      return {
        list: [],
        contactMobile: '',
        contact: '',
        plateNumber: '',
        owner: '',
        listnum: 0,
        pageSize: 20,
        currentPage: 1,
      }
    },
    created() {
      var url = 'member/findEnsureCarInfo'
      this._handlePage(url)

    },
    methods: {
      _handlePage(...args) {
        this.http.get(...args).then(data => {
          const {list,total} = data.data.payload
          this.list = list
          this.listnum = total
          console.log(data)
          this.list.map(item=>{
              item.state = item.state ==true?'有效':'过期'
          })
        });
      },
      getPageData(val) {
        this.currentPage = val;
        var url = 'member/findEnsureCarInfo'
        var params = {
          owner: this.owner,
          plateNumber: this.plateNumber,
          contact: this.contact,
          contactMobile: this.contactMobile,
          pageIndex: val,
        }
        this._handlePage(url, params)
      },

      search: function () {
        this.getPageData(1)
      },
      check:function(row){
           window.sessionStorage.setItem('memberId',row.member_id)
          window.sessionStorage.setItem('carid',row.car_id)
          window.location.hash='/layout/vehiclecar'
      }
    }
  }

</script>
