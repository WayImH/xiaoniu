<template>
	<div class="order">
		<header1 title="订单"></header1>
		<div class="order-content">
			<!--key属性是vue的指令，作用是标注循环出的元素的唯一性-->
			<div v-for="item in list" :key="item._id">
				<div class="content-top">
					<div>订单编号：{{item._id}}</div>
					<div>已支付</div>
				</div>
				<div class="content-md">
					<div class="md-pic">
						<img src="../assets/home/n1s01.jpg"/>
					</div>
					<div class="md-info">
						<p>{{item.goodsName}}</p>
						<p>颜色：{{item.goodsColor}}</p>
						<p>数量：{{item.goodsCount}}</p>
					</div>
					<div class="md-pay">
						￥{{item.goodsPrice}}.00
					</div>
				</div>
				<div class="content-bt">
					合计：<span>￥{{item.goodsPrice*item.goodsCount}}.00</span>（含运费0.00）
				</div>
			</div>
		
	
		</div>
		
		
		
		<myfooter></myfooter>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[]
		}
	},
	 created(){
	 	if(localStorage.getItem("userName")){
	 		this.$http.get("/order?userName="+localStorage.getItem("userName")).then(res=>{
		 		console.log(res)
		 		this.list = res.data
		 	})
	 	}else{
	 		this.$router.push("/login")
	 	}
	 	
	 }
}
</script>

<style>
.order { font-size: 0.3rem;}
.content-top { display: flex; justify-content: space-between; padding: 0.2rem;}
.content-md { display: flex; background: #eee;}
.content-md > div { flex: 1;}
.md-pic img{ width: 100%; height: auto; vertical-align: top;}
.md-info { padding: 0.2rem;}
.md-info p{ line-height: 0.5rem;}
.md-pay { display: flex; justify-content: center; align-items: center; color: #F9080E;}
.content-bt { background: #eee; padding: 0.2rem; border-top:0.04rem solid #fff; display: flex; justify-content: flex-end;}
.content-bt span { color: #F9080E;}

.order-content { margin-bottom: 1.2rem;}
</style>