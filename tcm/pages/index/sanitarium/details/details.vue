<template>
	<view>
		<!-- 轮播图 -->
		<lunbo></lunbo>
		<!-- 活动专区 -->
		<view class="huodong">
			<!-- 标题 -->
			<view class="huodong-title">
				<view class="divider"></view>
				<view class="huodong-biaoti">
					<text>活动专区</text>
				</view>
				<view class="divider"></view>
			</view>
			<!-- 内容1 -->
			<view class="content">
				<view class="content-tp">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f3a6d19d-6e3c-43d1-a360-ea1cbd737ed5.jpg" mode=""></image>
				</view>
				<view class="content-wz">
					<text>超值贵宾卡</text>
					<text>999元</text>
					<navigator url="card/card">
						<view class="content-wz-by">立即购买</view>
					</navigator>
				</view>
			</view>
			<!-- 内容1 -->
			<view class="content">
				<view class="content-tp">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f3a6d19d-6e3c-43d1-a360-ea1cbd737ed5.jpg" mode=""></image>
				</view>
				<view class="content-wz">
					<text>超值贵宾卡</text>
					<text>999元</text>
					<navigator url="card/card">
						<view class="content-wz-by">立即购买</view>
					</navigator>
				</view>
			</view>
		</view>
		<!-- 艾灸项目 -->
		<view class="aijiu">
			<!-- 标题 -->
			<view class="huodong-title">
				<view class="divider"></view>
				<view class="huodong-biaoti">
					<text>艾灸项目</text>
				</view>
				<view class="divider"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content" v-for="item in aijiu">
			<view class="content-tp">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="content-wz">
				<text>{{item.nane}}</text>
				<text>{{item.price}}</text>
				<navigator url="service/service">
					<view class="content-wz-by">购买</view>
				</navigator>
			</view>
		</view>
		<!-- 中医推拿项目 -->
		<view class="tuina">
			<!-- 标题 -->
			<view class="huodong-title">
				<view class="divider"></view>
				<view class="huodong-biaoti">
					<text>中医推拿项目</text>
				</view>
				<view class="divider"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content-tuina" v-for="item in tuina">
			<view class="content-tuina-tp">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="content-tuina-wz">
				<text>{{item.nane}}</text>
				<text>{{item.price}}</text>
				<navigator url="service/service">
					<view class="content-tuina-wz-by">购买</view>
				</navigator>
			</view>
		</view>
		<!-- 柔性正骨项目 -->
		<view class="zhenggu">
			<!-- 标题 -->
			<view class="huodong-title">
				<view class="divider"></view>
				<view class="huodong-biaoti">
					<text>柔性正骨项目</text>
				</view>
				<view class="divider"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content" v-for="item in zhenggu">
			<view class="content-tp">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="content-wz">
				<text>{{item.nane}}</text>
				<text>{{item.price}}</text>
				<navigator url="service/service">
					<view class="content-wz-by">购买</view>
				</navigator>
			</view>
		</view>
		<!-- 关于我们 -->
		<view class="women">
			<!-- 标题 -->
			<view class="huodong-title">
				<view class="divider"></view>
				<view class="huodong-biaoti">
					<text>关于我们</text>
				</view>
				<view class="divider"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="about">
			<view class="about-item1">
				<text class="about-item1-name">博士大白</text>
				<text class="about-item1-text">
					华鹊尚医遵循“上医治未病,健康天下人”的尚医精神,以“专业、有效、求真、务实”的服务理念,精准拓展中医养生加盟门店的连镇运营。“弘扬中医国粹,实现产业报国”为企业愿景，“千城万店，福佑百姓”为经营目标。愿与天下有志于中医养生事业发展的有志之士，携手双赢,共创辉煌。
				</text>
			</view>
			<view class="about-item2">
				<text>门店名称：博士大白（巴南店）</text>
				<text>营业时间：周一至周日 09：00-21：00</text>
				<text>全国加盟热线：*********</text>
				<text>重庆形象店电话：*********</text>
				<text>重庆形象店地址：巴南区渝南大道297号万达广场写字楼</text>
			</view>
		</view>
	</view>
</template>

