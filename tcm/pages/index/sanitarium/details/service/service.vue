<template>
	<view>
		<lunbo></lunbo>
		<!-- 商品详情 -->
		<view class="content">
			<view class="content1-1">
				<text class="price">￥120</text>
				<text class="fx">分享</text>
			</view>
			<view class="content1-2">
				<text class="name">健脾和胃灸</text>
				<text class="time">服务时长30分钟</text>
			</view>
			<view class="content1-3">
				<text><text class="iconfont icon-dui yanshe"></text>到店付</text>
				<text><text class="iconfont icon-dui yanshe"></text>商家认证</text>
			</view>
		</view>
		<view class="content">
			<view class="content2-1">
				<text>博士大白</text>
				<text>博士大白(巴南店)</text>
			</view>
			<view class="content2-2">
				<text class="iconfont icon-weizhi"></text>
				巴南区渝南大道297号万达广场写字楼
			</view>
			<view class="content2-3">
				<text>适应门店</text>
				<view class="content2-3-1">
					博士大白(巴南店)
				</view>
			</view>
		</view>
		<!-- 商品详情介绍 -->
		<view class="xq">
			<view class="divider"></view>
			<view class="xq-biaoti">
				<text>商品详情</text>
			</view>
			<view class="divider"></view>
		</view>
		<view class="tup">
			<view class="tup-1">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e9ae8507-bfa2-4b94-be31-ca890782731b.png" mode=""></image>
			</view>
			<view class="tup-2">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/827d769c-e298-491c-827e-108ca964d475.png" mode=""></image>
			</view>
			<view class="tup-3">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f8e1b325-b8a7-4010-a6f2-d1dff0d3d444.png" mode=""></image>
			</view>
			<view class="tup-4">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d28f778a-9716-4373-96db-1f41de125761.png" mode=""></image>
			</view>
			
			<view class="tup-2">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/827d769c-e298-491c-827e-108ca964d475.png" mode=""></image>
			</view>
			<view class="tup-3">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f8e1b325-b8a7-4010-a6f2-d1dff0d3d444.png" mode=""></image>
			</view>
			
			<view class="tup-4">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d28f778a-9716-4373-96db-1f41de125761.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import lunbo from'../../../../../components/lunbo.vue'
	export default {
		components:{
			lunbo
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		/* height: 200rpx; */
		padding: 20rpx;
		background-color: #ffffff;
		margin: 20rpx 0rpx;
	}
	.content1-1{
		/* background-color: #007AFF; */
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
	}
	.content1-1 .price{
		font-size: 60rpx;
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
	.content1-2{
		display: flex;
		flex-direction: column;
		padding: 10rpx;
	}
	.content1-2 .name{
		font-weight: 600;
		font-size: 50rpx;
	}
	.content1-2 .time{
		color: #929292;
		font-size: 35rpx;
	}
	.content1-3{
		/* background-color: #007AFF; */
		padding: 10rpx;
	}
	.content1-3 text{
		margin-right: 30rpx;
	}
	.yanshe{
		color: #ff7e50;
	}
	.content2-1{
		display: flex;
		flex-direction: column;
		font-size: 40rpx;
		/* color: #f28252; */
		font-weight: 600;
		margin: 10rpx;
	}
	.content2-2{
		font-size: 30rpx;
		color: #838383;
	}
	.content2-3{
		padding: 10rpx;
	}
	.content2-3 text{
		/* padding: 10rpx 0rpx; */
		/* background-color: #2AABD2; */
		color: #535353;
	}
	.divider{
		background: #cccccc;
		width: 250rpx;
		height: 5rpx;
		/* margin-top: 50rpx; */
	}
	.content2-3-1{
		background-color: #e6e6e6;
		font-size: 30rpx;
		padding: 20rpx;
		height: 80rpx;
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
	.tup{
		margin: 3rpx auto;
		background-color: #ffffff;
		text-align: center;
		padding: 10rpx;
		margin: 20rpx 0rpx;
	}
	/* .tup-1{
		height: 360rpx;
		
	} */
	.tup-1 image{
		height: 800rpx;
		border-radius: 30rpx;
		margin: 10rpx;
	}
	.tup-2 image{
		height: 800rpx;
		border-radius: 30rpx;
		margin: 10rpx;
	}
	.tup-3 image{
		height: 300rpx;
		border-radius: 30rpx;
		margin: 10rpx;
	}
	.tup-4 image{
		height: 750rpx;
		border-radius: 30rpx;
		margin: 10rpx;
	}
</style>
