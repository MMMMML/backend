<template>
  <div>
    <h3>
      <span>{{resp.number}}</span>
      <span>{{resp.name}}</span>
      <span>（版本{{resp.version}}）</span>
    </h3>
    <div class="mart">
      定制人：
      <span>{{resp.claimant}}</span>
    </div>
    <div class="nav mart">
      {{resp.description}}
    </div>
    <div style="float:right" class="mart">
      <el-button type="primary">返回</el-button>
      <el-button type="primary" @click='audit()'>审核并发布</el-button>
    </div>
  </div>
</template>
<style>
  .nav {
    background: #fbfbcd;
    ;
    height: 300px;
  }

</style>

<script>
  export default {
    data() {
      return {
        resp: ''
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
      audit: function () {
        var url = 'api/benefit/audit';
        var params = {
          id: this.$route.params.id
        }
        this.http.get(url, params).then(data => {
            if(data.data.code==200){
                this.$alert('审核成功,3秒后返回权益管理', {
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
          console.log(data)
        });
      }
    }
  };

</script>
