<template>
	<view class="firstNav">
		<view class="top1">{{title}}</view>
		<view class="top2">
			<view class="text">
				登录
			</view>
			/<view class="text">
				注册
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"first-nav",
		data() {
			return {
				title:'首页'
			};
		}
	}
</script>

<style>
.firstNav{
	width: 100%;
	height: 55px;
	position: fixed;
	top: 25px;
	left: 0;
	color: #FFFFFF;
	background: rgb(156,75,0);
	font-size: 20px;
	line-height: 25px;
	margin: 0 auto;
}
.top1{
	position: absolute;
	top: 20%;
	left: 0;
	width: 20%;
	text-align: center;
}
.top2{
	position: absolute;
	top: 20%;
	right: 50px;
	width: 40%;
	text-align: center;
}
.text{
	display: inline;
	margin: 0 5px;
}
</style>
