<template>
	<view class="big">
		<image class="img" :src="icon"></image>
		<view class="first">
			<view class="price">￥{{price}}</view>
			<view class="brief">{{brief}}</view>
		</view>
		<view class="second">
			<view class="fahuo">发货<text selectable space="emsp" style="color: #000000;">： 安徽亳州 / 快递：免运费</text></view>
			<view class="baozhang">保障<text selectable space="emsp" style="color: #000000;">： 付款后48小时内发货 7天无理由退换</text></view>
			<view  @click="getproduct()" class="canshu">品牌<text selectable space="emsp" style="color: #000000;">： 品牌 系列         ></text></view>
			<view style=" width: 100%; background-color: #FFFFFF;" class="chanpin" v-if="show">
				<view style="margin-top: 20rpx; margin-left: 270rpx; font-size: 40rpx; color: #9c4b00;">产品参数</view>
				<view class="second1">
					<view class="chanpin1">品牌<text selectable space="emsp" style=" margin-left: 240rpx; color: #8A8A8A;">  other/其他</text></view>
					<view class="chanpin1">系列<text selectable space="emsp" style=" margin-left: 240rpx; color: #8A8A8A;">  中药</text></view>
					<view class="chanpin1">规格<text selectable space="emsp" style=" margin-left: 240rpx; color: #8A8A8A;">  选</text></view>
					<view class="chanpin1">产地<text selectable space="emsp" style=" margin-left: 240rpx; color: #8A8A8A;">  中国大陆</text></view>
					<view class="chanpin1">省份<text selectable space="emsp" style=" margin-left: 240rpx; color: #8A8A8A;">  甘肃省</text></view>
					<view class="chanpin1">包装方式<text selectable space="emsp" style=" margin-left: 170rpx; color: #8A8A8A;">  食用农产品</text></view>
					<view class="chanpin1">适用对象<text selectable space="emsp" style=" margin-left: 170rpx; color: #8A8A8A;">  全部适用</text></view>
					<view class="chanpin1">净含量<text selectable space="emsp" style=" margin-left: 200rpx; color: #8A8A8A;">  100g</text></view>
					<view class="chanpin1">存储条件<text selectable space="emsp" style=" margin-left: 170rpx; color: #8A8A8A;">  常温</text></view>
				</view>
				<button style=" margin-left: 250rpx; margin-top: 550rpx; color: #FFFFFF; width: 200rpx;background-color: #9C4B00;" @click="disproduct()" type="default">完成</button>
			</view>
		</view>
		<view class="prompt">
			<view class="shang">
				消费提醒
			</view>
			<view class="xia">
				药食同源商品，请遵医嘱使用或购买前详细咨询医生正确使用方法
			</view>
		</view>
		<view class="detail">
			详情介绍
		</view>
		<view class="use">
			<view class="box">
				<image class="img_1" :src="icon"></image>
				<view class="box_1">
					<view class="name">{{name}}</view>
					<view  class="alias">{{alias}}</view>
				</view>
			</view>
			
			<view class="explain">{{explain}}</view>
		</view>
		<!-- <goodsnav></goodsnav> -->
		<view class="cart">
			<ul class="che">
				<li class="gou"><text class="ziti" @click="getcart()">加入购物车</text></li>
				<li class="mai"><text class="ziti" @click="buynow()">立即购买</text></li>
			</ul>
		</view>
	</view>
</template>

