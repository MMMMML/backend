<template>
  <div>
    <h3>创建新权益</h3>
    <el-form ref="form" label-width="100px" class="mart">
      <el-row>
        <el-col :span="24">
          <el-form-item label="权益名称：">
            <el-input style="width:55%" placeholder="请输入权益名称"  v-model="name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="标签：">
            <el-input placeholder="必填"  style="width:55%"  v-model="label"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="权益内容：">
            <el-input v-model="description" style="display: inline-block;width: 55%;vertical-align: top;" type="textarea" placeholder="请输入内容">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="定制人：">
           <el-input v-model="claimant"  style="width:55%" placeholder="请输入定制人"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="float:right">
      <el-button type="primary" onClick="javascript:history.back(-1);">返回</el-button>
      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>



<style>


</style>

<script>
  export default {
    data() {
      return {
        name: '',
        label: '',
        description: '',
        claimant: '',
      }
    },
    methods: {
      save: function () {
        var url = 'api/benefit/create';
        var params = {
          name: this.name,
          label: this.label,
          description: this.description,
          claimant: this.claimant
        };
        this.http.post(url, params).then(data => {
          console.log(data)
          // this.jour = this.journalDataHandler(data.data.payload)
          if (data.data.code == 200) {
            this.$alert('添加成功,3秒后返回权益管理', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            setTimeout("window.location.hash='/layout/equities'", 3000)

          }
        });
      }


    }
  };

</script>
