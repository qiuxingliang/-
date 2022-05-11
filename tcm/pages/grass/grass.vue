<template>
	<view class="content">
		<!-- <view class="header">
			头部信息区域
		</view> -->
		<view class="page-body" :style="'height:' + height + 'rpx'">
			<scroll-view 
				class="nav-left"
				scroll-y
				:style="'height:' + height + 'rpx'"
				:scroll-top="scrollLeftTop"
				upper-threshold="1"
				lower-threshold="1"     
				@scrolltoupper="leftToTOP"
				@scrolltolower="letftToBottom"    
				>
				<view 
					class="nav-left-item" 
					@click="categoryClick(index)" 
					:key="index" 
					:class="index == categoryActive ? 'active' : ''" 
					v-for="(item, index) in classifyData">
					{{ item.name }}
				</view>
			</scroll-view>
			
			<scroll-view 
				class="nav-right" 
				scroll-y 
				:scroll-top="scrollTop" 
				@scroll="scroll"
				:style="'height:' + height + 'rpx'" 
				scroll-with-animation
				>
				<view 
					v-for="(foods, index) in classifyData" 
					:key="index" 
					class="box">
					<view style="position: sticky; top:0rpx; z-index: 2; font-size: 50rpx; margin-left: 50rpx; color: #9C4B00;margin-bottom: 10rpx;">{{foods.name}}</view>
					<!-- <hr style="color: #9C4B00;" > -->
					<view  :id="i == 0 ? 'first' : ''" class="nav-right-item" v-for="(item, i) in foods.foods" :key="i">
						<image @click="getdetial(item)" :src="item.icon" />
						<view>{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- <view class="footer">
			底部信息区域
		</view> -->
	</view>
</template>

<script>
import classifyData from '../../common/classify.data.js';
export default {
	data() {
		return {
			height: 0,    //获取这个联动体的高度,单位rpx
			scaleWidth:0,   //当前设备的宽度，单位px
			categoryActive: 0,     //当前选中左侧哪一个类别
			scrollTop: 0,         //给右侧使用的,单位px
			scrollLeftTop: 0,     //给左侧使用的,单位px
			scrollHeight: 0,      //右侧的当前滚动距离,单位px
			classifyData: classifyData,    //页面数据
			arr: [], //右侧梯度高度scrollHeight,单位px
			leftItemHeight: 100, //左侧分类的item项高度,单位px
			navLeftHeight: 0, //左边分类的总高度,单位px
			footerHeight: 100 ,//联动列表距离底部的高度，一般这里是购物车栏目的高度,单位rpx
			headerHeight:150   //顶部的高度,单位rpx
		};
	},
	onLoad: function() {
		this.scaleWidth=uni.getSystemInfoSync().windowWidth
		//计算联动体的总高度，单位是rpx，因为底部和顶部我们设计写代码是写的rpx
		this.height = (uni.getSystemInfoSync().windowHeight*920)/this.scaleWidth - this.footerHeight-this.headerHeight;
		//获取这个联动体的高度，先换算成rpx,再去除底部和顶部的距离
	},
	onReady() {
		this.getHeightList();
	},
	methods: {
		//获取每一个分类高度，左侧总高度，左侧隐藏高度，右侧类别高度数组
		getHeightList() {
			let _this = this;
			let selectorQuery = uni.createSelectorQuery().in(this);
			selectorQuery.selectAll('.nav-left-item').boundingClientRect(function(rects) {  
				_this.leftItemHeight = rects[0].height;         					 	 //获取每一个分类的高度
				_this.navLeftHeight = _this.leftItemHeight * classifyData.length;  		 //计算出左侧分类总的高度
			}).exec();
			selectorQuery.selectAll('.box').boundingClientRect(function(rects) { 		
					let arr = [0];  //已经有第一项了，就是0
					let top = 0;
					rects.forEach(function(rect) {   
						top += rect.height;      //获取右侧所有栏目的总高度
						arr.push(top);       //每获取一项，就push到数组中，这样这个数组中就可以获取梯度的高度信息
					});
					_this.arr = arr;       //最后把这个arr存储起来
				}).exec();
		},
		//监听右侧的滚动事件，让右侧滑动时，左侧分类对应选中
		scroll(e) {
			let _this = this;
			if (this.timeoutId) {
				clearTimeout(this.timeoutId);
			}
			this.timeoutId = setTimeout(function() {
				//节流，设定时间内一定执行一次，且执行的是第一次
				_this.scrollHeight = e.detail.scrollTop +1    //加1是为了给点余量，避免跳动到另一个分类
				for (let i = 0; i < _this.arr.length; i++) {
					let height1 = _this.arr[i];
					let height2 = _this.arr[i + 1];
					if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
						//右侧滚动到最后一个，或者到两个类别中间时
						_this.categoryActive = i;   //让对应的i个分类被选中
						return false;
					}
				}
				_this.timeoutId = undefined;
			}, 10);
		},
		//点击左侧的类别，右侧相应地移动到对应位置
		categoryClick(index) {
			this.categoryActive = index;   //左侧分类哪个被选中
			this.scrollTop = this.arr[index]  //因为arr数组中已经存储了右侧梯度的高度信息，所以左侧点击，可以让右侧滑动到相应位置
		},
		leftToTOP(){
			this.scrollLeftTop=0
		},
		letftToBottom(){
			if(this.navLeftHeight>this.heightPX){
				this.scrollLeftTop=this.navLeftHeight-this.heightPX   //把这个值重置为真实的scrolltop值
				// 因为左侧分类太多，滑到底部时，不滚动，但是这个值有可能会被加好几次
			}
		},
		
		getdetial(item){
			// console.log(item.id)
			uni.navigateTo({
				url:'detail/detail?name='+item.name+'&price='+item.price+'&brief='+item.brief
				+'&icon='+item.icon+'&alias='+item.alias+'&explain='+item.explain
			})
		}
	},
	watch:{
		//监听左侧类别的变化，如果太长了，就需要最后几个滚动左侧scroll的位置，让它显示出来
		categoryActive(newValue,oldValue){
			var _this=this
			// 判断左侧一级列表是否需要滚动
			let query=uni.createSelectorQuery();
			query.select('.nav-left').fields({
				size:true,
				scrollOffset:true
			},res=>{
				console.log(res.scrollTop)
				if(	newValue>oldValue 
					&& _this.heightPX-_this.leftItemHeight*newValue-_this.leftItemHeight < 2*_this.leftItemHeight
				){
					// 左侧一级菜单需要向下滚动,获取当前滚动值，然后加上一个分类的高度即可
					_this.scrollLeftTop=res.scrollTop+_this.leftItemHeight
				}
				if(	newValue<oldValue && _this.leftItemHeight*newValue<res.scrollTop){
					// 左侧一级菜单需要向上滚动
					_this.scrollLeftTop=res.scrollTop-_this.leftItemHeight
				}
			}).exec()
		}
	},
	computed:{
		heightPX(){
			//联动区域的总高度，转化为px
			return this.height*(this.scaleWidth/750)
		}
	}
};
</script>

