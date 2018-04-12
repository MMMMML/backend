<template>
  <div class="bigbox">
    <!-- 单卡模式 -->
    <h1 v-if="qtype==0">单卡模式</h1>
    <h1 v-if="qtype==1">区间模式</h1>
    <div>
      <el-radio v-model="qtype" label="0">单卡查询</el-radio>
      <el-radio v-model="qtype" label="1">同批次区间查询</el-radio>
      <div v-if="qtype==0" class="mar10">
        <el-form ref="form" label-width="100px">
          <el-row>
             <el-col :span="6">
              <el-form-item label="完整卡号：">
                <el-input placeholder="请输入完整卡号" class="minwidth" v-model="cardNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="状态：">
                <el-select style="width:100%" v-model="status" placeholder="">
                  <el-option label="" value="1">待使用</el-option>
                  <el-option label="" value="2">已使用</el-option>
                  <el-option label="" value="2">已失效</el-option>
                  <el-option label="" value="2">已作废</el-option>
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
       
        <!-- 同批次区间查询 -->
      </div>
      <div v-if="qtype==1" class="mar10">
        <el-form ref="form" label-width="100px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="起始卡号：">
                <el-input class="minwidth" v-model="scardNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="结束卡号：">
                <el-input class="minwidth" v-model="ecardNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="状态：">
                <el-select style="width:100%" v-model="status" placeholder="">
                  <el-option label="123" value="123"></el-option>
                  <el-option label="456" value="456"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item>
                <el-button type="primary" class="btn" @click="sectionsearch()">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <!-- 查询结果表格 -->
    <el-table :data="list" border style="width: 100%" v-if="list.length!=0">
      <el-table-column prop="number" label="卡号" width="260">
      </el-table-column>
      <el-table-column prop="noteText" label="卡片名称" width="260">
      </el-table-column>
      <el-table-column prop="expireDate" label="有效期">
      </el-table-column>
      <el-table-column prop="activeTime" label="激活时间">
      </el-table-column>
      <el-table-column prop="stateName" label="状态" :formatter="Formatter">
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="270">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click="dialogVisible = true;journal(scope.row)">日志记录</el-button>
          <el-button type="danger" size="mini" @click="cancellation(scope.row)">作废</el-button>
          <el-button type="success" size="mini" @click="dialog = true;showpassword(scope.row)">显示密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 操作状态 -->


    <!-- 分页 -->
    <div class="block mar10" v-if="list.length!=0">
      <el-pagination :page-size="pageSize" @current-change="getPageData" :current-page.sync="currentPage" layout="prev, pager, next, jumper,total"
        :total="listnum">
      </el-pagination>

      <!-- 日志记录弹框 -->
      <el-dialog title="日志记录" :visible.sync="dialogVisible" width="30%">
        <div>
          <span>卡号：</span>
          <span>{{this.editRow.number}}</span>
          <el-table :data="jour" border style="width: 100%">
            <el-table-column prop="changeTime" label="时间" width="180">
            </el-table-column>
            <el-table-column prop="finalStateName" label="操作" width="180">
            </el-table-column>
            <el-table-column prop="operateAcId" label="操作者">
            </el-table-column>
          </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>


      <!-- 显示密码弹框 -->
      <el-dialog title="密码查询" :visible.sync="dialog" width="20%">
        <div class="dialog">
          <div style="border-bottom:1px solid #ccc;padding-bottom:5px">
            <span>卡号:</span>
            <span>{{this.showpass.number}}</span>
          </div>

          <h2 style="background:#ccc;margin-top:25px;padding:10px 0;color:white">
            {{this.showpass.password}}
          </h2>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="dialog = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 卡片作废弹窗 -->


      <el-dialog title="确认作废" :visible.sync="Visible" width="20%">
        <div class="dialog ">
          <div>卡号：{{this.editRow.number}}</div>
          <div class="mar10" style="color:red">警告：该警告不可逆!!!!</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="Visible = false">取 消</el-button>
          <el-button type="primary" @click="Visible = false;identify()">确认作废</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .minwidth {
    width: 100% !important;
  }

  .el-col {
    border-radius: 4px;
  }

  .dialog {
    text-align: center;
  }

  h1 {
    margin: 10px 0;
  }

  .section {
    margin-left: 30px;
  }

  .mar10 {
    margin-top: 20px;
  }

  .el-table {
    margin-top: 30px;
  }

  .el-button--primary {
    float: right;
  }

  .el-input {
    width: 100%
  }

