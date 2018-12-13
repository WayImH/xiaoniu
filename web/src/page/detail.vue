<template>
	<div class="detail">
		<header1></header1>
		<div class="photo">
			<img :src="obj.goodsImg"/>
		</div>
		<div class="info">
			<div>
				名称：{{obj.goodsName}}
			</div>
			<div>
				价格：￥{{obj.goodsPrice}}
			</div>
			<div>
				颜色：{{obj.goodsColor}}
			</div>
			<div class="count">
				数量：
				<div class="count_btn">
					<span class="left_btn" @click="jian()">-</span>
					<input type="text"  v-model="count" />
					<span class="right_btn" @click="jia()">+</span>
				</div>
			</div>
		</div>
		<div class="content">
			<p>
				{{obj.goodsInfo}}
			</p>
		</div>
		
		<footer>
			<div class="total">
				合计：￥{{obj.goodsPrice*count}}
			</div>
			<div class="save" @click="fav()">
				{{favMsg}}
			</div>
			<div class="pay" @click="jumpOrder()">
				立即购买
			</div>
		</footer>
	</div>
</template>

<script>
export default{
	data(){
		return {
			obj:{},
			count:1,
			favMsg:"加入收藏"
		}
	},
	async created(){
		//首页要把 list页传过来的id获取到（编程式的获取）
		//通过vue实例上面的 路由对象 来获取到 查询字符串
		console.log(this.$route.query.id) //5baf432e08dabc2cac61c509
		var res = await this.$http.get("/detail?id="+this.$route.query.id)

		this.obj = res.data

		var fav = {
			userName:localStorage.getItem("userName"),
			goodsId:this.obj._id
		}
		this.$http.post("/testFav",fav).then(res=>{
			console.log(res)
			this.favMsg = res.data
		})
	},
	methods:{
		jia(){
			if(this.count < this.obj.goodsNum){
				this.count++
			}
		},
		jian(){
			if(this.count>1){
				this.count--
			}
		},
		jumpOrder(){
			//1，要把当前这件商品 整理成一个订单
			var order = {
				userName:localStorage.getItem("userName"),
				goodsName:this.obj.goodsName,
				goodsColor:this.obj.goodsColor,
				goodsCount:this.count,
				goodsPrice:this.obj.goodsPrice,
				createTime:new Date()
			}

			if(localStorage.getItem("userName")){
				//2.把这个订单发给 服务器 （由服务器把这个订单写到 数据库的订单表中）
				this.$http.post("/order",order).then(res=>{
					console.log(res)
					//3.跳转到订单页
				    this.$router.push("/order")
				})
			}else{
				 this.$router.push("/login")
			}
		},
		fav(){
			var fav = {
					userName:localStorage.getItem("userName"),
					goodsId:this.obj._id
				}
			
			if(this.favMsg == "已收藏"){
				this.$http.post("/rmFav",fav).then(res=>{
					console.log(res)
				    this.favMsg = "加入收藏"
				})
			}else{
				this.$http.post("/fav",fav).then(res=>{
					console.log(res)
					//3.跳转到订单页
				   alert("收藏成功")
				   this.favMsg = "已收藏"
				})
			}
	
		}
	}
}
</script>
<style scoped>
.detail { font-size: 0.3rem}
.photo img { width: 100%; height: auto;}	
.info{ border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding:0.2rem 0.3rem;}
.info > div { height: 0.5rem; display: flex; align-items: center;}
.count_btn { display: flex;}
.count_btn span { border: 1px solid #ccc; width: 0.34rem; height: 0.34rem; display: flex; justify-content: center; align-items: center;}
.count_btn .left_btn { border-radius: 6px 0 0 6px;}
.count_btn .right_btn { border-radius: 0 6px 6px 0;}
.count_btn input { width: 0.34rem; border: 1px solid #ccc; text-align: center;}
.content { margin: 20px; margin-bottom: 1.2rem;}
.content p { font-size: 0.26rem; line-height: 0.4rem; text-indent: 2em;}
footer { display: flex; position:  fixed; bottom: 0 ; left: 0; width: 100%;}
footer div { display: flex; align-items: center; height:1rem;}
.total { width: 50%; padding-left: 0.3rem; background: #eee; color: #F9080E;}
.save { width: 20%; justify-content: center; background:#eeaa00;color: #fff; font-size: 0.26rem;}
.pay { width: 30%; justify-content: center; background: #FE4241;color: #fff;font-size: 0.26rem;}
</style>