<template>
	<view>
		<view class="box">
			<view class="type-item" v-for="n in 10" :key="n">
				<view style="text-align: center;">
					<view class="img"></view>
					<text>{{type}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["type"],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box{
	width: 750rpx;
	height: 324rpx;
	display: flex;
	flex-wrap: wrap;
}
.type-item{
	width: 150rpx;
	height: 162rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.img{
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	margin-bottom: 14rpx;
	background-color: #007AFF;
}
</style>
