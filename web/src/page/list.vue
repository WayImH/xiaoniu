<template>
	<div class="list">
		<header2></header2>
		<div class="content">
			<router-link :to="{path:'/detail',query:{id:item._id}}" v-for="item in list" :key="item._id">
				<img :src="item.goodsImg" />
			</router-link>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
export default{
	data(){
		return {
			list:[]
		}
	},
	//在页面加载时，就去请求数据，在Vue中有一个钩子函数 created(),它会在vue实例对象初始化完成时，执行
	created(){
		this.$http.get("/goods").then(res=>{
			console.log(res)
			this.list = res.data
		})
	}
}
</script>

<style scoped>
img { width: 100%; height: auto;}
</style>