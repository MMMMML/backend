<template>
  <div class="my_container">
		
    <!-- 路由出口 -->
    <router-view class="content"></router-view>
		
     <!-- 页脚 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<div><img src="./assets/image/home/button-homepage.png" alt=""></div>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/vip">
				<div> <img src="./assets/image/home/button-help.png" alt=""></div>
				<span class="mui-tab-label">一键呼救</span>
			</router-link>
		
			<router-link class="mui-tab-item" to="/search">
				<div><img src="./assets/image/home/button-me.png" alt=""></div>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {
	data () {
		return {
			
		}
	},
	components: {
		MintHeader: Header
		
	}
}

</script>

<style>

.mui-bar-tab div img{
	border: 1px dashed #939393;
	margin-top:0.2rem;
}
 .mui-bar-tab span{
	 
	 font-size: 0.5rem;
 } 

</style>
