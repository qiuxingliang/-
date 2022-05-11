<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fd85faec-b502-4083-8fd2-195381f29705.jpg" class="img"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3c6c1b45-e52e-43cd-ae6e-27381e8f10d9.jpg" class="img"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/60d0ef78-1cbf-4d30-9a43-fc766f7919bd.jpg" class="img"></image> 
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"lunbo",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.carousel{
	margin: 15rpx 15rpx;
	/* margin-right: 120rpx; */
	/* padding: 10rpx; */
	width: 720rpx;
	background-color: #f6f5ec;
	/* background-color: #007AFF; */
	/* height: 530rpx; */
	/* height: 240px; */
}
.img{
	width: 100%;
	height: 100%;
}
</style>
