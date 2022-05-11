<template>
	<view>
		<!-- 上部 -->
		<view class="top">
			<view class="card">
				<view class="">
					博士大白
				</view>
				<view class="card-big">
					超值贵宾卡
				</view>
				<view class="">
					有效期：  永久有效
				</view>
			</view>
			<view class="content1-1">
				<text class="price">￥999</text>
				<text class="fx">分享</text>
			</view>
			<view class="kp-name">
				超值贵宾卡
			</view>
		</view>
		<!-- 中部 -->
		<view class="quanyi">
			<view class="xq">
				<view class="divider"></view>
				<view class="xq-biaoti">
					<text>卡项权益</text>
				</view>
				<view class="divider"></view>
			</view>
			<view class="fuwu">
				<text class="fuwu1">所有服务</text>
				<text class="fuwu2">查看服务</text>
			</view>
		</view>
		<!-- 下部 -->
		<view class="quanyi">
			<view class="xq">
				<view class="divider"></view>
				<view class="xq-biaoti">
					<text>使用说明</text>
				</view>
				<view class="divider"></view>
			</view>
			<view class="fuwu">
				<text class="fuwu2">持此卡可享受会员价，本卡非打折卡</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.divider{
		background: #cccccc;
		width: 250rpx;
		height: 5rpx;
		/* margin-top: 50rpx; */
	}
	.top{
		background-color: #ffffff;
		padding: 10rpx;
	}
	.card{
		width: 650rpx;
		height: 300rpx;
		border-radius: 30rpx;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f3a6d19d-6e3c-43d1-a360-ea1cbd737ed5.jpg) center;
		background-color: #007AFF;
		margin: 30rpx auto;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #ffffff;
		text-shadow: 4rpx 4rpx 0 #000000;
		/* color: transparent; */
		/* -webkit-text-stroke:2rpx #000000; */
	}
	.card-big{
		font-size: 45rpx;
		font-weight: 600;
	}
	.content1-1{
		/* background-color: #007AFF; */
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
	}
	.content1-1 .price{
		font-size: 50rpx;
		color: #f28252;
	}
	.content1-1 .fx{
		line-height: 80rpx;
		border-radius: 20rpx;
		padding: 0rpx 10rpx;
		/* width: 50rpx; */
		color: #5d5f5e;
		background-color: #cccccc; 
	}
	.kp-name{
		padding: 10rpx;
		font-size: 35rpx;
		font-weight: 600;
	}
	.xq{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.xq-biaoti{
		/* margin-top: 50rpx; */
		padding: 0rpx 15rpx;
		/* border-left: #052b14 10rpx solid; */
		/* border-right: #052b14 10rpx solid; */
	}
	.quanyi{
		background-color: #ffffff;
		margin: 20rpx 0rpx;
		padding: 20rpx;
	}
	.fuwu{
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		padding: 40rpx;
	}
	.fuwu1{
		font-weight: 600;
		font-size: 38rpx;
	}
	.fuwu2{
		color: #626262;
	}
</style>
