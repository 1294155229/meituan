// 组装模块并导出store的地方
import Vue from 'vue'
import Vuex from 'vuex'
import commonAPI from '@/common/luchApi/modules/userAPI.js'
Vue.use(Vuex)

import {
	SET_USER_INFO,
	SET_USER_TOKEN,
	ClEAR_STORAGE_STATE,
	IS_LOGIN
	
} from '@/store/mutations.js'

const store = new Vuex.Store({
	state: {
		userInfo: {
			nickname: '登录/注册',
		},
		userToken: null,
	},
	// 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤等；我们可以在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。例如：
	getters: {
		// 是否登录
		[IS_LOGIN]: state => (state.userToken && state.userInfo && state.userInfo.id) ? true : false,
	},
	mutations: {
		[SET_USER_INFO](state, user_info) {
			if(user_info) {
				state.userInfo = user_info
			} else {
				state.userInfo = {
					nickname: '登录/注册',
					avatar:'http://47.92.70.20:39013/youxuegou/static/image/uplodImg/no_login.png'
				}
			}
		},
		[SET_USER_TOKEN](state, user_token) {
			state.userToken = user_token
		},
		[ClEAR_STORAGE_STATE](state) {
			state.userInfo = {
				nickname: '登录/注册',
				avatar:'http://47.92.70.20:39013/youxuegou/static/image/uplodImg/no_login.png'
			}
			state.userToken = null;
			state.num = 0;
			uni.setStorageSync('user_token', '');
		}
	},
	actions: {
		initUser({commit},userObj){
			return new Promise( (resolve, reject) => {
				if( userObj ){
					commit(SET_USER_TOKEN, userObj.token);
					commit(SET_USER_INFO, userObj.user);
					resolve({code:1});
				}else{
					commit(SET_USER_TOKEN, '');
					commit(SET_USER_INFO, null);
					resolve({code:0});
				}
			});
		 },
		// 获取用户信息
		async queryUserInfo({
			commit,
			state
		}) {
			const {
				code,
				data
			} = await commonAPI.getUserInfo()
			if (code === 1) {
				commit(SET_USER_INFO, data)
			} else if (code == 2) {
				commit(SET_USER_TOKEN, null)
			}
		}
	}
})

export default store;
