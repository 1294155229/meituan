<script>
	import Vue from 'vue';
	import { SET_USER_TOKEN } from '@/store/mutations.js'
	export default {
		globalData:{
			status: 0,  // 0表示在首页点击发布按钮  1表示在个人中心点击发布按钮
		},
		onLaunch: function() {
			// #ifdef APP-PLUS
			this.getVersion();
			// #endif
			
			// 判断登录状态
			if(uni.getStorageSync("user_token")){
				this.$store.commit(SET_USER_TOKEN, uni.getStorageSync("user_token"));
				this.$store.dispatch('queryUserInfo');
			}else{
				console.log('，未登录哦');
			}
			
			
			//状态栏高度
			uni.getSystemInfo({
				success: function(e) {
					let StatusBar = e.statusBarHeight;
					let CustomBar = 0;
					Vue.prototype.StatusBar = StatusBar;
					// #ifndef MP
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 44;
						CustomBar = e.statusBarHeight + 44;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
						CustomBar = e.statusBarHeight + 45;
					}
					// #endif
					// #ifdef MP-WEIXIN
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif
					// #ifdef MP-ALIPAY
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					CustomBar = e.statusBarHeight + e.titleBarHeight;
					
					// #endif
			
					// console.log('e=====>')
					let ScreenHeight = e.screenHeight;
					let WindowHeight = e.windowHeight;
					//全局混入  设置全局变量 全局方法
					//2019.9.7 see:https://juejin.im/post/5b7bb9b56fb9a019f671266a
					Vue.mixin({
						data() {
							return {
								CustomBar,
								StatusBar,
								ScreenHeight,
								WindowHeight
							};
						}
					});
				}
			});
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			// #ifdef APP-PLUS
			getVersion() {
				let version = 1.0;
				let type = 1;
				if (this.$systemType == 'ios') {
					type = 2;
				}
				console.log("版本更新看手机系统-------", this.$systemType);
				plus.runtime.getProperty(plus.runtime.appid, inf => {
					version = inf.version;
					console.log("版本号---------", inf.version);
					this.checkUpdate(type, version);
				});
			},
			checkUpdate(type, version) {
				console.log("type: " + type);
				console.log("version: " + version);
				let _this = this;
				let tempData = {
					type, version
				}
				this.$http.checkUpdate(tempData).then(res => {
					if (res.code == 1) {
						uni.showModal({
							title: '版本提示',
							content: '发现新版本,是否更新？',
							success: function(res) {
								if (res.confirm) {
									_this.$upDateApp();
								} else if (res.cancel) {
									// if(_this.$systemType == 'ios'){
									// console.log('ios用户点击取消');
									// const threadClass = plus.ios.importClass("NSThread");
									// const mainThread = plus.ios.invoke(threadClass, "mainThread");
									// plus.ios.invoke(mainThread, "exit");
									//上面的不行就用下面的
									// plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
									// } else{
									// console.log('安卓用户点击取消');
									// plus.runtime.quit();
									// }
								}
							}
						});
					}
				});
			},
			// #endif
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	/* 引入uview-ui的样式库 */
	@import "@/uview-ui/index.scss";
	
	@import "@/static/css/common.scss";
	
	@keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
</style>
