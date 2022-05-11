<template>
		<view class="content">
			<image class="img" :src='avatarUrl' mode=""></image>
			<view class="nickName">
				<text>昵称：</text>
				{{nickName}}
			</view>
			<view class="qianming">
				<text>个性签名：</text>
				这个人很懒，什么都没有留下~
			</view>
		</view>
</template>
<script>
	export default {
		data() {
			return {
			nickName:'',
			avatarUrl:''
			}
		},
		onLoad(options) {
			var that = this
			that.nickName=options.nickName
			that.avatarUrl=options.avatarUrl
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
.img{
	margin-top:200rpx ;
	margin-left: 240rpx;
	border-radius: 100%;
	height: 250rpx;
	width: 250rpx;
	margin-bottom: 50rpx;
}
.nickName{
	margin-left: 240rpx;
	font-size: 50rpx;
}
.qianming{
	font-size: 40rpx;
	margin-left: 10rpx;
	margin-top: 50rpx;
}
</style>
