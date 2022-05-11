<template>
	<view>
		<!-- 中医养生馆 -->
		<!-- 头部 -->
		<view class="top">
			<text class="top-left">所以门店(2)</text>
			<view class="top-right">
				<text class="iconfont icon-dingwei"></text>
				<text>获取地理位置</text>
			</view>
		</view>
		<!-- 内容列表 -->
		<view class="item" v-for="item in sanitarium">
			<navigator url="details/details">
				<!-- 图片 -->
				<image :src="item.img" mode="" class="item-img"></image>
			</navigator>
			<!-- 位置信息、状态、时间 -->
			<view class="item-other">
				<!-- 名称 -->
				<text class="item-name">{{item.name}}</text>
				<view class="item-dizhi">
					<text class="iconfont icon-weizhi"></text>
					<text>{{item.dizhi}}</text>
				</view>
				<view class="item-time">
					<text class="iconfont icon-shijian"></text>
					<text>{{item.zhuangtai}}</text>
					<text>{{item.time}}</text>
				</view>
			</view>
			<!-- 联系+导航 -->
			<view class="lianxi">
				<view class="">
					<text class="iconfont icon-dianhuatianchong"></text>
					<text>联系门店</text>
				</view>
				<view class="">
					<text class="iconfont icon-daohang"></text>
					<text>导航至门店</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sanitarium:[
					{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4acaa334-2abc-411b-827c-e5fb76c9c36f.jpg',name:'博士大白（巴南店）',dizhi:'巴南区渝南大道297号万达广场写字楼B座16层',zhuangtai:'休息中',time:'周一至周日 09：00-21：00'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/823156dd-164d-4af5-be28-ea3c4a9a6f21.jpg',name:'九阳中医养生馆',dizhi:'巴南区保利林语溪九号附十',zhuangtai:'休息中',time:'周一至周日 09：00-21：00'}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.top{
		/* height: 30rpx; */
		/* width: 500rpx; */
		display: flex;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		font-size: 30rpx;
		/* background-color: #007AFF; */
	}
	.top-left{
		color:#b7b8ba;
	}
	.top-right{
		color:#9485d5;
	}
	.item{
		display: flex;
		flex-direction: column;
	}
	.lianxi{
		display: flex;
		justify-content: space-around;
	}
	.item{
		margin: 20rpx;
		padding: 20rpx;
		background-color: #f7f8fa;
		/* align-items: center; */
		border-radius: 20rpx;
	}
	.item-name{
		font-weight: 600;
		font-size: 40rpx;
		padding: 10rpx 0rpx;
	}
	.item-img{
		margin: 10rpx auto;
	}
	.item-other{
		padding: 20rpx;
	}
	.item-dizhi{
		font-size: 25rpx;
		padding: 10rpx 0rpx;
		color: #6d6d6d;
	}
	.item-time{
		font-size: 25rpx;
		padding: 5rpx 0rpx;
		color: #6d6d6d;
	}
</style>
