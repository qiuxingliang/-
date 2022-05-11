<template>
	<view>
		<!-- 添加配方 -->
		<input type="text" @confirm="doSearch(value1)" v-model="value1" placeholder="请输入中药名称(或拼音)"/>
		<!-- 搜索后的结果 -->
		<view class="Searchshow" v-show="value1" v-for="i in serchlist">
			<view class="Searchshow-name">
				<text>{{i.name}}</text> 
				<view class="top2-name-2-shuliang">
					克数：
					<view class="top2-name-2-shuliang-li">-</view>
					<input type="text"  class="top2-name-2-shuliang-li" :value="i.cat" />
					<view class="top2-name-2-shuliang-li">+</view>
				</view>
			</view>
			<view class="Searchshow-add">
				<view>规格：克</view>
				<view class="Searchshow-add-2" @click="jiaru(i)">
					加入配方
				</view>
			</view>
		</view>
		<view class="" v-show="!value1">
			<view class="tishi">
				请通过搜索查询您的配方药材
			</view>
			<view class="sousuo">
				<view class="sousuo-i">
					热门搜索：
				</view>
				<view @click.native="tianjia(i)" class="sousuo-i" v-for="i in remensousuo">{{i}}</view>
			</view> 
			<view class="history">
				<view class="sousuo-i">
					历史记录：
				</view>
				<view class="sousuo-i" v-for="j in history">{{j}}</view>
			</view>
			<view class="dibu">
				搜索建议:请输入中药名最短名称进行近似中药以提高搜索率，例如孰地黄和地黄均可以“地黄”搜索到。
			</view>
		</view>
	</view>
</template>

<script>
	import classifyData from '../../../../common/classify.data.js';
	export default {
		data() {
			return {
				remensousuo:['阿胶','黄芪','玄参','甘草','人参','党参','白首乌','柴胡'],
				history:[],
				value1:'',
				classifyData: classifyData,    //页面数据
				serchlist:[],
				peifang:[]
			}
		},
		onBackPress(e) {
			//传递的数据
			var data=this.peifang
			//获取当前页面js里面page里的所有信息
			let pages=getCurrentPages()
			let prevPage=pages[pages.length-2]
			uni.$emit("globleEvent",{
				data:data,
			})
			console.log('成功')
		},
		// updated:{
			
		// },
		onLoad(options) {
			uni.$on("globleEvent",(options)=>{
				// console.log(options.item)
				// this.formula.list.push(options.data) 
				uni.$off('globleEvent')
			})
		},
		methods: {
			//搜索
			doSearch(value1){
				this.classifyData.forEach(i=>{
					i.foods.forEach(j=>{
						if(j.name==value1){
							this.serchlist.push(j)
						}
					})
				})
				// console.log(this.serchlist)
				this.history.push(value1)
			},
			tianjia(i){
				// console.log(i)
				// console.log(classifyData)
				this.value1=i
				this.history.push(i)
			},
			//加入配方
			jiaru(i){
				this.peifang.push(i)
				uni.showModal({
					title:'提示',
					content:'添加成功'
				})
			}
		}
	}
</script>

<style>
	input{
		padding: 20rpx;
		border: #d3d3d3 2rpx solid;
		width: 660rpx;
		margin: 10rpx auto;
		text-align: center;
		background-color: #f8f8f8;
	}
	.tishi{
		background-color: #f0f0f0;
		/* margin: 10rpx; */
		padding: 30rpx;
	}
	.sousuo{
		display: flex;
		flex-wrap: wrap;
	}
	.sousuo-i{
		padding: 10rpx 20rpx;
		margin: 10rpx;
		background-color: #f8f8f8;
	}
	
	.history{
		padding: 30rpx 10rpx;
		display: flex;
		flex-wrap: wrap;
		background-color: #007AFF;
	}
	.dibu{
		width: 660rpx;
		margin: 50rpx auto;
		color: #ff5000;
	}
	
	/* 搜索 */
	.Searchshow{
		/* height: 100rpx; */
		background-color: #ffffff;
		border-bottom: #cfcfcf 3rpx solid;
		padding: 20rpx;
		
	}
	.Searchshow-name{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.top2-name-2-shuliang{
		/* background-color: #18BC37; */
		display: flex;
		align-items: center;
	}
	.top2-name-2-shuliang-li{
		width: 40rpx;
		padding: 10rpx 20rpx;
		/* height: 30rpx; */
		/* padding: 5rpx 30rpx; */
		border: #b6b6b6 3rpx solid;
		border-radius: 5rpx;
		background-color: #f8f8f8;
	}
	.Searchshow-add{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.Searchshow-add-2{
		background-color: #f8f8f8;
		padding: 20rpx 40rpx;
		border-radius: 10rpx;
		border: #b6b6b6 3rpx solid;
	}
</style>
