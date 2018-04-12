<template>
  <div>
    <h3>类目管理</h3>
    <el-button type="primary" style="float:right" @click="dialogVisible = true">新增类目</el-button>
    <div class="mart">
      <span>类目名称及描述：</span>
      <el-input v-model="name"></el-input>
      <el-button type="primary" @click="search()">搜索</el-button>
    </div>
    <el-table :data="list" border style="width: 100%" class="mart" v-if="list.length!=0">
      <el-table-column fixed prop="id" label="类目编号">
      </el-table-column>
      <el-table-column prop="name" label="类目名称">
      </el-table-column>
      <el-table-column prop="description" label="类目描述">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="amend(scope.row)">修改</el-button>
          <el-button type="info" size="small" @click="deleted(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增弹窗 -->
    <el-dialog title="新建类目" :visible.sync="dialogVisible" width="30%">
      <el-form ref="resp" :model="resp" label-width="100px">
        <el-form-item label="类目名称：">
          <el-input style="width:70%" v-model='listname'></el-input>
        </el-form-item>
        <el-form-item label="类目描述：">
          <el-input type="textarea"  style="width:70%" v-model="description" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="newlist()">确定新建</el-button>
      </span>
    </el-dialog>
    <!--修改项目  -->
    <el-dialog title="修改类目" :visible.sync="dialog" width="30%">
      <el-form ref="resp" :model="resp" label-width="100px">
        <el-form-item label="类目名称：">
          <el-input style="width:70%" v-model='resp.name'></el-input>
        </el-form-item>
        <el-form-item label="类目描述：">
          <el-input type="textarea" style="width:70%" v-model="resp.description" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure()">确定修改</el-button>
      </span>
    </el-dialog>

    <!-- 删除弹窗 -->
    <!-- <el-dialog
  title="删除"
  :visible.sync="Visible"
  width="20%">
  <span>确定删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="Visible = false">取 消</el-button>
    <el-button type="primary" @click="Visible = false">确 定</el-button>
  </span>
</el-dialog> -->


    <el-dialog title="删除" :visible.sync="Visible" width="20%" center>
      <span style="text-align:center">确定删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Visible = false">取 消</el-button>
        <el-button type="primary" @click="Visible = false;couse()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<style>
  .el-textarea {
    width: 100%;
  }

  .el-dialog__header {
    padding: 15px 20px 10px;
    border-bottom: 1px solid #dcdfe6;
  }

  .el-dialog--center .el-dialog__body {
    text-align: center;
    padding: 25px 27px 30px;
  }

</style>

<script>
  export default {
    data() {
      return {
        name: '',
        pageIndex: '1',
        list: '',
        dialogVisible: false,
        dialog: false,
        Visible: false,
        listname: '',
        description: '',
        resp: '',
        row: ''
      }
    },
    methods: {
      // 查询数据
      search: function () {
        var url = 'api/category/list';
        var params = {
          name: this.name,
          pageIndex: this.pageIndex
        }
        this.http.post(url, params).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.list = data.data.payload.list
          }

        })
      },
      //   创建新类目
      newlist: function () {
        this.dialogVisible = false;
        var url = '/api/category/create';
        var params = {
          name: this.listname,
          description: this.description
        }
        this.http.post(url, params).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$alert('新增成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            setTimeout(this.search(), 3000)
          }
          if (data.data.code == 500) {
            this.$alert(data.data.message, {
              type: "warning",
              showConfirmButton: false,
              center: true
            })

          }
        })
      },
      //   类目修改
      amend: function (row) {
        this.dialog = true;
        this.resp = row
      },
      sure: function () {
        var url = 'api/category/edit';
        console.log()
        var params = {
          id: this.resp.id,
          name: this.resp.name,
          description: this.resp.description
        }
        this.http.post(url, params).then(data => {
          console.log(data)
          this.dialog = false
          if (data.data.code == 200) {

            this.$alert('修改成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          }

        })
      },
      //   删除数据
      deleted: function (row) {
        this.Visible = true
        this.row = row
      },
      couse: function (row) {
          var url = 'api/category/delete'+ '?id=' + this.row.id;
           this.http.get(url).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$alert('删除成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          }

        }) 
      }
    }
  };

</script>
