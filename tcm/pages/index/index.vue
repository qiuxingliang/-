<template>
    <view class="page">
		<!-- <first-nav></first-nav> -->
		<!-- 轮播图 -->
        <lunbo></lunbo>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item">
				<navigator hover-class="none" url="./shihua/shihua">
					<view class="iconfont icon-Leaf"></view>
					<text>中医史话</text>
				</navigator>
				
			</view>
			<view class="nav-item">
				<navigator hover-class="none" url="./chuancheng/chuancheng">
					<view class="iconfont icon-zisunchuancheng"></view> 
					<text>中医传承</text>
				</navigator>
			</view>
			<view class="nav-item">
				<navigator hover-class="none" url="./baodian/baodian">
					<view class="iconfont icon-shuji"></view>
					<text>养生宝典</text>
				</navigator>
			</view>
			<view class="nav-item">
				<navigator hover-class="none" url="./fenxiang/fenxiang">
					<view class="iconfont icon-JC_054"></view>
					<text>健康分享</text>
				</navigator>
			</view>
			<view class="nav-item">
				<navigator hover-class="none" url="./disease/disease">
					<view class="iconfont icon-zhengzhuangzicha"></view>
					<text>常见病症</text>
				</navigator>
			</view>
			<view class="nav-item">
				<navigator hover-class="none" url="./sanitarium/sanitarium">
					<view class="iconfont icon-yangshenghuli"></view>
					<text>中医养生馆</text>
				</navigator>
			</view>
		</view>
		<!-- 下面部分 -->
		<view class="xia">
			<!-- 中医文化 -->
			<view class="biaoti">
				中医文化
			</view>
			<navigator url="shihua/shihua">
				<view class="neirong1">
					<text>{{neirong1}}</text>
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/aef04d96-f082-4c53-b7b4-f77e95c7c1af.jpg"></image>
				</view>
			</navigator>
			<!-- 中华十大名医 -->
			<view class="biaoti">
				中华十大名医
			</view>
			<navigator url="chuancheng/chuancheng">
				<view class="neirong2">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/9067efde-1f35-45c8-83e9-95135bd72cd5.jpg" mode=""></image>
				</view>
			</navigator>
			<!-- 养生基本原则 -->
			<view class="biaoti">
				养生基本原则
			</view>
			<navigator url="baodian/baodian">
				<view class="neirong3">
					<view class="neirong3-item" v-for="item in neirong3Item">
						<view class="shu">{{item.id}}</view>
						<view>
							<view class="nane">{{item.nane}}</view>
							<view class="text">{{item.text}}</view>
						</view>	
					</view>
				</view>
			</navigator>
			<!-- 健康分享 -->
			<view class="biaoti">
				健康分享
			</view>
			<navigator url="fenxiang/fenxiang">
				<view class="neirong4">
					<view class="neirong4-item" v-for="item in neirong4Item">
						<image :src='item.img'></image>
						<view class="right">
							<view class="title">
								{{item.title}}
							</view>
							<view class="info">
								<text>{{item.text1}}</text>
								<text>{{item.text2}}</text>
								<text>{{item.text3}}</text>
							</view>
						</view>
					</view>
				</view>
			</navigator>
		</view>
		<!-- <tab></tab> -->
    </view>
</template>

