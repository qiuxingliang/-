<template>
	<view class="page page-fill">
		<!-- 上面部分 -->
		<view class="header">
			<view v-if="userInfo">
				<image :src="userInfo.avatarUrl" class="face"></image>
			</view>
			<view v-else>
				<view class="iconfont icon-top_gerenxinxi noface"></view>
				<!-- <image src="../../static/3.jpg" class="face"></image> -->
			</view>
			<view class="info-wapper" v-if="userInfo">
				<view class="info-wapper-i">
					<view class="nickname">
						{{userInfo.nickName}}
					</view>
					
					<view class="nav-info" v-if="address">
						{{address}}
					</view>
					<view class="nav-info" v-else @click="handlclick">
						获取当前位置
					</view>
				</view>
				<view @click="clear" class="clear">退出登录</view>
			</view>
			<view v-else>
				<navigator hover-class="none" url="registLogin/registLogin">
					<view class="nickname regist-login">
						登录
					</view>
				</navigator>
			</view>
		</view>
		<!-- 下面部分 -->
		<!-- 登录后 -->
		<view class="content"  v-show="userIsLogin">
			<navigator url="myinfo/myinfo" @click="myinfo(userInfo)">
				<view class="content-item">
					<view class="iconfont icon-gerenxinxi  tubiao1"></view>
					<text>个人信息</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
			<navigator url="appointment/appointment">
				<view class="content-item">
					<view class="iconfont icon-xiaoxi  tubiao1"></view>
					<text>我的预约</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>		
			<navigator url="shoppingcart/shoppingcart">
				<view class="content-item">
					<view class="iconfont icon-gouwucheman  tubiao1"></view>
					<text>我购物车</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>		
			<navigator url="collection/collection">
				<view class="content-item">
					<view class="iconfont icon-shoucang  tubiao1"></view>
					<text>我的收藏</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>	
		</view>
		
		<!-- 未登录 -->
		<view class="content">
			<navigator url="cantactus/cantactus">
				<view class="content-item">
					<view class="iconfont icon-lianxiwomen  tubiao1"></view>
					<text>关于我们</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
			<navigator url="feedback/feedback">
				<view class="content-item">
					<view class="iconfont icon-yijianfankui  tubiao1"></view>
					<text>意见反馈</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>
			<navigator url="commonproblem/commonproblem">
				<view class="content-item">
					<view class="iconfont icon-wenti  tubiao1"></view>
					<text>常见问题</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>		
			<navigator url="seting/seting">
				<view class="content-item">
					<view class="iconfont icon-shezhi  tubiao1"></view>
					<text>我的设置</text>
					<view class="iconfont icon-xiangyou1 tubiao2"></view>
				</view>
			</navigator>

		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: '',
				address: '',
			}
		},
		onShow() {
			uni.getStorage({
				key: "userInfo",
				success: (res) => {
					if (res.data.nickName) {
						this.userInfo = res.data
						this.userIsLogin=true
					}else{
						this.userInfo=""
					}
				}
			})
			uni.getStorage({
				key: "address",
				success: (res) => {
					if(res.data){
						this.address = res.data
					}else{
						this.address=""
					}
				}
			})
			
		},
		methods: {
			//我的信息传递
			myinfo(userInfo){
				var nickName = this.userInfo.nickName
				var avatarUrl = this.userInfo.avatarUrl
				uni.navigateTo({
					url:'mymessage/mymessage?nickName='+nickName+'&avatarUrl='+avatarUrl
				})
			},
			handlclick() {
				uni.chooseLocation({
					success:(res)=> {
						uni.setStorage({
							key: "address",
							data: res.address
						})
						this.address = res.address
					}
				});
			},
			clear(){
				uni.clearStorage()
				this.userInfo='';
				this.address='';
				this.userIsLogin=false;
				uni.navigateTo({
					url:"/pages/home/registLogin/registLogin",
				})	
			},

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

	/* .set-wapper{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 15%;
	} */
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

	.content-item .tubiao1 {
		font-size: 60rpx;
		margin-left: 30rpx;
		color: #9C4B00;
		line-height: 70rpx;
	}

	.content-item text {
		/* background-color: #007AFF; */
		line-height: 70rpx;
		margin-left: 30rpx;
	}

	.content-item .tubiao2 {
		margin-left: 60%;
		line-height: 70rpx;
		color: #AEAFAD;
	}
	
	/* 下面部分end */
</style>
