
<template>
<div class='zhi'>

    </div>

</template>

<script>
import wx from 'weixin-js-sdk'

export default {
    created(){
        // console.log(wx)
    },
    mounted () {
        this.$http.post(`http://aj.kingwingaviation.com/alliance-java/wechat/getJSApiTicket?url=${encodeURIComponent(location.href.split('#')[0])}`).then(res => {
            let js_sdk = res.data.payload
            // console.log('~~~')
            // console.log(js_sdk)
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: js_sdk.appId, // 必填，公众号的唯一标识
                timestamp: js_sdk.timestamp, // 必填，生成签名的时间戳
                nonceStr: js_sdk.nonceStr, // 必填，生成签名的随机串
                signature: js_sdk.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        })
        wx.ready(() => {
            console.log('jssdk ok!')
        })
    }
}



</script>

<style>


</style>