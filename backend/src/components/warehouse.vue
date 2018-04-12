<template>
  <div style="overflow:hidden">
    <div>
      <h3>仓库管理</h3>
      <el-col :span="24">
        <el-button style="float:right" type="primary" @click="dialogVisible = true">创建新仓库</el-button>
      </el-col>
    </div>
    <!-- 第一行搜索栏 -->
    <div>
      <div class="mart">
        <el-form ref="form" label-width="100px">
          <el-row :gutter="15">
            <el-col :span="5">
              <el-form-item label="仓库名称：">
                <el-input style="width:100%" v-model="name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item>
                <el-button type="primary" @click="search()">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </div>
    </div>
    <div v-if="list.length!=0">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="id" label="仓库编号">
        </el-table-column>
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="supervisor" label="负责人">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleted(scope.row)" type="text" size="small">删除</el-button>
            <el-button @click="amend(scope.row)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>

    <!-- 创建新仓库-->
    <el-dialog title="创建新仓库" class="header" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-form ref="form" label-width="100px">
          <el-form-item label="仓库名称：">
            <el-input v-model="housename"></el-input>
          </el-form-item>
          <el-form-item label="仓库地址：">
            <el-input v-model="houseaddress"></el-input>
          </el-form-item>
          <el-form-item label="负责人：">
            <el-input v-model="househuman"></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input v-model="housetel"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;sure()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title='' :visible.sync="Visible" width="30%">
      <div>
        <p class="header">
          <span>编辑仓库</span> {{version}}</p>
        <el-form ref="form" label-width="100px">
          <el-form-item label="仓库名称：">
            <el-input v-model="editname"></el-input>
          </el-form-item>
          <el-form-item label="仓库地址：">
            <el-input v-model="editaddress"></el-input>
          </el-form-item>
          <el-form-item label="负责人：">
            <el-input v-model="edithuman"></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input v-model="edittel"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Visible = false">取 消</el-button>
        <el-button type="primary" @click="Visible = false;amendsure()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<style>
  .header {
    font-size: 20px;
    margin-bottom: 20px;
    padding-left: 18px;
  }

</style>

<script>
  export default {
    data() {
      return {
        name: '',
        list: '',
        listnum: '',
        dialogVisible: false,
        Visible: false,
        housename: '',
        househuman: '',
        houseaddress: '',
        housetel: '',
        version: '',
        editname: '',
        edithuman: '',
        edittel: '',
        editaddress: '',
      }
    },
    methods: {
      getPageData(val) {
        this.currentPage = val;
        var url = 'api/warehouse/list';
        var params = {
          name: this.name,
          pageIndex: 1
        }
        this.http.post(url, params).then(data => {
          this.list = data.data.payload.list
          this.listnum = data.data.payload.total
        //   console.log(data)
        });
      },
      search: function () {
        this.getPageData(1)
      },
      sure: function () {
        var url = 'api/warehouse/create'
        var params = {
          name: this.housename,
          supervisor: this.househuman,
          address: this.houseaddress,
          phone: this.housetel
        }
        this.http.post(url, params).then(data => {

        });
      },
      amend: function (row) {
        this.Visible = true;
        this.version = row.id;
      },
      amendsure: function () {
        var url = 'api/warehouse/edit'
        var params = {
          id: this.version,
          name: this.editname,
          supervisor: this.edithuman,
          address: this.editaddress,
          phone: this.edittel
        }
        this.http.post(url, params).then(data => {
          if (data.data.code = 200) {
            this.$alert('修改成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          }
        //   console.log(data)
        });
      },
      deleted: function (row) {
        var url = 'api/warehouse/delete' + '?id=' + row.id
        this.http.get(url).then(data => {
          //   this.list = data.data.payload.list
          console.log(data)
          if (data.data.code = 200) {
            this.$alert('删除成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          }
        });

      },
    }
  };

</script>
