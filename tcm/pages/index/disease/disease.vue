<template>
	<!-- 这里的注意点，使用 scroll-view时，如果想让元素横向也就是X轴排列的话
	要注意以下几点：
	1、scroll-view不支持flex，默认block；
	2、scroll-view设置scroll-x="true"; width: 100%; white-space: nowrap;（这个属性很重要，能不能滑动都看这个属性）
	3、子元素设置display: inline-block；
	4、子元素内容宽度要超出scroll-view的宽。
	-->
	<view>
		<!-- 设置scroll-view的scroll-x="true"，为X轴滑动 -->
		<scroll-view scroll-x="true" class="scroll-view">
			<!-- 子元素选择用v-for进行循环遍历，因为后面要用到index -->
			<view class="body-view" v-for="(item,index) in scrollViewList" :key="index" @click="changeSwiper(index)">
				<!-- 这里是一个小提醒点，动态绑定class的值，一个三元表达式 -->
				<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- swiper这边设置禁用指示点，禁止自动轮播，动态设置swiper的current属性，以便和scroll-view进行对接，在设置一个轮播切换事件
		 当swiper改变时，触发函数
		 -->
		<swiper :indicator-dots="false" :autoplay="false" class="swiper" :current="currentTab" ref="swiper" @change="changeScroll">
			<block v-for="(item,index) in scrollViewList" :key="index">
				<swiper-item>
					<scroll-view scroll-y="true" class="swiper-scroll">
						<view class="swiper-item">
							<view class="swiper-item-li" v-for="(item,index) in item.list" :key="index">
								<view class="image">
									<image @click="getdetial(item)" :src="item.tup" mode=""></image>
								</view>
								<text>{{item.name}}</text>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import diseaseData from '../../../common/disease.data.js';
	export default {
		data() {
			return {
				//定义swiper的初始值为0，也就是第一页
				currentTab: 0,
				//再定义一个数组，存放数据
				scrollViewList: diseaseData
			}
		},
		onLoad() {
			uni.getSystemInfo({	//获取系统信息
				success: (res) => {
					this.swiperHeight = res.windowHeight + 'px'
				},
				fail: (res) => {
					console.log('error')
				}
			})
		},
		methods: {
			// 切换swiper时，改变scroll的函数
			changeScroll: function(e) {
				// 令data中定义的currentTab等于当前swiper的current的值，来改变scroll
				this.currentTab = e.target.current;
			},
			changeSwiper: function(index) {
				// 点击scroll，将返回的参数赋值给currentTab
				if (this.currentTab == index) {
					return false;
				} else {
					this.currentTab = index;
				}
			},
			getdetial(item){
				// console.log(item.id)
				uni.navigateTo({
					url:'detail/detail?name='+item.name+'&symptom='+item.symptom+'&tip='+item.tip
					+'&tup='+item.tup+'&know='+item.know+'&tup2='+item.tup2
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 90%;
	}

	.body-view {
		display: inline-block;
		width: 150rpx;
		height: 60rpx;
		background-color: #ffffff;
		padding: 20rpx;
		margin-top: 20rpx;
	}

	.scroll-view {
		text-align: center;
		width: 100%;
		white-space: nowrap;
	}

	.menu-one {
		background-color: #f6f5ec;
		height: 100%;
	}

	.menu-one-act {
		background-color: #f97400;
		height: 100%;
	}

	.swiper {
		height: 800px;
		text-align: center;
		background-color: #f6f5ec;
	}

	.swiper-scroll {
		height: 100%;
	}
	
	.swiper-item{
		display: flex;
		/* display: flex; */
		flex-direction: row;
		/* background-color: #007AFF; */
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.swiper-item-li{
		width: 300rpx;
		/* padding: 5rpx; */
		/* background-color: #4CD964; */
		margin: 30rpx;
	}
	.swiper-item-li text{
		margin: 5rpx;
	}
	.swiper-item-li .image{
		width: 300rpx;
		height: 200rpx;
		/* background-color: #0000FF; */
	}
	.swiper-item-li image{
		width: 100%;
		height: 100%;
	}
</style>
