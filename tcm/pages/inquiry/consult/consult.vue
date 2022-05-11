<template>
	<view>
		<!-- 咨询医生 -->
		<!-- 医生列表 -->
		<view class="ys-list">
			<view class="ys-list-item" v-for="item in doctor">
				<view class="ys-list-item1">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="ys-list-item2">
					<view class="ys-list-item2-1">
						<view class="ys-list-item2-1-1">
							<view class="ys-list-item2-1-1-1">{{item.name}}</view>
							<view class="ys-list-item2-1-1-2" v-show="item.expert">专家</view>	
						</view>
						<view class="ys-list-item2-1-2">
							<text>{{item.core}}</text>
							<view class="">
								<text class="iconfont icon-icon tubiao"></text>
								<text class="iconfont icon-icon tubiao"></text>
								<text class="iconfont icon-icon tubiao"></text>
								<text class="iconfont icon-icon tubiao"></text>
							</view>
							<text>解答：{{item.num}}次</text>
						</view>
					</view>	
					<view class="ys-list-item2-2">
						{{item.Introduction}}
					</view>
				</view>	
				<navigator url="talking/talking">
					<view class="ys-list-item3">咨询</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctor:[
					{id:'1',name:'张药师',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d83958fa-e4b4-45f0-b08c-baafdae8f02b.jpg',expert:'ture',core:'4.0',num:'3000',Introduction:'药企多年工作经验,熟知药品功效，有耐心，回复速度快。'},
					{id:'2',name:'刘药师',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c7e9280d-b995-4328-871f-bc3354e7e227.jpg',expert:'ture',core:'3.0',num:'3000',Introduction:'药企多年工作经验,熟知药品功效，有耐心，回复速度快。'},
					{id:'3',name:'王药师',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a40ee10e-5c5e-48af-9047-6a7be391285e.jpg',expert:'',core:'4.0',num:'3000',Introduction:'药企多年工作经验,熟知药品功效，有耐心，回复速度快。'},
					{id:'4',name:'张药师',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/29401824-f409-488e-82b3-4d3c340d831b.jpg',expert:'',core:'4.0',num:'3000',Introduction:'药企多年工作经验,熟知药品功效，有耐心，回复速度快。'},
					{id:'5',name:'梁药师',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fc06cba1-57d2-4053-ad62-69dc79e3249c.jpg',expert:'',core:'4.0',num:'3000',Introduction:'药企多年工作经验,熟知药品功效，有耐心，回复速度快。'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.ys-list{
		width: 710rpx;
		/* height: 1000rpx; */
		/* background-color: #007AFF; */
		margin: 50rpx auto;
	}
	.ys-list-item{
		padding: 10rpx;
		/* width: 600rpx; */
		/* height: 200rpx; */
		background-color: #ffffff;
		margin: 30rpx auto;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		box-shadow: 3px 3px 3px #e1e2e4;
	}
	.ys-list-item1{
		width: 200rpx;
		height: 200rpx;
		/* background-color: #ffff7f; */
		/* padding: 0rpx 30rpx; */
		margin: 20rpx;
	}
	.ys-list-item1 image{
		border-radius: 30rpx;
		height: 100%;
		width: 100%;
	}
	.ys-list-item2{
		width: 400rpx;
		/* background-color: #55ff7f; */
	}
	.ys-list-item2-1-1-1{
		font-weight: 600;
		margin-right: 30rpx;
	}
	.ys-list-item2-1-1-2{
		background-color: #c9d3ff;
		padding: 5rpx 20rpx;
		border-radius: 20rpx;
	}
	.ys-list-item3{
		width: 100rpx;
		height: 50rpx;
		background-color: #6986fc;
		text-align: center;
		color: #ffffff;
		border-radius: 20rpx;
		padding: 5rpx;
	}
	.ys-list-item2-1-1{
		display: flex;
		margin: 15rpx 0rpx;
	}
	.ys-list-item2-1-2{
		font-size: 20rpx;
		padding: 20rpx 10rpx;
		border-bottom: #f2f2f2 5rpx solid;
		/* background-color: #007AFF; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.ys-list-item2-1-2 .tubiao{
		color: #fad37b;
	}
	.ys-list-item2-2{
		font-size: 20rpx;
		color: #cacaca;
		padding: 10rpx 0rpx;
	}
</style>
