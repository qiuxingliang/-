<template>
	<view class="big">
		<view v-if="name" class="item">
			
			<view class="total">
				<view class="zuo">
					<image class="icon" :src="icon" mode=""></image>
				</view>
				<view class="you">
					<view class="name">{{name}}  </view>
					<view class="brief">{{brief}}</view>
					<view class="price">￥{{price}}</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="else">
				您还没有加入商品,去加入商品吧
			</view>
		</view>
		<navigator url="order">
			<view class="qujiesuan">
				<view class="jiesuan" @click="submit()">去结算</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				brief:'',
				icon:'',
				price:''
			}
		},
		onLoad(options) {
			var that=this
			that.name=options.name
			that.price=options.price
			that.brief=options.brief
			that.icon=options.icon
		},
		methods: {
			submit(){
				var name = this.name
				var price = this.price
				var brief = this.brief
				var icon = this.icon
				uni.navigateTo({
					url:'order/order?name='+name+'&price='+price+'&brief='+brief
					+'&icon='+icon
					// url:'detail/detail?name='+name+'&price='+price
				})
			}
		}
	}
</script>

<style lang="scss">
.big{
	.item{
		// margin-left: 60rpx;
		.name{
			margin-left: 0rpx;
			font-size: 50rpx;
			color: #9c4b00;
		}
		.total{
			width: 700rpx;
			margin: 30rpx auto;
			background-color: #fffef6;
			border-radius: 20rpx;
			display: flex;
			.zuo{
				display: flex;
				.icon{
					width: 250rpx;
					height: 250rpx;
					border-radius: 30rpx;
				}
			}
			.you{
				padding: 20rpx;
				.brief{
					font-size: 30rpx;
				}
				.price{
					font-size: 45rpx;
					color: #9C4B00;
				}
			}
		}
	}
	.qujiesuan{
		width: 100%;
		height: 110rpx;
		border: 1px solid #FFFFFF;
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 0;
		background-color: #FFFFFF;
		.jiesuan{
			border-radius: 30rpx;
			color: #FFFFFF;
			margin-left: 120rpx;
			width: 300rpx;
			height: 60rpx;
			background-color: #ff0000;
			border: 1px solid #ff0000;
			padding-left: 200rpx;
			padding-top: 10rpx;
		}
	}
	.else{
		margin-left: 30rpx;
		margin-top: 600rpx;
		font-size: 50rpx;
		color: #9c4b00;
	}
}
</style>
