<template>
	<view class="">
		<!-- 头部搜索 -->
		<header-search></header-search>
		<!-- 分类区域 -->
		<type-area></type-area>
		<!-- 猜你喜欢 -->
		<guess-like></guess-like>
	</view>
</template>

<script>
import headerSearch from "../../../components/mt-components/headerSearch/headerSearch.vue"
import typeArea from "../../../components/mt-components/typeArea/typeArea.vue"
import guessLike from "../../../components/mt-components/guessLike/guessLike.vue"
export default {
	components:{
		headerSearch,
		typeArea,
		guessLike
	}
};
</script>

<style lang="scss">

</style>
