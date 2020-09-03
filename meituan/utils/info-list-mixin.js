
export default {
	data(){
		return {
			reqParam: {
				iconId: '',
				classifyIds: '',
				state: '0',
			},
			typeList: [],  // 工种分类列表
			lists: [],
			statusNum: -1,  // 装填
		}
	},
	onLoad({id}) {
		this.id = id;
		this.getTypeList(id);
		
		// 请求列表
		this.reqParam.iconId = id;
		this.getList();
	},
	methods:{
		// 查询二级分类列表 - 工种
		getTypeList(){
			this.$http.getSecondClassifyList(this.id).then(res => {
				if( res.code == 1 ){
					this.typeList = res.data;
				}
			})
		},
		// 查询列表
		getList() {
			this.loadStatus = 'loading';
			let param = {
				...this.reqParam,
				pageNo: this.pageNo,
				pageSize: this.pageSize
			}
			this.$http.getInfoList(param).then(res => {
				if(res.code == 1){
					this.lists = this.lists.concat(res.data.records);
					this.total = res.data.total;
				}
			})
		},
	}
}