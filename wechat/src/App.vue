<template>
  <div class="my_container">

    <!-- 路由出口 -->
    <router-view class="content"></router-view>
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
        window.location.href = "tel:10086";
      },
      _getUserInfo() {
        this.$http.get("http://aj.kingwingaviation.com/alliance-java/wechat/auth/getCurrentUser").then(res => {
          const userinfo = res.data.payload
          Storage.set('userInfo', JSON.stringify(userinfo))
          
        })
      }
    },
    components: {
      MintHeader: Header
    }
  }

</script>

<style>
  .mui-bar-tab div img {
    border: 1px dashed #939393;
    margin-top: 0.2rem;
  }
	

</style>
