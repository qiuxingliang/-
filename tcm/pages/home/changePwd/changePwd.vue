<template>
	<view class="">
		<view class="body">
			<view class="face-wapper">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7a68e74c-9966-426a-8009-942323653935.jpg" class="img"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="number" value="" class="input" placeholder="请输入账号手机号码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="password" type="number" value="" class="input" placeholder="请输入短信验证码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="password" type="password" value="" class="input" placeholder="设置6至20位登录密码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="password" type="password" value="" class="input" placeholder="请再次输入登录密码" placeholder-class="graywords"/>
			</view>
			<button type="primary" style="margin: 30rpx 0;width: 100%;background-color: #9C4B00;">重置</button>
			
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
	.body{
		border: solid 2px #9C4B00;
		border-radius: 20rpx;
		padding: 0 100rpx;
		margin: 50rpx 20rpx 100rpx 20rpx;
		/* background-color: #f6f5ec; */
	}
	/*头像start*/
	.face-wapper {
		/* display: flex;
		flex-direction: row;
		justify-content : center; */
		/* background-color: #007AFF; */
		height: 300rpx; 
		width: 300rpx;
		margin:60rpx 0;
		margin-left: 20%;
	}
	.face-wapper .img{
		height: 100%;
		width: 100%;
	}
	.face{
		/* width: 160upx; */
		height: 40rpxpx;
	}	  
	/*头像end*/
	.words-lbl{
		font-size: 60rpx;
		/* background-color: #007AFF; */
		line-height: 120%;
		margin-left: 30rpx;
	}
	.info-wapper{
		display: flex;
		border: solid 2rpx #9C4B00;
		border-radius: 10rpx;
		margin: 20rpx 0;
		justify-content: center;
		line-height: 80rpx;
	}
	.info-wapper input{
		/* background-color: #007AFF; */
		/* line-height: 100rpx; */
		height: 70rpx;
		margin-left: 20rpx;
		font-size: 35rpx; 
	}
</style>
