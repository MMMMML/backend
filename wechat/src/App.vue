<template>
  <div class="my_container">

    <!-- 路由出口 -->
    <router-view class="content" v-wechat-title="$route.meta.title"></router-view>
    <!-- 页脚 -->
  </div>
</template>


<script>
import Storage from 'good-storage'
  import {
    Header
  } from 'mint-ui'
  export default {
    data() {
      return {
      }
    },
    created() {
      this._getUserInfo()
    },
    methods: {
      callphone: function () {
        window.location.href = "tel:021-60554929"
      },
      _getUserInfo() {
        this.$http.get("wechat/auth/getCurrentUser").then(res => {
          const userinfo = res.data.payload
          console.log(res.data.payload)
          Storage.set('userInfo', JSON.stringify(userinfo))
        })
      }
    },
    components: {
      MintHeader: Header
    }
  }

</script>

<script>
  	var _mtac = {};
  	(function() {
  		var mta = document.createElement("script");
  		mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
  		mta.setAttribute("name", "MTAH5");
  		mta.setAttribute("sid", "500608350");
  		mta.setAttribute("cid", "500608352");
  		var s = document.getElementsByTagName("script")[0];
  		s.parentNode.insertBefore(mta, s);
  	})();
</script>

<style lang='less' scoped>
  @import '~vux/src/styles/1px.less';
  .mui-bar-tab div img {
    border: 1px dashed #939393;
    margin-top: 0.2rem;
  }
	

</style>
