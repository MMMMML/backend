<template>
  <div class="my_container">

    <!-- 路由出口 -->
    <router-view class="content"></router-view>
    <!-- 页脚 -->
        
  </div>
</template>

<script>
  import {
    Header
  } from 'mint-ui'
  export default {
    data() {
      return {

      }
    },
    components: {
      MintHeader: Header
    },
    methods: {
      callphone: function () {
        window.location.href = "tel:10086";
      }
    }
  }

</script>

<style>
  .mui-bar-tab div img {
    border: 1px dashed #939393;
    margin-top: 0.2rem;
  }
	

</style>
