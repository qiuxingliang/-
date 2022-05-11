<template>
	<view>
		<!-- 图片 -->
		<view class="tup">
			<image :src="tup" mode=""></image>
		</view>
		<!-- 病症介绍 -->
		<view class="js">
			<view class="js-title">病症介绍</view>
			<view class="js-item"><text>{{symptom}}</text></view>
		</view>
		<!-- 调理方案 -->
		<view class="js-title">调理方案</view>
		<view class="tup2">
			<image :src="tup2" mode="widthFix"></image>
		</view>
		<!-- 提示 -->
		<view class="js-item"><text>{{tip}}</text></view>
		<!-- 临床体会 -->
		<view class="js">
			<view class="js-title">病症介绍</view>
			<view class="js-item"><text>{{know}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				symptom:'',
				tip:'',
				tup:'',
				tup2:'',
				know:''
			}
		},
		methods: {
			
		},
		onLoad(options) {
			var that=this
			that.name=options.name
			that.symptom=options.symptom
			that.tip=options.tip
			that.tup=options.tup
			that.tup2=options.tup2
			that.know=options.know
		},
	}
</script>

<style>
	.tup{
		margin: 30rpx auto;
		/* background-color: #007AFF; */
		width: 650rpx;
		height: 400rpx;
	}
	.tup image{
		height: 100%; 
		width: 100%;
		border-radius: 30rpx;
		/* margin: 10rpx auto; */
	}
	.js{
		padding: 30rpx;
		/* background-color: #007AFF; */
		margin: 10rpx;
	}
	.js-title{
		font-weight: 600;
		font-size: 40rpx;
		margin: 20rpx;
	}
	.js-item{
		text-indent: 2em;
		word-wrap: break-word;
		color: #6d6d6d;
		letter-spacing: 5rpx;
		line-height: 50rpx;
	}
	.tup2{
		margin: 10rpx auto;
		width: 700rpx;
		background-color: #007AFF;
		text-align: center;
	}
	.tup2 image{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
