<template>
	<view class="big">
		<view class="address">
			<image class="icon" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0bfba4d5-6c14-41f8-85fe-686b54ee3500.png" mode=""></image>
			<view class="detail1">
				<view class="daheige">大黑哥 17639408250</view>
				<view class="dizhi">重庆市巴南区南泉街道白鹤村重庆工程学院</view>
			</view>
		</view>
		<view class="shangpin">
			<view v-if="name" class="item">
				<!-- <view class="name">{{name}} </view> -->
				<view class="total">
					<view class="zuo">
						<image class="icon" :src="icon" mode=""></image>
					</view>
					<view class="you">
						<view class="brief">{{brief}}</view>
						<view class="price">￥{{price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="jibei">
			<view>
				<view class="jifen">积分：<text class="koujifen">已扣除1200积分，抵扣12.00元</text></view>
				<view class="beizhu">备注： <input class="neirong" style="margin-top: -43rpx; color: #b8bbac; margin-left: 90rpx;" type="text" value="" placeholder=" 选填,备注内容"/></view>
			</view>
		</view>
		<view class="detail">
			<view class="row">
				<view class="nominal">
					商品金额
				</view>
				<view class="content">
					￥{{price}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					运费
				</view>
				<view class="content">
					￥+12.00
					<!-- ￥+{{freight|toFixed}} -->
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					积分抵扣
				</view>
				<view class="content">
					￥-12.00
					<!-- ￥-{{deduction|toFixed}} -->
				</view>
			</view>
		</view>
		<view class="cart" @click="order">
			<text class="order">
				提交订单
			</text>
		</view>
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
		order(){
			uni.showModal({
				title:'友情提示',
				content:'当前正处于测试阶段，暂不能购买哦',
				success: function(res){
					if(res.confirm){
						console.log('用户点击确定');
					}else if(res.cancel){
						console.log('用户点击取消')
					}
				}
			})
		}
		}
	}
</script>

<style lang="scss">
	.address{
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
		border-radius: 20upx;
		.icon{
			width: 120rpx;
			height: 120rpx;
			margin-right: 20rpx;
		}
		.daheige{
			margin-top: -120rpx;
			margin-left: 120rpx;
			font-size: 40rpx;
		}
		.dizhi{
			margin-left: 120rpx;
			font-size: 33rpx;
			color: #898e8e;
		}
	}
.shangpin{
width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	}
	.item{
		margin-left: 60rpx;
		.name{
			margin-left: 0rpx;
			font-size: 50rpx;
			color: #898e8e;
		}
		.total{
			display: flex;
			.zuo{
				display: flex;
				.icon{
					width: 250rpx;
					height: 250rpx;
					margin-left: -70rpx;
					border-radius: 30rpx;
				}
			}
			.you{
				padding: 10rpx;
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
	.jibei{
		// display: flex;
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
		border-radius: 20upx;
		font-size: 35rpx;
		.jifen{
			margin-top: 10rpx;
			font-size: 35rpx;
			margin-bottom: 15rpx;
			.koujifen{
				color: #898e8e;
			}
		}
		beizhu{
			color: #b8bbac;
			.neirong{
				color: #b8bbac;
			}
		}
	}
	.qujiesuan{
		width: 100%;
		height: 90rpx;
		border: 1px solid #FFFFFF;
		position: fixed;
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
	.cart{
		width: 100%;
		height: 110rpx;
		border: 1px solid #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		.order{
			border: 1px solid #9c4b00;
			padding-left: 85rpx;
			padding-right: 85rpx;
			// padding-top: 15rpx;
			padding-bottom: 15rpx;
			// margin-top: 65rpx;
			margin-left: 220rpx;
			background-color: #9c4b00;
			color: #FFFFFF;
			border-radius:40rpx 40rpx 40rpx 40rpx;
			font-size: 35rpx;
			
		}
}
.detail{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal{
			font-size: 35rpx;
		}
		.content{
			font-size: 35rpx;
			color: #9c4b00;
		}
	}
}
</style>
