<template>
  <div>
    <h3>商品管理</h3>
    <el-row>
      <el-col :span="24">
        <el-button style="float:right" type="primary" @click="creat()">创建新商品</el-button>
      </el-col>
    </el-row>
    <el-form ref="form" label-width="100px" class="mart">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="商品名称：">
            <el-input placeholder="请输入商品名称" class="minwidth" v-model="name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品分类：">
            <el-select style="width:100%" v-model='categoryId'>
              <el-option v-for="item in catelist" :label='item.name' :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="search()">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div v-if="list!=0">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="id" label="商品编号">
        </el-table-column>
        <el-table-column prop="name" label="商品名称">
        </el-table-column>
        <el-table-column prop="categoryId" label="分类">
        </el-table-column>
        <el-table-column prop="billingAmount" label="卡面值" :formatter="formatter">
        </el-table-column>
        <el-table-column prop="price" label="销售价/参考价" :formatter="stateFormatter">
        </el-table-column>
        <!-- <el-table-column
      prop="zip"
      label="赠品"
     >
    </el-table-column> -->
        <el-table-column prop="availableZones" label="区域限定" :formatter="Formatter">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleted(scope.row)" type="text" size="small">删除</el-button>
            <router-link :to="{ name: 'redactcommodity', params: { id: scope.row.id }}">
              <el-button type="text" size="small">编辑</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage" layout="prev, pager, next, jumper,total"
        :total="listnum">
      </el-pagination>
    </div>


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
        name: '',
        list: '',
        writelist: '',
        listnum: '',
        pageSize: 20,
        currentPage: 1,
      }
    },
    mounted: function () {
      var url = 'api/category/catelist';
      this.http.post(url).then(data => {
        this.catelist = data.data.payload
        // console.log(data)
      });
    },
    methods: {
      getPageData(val) {
        this.currentPage = val;
        var url = 'api/product/list';
        var params = {
          name: this.name,
          categoryId: this.categoryId,
          pageIndex: val
        }
        this.http.post(url, params).then(data => {
          console.log(data)
          if (data.data.payload.total == 0) {
            this.$alert('暂无数据', {
              type: "warning",
              showConfirmButton: false,
              center: true
            })
          }
          if (data.data.code == 200) {
            this.list = data.data.payload.list
            this.listnum = data.data.payload.total
          }
        });
      },
      // 查询数据
      search: function () {
        this.getPageData(1)

      },
      stateFormatter(row, column) {
        return "￥" + row.unitPrice + "（￥" + row.sellingPrice + ")"
      },
      Formatter(row, column) {
        if (row.availableZones.length == 0) {
          row.availableZones = "全国"
        }
        return row.availableZones
      },
      formatter(row, column) {
        var Amount = '';
        switch (row.billingMode) {
          case 0:
            Amount = "天"
            break
          case 1:
            Amount = "月"
            break
        }
        return row.billingAmount + Amount
      },
      deleted: function (row) {
        var url = 'api/product/delete' + '?id=' + row.id
        this.http.get(url).then(data => {
          // this.catelist = data.data.payload
          console.log(data)
          if (data.data.code == 200) {
            this.$alert('删除成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
          }
        });

      },

      creat: function () {
        window.location.hash = '/layout/createcommodity'
      }
    }
  };

</script>