<script>
	import tab from'../../components/tab.vue'
	import firstNav from'../../components/first-nav.vue'
	import lunbo from'../../components/lunbo.vue'
	export default {
		components:{
			tab,
			firstNav,
			lunbo
		},
		data() {
			return {
				neirong1:'笼统地说，文化是—种社会现象，是人们长期创造形成的产物。同时又是—种历史现象，是社会历史的积淀物。确切地说，文化是指—个国家或民族的历史、地理、风土人情、传统习俗、生活方式、文学艺术、行为规范、思维方式、价值观念等。',
				neirong3Item:[
					{id:'1',nane:'四时养生',text:'养生的首要原则就是顺应天地规律。'},
					{id:'2',nane:'24节气养生',text:'天地四时的阳气变化是我们养生的总旨。'},
					{id:'3',nane:'节日养生',text:'节日不是节气，但节日与天地阴阳气机相关。'},
					{id:'4',nane:'五脏养生',text:'元气为健康之本，医疗以元气为取效之本。'},
					{id:'5',nane:'饮食养生',text:'以饮食养生，好好吃饭即是最好的养生保健。'},
					{id:'6',nane:'运动养生',text:'运动的心情和畅,五脏六腑皆归于平衡。'}
				],
				
				neirong4Item:[
					{id:'1',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/df91a561-edf2-498f-ad33-eebb0dab5b04.jpg',title:'“治未病中医”与治息息相关，的“未病”是怎么个法?',text1:'□',text2:'数码党',text3:'1.2万人浏览'},
					{id:'2',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a47d1aa1-c322-4ab5-9702-9835d211470a.jpg',title:'气虚体质如何调理? ? ?',text1:'□',text2:'数码党',text3:'1.2万人浏览'},
					{id:'3',img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f3a6d19d-6e3c-43d1-a360-ea1cbd737ed5.jpg',title:'畏寒怕冷的阳虚体质，该如何调理?',text1:'□',text2:'数码党',text3:'1.2万人浏览'}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script> 

<style lang="scss">
	.nav{
		/* float: right; */
		/* height: 500rpx; */
		/* width: 700rpx; */
		display: flex;
		/* background-color: #007AFF; */
		flex-wrap: wrap;
		margin: 10rpx;
		color: #9C4B00;
		
	}
	.nav-item view{
			width: 120rpx;
			height: 120rpx;
			background: #f0bb88;
			border-radius: 60rpx;
			margin: 10px auto;
			line-height: 120rpx;
			color: #9C4B00;
			font-size: 70rpx;
	}
	.nav-item{
		width: 25%;
		text-align: center;
		font-size: 30rpx;
	}
	/* 下面部分 */
	.xia{
		padding-bottom: 50rpx;
		/* height: 3000rpx; */
		/* width: 100rpx; */
		margin: 20rpx 10rpx;
		/* background-color: #007AFF; */
	}
	.biaoti{
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
	}
	.neirong1{
		display: flex;
		height: 430rpx;
		/* background-color: #31B0D5; */
		margin: 15rpx;
		padding: 10rpx;
		border: solid 3rpx #9C4B00;
		border-radius: 25rpx;
	}
	.neirong1 text{
		width: 80%;
		height: 100%;
		text-indent: 1em;
		word-spacing: initial;
		/* font-size: 14px; */
		font: 14px "Arial Normal" ,Arial;
	}
	.neirong1 image{
		height: 100%;
		margin: 5rpx;
	}
	.neirong2{
		height: 235px;
		margin: 15rpx;
		background-color: #3C763D;
	}
	.neirong2 image{
		height: 100%;
		width: 100%;
	}
	.neirong3{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* height: 200rpx; */
		margin: 15rpx;
		/* background-color: #A6E1EC; */
	}
	.neirong3-item{
		display: flex;
		/* height: 160rpx; */
		padding: 10rpx 0;
		width: 346rpx;
		/* background-color:#FFFF00; */
		border: solid 2rpx #f0bb88;
	}
	.neirong3-item .shu{
		/* background-color:#FFFF00; */
		width: 35%;
		font-family: 'FontAwesome Regular', 'FontAwesome';
		font-weight: 400;
		font-style: normal;
		font-size: 36px;
		color: #7D3C00;
		text-align: center;
		padding-top:6% ;
		
	}
	.neirong3-item .nane{
		font-family: 'FontAwesome Regular', 'FontAwesome';
		font-weight: 800;
		font-style: normal;
		font-size: 16px;
		color: #7D3C00;
		text-align: left;
		margin: 10rpx;
	}
	.neirong3-item .text{
		/* text-indent: 1em; */
		word-spacing: initial;
		margin: 5rpx;
		/* font-size: 14px; */
		font: 12px "Arial Normal" ,Arial;
	}
	.neirong4{
		
	}
	.neirong4 .neirong4-item{
		display: flex;
		margin: 25rpx 15rpx;
		padding: 10rpx 10rpx;
	}
	.neirong4 .neirong4-item image{
		width: 200rpx;
		min-width: 200rpx;
		max-width: 200rpx;
		height: 150rpx;
	}
	.neirong4 .neirong4-item .right{
		margin-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.neirong4 .neirong4-item .title{
		font-size: 30rpx;
		font-weight: 800;
	}
	.neirong4 .neirong4-item .info{
		font-size: 24rpx;
	}
	.neirong4 .neirong4-item .info text:nth-child(2){
		margin-left: 30rpx;
	}
	.neirong4 .neirong4-item .info text:nth-child(3){
		margin-left: 30rpx;
	}
</style>
