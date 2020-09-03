<template>
	<view>
		<view class="header">
			<view class="cityChange" @tap="$helper.to('/pages/views/index/citySearch/citySearch')">郑州</view>
			<input class="searchInput" type="text" value="" placeholder="请输入商家名 品类或者商圈..." />
			<view class="user" @tap="$helper.to('/pages/views/login/userLogin/userLogin')">
				<image src="../../../static/image/index/user.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		}
	}
</script>

<style>
	.header {
		width: 100%;
		height: 101rpx;
		display: flex;
		align-items: center;
		background-color:#ffcc00 ;
	}

	.header .cityChange {
		color: rgb(34, 34, 34);
		font-size: 28rpx;
		margin-left: 37rpx;
		margin-right: 57rpx;
	}
	
	.header .searchInput{
		width: 501.2rpx;
		height: 64rpx;
		border: none;
		outline: none;
		background-color: rgb(255, 255, 255);;
		color: rgb(153, 153, 153);
		text-indent: 1rem;
		font-size: 28rpx;
		border-radius: 18rpx;
	}
	
	.header .user{
		width: 48rpx;
		height: 48rpx;
		margin-left: 23rpx;
	}
	
	.header .user image{
		width: 48rpx;
		height: 48rpx;
	}
</style>