<script>
	import goodsnav from '../../../components/goodsnav.vue'
	export default {
		components:{
			goodsnav,
		},
		data() {
			return {
				show:false,
				name:'',
				price:'',
				brief:'',
				icon:'',
				alias:'',
				explain:'',
				neirongItem:[
				{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'番石榴叶',annotation:'□数码□123456'},
				{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'浮小麦',annotation:'□数码□123456'},
				{id:'3',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'凤眼草',annotation:'□数码□123456'},
				{id:'4',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'青蒿',annotation:'□数码□123456'},
				{id:'5',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'牡蛎',annotation:'□数码□123456'},
				{id:'6',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg',title:'胡黄连',annotation:'□数码□123456'},
				]
			}
		},
		methods: {
			getproduct(){
				this.show=true
			},
			disproduct(){
				this.show=false
			},
			getcart(){
				var name = this.name
				var price = this.price
				var brief = this.brief
				var icon = this.icon
				uni.navigateTo({
					url:'../../home/shoppingcart/shoppingcart?name='+name+'&price='+price+'&brief='+brief
					+'&icon='+icon
					// url:'detail/detail?name='+name+'&price='+price
				}),
				uni.showToast({
					title:'加入购物车成功',
					icon:'success',
					duration:1000
				})
			},
			buynow(){
				var name = this.name
				var price = this.price
				var brief = this.brief
				var icon = this.icon
				uni.navigateTo({
					url:'../../home/shoppingcart/order/order?name='+name+'&price='+price+'&brief='+brief
					+'&icon='+icon
				})
			}
		},
		onLoad(options) {
			var that=this
			that.name=options.name
			that.price=options.price
			that.brief=options.brief
			that.icon=options.icon
			that.alias=options.alias
			that.explain=options.explain
		},
	}
</script>

<style lang="scss">
.big{
	.cart{
		width: 100%;
		height: 110rpx;
		border: 1px solid #FFFFFF;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 1;
		.che>li{
			// padding: 0;
			// margin: 0;
			float: left;
			list-style: none;
			font-size: 30rpx;
		}
		.che{
			.gou{
				border: 1px solid #ffaa00;
				width: 200rxp;
				height: 80rpx;
				background-color: #ffaa00;
				color: #FFFFFF;
				padding-left: 85rpx;
				padding-right: 40rpx;
				margin-top: 15rpx;
				margin-left: 100rpx;
				border-radius:40rpx 0 0 40rpx;
				// background-color: #007AFF;
				line-height: 80rpx;
			}
			.mai{
				border: 1px solid #ff0000;
				width: 200rxp;
				height: 80rpx;
				color: #FFFFFF;
				padding-left: 40rpx;
				padding-right: 85rpx;
				background-color: #ff0000;
				margin-top: 15rpx;
				border-radius:0 40rpx 40rpx 0;
				line-height: 80rpx;
			}
		}
	}
	.img{
		width: 500rpx;
		height: 500rpx;
		margin-top: 50rpx;
		margin-left: 120rpx;
		box-shadow: 15rpx 20rpx 20rpx 5rpx rgba(156, 75, 0, 0.6);
		border-radius: 30rpx;
		margin-bottom: 30rpx;
	}
	.first{
		width: 720rpx;
		height: 200rpx;
		border: 1rpx solid #E7C276;
		margin-left: 15rpx;
		border-radius: 30rpx;
		.price{
			font-size: 70rpx;
			color: rgb(156,75,0);
		}
		.brief{
			font-weight: 600;
			margin-left: 10rpx;
			font-size: 35rpx;
			letter-spacing: 5rpx;
		}
	}
	.second{
		.chanpin{
			position: fixed;
			bottom: 0rpx;
				height: 960rpx;
				// width: 86%;
				padding: 10upx 3%;
				margin: 0upx auto 0upx auto;
				box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
				border-radius: 20upx;
				z-index: 2;
			}
		.second1{
			font-size: 35rpx;
				margin-top: 25rpx;
				width: 720rpx;
				height: 200rpx;
				// margin-left: 15rpx;
				border-radius: 30rpx;
				.chanpin1{
					// margin-left: 20rpx;
					margin-top: 40rpx;
				}
			}
		margin: 0rpx auto;
		margin-top: 25rpx;
		width: 720rpx;
		height: 200rpx;
		border: 1rpx solid #E7C276;
		// margin-left: 15rpx;
		border-radius: 30rpx;
		.fahuo,.baozhang,.canshu{
			color: #8A8A8A;
			margin-left: 20rpx;
			margin-top: 20rpx;
		}
	}
	.third{
		margin-top: 25rpx;
		width: 720rpx;
		height: 800rpx;
		border: 1rpx solid #E7C276;
		margin-left: 15rpx;
		border-radius: 30rpx;
		.wenzi{
			color: rgb(156,75,0);
			font-weight: 600;
			letter-spacing: 5rpx;
			font-size: 40rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
		}
	}
	.prompt{
		margin-top: 25rpx;
		width: 720rpx;
		height: 180rpx;
		// border: 1rpx solid #E7C276;
		margin-left: 15rpx;
		border-radius: 30rpx;
		.shang,.xia{
			margin-left: 20rpx;
			margin-top: 20rpx;
			color: #8A8A8A;
		}
		.shang{
			font-size: 40rpx;
		}
	}
	.detail{
		height: 88rpx;
		/* width: 100%; */
		text-indent: 1em;
		background-image: linear-gradient(to right, #f0bb88 , #ffffff);
		border-top: solid 5rpx #9C4B00;
		border-left: solid 5rpx #9C4B00;
		margin: 15rpx;
		font-size: 35rpx;
		line-height:80rpx;
		color: rgb(156,75,0);
		letter-spacing: 10rpx;
	}
	.use{
		// display: flex;
		width: 700rpx;
		// height: 3050rpx;
		white-space: pre-wrap;
		// width: 100%;
		height: 100%;
		border: 1rpx solid #E7C276;
		margin-left: 15rpx;
		margin-bottom: 120rpx;
		padding: 10rpx;
		border-radius: 30rpx;
		.box{
			display: flex;
			flex-direction: row;
			white-space: pre-wrap;
			.img_1{
				width: 700rpx;
				height: 380rpx;
				margin-top: 10rpx;
				margin-left: 10rpx;
				border-radius: 30rpx;
			}
			.box_1{
				display: flex;
				flex-direction: column;
				white-space: pre-wrap;
				.name{
					text-align: center;
					font-size: 70rpx;
					color: rgb(156,75,0);
				}				
				.alias{
					white-space: pre-wrap;
					word-break: break-all;
					font-weight: 600;
					
				}
			}
		}
		.explain{
			margin-left: 7rpx;
			margin-top: 30rpx;
			white-space: pre-wrap;
			letter-spacing: 5rpx;
		}
	}
	
}
</style>
