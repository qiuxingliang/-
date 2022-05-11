<template>
	<view class="page big">
		<!-- 标题 -->
		<view class="title">
			<text>{{title}}</text>
			<view><text class="from">————中国中药网</text></view>
		</view> 
		<!-- 内容 -->
		<view class="neirong">
			<!-- <button @click="di" type="default">点我</button> -->
			<view class="tp">
				<image :src='img'></image>
			</view>
			<view class="wenzi" v-html="datail">
				<!-- {{datail}} -->
			</view>
		</view> 
		<!-- <text>{{id}}</text> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// id:'',
				title:'',
				datail:'',
				img:''
			}
		},
		onLoad(options) {
			
			// const item=JSON.stringify(decodeURIComponent(option.item))
			// console.log(option)
			var that=this
			// console.log(options.id)
			// that.id=options.id 
			that.title=options.title 
			that.datail=options.datail
			that.datail=options.datail
			that.img=options.img
			// console.log(that.datail)
		},
		// mounted() {
			
		// },
		methods: {
			
		}
	}
</script>

<style>
	.big{
		padding: 30rpx;
		/* background-color: #007AFF; */ 
		/* height: 300rpx; */
		/* width: 690rpx; */
	}
	.title{
		font-size: 35rpx;
		margin-bottom: 20rpx;
		/* background-color: #4CD964; */
		height: 90rpx;
	}
	.from{
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		margin-left: 300rpx;
		/* background-color: #808080; */
	}
	.neirong{
		/* height: 590rpx; */
		margin-top: 50rpx;
		/* background-color: #4CD964; */
		/* margin: 15rpx; */
		padding: 20rpx;
		border: solid 3rpx #9C4B00;
		border-radius: 25rpx;
	}
	.tp{
		height: 250rpx;
		text-align: center;
		/* background-color: #007AFF; */
	}
	.tp image{
		text-align: center;
		/* margin: 10rpx auto; */
		background-color: #999999;
		height: 100%; 
		width: 50%; 
	}
	.wenzi{
		padding: 0 10rpx;
	}
</style>