<style lang="scss">
	page{
		background-color: #F6F5EC;
		background: #F6F5EC;
	}
.header{
	width: 100%;
	height: 150rpx;
	background-color: #9C4B00;
	text-align: center;
	line-height: 150rpx;
}
.footer{
	width: 100%;
	height: 100rpx;
	background-color: red;
	text-align: center;
}
.page-body {
	display: flex;
	background: #fff;
	overflow: hidden;
}

.nav {
	display: flex;
	width: 100%;
	// height: 100%;
}

.nav-left {
	width: 25%;
	background: #fafafa;
}

.nav-left-item {
	height: 100rpx;
	font-size: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.nav-right {
	width: 75%;
}
.box {
	display: block;
	overflow: hidden;
	border-bottom: 20upx solid #f3f3f3;
	/* min-height: 100vh; */
	/*若您的子分类过少想使得每个子分类占满屏请放开上边注视 */
}
.box:last-child {
	border: none;
	min-height: 85vh;
	/* 这个值需要根据页面最后一个分类的数据和联动体占据页面多少来给定了 */
}
.nav-right-item {
	width: 40%;
	height: 220upx;
	float: left;
	text-align: center;
	padding: 11upx;
	font-size: 28upx;
	background: #fff;
}

.nav-right-item image {
	width: 150upx;
	height: 150upx;
	border-radius: 30rpx;
    box-shadow: 5rpx 8rpx 8rpx 0 rgba(0.1, 0.1, 0.1, 0.2);
}

.active {
	color: #9C4B00;
	background: #fff;
	border-right: 0;
}
::-webkit-scrollbar {
	/*取消小程序的默认导航条样式*/
	width: 0;
	height: 0;
	color: transparent;
}
</style>