</style>

<script>
  export default {
    data() {
      return {
        radio: "1",
        dialogVisible: false,
        dialog: false,
        Visible: false,
        currentPage: 1,
        pageSize: 20,
        listnum: "",
        qtype: "0",
        status: "1",
        cardNo: "",
        scardNo: "",
        ecardNo: "",
        list: "",
        editRow: '',
        jour: '',
        showpass: '',
      };
    },
    methods: {
      getPageData(val) {
        this.currentPage = val;
        var url = "api/card/list";
        var params
        if (this.qtype == "0") {
          params = {
            qtype: this.qtype,
            status: this.status,
            cardNo: this.cardNo,
            pageIndex: val
          };

        } else {
          params = {
            qtype: this.qtype,
            status: this.status,
            scardNo: this.scardNo,
            ecardNo: this.ecardNo,
            pageIndex: val
          };
        }
        this.http.post(url, params).then(data => {
          if (data.data.code == 500) {
            this.$alert(data.data.message, {
              type: "warning"
            })
          }
          console.log(data)
          this.list = data.data.payload.list
          this.listnum = data.data.payload.total
          console.log(this.list)
          if (this.listnum == 0) {
            this.$alert('暂无数据', {
              type: "warning"
            })
          }
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        })
      },
      Formatter(row, column) {
        var stateName;
        switch (row.state) {
          case 1:
            stateName = '待使用'
            break
          case 2:
            stateName = '已使用'
            break
          case 3:
            stateName = '已过期'
            break
          case 4:
            stateName = '已作废'
            break
        }
        return stateName
      },
      // 查询列表
      search: function () {
        if (this.cardNo == "") {
          this.$alert("卡号不能为空", {
            type: "warning"
          });
          return;
        }
        var reg = /^[\d]{16}$/;
        if (!reg.test(this.cardNo)) {
          this.$alert("卡号输入有误，请输入16位数字卡号", {
            type: "warning"
          });
          return;
        }
        this.getPageData(1);
      },
      sectionsearch: function () {
        if (this.scardNo == "" || this.ecardNo == "") {
          //alert('卡号不能为空')
          this.$alert("卡号不能为空", {
            type: "warning"
          });
          return;
        }
        var reg = /^[\d]{16}$/;
        if (!reg.test(this.scardNo)) {
          //alert('起始卡号输入有误，请输入16位数字卡号')
          this.$alert("起始卡号输入有误，请输入16位数字卡号", {
            type: "warning"
          });
          return;
        }
        if (!reg.test(this.ecardNo)) {
          this.$alert("结束卡号输入有误，请输入16位数字卡号", {
            type: "warning"
          });
          //alert('结束卡号输入有误，请输入16位数字卡号')
          return;
        }
        this.getPageData(1)
      },
      // 日志记录
      journal: function (row) {
        this.editRow = common.copy(row)
        console.log(this.editRow.number)
        var url = 'api/card/getCardOperaLog' + '?id=' + this.editRow.id;
        this.http.post(url).then(data => {
          console.log(data)
          this.jour = this.journalDataHandler(data.data.payload)
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        })
      },
      journalDataHandler(data) {
        data.forEach(value => {
          switch (value.finalState) {
            case 1:
              value.finalStateName = '激活'
              break
            case 2:
              value.finalStateName = '使用'
              break
            case 3:
              value.finalStateName = '过期'
              break
            case 4:
              value.finalStateName = '作废'
              break
          }
        })
        return data
      },
      // 显示密码
      showpassword: function (row) {
        this.editRow = common.copy(row)
        var url = 'api/card/showPassword' + '?id=' + this.editRow.id;
        this.http.post(url).then(data => {
          console.log(data)
          this.showpass = data.data.payload
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        })
      },
      // 作废
      cancellation(row) {
        this.Visible = true;
        this.editRow = common.copy(row)
      },
      identify: function () {
        // this.editRow = common.copy(row)
        console.log(this.editRow.id)
        var url = '/api/card/invalid' + '?id=' + this.editRow.id;
        this.http.post(url).then(data => {
          console.log(data)
          if (data.data.code == 500) {
            this.$alert(data.data.message, {
              type: "warning"
            });
          }
          if (data.data.code == 200) {
            this.$alert("卡片已作废", {
              type: "warning"
            });
            this.getPageData(this.pageIndex)
          }
        }).catch(err => {
          alert('服务器错误，请稍后再试')
        })
      }
    }
  };

</script>
