<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="批次编号">
        <el-input placeholder="请输入保障人"></el-input>
      </el-form-item>
      <el-form-item label="批次名称">
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="兑换商品">
        <el-select placeholder="请选择">
          <el-option>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
      </el-form-item>
    </el-form>



    <!-- 结果表格 -->
    <div >
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="batch_no" label="批次编号">
        </el-table-column>
        <el-table-column prop="generate_time" label="生成日期">
        </el-table-column>
        <el-table-column prop="name" label="批次名称">
        </el-table-column>
        <el-table-column prop="packageName" label="兑换商品">
        </el-table-column>
        <el-table-column prop="count" label="数量">
        </el-table-column>
        <el-table-column prop="redeemed_count" label="已兑换">
        </el-table-column>
        <el-table-column prop="endtime" label="截止日期">
        </el-table-column>
        <el-table-column fixed="right" label="操作"  width="100"  >
          <template slot-scope="scope">
                  <el-button type="text" @click="check(scope.row)" size="small" >导出</el-button>
                  <el-button type="text" @click="grow(scope.row)" size="small">生成</el-button>
            <!-- <el-button type="text" @click="redact(scope.row)" size="small">编辑</el-button>
            <el-button type="text" @click="delate(scope.row)" size="small">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>

      <!-- <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
      }
    },
    mounted() {
      this._reload()
    },
    methods: {
         _reload(){
            let url = 'redeemCode/pagedList'
            this.http.post(url).then(data => {
            this.list = data.data.payload.list
        });
        },
      check: function (id) {
        let url = `redeemCode/exportCodeCsv.csv?batchId=${id.id}`
        const base = 'http://aj.kingwingaviation.com/alliance-java/backend/'
        location.href = `${base}${url}`
        
      },
      grow:function(id){
          let url = `redeemCode/generateCodes?batchId=${id.id}`
          this.http.post(url).then(data => {
            // this.list = data.data.payload.list
            console.log(data)
            if(data.data.code==200){
                this._reload()
            }
            if(data.data.code==500){
                alert(data.data.message)
            }
        });
      }

    }
  }

</script>
