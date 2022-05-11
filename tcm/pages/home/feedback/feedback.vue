<template>
	<view class="page">
		<!-- 意见反馈 -->
		<view class="big">
			<view class="feedback">
				<textarea value="" placeholder="请输入反馈信息" />
			</view>
			<view class="lianxi">
				<input type="text" value="" placeholder="手机/邮箱/QQ(选填)" />
			</view>
			<view class="tupian">
					<text style="background-color: #2AABD2;">上传图片(最多6张)</text>
				<view class="tupian-item">
					
				</view>
			</view>
			<button type="primary" style="margin: 30rpx 0;width: 100%;background-color: #9C4B00;">提交</button>
		</view>
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

<style>
	.big{
		height: 1200rpx;
		margin: 50rpx 30rpx;
		padding: 10rpx;
		/* background-color: #007AFF; */
	}
	.feedback{
		/* height: 300rpx; */
		margin: 20rpx 0;
		padding: 30rpx;
		border: solid 2px #9C4B00;
		border-radius: 20rpx;
		/* background-color: #2AABD2; */
	}
	.lianxi{
		/* height: 100rpx; */
		margin: 20rpx 0;
		padding: 30rpx;
		border: solid 2px #9C4B00;
		border-radius: 20rpx;
		/* background-color: #398439; */
	}
	.tupian{
		height: 300rpx;
		margin: 50rpx 0;
		background-color: #2AABD2;
	}
	.tupian text{
		margin: 30rpx 0;
		background-color: #808080;
	}
	.tupian-item{
		height: 200rpx;
		margin: 50rpx 0;
		background-color: #AFD9EE;
	}
</style>
