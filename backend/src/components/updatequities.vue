<template>
  <div>
    <h3>权益更新</h3>
    <div>
      <div class="mart">
        <span>{{resp.number}}</span>
        <span>{{resp.name}}</span>
      </div>
      <div class="mart">
        <span>权益内容：</span>
        <el-input type="textarea" v-model='description' :autosize="{ minRows: 8, maxRows: 16}"></el-input>
      </div>
      <div class="mart">
        <span>定制人：</span>
        <el-input v-model="claimant"></el-input>
      </div>
      <div style="float:right">
        <el-button type="primary">返回</el-button>
        <el-button type="primary" @click="save()">保存</el-button>
      </div>
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
          description:'',
          claimant:'',
          resp:''
      }
    },
    mounted: function () {
      var url = 'api/benefit/detail'
      var params = {
        id: this.$route.params.id
      }
      this.http.get(url, params).then(data => {
        this.resp = data.data.payload
        console.log(data)
      });
    },

    methods: {
      save: function () {
        var url = 'api/benefit/updatePublished';
        var params = {
          id: this.$route.params.id,
          description: this.description,
          claimant: this.claimant
        }
        this.http.post(url, params).then(data => {
        //   this.resp = data.data.payload
          console.log(data)
          if(data.data.code==200){
               this.$alert('更新成功,3秒后返回权益管理', {
              type: "success",
              showConfirmButton:false,
              center:true
            })
            setTimeout("window.location.hash='/layout/equities'",3000)
          }
            if(data.data.code==500){
               this.$alert(data.data.message, {
              type: "warning",
              showConfirmButton:false,
              center:true
            })
            setTimeout("window.location.hash='/layout/equities'",3000)
          }
        });
      }
    }
  };

</script>
