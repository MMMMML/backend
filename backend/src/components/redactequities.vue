<template>
  <div>
    <h3>编辑权益</h3>
    <el-form ref="form" label-width="100px" class="mart">
      <el-row>
        <el-col :span="24">
          <el-form-item label="权益名称：">
            <el-input style="width:55%" v-model="resp.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="标签：">
            <el-input style="width:55%" v-model="resp.label"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="24">
          <el-form-item label="权益内容：">
            <el-input style="width:55%" type="textarea" :autosize="{ minRows: 8, maxRows: 16}" v-model="resp.description"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="定制人：">
           <el-input style="width:55%" v-model="resp.claimant"></el-input>
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
  .el-textarea {
    display: inline-block;
    width: 45%;
  }

</style>

<script>
  export default {
    data() {
      return {
        name: '',
        label: '',
        description: '',
        claimant: '',
        resp: '',
      }
    },
    mounted: function () {
      var url = 'api/benefit/detail'
      var params = {
        id: this.$route.params.id
      }
      this.http.post(url, params).then(data => {
        this.resp = data.data.payload
      });
    },
    methods: {
      save: function () {
        var url = 'api/benefit/edit';
        var params = {
          id: this.$route.params.id,
          name: this.resp.name,
          label: this.resp.label,
          description: this.resp.description,
          claimant: this.resp.claimant
        }
        this.http.post(url, params).then(data => {
          //  this.resp = data.data.payload
          console.log(data)
          if (data.data.code == 200) {
            this.$alert('保存成功,3秒后返回权益管理', {
              type: "success",
              showConfirmButton: false,
              center: true
            })
            setTimeout("window.location.hash='/layout/equities'", 3000)
          }
          if (data.data.code == 500) {
            this.$alert(data.data.message, {
              type: "warning",
              showConfirmButton: false,
              center: true
            })
          }
        });

      }


    }
  };

</script>
