<template>
    <view class="">
        <!-- 问诊 -->
		<!-- 上部 -->
		<view class="top">
			<!--  -->
			<navigator hover-class="none" url="consult/consult">
				<view class="topli">
					<view class="iconfont icon-yisheng-"></view>
					<text>咨询医生</text>
				</view>
			</navigator>
				
			
			<!-- 跳转的地址还没弄 -->
			<navigator hover-class="none" url="prescription/prescription">
				<view class="topli">
					<view class="iconfont icon-yiyaoxiang" style="color: #9C4B00;"></view>
					<text>我要抓药</text>
				</view>
			</navigator>
		</view>
		<!-- 聊天列表 -->
		<view class="talk">
			<navigator url="consult/talking/talking">
				<view class="main-item-left">
					<view class="main-item-left-img">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a40ee10e-5c5e-48af-9047-6a7be391285e.jpg" mode=""></image>
					</view>
					<view class="main-item-left-i">
						<view class="main-item-left-i1">王药师</view>
						<view class="main-item-left-i2">你好，请问有什么可以帮助到你的吗?</view>
					</view>
					<view class="main-item-left-time">
						昨天	
					</view>
				</view>
			</navigator>
		</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.top{
		/* background-color: #007AFF; */
		margin: 20rpx 20rpx;
		display: flex;
		justify-content: space-around;
	}
	.topli{
		margin: 30rpx 0rpx;
		/* background-color: #4CD964; */
		/* padding-right: 40rpx; */
		border-radius: 30rpx;
		/* box-shadow: 12rpx 12rpx 0 0 #ebe1e8; */
		box-shadow: 5rpx 8rpx 18rpx 9rpx #C0C0C0;
		display: flex;
		flex-direction: row;
		padding: 10rpx 33rpx;
	}
	.topli view{
		font-size: 100rpx;
		margin-right: 50rpx;
		color: #007AFF;
	}
	.topli text{
		line-height: 100rpx;
		color: #89888b;
	}
	/* 聊天部分 */
	.talk{
		height: 1000rpx;
		border-top: #b9b9b9 3rpx solid;
		background-color: #f3f4f8;
		padding: 20rpx 10rpx;
	}
	.main-item-left{
		display: flex;
		margin: 20rpx 0rpx;
		/* background-color: #007AFF; */
	}
	.main-item-left-img{
		height: 120rpx;
		width: 120rpx;
		/* background-color: #2AABD2; */
	}
	.main-item-left-img image{
		border-radius: 60rpx;
		height: 100%;
		width: 100%;
	}
	.main-item-left-i{
		margin-left: 25rpx;
		border-bottom: #b9b9b9 3rpx solid;
	}
	.main-item-left-i1{
		font-size: 30rpx;
	}
	.main-item-left-i2{
		/* background-color: #ffffff; */
		/* width: 600rpx; */
		font-size: 30rpx;
		margin: 5rpx;
		padding: 10rpx;
		border-radius: 20rpx;
		color: #646367;
		
	}
	.main-item-left-time{
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: #007AFF; */
		color: #acacac;
		font-size: 20rpx;
		border-bottom: #b9b9b9 3rpx solid;
	}
</style>
