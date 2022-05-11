<template>
	<view class="">
		<view class="body">
			<view class="face-wapper">
				<image
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7a68e74c-9966-426a-8009-942323653935.jpg"
					class="img"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名称"
					placeholder-class="graywords" />
			</view>
			<view class="info-wapper">
				<label class="words-lbl">□</label>
				<input name="password" type="password" value="" class="input" placeholder="请输入登录密码"
					placeholder-class="graywords" />
			</view>
			<view class="zhuangtai">
				<label class="radio">
					<radio value="1" /><text>记住登录状态</text>
				</label>
			</view>
			<button type="primary" style="margin: 30rpx 0;width: 100%;background-color: #9C4B00;">登录</button>
			<view class="zhuce">
				<navigator url="../register/register">
					<text>注册新用户</text>
				</navigator>
				<navigator url="../changePwd/changePwd">
					<text>忘记密码</text>
				</navigator>
			</view>
			<view class="qita-biaoti">
				<text class="line"></text>
				<text class="txt">其他方式登录</text>
				<text class="line"></text>
			</view>
			<view class="qita">
				<!-- #ifdef APP-PLUS -->
				<view class="qita-item" @click="handelLogin">
					<view class="iconfont icon-weixin tu"></view>
					<view class="wen">
						微信
					</view>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="qita-item" @click="handelLogin1">
					<view class="iconfont icon-weixin tu"></view>
					<view class="wen">
						微信
					</view>
				</view>
				<!-- #endif -->
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
			handelLogin() {
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider);
						//支持微信、qq和微博等
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									console.log('-------获取openid(unionid)-----');
									console.log(JSON.stringify(loginRes));
									// 获取用户信息
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											var userInfo = JSON.stringify(infoRes
												.userInfo)
											uni.setStorage({
												key: "userInfo",
												data: JSON.parse(userInfo)
											})
											uni.switchTab({
												url: "/pages/home/home"
											})
										}
									});
								}
							});
						}
					}
				});
			},
			handelLogin1() {
				uni.getUserProfile({
					desc: '登录',
					success: (res1) => {
						uni.setStorage({
							key: "userInfo",
							data: res1.userInfo
						})
						uni.switchTab({
							url: "/pages/home/home"
						})
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
		}
	}
</script>

<style>
	.body {
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
		margin: 60rpx 0;
		margin-left: 20%;
	}

	.face-wapper .img {
		height: 100%;
		width: 100%;
	}

	.face {
		/* width: 160upx; */
		height: 40rpxpx;
	}

	/*头像end*/
	.words-lbl {
		font-size: 60rpx;
		/* background-color: #007AFF; */
		line-height: 90%;
		margin-left: 30rpx;
	}

	.info-wapper {
		display: flex;
		border: solid 2rpx #9C4B00;
		border-radius: 10rpx;
		margin: 20rpx 0;
		justify-content: center;
		line-height: 80rpx;
	}

	.info-wapper input {
		/* background-color: #007AFF; */
		/* line-height: 100rpx; */
		height: 70rpx;
		margin-left: 90rpx;
		font-size: 35rpx;
	}

	.zhuce {
		display: flex;
		justify-content: space-between;
		color: #9C4B00;
	}

	.zhuangtai {
		color: #ADADAD;
		margin: 20rpx 0;
		/* background-color: #000000; */
		padding: 10rpx 0;
	}

	.qita-biaoti {
		height: 50rpx;
		line-height: 30rpx;
		text-align: center;
		margin: 15rpx 0;
	}

	.qita-biaoti .line {
		display: inline-block;
		width: 100rpx;
		border-top: 1px solid #9C4B00;
	}

	.qita-biaoti .txt {
		color: #9C4B00;
		vertical-align: middle;
	}

	.qita {
		display: flex;
		justify-content: space-around;
		color: #ADADAD;
		margin-bottom: 30rpx;
	}

	.qita-item .tu {
		font-size: 60rpx;
	}
</style>
