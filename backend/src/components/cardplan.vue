<template>
  <div class="homepage">
    <div class="title">
      <h2>发卡计划管理</h2>
      <div class="btn">
        <el-button type="primary" @click="dialogVisible = true">卡片激活</el-button>
        <el-button type="primary" @click="dialog = true">创建新计划</el-button>
      </div>
    </div>

    <div class="search">
      <el-form ref="form" label-width="100px">
        <el-row>
          <el-col :span="5">
            <el-form-item label="卡片名称：">
              <el-input style="width:100%" class="minwidth" v-model="noteText"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="商品编号：">
              <el-select v-model="num" placeholder="请选择商品编号">
                <el-option v-for="item in catelist" :label='item.name' :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="发布时间：">
              <el-date-picker class="minwidth" v-model="date" style="width:100%" type="datetime" placeholder="选择开始日期时间" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="~" style="margin-left:-50px">
              <el-date-picker class="minwidth" style="margin-left:20px" v-model="date" type="datetime" placeholder="选择结束日期时间" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item>
              <el-button class="mar10" type="primary" @click="search()">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>


    </div>
    <div v-if="list.length!=0">
      <div v-if="show" class="nothing">暂无数据</div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="batchNumber" label="批次号" width="160">
        </el-table-column>
        <el-table-column prop="productId" label="商品编码" width="160">
        </el-table-column>
        <el-table-column prop="batchSize" label="发行量" width="130">
        </el-table-column>
        <el-table-column prop="noteText" label="发片名称">
        </el-table-column>
        <el-table-column prop="cardExpireDate" label="有效期截止">
        </el-table-column>
        <el-table-column prop="claimant" label="申请人">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="250">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="statistics(scope.row)">统计</el-button>
            <el-button type="success" size="mini">导出</el-button>
            <el-button type="info" size="mini" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="mart" style="float:right" :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage"
        layout="prev, pager, next, jumper,total" :total="listnum">
      </el-pagination>
    </div>



    <el-dialog title="卡片激活" :visible.sync="dialogVisible" width="30%">


      <span>
        <span>激活方式：</span>
        <el-radio-group v-model="radio" style="display:inline-block">
          <el-radio-button label="0">指定卡号</el-radio-button>
          <el-radio-button label="1">同批次范围</el-radio-button>

        </el-radio-group>
        <div v-if="radio==0">
          <div class="mart">
            <span>完整卡号：</span>
            <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" v-model="textarea" @input="getCardsCount()">
            </el-input>
          </div>
          <div class="mart">
            <span>激活量：</span>&nbsp;&nbsp;&nbsp;
            <span>{{cardsCount}}</span>
          </div>
        </div>
        <div v-if="radio==1">
          <div class="mart">
            <span>起始卡号：</span>
            <el-input v-model='scardNo' :maxlength="16" style="width:55%" type="text" @input="getCardsCountByScope()"></el-input>
          </div>
          <div class="mart">
            <span>结束卡号：</span>
            <el-input v-model='ecardNo' :maxlength="16" style="width:55%" type="text" @input="getCardsCountByScope()"></el-input>
          </div>
          <div class="mart">
            <span>激活量：</span>&nbsp;&nbsp;&nbsp;
            <span>{{scopeCardsCount}}</span>
          </div>

        </div>

      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;activate()">激 活</el-button>
      </span>
    </el-dialog>
    <!-- 编辑发卡计划弹窗 -->
    <el-dialog title="编辑发卡计划" :visible.sync="write" width="30%">
      <div>
        <div>
          <span>商品编号：</span>&nbsp;&nbsp;&nbsp;
          <span>{{editRow.batchNumber}}</span>
        </div>
        <div class="mart">
          <span>发行量：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{{editRow.batchSize}}</span>
        </div>
        <div class="mart">
          <span>有效期截至：</span>
          <span>{{editRow.cardExpireDate}}</span>
        </div>
        <div class="mart">
          <span>卡片名称：</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input type="text" style="width:55%" placeholder="请输入卡片名称" v-model='cardname'>
          </el-input>
        </div>
        <div class="mart">
          <span>申请人：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input type="text" style="width:55%" placeholder="请输入申请人" v-model='people'>
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">返 回</el-button>
        <el-button type="primary" @click="dialog = false;redact()">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 创建发卡计划弹窗 -->
    <el-dialog title="创建发卡计划" :visible.sync="dialog" width="30%">
      <el-form ref="form" label-width="100px">

        <el-form-item label="商品编号：">
          <el-select v-model="num" placeholder="请选择商品编号">
            <el-option v-for="item in catelist" :label='item.name' :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发行量：">
          <el-input-number style="width:50%" v-model="count" controls-position="right" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="有效期截至：">
          <el-date-picker v-model="date" style="width:100%" type="datetime" placeholder="选择日期时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="卡片名称：">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="申请人：">
          <el-input v-model="human"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">返 回</el-button>
        <el-button type="primary" @click="dialog = false;newplan()">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 创建发卡计划弹窗e -->
    <!--统计报告弹窗s  -->
    <el-dialog :visible.sync="statisticsdialog" width="30%">

      <div>
        <span>统计报告:</span>
        <span>{{this.issuingPlan.noteText}}</span>
      </div>
      <div>
        <span>批次号：{{this.issuingPlan.batchNumber}}</span>
        <span>有效期截至到：{{this.issuingPlan.cardExpireDate}}</span>
        <br>
        <span>发行量：{{this.issuingPlan.batchSize}}</span>
        <br>
        <br>

        <span>未激活：{{this.stat.pending}}</span>
        <br>
        <span>已激活：{{this.stat.actived}}</span>
        <span>已使用：{{this.stat.used}}</span>
        <span>已作废：{{this.stat.invalid}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="statisticsdialog = false">确 定</el-button>
      </span>

    </el-dialog>
    <!--统计报告弹窗 e -->
  </div>
</template>



<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .nothing {
    text-align: center;
    padding-top: 50px;
  }

  .el-dialog__body {
    padding: 15px 98px;
  }

  .el-dialog__header {
    text-align: center;
  }

  .el-table {
    margin-top: 30px;
  }

  .el-form-item {
    display: inline-block;
  }

  .title {
    border-bottom: 1px solid #ccc;
    padding: 20px 300px 20px 50px;
    overflow: hidden;
  }

  .minwidth {
    width: 100% !important;
  }

  .btn {
    float: right;
  }

  .homepage {
    margin: 20px 0;
  }

  .search {
    margin: 20px 0 0 0;
  }

  .homepage h2 {
    font-size: 30px;
    display: inline-block;
    float: left;
  }

  .el-textarea {
    display: inline-block;
    width: 55%;
    vertical-align: top;
    font-size: 12px;
  }

  .el-input {
    width: 100%
  }

</style>

<script>
  export default {
    data() {
      return {
        noteText: "",
        productId: "",
        bdate: "",
        edate: "",
        name: '',
        date: '',
        human: '',
        show: false,
        count: 1,
        num: "",
        dialogVisible: false,
        dialog: false,
        write: false,
        radio: "0",
        list: [],
        editRow: {}, //当前编辑的数据
        cardname: '',
        people: '',
        statisticsdialog: false,
        stat: [],
        issuingPlan: [],
        textarea: '',
        ecardNo: '',
        scardNo: '',
        cardsCount: 0,
        scopeCardsCount: 0,
        listnum: '',
        pageSize: 20,
        currentPage: 1,
        catelist: ''
      };
    },
    mounted: function () {
      var url = 'api/product/pdlist';
      this.http.get(url).then(data => {
        this.catelist = data.data.payload
        console.log(data)
      }).catch(err => {
          alert('服务器错误，请稍后再试')
        });

    },
    methods: {
      getPageData(val) {
        var url = "api/cardPlan/list";
        var params = {
          noteText: this.noteText,
          productId: this.productId,
          bdate: this.bdate,
          edate: this.edate,
          pageIndex: val
        };
        this.http.post(url, params).then(data => {
          this.list = data.data.payload.list;
          this.listnum = data.data.payload.total
          if (data.status == 200 && data.data.payload.total == 0) {
            this.show = true
          }

        }).catch(err => {
          alert('服务器错误，请稍后再试')
        });
      },
      // 查询
      search: function () {
        this.getPageData(1)

      },
      // 创建新计划
      newplan: function () {
        var url = "api/cardPlan/create";
        var params = {
          noteText: this.name,
          productId: this.num,
          cardExpireDate: this.date,
          claimant: this.human,
          batchSize: this.count
        };
        this.http.post(url, params).then(data => {
          console.log(data)
          if(data.data.code==200){
            this.$alert('新增成功', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            this.search()
          }

        }).catch(err => {
          alert('服务器错误，请稍后再试')
        });
      },
      edit(row) {
        this.write = true
        this.editRow = common.copy(row)
        console.log(this.editRow)

      },
      // 编辑
      redact: function () {
        //  console.log(this.editRow)
        var url = 'api/cardPlan/edit';
        var params = {
          id: this.editRow.id,
          noteText: this.cardname,
          claimant: this.people
        }
        this.http.post(url, params).then(data => {
          if (data.status == 200) {
            this.search()
            this.write = false
          }
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        });
      },
      // 统计
      statistics: function (row) {
        this.editRow = common.copy(row)
        var url = 'api/cardPlan/statistics' + '?id=' + this.editRow.id;
        this.http.get(url).then(data => {
          console.log(data)
          if (data.status == 200) {
            this.statisticsdialog = true
            this.stat = data.data.payload
            this.issuingPlan = data.data.payload.issuingPlan
            console.log(this.stat)
          }
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        });
      },
      activate: function () {
        var url = 'api/cardPlan/active';
        var carNo = this.textarea.split('\n').join(',')
        var params = {
          activeType: this.radio,
          cardNo: carNo,
          ecardNo: this.ecardNo,
          scardNo: this.scardNo
        }

        this.http.post(url, params).then(data => {
          if (data.data.code == 200) {
            this.$alert('激活成功', {
              type: "success"
            })
          }
          if (data.data.code == 500) {
            this.$alert(data.data.message, {
              type: "warning"
            })
          }
          console.log(data)
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        })
      },
      /* 处理输入的卡号,获取激活量 */
      getCardsCount: function () {
        var arr = this.textarea.split("\n");
        var reg = /^[\d]{16}$/;
        var brr = [];
        if (arr.length > 100) {
          alert('最多激活100张卡')
        }
        arr = arr.slice(0, 99)
        arr.forEach((value, index) => {
          if (index == arr.length - 1) {
            brr.push(value);
          } else if (reg.test(value)) {
            brr.push(value);
          }
        });
        this.cardsCount = brr.length - 1;
        this.textarea = brr.join("\n");
      },
      /* 处理输入的起始结尾卡号 */
      getCardsCountByScope: function () {
        if (this.scardNo.length != 16 || this.ecardNo.length != 16) return;
        this.scopeCardsCount = 0;
        var reg = /^[\d]{16}$/;
        if (!reg.test(this.scardNo)) {
          this.$alert("起始卡号输入错误", "提醒", {
            type: 'error'
          });
          this.scardNo = ''
          return;
        }
        if (!reg.test(this.ecardNo)) {
          this.$alert('结束卡号输入有误', {
            type: "info"
          })
          // alert("结束卡号输入有误");
          this.ecardNo = ''
          return;
        }
        if (this.ecardNo.substring(0, 7) != this.scardNo.substring(0, 7)) {
          this.$alert('不属于同一批次', {
            type: "info"
          })
          // alert("不属于同一批次");
          this.ecardNo = ''
          return;
        }
        var startNo = this.scardNo.substring(7, 15);
        var endNo = this.ecardNo.substring(7, 15);
        if (endNo <= startNo) {
          // alert("结束卡号顺序号必须大于起始顺序号");
          this.$alert('结束卡号顺序号必须大于起始顺序号', {
            type: "info"
          })
          this.ecardNo = ''
          return;
        }
        this.scopeCardsCount = endNo - startNo + 1;
      }
    }
  };

</script>
