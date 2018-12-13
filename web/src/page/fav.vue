<template>
	<div class="order">
		<header1 title="收藏"></header1>
		<div class="order-content">
			<div>
				<div class="content-md">
					<div class="md-pic">
						<img src="../assets/home/n1s01.jpg"/>
					</div>
					<div class="md-info">
						<p>M1青春版</p>
						<p>颜色：白色</p>
						<p>数量：1</p>
					</div>
					<div class="md-pay">
						￥5699.00
					</div>
				</div>
			</div>
			
			<div>
				<div class="content-md">
					<div class="md-pic">
						<img src="../assets/home/n1s01.jpg"/>
					</div>
					<div class="md-info">
						<p>M1青春版</p>
						<p>颜色：白色</p>
						<p>数量：1</p>
					</div>
					<div class="md-pay">
						￥5699.00
					</div>
				</div>
			</div>
			
			
			<div>
				<div class="content-md">
					<div class="md-pic">
						<img src="../assets/home/n1s01.jpg"/>
					</div>
					<div class="md-info">
						<p>M1青春版</p>
						<p>颜色：白色</p>
						<p>数量：1</p>
					</div>
					<div class="md-pay">
						￥5699.00
					</div>
				</div>
			</div>
		</div>
		
		
		
		<myfooter></myfooter>
	</div>
</template>

<script>
export default {
	async created(){
		var res = await this.$http.get("/fav?userName="+localStorage.getItem("userName"))
		console.log(res)
	}
}
</script>

<style scoped>
.order { font-size: 0.3rem; background: #eee; height: 100%;}
.content-md { display: flex;}
.content-md > div { flex: 1;}
.md-pic { padding: 0.15rem;}
.md-pic img{ width: 100%; height: auto; vertical-align: top;}
.md-info { padding: 0.2rem;}
.md-info p{ line-height: 0.5rem;}
.md-pay { display: flex; justify-content: center; align-items: center; color: #F9080E;}


.order-content { margin-bottom: 1.2rem;}
.order-content > div { margin: 0.2rem 0;
	 background: #fff; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;}
</style>