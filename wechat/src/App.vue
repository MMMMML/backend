<template>
  <div class="my_container">

    <!-- 路由出口 -->
    <router-view class="content" v-wechat-title="$route.meta.title"></router-view>
    <!-- 页脚 -->
  </div>
</template>


<script>
  export default {
    data() {
      return {
      }
    },
    mounted () {
      var _mtac = {};
      (function() {
        var mta = document.createElement("script");
        mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500608350");
        mta.setAttribute("cid", "500608352");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
      })()
    }
  }

</script>

<style lang='less' scoped>
</style>
