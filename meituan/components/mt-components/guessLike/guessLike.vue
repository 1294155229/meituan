<template>
	<view class="guessArea">
		<view class="header">猜你喜欢</view>
		<view class="shop">
			<view class="shop-item" v-for="n in 10" :key="n">
				<view class="img-box">
					<image src="../../../static/image/index/shop.jpg" mode=""></image>
				</view>
				<view class="shop-msg">
					<text class="shop-title">河南省中学游泳馆</text>
					<text class="shop-add">[科技广场]省实验中学</text>
					<view class="price-box">
						<view>
							<text class="now-price">39.9元</text>
							<text class="shop-price">门市价48元</text>
						</view>
						<text class="sale">已售11598</text>
					</view>
				</view>
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
		mounted() {
			console.log("=========");
			this.getMsg()
		},
		methods: {
			getMsg() {
				console.log("方法执行了")
				this.$http.getShopMsg().then(res => {
					console.log(res);
				})
			}
		}
	}
</script>

<style>
	.guessArea {
		width: 750rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
	}

	.header {
		width: 750rpx;
		height: 34rpx;
		box-sizing: content-box;
		color: rgb(51, 51, 51);
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		font-size: 34rpx;
		font-weight: 400;
	}

	.shop {
		width: 100%;
		box-sizing: border-box;
		padding-left: 20rpx;
	}

	.shop-item {
		width: 730rpx;
		height: 204rpx;
		border-bottom: 1rpx solid rgb(221, 216, 206);
		display: flex;
		align-items: center;
	}

	.img-box {
		width: 246rpx;
		height: 164rpx;
		margin-right: 15rpx;
	}

	.img-box image {
		width: 246rpx;
		height: 164rpx;
	}

	.shop-msg {
		display: flex;
		flex-direction: column;
	}

	.price-box {
		display: flex;
		width: 440rpx;
		height: 36rpx;
		align-items: center;
		justify-content: space-between;
	}

	.shop-title {
		height: 30rpx;
		margin-top: 10rpx;
		margin-bottom: 12rpx;
		color: rgb(51, 51, 51);
		font-size: 30rpx;
		font-weight: 400
	}

	.shop-add {
		height: 68rpx;
		margin-bottom: 16rpx;
		color: rgb(102, 102, 102);
		font-size: 24rpx;
		font-weight: 400;
	}

	.now-price {
		color: rgb(255, 102, 0);
		font-size: 36rpx;
		font-weight: 400;
	}

	.shop-price,
	.sale {
		font-size: 24rpx;
		font-weight: 400;
		color: rgb(102, 102, 102);
	}
</style>
