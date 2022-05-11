<template>
		<view class="content">
			<navigator url="address/address">
				<view class="content-item">
					<text>地址管理</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
			<navigator url="feedback/feedback">
				<view class="content-item">
					<text>支付设置</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
			<navigator url="commonproblem/commonproblem">
				<view class="content-item">
					<text>隐私政策</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>		
			<navigator url="seting/seting">
				<view class="content-item">
					<text>账户安全</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
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
		onShow() {

		},
		methods: {
		
		}
	}
</script>

<style>
	.page-fill {
		width: 100%;
		height: 100%;
	}

	/* 头部个人信息 start */
	.header {
		padding: 30upx 30upx 40upx 30upx;

		background-color: #FFFFFF;
		border-bottom: solid 1rpx #DDDDDD;
		/* background: url(../../static/2.jpg); */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.face {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.noface {
		font-size: 130rpx;
		color: #007AFF;
		/* background-color: #007AFF; */
	}

	.info-wapper {
		width: 80%;
		margin-left: 40upx;
		display: flex;
		/* flex-direction: column; */
		/* background-color: #4CD964; */
		justify-content: space-between;
	}
	.clear{
		padding: 10rpx;
		width: 300rpx; 
		display: flex;
		align-items: center;
		color: #a7a7a7;
	}
	.nickname {
		color: #6a5018;
		font-size: 20px;
		font-weight: bold;
	}

	.regist-login {
		margin-left: 60upx;
		margin-top: 40upx;
	}

	.nav-info {
		color: #a38e62;
		font-size: 14px;
		margin-top: 10upx;
	}
	.settings {
		width: 40upx;
		height: 40upx;
	}

	/* 头部个人信息 end */
	/* 下面部分 start*/
	.content {
		/* height: 500rpx; */
		background-color: #FFFFFF;
		margin-top: 30rpx;
		border-bottom: solid 1rpx #f0bb88;
	}

	.content-item {
		height: 80rpx;
		border-top: solid 1rpx #f0bb88;
		border-bottom: solid -1rpx #f0bb88;
		/* background-color: #1B6D85; */
		padding: 9rpx 10rpx;
		display: flex;
		/* justify-content: space-between; */
	}

	.content-item text {
		/* background-color: #007AFF; */
		line-height: 70rpx;
		margin-left: 30rpx;
	}

	.content-item .tubiao2 {
		margin-left: 70%;
		line-height: 70rpx;
		color: #AEAFAD;
	}
	
	/* 下面部分end */
</style>
