<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="rgb(240, 239, 237)" indicator-active-color="rgb(254, 140, 0)">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<type-item type="美食"></type-item>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<type-item type="美酒"></type-item>
					</view>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item> -->
			</swiper>
		</view>
	</view>
</template>

<script>
	import typeItem from "../typeItem/typeItem.vue"
	export default {
		components:{
			typeItem
		},
		data(){
			return{
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		}
		}
</script>

<style>
	.uni-margin-wrap {
		width:750rpx;
		background-color: #FFFFFF;
	}
	.swiper {
		height: 360rpx;
	}
	.swiper-item {
		display: block;
		height: 324rpx;
		/* line-height: 300rpx; */
		/* text-align: center; */
	}
</style>
