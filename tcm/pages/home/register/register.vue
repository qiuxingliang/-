<template>
	<view class="">
		<view class="body">
			<view class="face-wapper">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7a68e74c-9966-426a-8009-942323653935.jpg" class="img"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名称" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="number" value="" class="input" placeholder="请输入手机号码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="password" type="number" value="" class="input" placeholder="请输入短信验证码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="password" value="" class="input" placeholder="设置6至20位登录密码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="password" value="" class="input" placeholder="请再次输入登录密码" placeholder-class="graywords"/>
			</view>
			<view class="zhuangtai"> 
				<label class="radio">
					<radio value="1" /><text>记住登录状态</text>
				</label>
			</view>
			<button type="primary" style="margin: 30rpx 0;width: 100%;background-color: #9C4B00;">登录</button>
			
			<navigator url="../registLogin/registLogin">
				<view class="zhuce">
					<text>已有账号，立即登录</text>
				</view>
			</navigator>
			
			<view class="qita">
				<view class="qita-item">
					<view class="iconfont icon-weixin tu"></view>
					<view class="wen">
						微信
					</view>
				</view>
				<view class="qita-item">
					<view class="iconfont icon-xinlangweibo tu"></view>
					<view class="">
						微博
					</view>
				</view>
				<view class="qita-item">
					<view class="iconfont icon-qq tu"></view>
					<view class="">
						QQ
					</view>
				</view>
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
		margin: 50rpx 10rpx 100rpx 10rpx;
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
		margin:20rpx 0;
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
		/* line-height: 150rpx; */
	}
	.info-wapper input{
		/* background-color: #007AFF; */
		/* line-height: 100rpx; */
		height: 90rpx;
		margin-left: 60rpx;
		font-size: 30rpx; 
		/* color: #CCCCCC; */
	}
	.zhuce{
		display: flex;
		justify-content: center;
		color: #9C4B00;
	}
	.zhuangtai{
		color: #ADADAD;
		margin: 20rpx 0;
		/* background-color: #000000; */
		padding: 10rpx 0;
	}
	.qita{
		display: flex;
		justify-content: space-around;
		color: #ADADAD;
		margin: 30rpx 0;
	}
	.qita-item .tu{
		font-size: 60rpx;
	}
</style>
