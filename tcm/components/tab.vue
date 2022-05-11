<template>
	<view class="tab">
		<view class="tab-box">
			<view class="iconfont icon-fl-jia icon-box">
			</view>
			<view class="wenzi">
				首页
			</view>
		</view>
		<view class="tab-box">
			<view class="iconfont icon-yaoxiang icon-box">
			</view>
			<view class="wenzi">
				百草阁
			</view>
		</view>
		<view class="tab-box">
			<view class="iconfont icon-duihua icon-box">
			</view>
			问诊
		</view>
		<view class="tab-box">
			<view class="iconfont icon-wode icon-box">
			</view>
			我的
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
/*整个底部盒子  */
.tab{
	height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
}
/* 图标+文字的盒子样式 */
.tab-box{
	float: left;
	width: 25%;
	color: #FFFFFF;
	background: rgb(156,75,0);
	text-align: center;
	height: 60px;
	/* line-height: 10px; */
	font-size: 14px;
	/* margin: 3px 15%; */
	/* line-height: 15px; */
}
/* 图标样式 */
.icon-box{
	/* height: 40px; */
	font-size: 30px;
}
/* 文字样式 */
.wenzi{
	height: 30%;
	/* bottom: 0; */
}
</style>
