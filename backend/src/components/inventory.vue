<template>
  <div style="overflow:hidden">
    <div>
      <h3>销售库存管理</h3>
      <el-col :span="24">
        <el-button style="float:right" type="primary" @click="dialogVisible = true">创建新仓库</el-button>
      </el-col>
    </div>
    <!-- 第一行搜索栏 -->
    <div>
      <div class="mart">
        <el-form label-width="100px" class="demo-ruleForm">
          <el-row :gutter="15">
            <el-col :span="6">
              <el-form-item label="商品分类：">
                <el-select style="width:100%" v-model='categoryId'>
                  <el-option v-for="(item,index) in catelist" :key='index' :label='item.name' :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="">
                <el-checkbox label='1' v-model="isInventory">仅显示有库存</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="21">
              <el-form-item label="商品名称：">
                <el-input style="width:30%" v-model="productName"></el-input>
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
    <div v-if="list.length!=0">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="name" label="仓库名称">
        </el-table-column>
        <el-table-column prop="categoryName" label="商品类别">
        </el-table-column>
        <el-table-column prop="pdname" label="商品名称">
        </el-table-column>
        <el-table-column prop="number" label="可销售库存">
        </el-table-column>
        <el-table-column prop="status" label="状态" :formatter='formatter'>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleted(scope.row)" type="text" size="small">记录</el-button>
            <el-button @click="putaway(scope.row)" type="text" size="small">{{scope.row.state==0?"上架":"下架"}}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>


    <!-- 新增入库单 -->
    <el-dialog title="单商品入库" class="header" :visible.sync="dialogVisible" width="25%">
      <div>
        <el-form ref="form" label-width="100px" v-model="warehouseId">
          <el-form-item label="仓库：">
            <el-select style="width:80%" v-model="warehouseId">
              <el-option v-for="(item,index) in whlist" :key='index' :label='item.name' :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品：">
            <el-select style="width:80%" v-model="productid">
              <el-option v-for="(item,index) in pdlist" :key='index'  :label='item.name' :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input-number style="width:30%" v-model="createnumber" controls-position="right" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="备注信息：">
            <el-input style="width:80%" v-model="remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;sure()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>


</style>

<script>
  export default {
    data() {
      return {
        catelist: '',
        categoryId: '',
        productName: '',
        isInventory: '',
        list: '',
        listnum: '',
        pageSize: 20,
        currentPage: 1,
        dialogVisible: false,
        number: 1,
        whlist: '',
        pdlist: '',
        createnumber: '',
        remark: '',
        warehouseId: '',
        productid: ''
      }
    },
    mounted: function () {
      var url = 'api/category/catelist';
      this.http.get(url).then(data => {
        this.catelist = data.data.payload
        console.log(data)
      });
      var url2 = 'api/warehouse/whlist';
      this.http.get(url2).then(data => {
        this.whlist = data.data.payload
        console.log(data)
      });
      var url3 = 'api/product/pdlist';
      this.http.get(url3).then(data => {
        this.pdlist = data.data.payload
        console.log(data)
      });
    },
    methods: {
      getPageData(val) {
        this.currentPage = val;
        var url = 'api/inventory/list'
        if (this.isInventory == true) {
          this.isInventory = 1
        } else {
          this.isInventory = ''
        }
        var params = {
          categoryId: this.categoryId,
          productName: this.productName,
          isInventory: this.isInventory,
          pageIndex: val
        }
        this.http.post(url, params).then(data => {
          this.list = data.data.payload.list
          this.listnum = data.data.payload.total
          console.log(data)
        });
      },
      search: function () {
        this.getPageData(1)

      },
      sure: function () {
        var url = 'api/inventory/create'
        var params = {
          warehouseId: this.warehouseId,
          productid: this.productid,
          number: this.createnumber,
          remark: this.remark
        }
        this.http.post(url, params).then(data => {
          if (data.data.code == 200) {
            this.$alert('新增成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
          }
          console.log(data)
        });
      },
      formatter(row, column) {
        var status = ''
        switch (row.state) {
          case 0:
            status = '下架'
            break
          case 1:
            status = "上架"
            break
        }
        return status
      },
      creat: function () {
        this.dialogVisible = true;

      },
      putaway: function (row) {
        if (row.state == 0) { //下架
          var url = 'api/inventory/onshelf' + '?id=' + row.id
          this.http.post(url).then(data => {
            this.$alert('上架成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          });
        }
        if (row.state == 1) {
          var url = 'api/inventory/offshelf' + '?id=' + row.id
          this.http.post(url).then(data => {
            this.$alert('下架成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          });
        }
      }
    }
  };

</script>
