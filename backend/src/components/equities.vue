<template>
  <div style="overflow:hidden">
    <!-- 头部 -->
    <div>
      <h3>权益管理</h3>
      <el-col :span="24">
        <el-button style="float:right" type="primary" @click="creat()">创建新权益</el-button>
      </el-col>


    </div>
    <!-- 第一行搜索栏 -->
    <div>
      <div class="mart">
        <el-form ref="form" label-width="100px">
          <el-row :gutter="15">
            <el-col :span="5">
              <el-form-item label="权益编号：">
                <el-input style="width:100%" class="minwidth" v-model="number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="创建时间：">
                <el-date-picker class="minwidth" v-model="bdate" style="width:100%" type="datetime" placeholder="选择开始日期时间" format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item label="~">

              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="">
                <el-date-picker class="minwidth" v-model="edate" style="width:100%" type="datetime" placeholder="选择开始日期时间" format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="">
                <el-checkbox label='1' v-model="status">仅在生效中权益</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="关键字：">
                <el-input style="width:100%" class="minwidth" v-model='keyword'></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="标签：">
                <el-input style="width:100%" class="minwidth" v-model='label'></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item>
                <el-button type="primary" @click="search()">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </div>
    </div>
    <div v-if="resp.length!=0">
      <el-table :data="resp" border class="mart" style="width: 100%">
        <el-table-column prop="number" label="权益编号" width="160">
        </el-table-column>
        <el-table-column prop="version" label="版本号" width="160">
        </el-table-column>
        <el-table-column prop="label" label="标签" width="130">
        </el-table-column>
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="claimant" label="制定人">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="auditAcId" label="审核人">
        </el-table-column>
        <el-table-column prop="auditTime" label="审核时间">
        </el-table-column>
        <el-table-column prop="stateName" label="状态" :formatter="stateFormatter">
        </el-table-column>
        <el-table-column prop="stateName" label="操作" width="200" align="left">
          <template slot-scope="scope">
            <router-link :to="{ name: 'redactequities', params: { id: scope.row.id }}">
              <el-button type="info" size="mini" v-show="scope.row.state==0">编辑</el-button>
            </router-link>
            <router-link :to="{ name: 'auditequities', params: { id: scope.row.id }}">
              <el-button type="primary" size="mini" v-show="scope.row.state==0">审核</el-button>
            </router-link>

            <el-button type="success" size="mini" v-show="scope.row.state!=0" @click="detail(scope.row)">详情</el-button>

            <el-button type="danger" size="mini" @click="dialogVisible = true;deleted(scope.row)" v-show="scope.row.state==0">删除</el-button>
            <router-link :to="{ name: 'updatequities', params: { id: scope.row.id }}">
              <el-button type="warning" size="mini" v-show="scope.row.state==1">更新</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>

    <!-- 删除弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="20%">
      <h3 style="text-align:center">确定删除本条数据吗？</h3>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;sure()">确 定</el-button>
      </span>
    </el-dialog>


    <el-dialog title="" :visible.sync="details" width="20%">
      <div>
        <p>
          <span>{{datalist.number}}</span>
          <span>{{datalist.name}}</span>
          <span>版本{{datalist.version}}</span>
        </p>
        <div class="navlist">
          {{datalist.description}}
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="details = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<style>
  .el-input__inner {
    width: 100%;
  }

  .el-button+.el-button {
    margin-left: 0;
  }

  .el-dialog__body {
    padding: 5px 0;
    color: #606266;
    line-height: 24px;
    font-size: 14px;
  }

  .el-dialog__body p {
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }

  .el-dialog__header {
    padding: 0;
  }

  .navlist {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    background: #fbfbcd;
  }

</style>

<script>
  export default {
    data() {
      return {
        label: "",
        keyword: "",
        status: '',
        bdate: "",
        edate: "",
        name: "",
        date: "",
        show: "",
        count: "",
        number: "",
        dialogVisible: false,
        dialog: false,
        write: false,
        details: false,
        radio: "1",
        list: [],
        editRow: {}, //当前编辑的数据
        cardname: "",
        people: "",
        pageIndex: '1',
        resp: '',
        listid: '',
        datalist: '',
        listnum: '',
        pageSize: 20,
        currentPage: 1,
      };
    },
    methods: {
      getPageData(val) {
        this.currentPage = val;
        var url = '/api/benefit/list';
        if (this.status == true) {
          this.state = 1
        } else {
          this.state = ''
        }
        var params = {
          number: this.number,
          bdate: this.bdate,
          edate: this.edate,
          keyword: this.keyword,
          label: this.label,
          status: this.state,
          pageIndex: val
        }
        this.http.post(url, params).then(data => {
          console.log(data)
          this.resp = data.data.payload.list
          this.listnum = data.data.payload.total
          if (data.data.payload.total == 0) {
            this.$alert('暂无数据', {
              type: "warning"
            })
          }
        });
      },
      search: function () {

        this.getPageData(1)


      },
      stateFormatter(row, column) {
        var stateName;
        switch (row.state) {
          case 0:
            stateName = '待审核'
            break
          case 1:
            stateName = '生效中'
            break
          case -1:
            stateName = '已失效'
            break
        }
        return stateName
      },
      deleted: function (row) {
        this.listid = row.id

      },
      sure: function () {
        // console.log(this.listid)
        var url = "api/benefit/delete" + '?id=' + this.listid;
        this.http.post(url).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$alert('删除成功', {
              type: "success"
            })
            this.search()
          }
        });
      },
      detail: function (row) {
        this.details = true;
        var url = 'api/benefit/detail' + '?id=' + row.id;
        this.http.get(url).then(data => {

          if (data.data.code == 200) {
            this.datalist = data.data.payload
          }
        });
      },
      creat: function () {
        window.location.hash = '/layout/createquities'
      },

    }
  };

</script>
