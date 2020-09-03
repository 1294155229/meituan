import http from "@/common/luchApi/index.js";
export default {
	
	/**
	 * 功能: 用户注册
	 * @param {String} mobile  手机号码
	 * @param {String} password  密码
	 * @param {String} capture  验证码
	 */
	userRegister({mobile, password, capture}){
		return http.post('/user/userRegister', {
			phone: mobile, 
			password, 
			smsCode: capture
		})
	},
	
	/**
	 * 功能: 账号密码登录
	 * @param {String} mobile  用户手机号码
	 * @param {String} password  用户密码
	 */
	userLogin({ mobile, password}) {
		return http.post('/user/login', {
			phone: mobile,
			password: password
		});
	},

	/**
	 * 功能: 通过token查询用户信息
	 */
	getUserInfo() {
		return http.get('/user/userInfo');
	},


	/**
	 * @param {String} newPwd  新密码
	 * @param {String} newPwd2  确认新密码
	 * @param {String} oldPwd  旧密码
	 */
	changePwd({newPwd, newPwd2, oldPwd}) {
		return http.post('/user/changePwd', {
			newPwd,
			newPwd2,
			oldPwd
		});
	},
	
	/**
	 * 功能: 修改手机号码
	 * @param {String} mobile  原手机号
	 * @param {String} captcha  原验证码
	 * @param {String} newMobile  新手机号
	 * @param {String} newCaptcha  新验证码
	 */
	changePhone({mobile, captcha, newMobile, newCaptcha}){
		return http.post('/user/changeMobile', {
			mobile, 
			captcha,
			newMobile, 
			newCaptcha
		});
	},
	
	/**
	 * 功能: 获取意见反馈的反馈类型
	 */
	getFeedBackType(){
		return http.get('/feedback/getFeedBackType');
	},
	
	/**
	 * 功能: 意见反馈
	 * @param {String} content  反馈内容
	 * @param {String} feedbackTypes  反馈类型
	 * @param {String} image  反馈图片
	 * @param {String} contactWay  联系方式
	 */
	addFeedback({content, feedbackTypes, image, contactWay}){
		return http.post('/feedback/addFeedback', {
			content, 
			feedbackTypes, 
			image, 
			contactWay
		})
	},
	
	/**
	 * 功能: 关于我们
	 */
	getAboutUs(){
		return http.get('/instruction/queryAboutUs');
	}
}
