<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="批次编号">
        <el-input v-model="batchNo" placeholder="请输入批次编号"></el-input>
      </el-form-item>
      <el-form-item label="批次名称">
        <el-input v-model='name' placeholder="请输入批次名称"></el-input>
      </el-form-item>
      <el-form-item label="兑换商品">
        <el-select v-model="packageId" placeholder="请选择">
          <el-option
          v-for="item in product"
          :key="item.mainName"
          :label="item.mainName"
          :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生成时间">
        <el-date-picker type="date" v-model="generateTimeStart" value-format="yyyy-MM-dd" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到">
        <el-date-picker type="date" v-model="generateTimeEnd" value-format="yyyy-MM-dd" placeholder="选择日期">
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
                  <el-button type="text" @click="check(scope.row)" size="small" v-show='scope.row.state > 2'>导出</el-button>
                  <el-button type="text" @click="grow(scope.row)" size="small" v-show='scope.row.state === 1'>生成</el-button>
                  <el-button type="text" readonly size="small" v-show='scope.row.state === 2'>生成中</el-button>
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
import moment from 'date-fns'
  export default {
    data() {
      return {
        list: [],
        batchNo:'',
        name:'',
        generateTimeStart:'',
        generateTimeEnd:'',
        packageId:''
      }
    },
    mounted() {
        // let url = 'common/packageList'
        let url = 'http://aj.kingwingaviation.com/alliance/api/common/packageList'
        this.$http.get(url).then(data => {
            this.product = data.data.payload
            console.log(data)
        });
      this._reload()
    },
    methods: {
         _reload(){
            let url = 'redeemCode/pagedList'
            this.http.post(url).then(data => {
            this.list = data.data.payload.list
            this.list.map(item=>{
              item.endtime = moment.format(item.endtime,"YYYY-MM-DD")
            })
        });
        },


      check: function (id) {
        let url = `redeemCode/exportCodeCsv.csv?batchId=${id.id}`
        // const base = 'http://aj.kingwingaviation.com/alliance/api/backend/' //正式
        const base = 'http://aj.kingwingaviation.com/alliance-java/backend' //测试
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
      },
      search:function(){
          let url = 'redeemCode/pagedList'
          let params = {
            batchNo:this.batchNo,		
            name:this.name,			
            packageId:this.packageId,		
            generateTimeStart:this.generateTimeStart,	
            generateTimeEnd:this.generateTimeEnd		 
          }
           this.http.post(url,params).then(data => {
            this.list = data.data.payload.list
            console.log(data)
            // if(data.data.code==200){
            //     this._reload()
            // }
            // if(data.data.code==500){
            //     alert(data.data.message)
            // }
        });
      }


    }
  }

</script>
