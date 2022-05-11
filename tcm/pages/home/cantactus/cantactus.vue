<template>
	<view>
		<image
			src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7a68e74c-9966-426a-8009-942323653935.jpg"
			class="img">
			</image>
		<view class="title">
			<view class="mingcheng">神农百草堂</view>
			<view class="Version">Version 1.2.5</view>
		</view>
		<navigator url="commonproblem/commonproblem">
			<view class="content-item">
				<text>参与评价</text>
				<view class="iconfont icon-xiangyou1 tubiao2"></view>
			</view>
		</navigator>		
		<navigator url="seting/seting">
			<view class="content-item">
				<text>版本更新</text>
				<view class="iconfont icon-xiangyou1 tubiao2"></view>
			</view>
		</navigator>
		<navigator url="feedback/feedback">
			<view class="content-item">
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
		methods: {
			
		}
	}
</script>

<style lang="scss">
.img{
	margin-top: 200rpx;
	margin-left: 280rpx;
	height: 200rpx;
	width: 200rpx;
	border-radius: 50rpx;
}
.title{
	font-size: 45rpx;
	margin-bottom: 80rpx;
	margin-left: 280rpx;
	.mingcheng{
		margin-left: -7rpx;
	}
	.Version{
		margin-left: -25rpx;
	}
}
.page-fill {
		width: 100%;
		height: 100%;
	}

	/* 头部个人信息 start */
	.header {
		padding: 30upx 30upx 40upx 30upx;

		background-color: #dddddd;
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
		background-color: #dddddd;
		margin-top: 30rpx;
		border-bottom: solid 1rpx #dddddd;
	}

	.content-item {
		height: 80rpx;
		border-top: solid 1rpx #dddddd;
		border-bottom: solid -1rpx #dddddd;
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
