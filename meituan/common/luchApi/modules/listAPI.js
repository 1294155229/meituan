import http from "@/common/luchApi/index.js";
export default {
	/**
	 * 功能: 查询首页轮播图
	 */
	getBanner(){
		return http.get('/index/queryBanners');
	},
	
	getShopMsg(){
		console.log("我是封装的请求函数");
		return http.get("/api/meituan/list/goodsList.json",{
			"appkey":"1294155229_1580179765723"
		})
	}
	
}