<script>
	import lunbo from'../../../../components/lunbo.vue'
	export default {
		components:{
			lunbo
		},
		data() {
			return {
				aijiu:[
					{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5b6f7d01-1662-47c2-abd9-ac9f5ffcde3f.JPG',nane:'健脾胃灸',price:'120元'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e211c343-83cd-4dd6-a189-179314a395fb.JPG',nane:'消结散淤灸',price:'120元'},
					{id:'3',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2eaf27bc-3242-4d08-9454-bb5e0a439d85.JPG',nane:'暖宫逐淤灸',price:'160元'},
					{id:'4',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1eecbeed-4f91-4835-a378-b725da84bee3.JPG',nane:'御帝回春灸',price:'260元'}
				],
				tuina:[
					{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0767cb7a-414e-47c7-8c96-d3b30bd7711f.JPG',nane:'A套餐',price:'68元'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/09120218-846d-4b00-a24b-3ae07eb88016.JPG',nane:'B套餐',price:'118元'}
				],
				zhenggu:[
					{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d3fb7bfc-962e-413e-8870-6e636a5dd8e7.JPG',nane:'颈椎整骨',price:'268元'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/450192d7-3b3f-4c47-8379-b5fe7b6878cd.JPG',nane:'富贵包',price:'198元'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fa84c851-b890-4a7f-9264-5b13047fb3df.JPG',nane:'腰椎整骨',price:'398元'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	/* 横线 */
	.divider{
		background: #333333;
		width: 200rpx;
		height: 5rpx;
		/* margin-top: 50rpx; */
	}
	/* 活动专区 */
	.huodong{
		
	}
	.huodong-title{
		padding: 30rpx;
		display: flex;
		justify-content: space-around;
		background-color: #f4ebe1;
		vertical-align: middle;
		align-items: center;/*垂直居中 */
		/* height: 100rpx; */
	}
	.huodong-biaoti{
		/* margin-top: 50rpx; */
		padding: 0rpx 15rpx;
		border-left: #052b14 10rpx solid;
		border-right: #052b14 10rpx solid;
		/* background-color: #007AFF; */
	}
	.content{
		height: 200rpx;
		margin: 20rpx auto;
		border-radius: 30rpx;
		width: 600rpx;
		background-color: #e4e8eb;
		display: flex;
	}
	.content-tp{
		width: 300rpx;
		height: 150rpx;
		/* background-color: #fef4ea; */
		margin: 25rpx 20rpx;
		border-radius: 30rpx;
	}
	.content-tp image{
		height: 100%;
		width: 100%;
		border-radius: 20rpx;
	}
	.content-wz{
		margin: 25rpx 20rpx;
		display: flex;
		flex-direction: column;
		color: #000000;
		justify-content: space-around;
	}
	.content-wz-by{
		background-color: #012b15;
		padding: 5rpx 30rpx;
		color: #ffffff;
		border-radius: 40rpx;
		font-size: 30rpx;
	}
	.content-tuina{
		/* width: 300rpx; */
		/* height: 200rpx; */
		background-color: #012b15; 
		margin: 40rpx 40rpx;
		border-radius: 30rpx;
		/* padding: 20rpx; */
		
	}
	.content-tuina-tp{
		/* width: 300rpx; */
		height: 150rpx;
		/* background-color: #fef4ea; */
		/* margin: 25rpx 20rpx; */
		/* border-radius: 30rpx; */
	}
	.content-tuina-tp image{
		height: 100%;
		width: 100%;
		/* border-radius: 20rpx; */
	}
	.content-tuina-wz{
		padding: 20rpx;
		/* margin: 10rpx; */
		/* background-color: #007AFF; */
		display: flex;
		justify-content: space-around;
		color: #ffffff;
	}
	.content-tuina-wz-by{
		background-color: #ffffff;
		padding: 5rpx 30rpx;
		color: #052B14;
		border-radius: 40rpx;
		font-size: 30rpx;
	}
	.about{
		padding: 40rpx;
	}
	.about-item1{
		padding: 40rpx;
		background-color: #f4e3db;
		display: flex;
		flex-direction: column;
		border-radius: 30rpx;
		/* justify-content: center; */
	}
	.about-item1-name{
		/* justify-content: center; */
		/* background-color: #007AFF; */
		text-align: center;
		padding: 10rpx;
		font-size: 35rpx;
		font-weight: 600;
	}
	.about-item1-text{
		text-indent: 2em;
		font-size: 25rpx;
	}
	.about-item2{
		margin: 10rpx;
		display: flex;
		flex-direction: column;
		font-size: 25rpx;
		background-color: #012b15;
		padding: 10rpx;
		color: #ffffff;
	}
	.about-item2 text{
		margin: 5rpx;
	}
</style>
