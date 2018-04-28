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

      // MtaH5.init({
      //   "sid": '500608350', //必填，统计用的appid
      //   "cid": '500608352', //如果开启自定义事件，此项目为必填，否则不填
      //   "autoReport": 0,//是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
      //   "senseHash": 0, //hash锚点是否进入url统计
      //   "senseQuery": 0, //url参数是否进入url统计
      //   "performanceMonitor": 0,//是否开启性能监控
      //   "ignoreParams": [] //开启url参数上报时，可忽略部分参数拼接上报
      // });
      
      var url = 'wechat/getJSApiTicket'
      var jsurl = location.href.split('#')[0]
      var params = {
        url: jsurl
      }

      this.$http.post(url, params).then(data => {
        var wxconfig = data.data.payload
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxconfig.appId, // 必填，公众号的唯一标识
          timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
          signature: wxconfig.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })

        wx.ready(() => {
          wx.onMenuShareTimeline({
            title: '空降救援战队，守护你是我的使命！', // 分享标题
            link: 'http://' + `${window.location.host}${window.location.pathname}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://' + `${window.location.host}${window.location.pathname}` + 'static/logo.jpg', // 分享图标
            success: function () {
            }
          });
          //  分享给好友
          wx.onMenuShareAppMessage({
            title: '空降救援战队，守护你是我的使命！',
            desc: '欢迎进入空降联盟，即刻开启你的守护之旅',
            link: 'http://' + `${window.location.host}${window.location.pathname}`,
            imgUrl: 'http://' + `${window.location.host}${window.location.pathname}` + 'static/logo.jpg',
            success: function(){
            }
          })
        })
      })
    }
  }

</script>

<style lang='less' scoped>
</style>
