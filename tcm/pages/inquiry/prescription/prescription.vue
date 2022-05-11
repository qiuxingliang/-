<template>
	<view>
		<!-- 我要抓药 -->
		
		<!-- 没有数据时显示 -->
		<view class="top" v-show="ischeck">
			<view class="top-img">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/30a4235d-a3b3-4a0f-afef-26976fab3fb6.png" mode=""></image>
			</view>
			<view class="top-text">
				您的配方单为空，请创建配方单！
			</view>	
		</view>
		<!-- 有数据显示 -->
		<!-- v-show="this.formula.length" -->
		<view class="top2" v-show="!ischeck" v-for="(item,index) in formula">
			<view class="top2-name">
				<view class="top2-name-1">{{item.name}}</view>
				<view class="top2-name-2">
					<navigator url="findmedicine/findmedicine" class="top2-name-2-bianji">
						<view>添加</view>
					</navigator>
					<view @click="dele(index)" class="top2-name-2-bianji">删除</view>
					<view class="top2-name-2-shuliang">
						数量：
						<view class="top2-name-2-shuliang-li" @click="jian(item)">-</view>
						<input type="text" v-model="item.number" class="top2-name-2-shuliang-li" value="0" />
						<view class="top2-name-2-shuliang-li" @click="jia(item)">+</view>
					</view>
				</view>
				
			</view>
			<view class="top2-list" v-for="i in text1">
				<view class="">{{i.name}}</view>
				<view class="">×<text>{{i.num}}</text>克</view>	
			</view>
			<navigator url="findmedicine/findmedicine" class="top2-dibu">
				<view>修改配方</view>
			</navigator>
		</view>
		
		<view class="xuanzhe">
			
			<picker :range="array1" @change="bindPickerChange1">
				<label>创建配方单</label>
				<!-- <label>{{array1[index1]}}</label> -->
				<!-- <label class="iconfont icon-xiangxia2"></label> -->
			</picker>
		</view>
		<view class="dibu">
			
		</view>
		<!-- <button type="default" @click="text()">测试</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array1: ['原中药材', '混配颗粒', '小袋颗粒', '大袋颗粒'],
				index1: 0,
				ischeck:true,
				formula:[
					// {
					// 	id:1,
					// 	name:'1',
					// 	number:1,
					// 	list:[
					// 		{
					// 			id:1,
					// 			name:'1',
					// 			num:1
					// 		}
					// 	]
					// }
				],
				text1:[]
			}
		},
		// mounted() {
		// 	this.formula=[]
		// 	this.ischeck=true
		// },
		onLoad(options) {
			uni.$on("globleEvent",(options)=>{
				options.data.forEach(i=>{
					console.log(i.name)
					console.log(i.cat)
					let data1={ 
						name:i.name,
						num:i.cat
					}
					// let data={
					// 	name:i.name,
					// 	num:i.cat
					// },
					// console.log(this.text1)
					this.text1.push(data1)
					console.log(this.text1)
				})
				
				// this.formula.list.push(options.data) 
				uni.$off('globleEvent')
			})
		},
		methods: {
			// text(){
			// 	console.log(this.formula.length)
			// },
			//
			jian(item){
				if(item.number>0){
					item.number--
				}
			},
			jia(item){
					item.number++
			},
			//删除
			dele(index){
				console.log(index)
				this.formula.splice(index,1)
				// uni.showModal({
				// 	title:'删除',
				// 	content:'确定要删除吗'
				// })
			},
			//下拉框
			bindPickerChange1(e) {
				this.index1 = e.target.value
				this.jg = this.array1[this.index1]
				this.formula.push(
				{
					id:1,
					name:this.jg,
					number:0,
					list:[]
				}
				)
				// console.log(this.formula)
				this.ischeck=false
				uni.showModal({
					title:'提示',
					content:'成功创建配方单'
				})
			},
		}
	}
</script>

<style>
	.top{
		/* height: 300rpx; */
		/* background-color: #007AFF; */
		padding: 30rpx;
	}
	.top-img{
		width: 300rpx;
		height: 300rpx;
		/* margin: 30rpx auto; */
		margin: 10rpx auto;
		margin-top: 100rpx;
		/* background-color: #18BC37; */
	}
	.top-img image{
		width: 100%;
		height: 100%;
	}
	.top-text{
		/* background-color: #18BC37; */
		text-align: center;
		margin: 50rpx;
	}
	
	/* 有数据显示 */
	.top2{
		background-color: #ffffff;
		padding: 10rpx;
		margin: 20rpx 0rpx;
	}
	.top2-name{
		border-bottom: #000000 3rpx solid;
		padding: 20rpx;
	}
	.top2-name-1{
		font-weight: 600;
		font-size: 40rpx;
	}
	.top2-name-2{
		display: flex;
		justify-content: space-around;
		margin: 15rpx;
	}
	.top2-name-2-bianji{
		background-color: #d0d0d0;
		padding: 5rpx 30rpx;
		border-radius: 12rpx;
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
		border: #bfbfbf 3rpx solid;
		border-radius: 5rpx;
		background-color: #f8f8f8;
	}
	.top2-list{
		display: flex;
		justify-content: space-between;
		margin: 0rpx 50rpx;
		padding: 30rpx 5rpx;
		border-bottom: #000000 2rpx solid;
	}
	.top2-dibu{
		padding: 20rpx;
		width: 600rpx;
		margin: 30rpx auto;
		border-radius: 10rpx;
		background-color: #f8f8f8;
		border: #bfbfbf 3rpx solid;
		text-align: center;
		font-size: 40rpx;
	}
	
	
	
	
	
	
	
	.xuanzhe{
		padding: 30rpx;
		width: 600rpx;
		margin: 10rpx auto;
		border-radius: 10rpx;
		background-color: #d8d8d8;
		text-align: center;
		font-size: 40rpx;
	}
</style>
