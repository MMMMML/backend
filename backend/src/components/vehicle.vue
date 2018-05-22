<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="所有人">
        <el-input v-model="owner" placeholder="请输入所有人"></el-input>
      </el-form-item>
      <el-form-item label="号牌号码">
        <el-input v-model="plateNumber" placeholder="请输入号牌号码"></el-input>
      </el-form-item>
      <el-form-item label="购买人">
        <el-input v-model="createUserName" placeholder="请输入号牌号码"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="createUserMobile" placeholder="请输入号牌号码"></el-input>
      </el-form-item>
      <el-form-item label="变更时间">
        <el-date-picker v-model="updateTimeStart" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到">
        <el-date-picker v-model="updateTimeEnd" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="derive()" style="float:right;margin:20px;width:150px">导出</el-button>
    <!-- 结果 -->
    <div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="update_time" label="变更时间">
        </el-table-column>
        <el-table-column fixed prop="real_name" label="购买人">
        </el-table-column>
        <el-table-column fixed prop="mobile" label="手机号">
        </el-table-column>
        <el-table-column fixed prop="owner" label="所有人">
        </el-table-column>
        <el-table-column prop="plate_number" label="号牌号码">
        </el-table-column>
        <el-table-column prop="vin" label="车辆识别代号">
        </el-table-column>
        <el-table-column prop="main_name" label="产品名称">
        </el-table-column>
        <el-table-column prop="benefits" label="享有权益">
        </el-table-column>
        <el-table-column prop="expireTimes" label="权益状态">
        </el-table-column>
        <el-table-column prop="effect_time" label="生效日期">
        </el-table-column>
        <el-table-column prop="expire_time" label="失效日期">
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
  import moment from 'date-fns'
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
        updateTimeStart: '',
        updateTimeEnd: '',
        createUserName: '',
        createUserMobile: ''
      }
    },
    created() {
      var url = 'member/findEnsureCarInfo'
      this._handlePage(url)

    },
    methods: {
      _handlePage(...args) {
        this.http.get(...args).then(data => {
          const {
            list,
            total
          } = data.data.payload
          this.list = list
          this.listnum = total
          console.log(data)
          var date = moment.format((new Date()), "YYYY-MM-DD")
          this.list.map(item => {
            if (item.effect_time > date) {
              item.expireTimes = '待生效'
            } else if (item.expire_time >= date) {
              item.expireTimes = '生效中'
            } else if (item.expire_time < date) {
              item.expireTimes = '过期'
            }
            item.effect_time = moment.format(item.effect_time, "YYYY-MM-DD")
            item.expire_time = moment.format(item.expire_time, "YYYY-MM-DD")
            item.update_time = moment.format(item.update_time, "YYYY-MM-DD")
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
          updateTimeEnd: this.updateTimeEnd,
          updateTimeStart: this.updateTimeStart,
          createUserName: this.createUserName,
          createUserMobile: this.createUserMobile,
          pageIndex: val,
        }
        this._handlePage(url, params)
      },

      search: function () {
        this.getPageData(1)
      },
      check: function (row) {
        window.sessionStorage.setItem('memberId', row.member_id)
        window.sessionStorage.setItem('carid', row.car_id)
        window.location.hash = '/layout/vehiclecar'
      },
      derive: function () {
        let url =
          `member/exportVehicleMembers.xlsx?owner=${this.owner}&plateNumber=${this.plateNumber}&createUserName=${this.createUserName}&createUserMobile=${this.createUserMobile}&updateTimeStart=${this.updateTimeStart}&updateTimeEnd=${this.updateTimeEnd}`
        //  const base = 'http://aj.kingwingaviation.com/alliance/api/backend/' //正式
        const base = 'http://aj.kingwingaviation.com/alliance-java/backend/'
        location.href = `${base}${url}`
      }
    }
  }

</script>
