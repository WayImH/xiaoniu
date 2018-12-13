<template>
	<div class="reg">
		<div class="logo"><img src="../assets/logo.png"/></div>
		<div class="reg_centent">
			<h2>用户登录</h2>
			<div>
				<div>
					<label for="userName">用户名</label>
					<input type="text" id="userName" v-model="obj.userName" placeholder="请输入..." />
				</div>
				<div>
					<label for="pwd">密码</label>
					<input type="text" id="pwd" v-model="obj.pwd" placeholder="请输入..." />
				</div>
			</div>
			<div class="btn">
				<button class="sub" @click="submit()">登录</button>
				<button class="res">重置</button>
			</div>
			<div class="reg">
				<router-link to="/reg">没有账号</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{
				userName:"",
				pwd:""
			}
		}
	},
	methods:{
		submit(){
			this.$http.post("/login",this.obj).then(res=>{
				console.log(res)
				if(res.data.code == 1){
					localStorage.setItem("userName",this.obj.userName)
					this.$router.push("/")
				}else{
					alert(res.data.msg)
				}
			})
		}
	}
}
</script>
<style scoped>
.logo { text-align: center; margin-top: 1rem; 
margin-bottom:0.4rem;}
.logo img { width: 70%; height: auto;}
.reg_centent h2 { text-align: center; color: #555;
 font-weight: normal; margin-bottom:0.2rem;
 font-size: 0.4rem;}
.reg_centent div div { border-top: 1px solid #eee; 
height: 0.9rem; display:flex; align-items: center;
 margin: 0px 50px; font-size:0.4rem;}
.reg_centent label { width:2rem; text-align: center; }
.reg_centent input { border: none; height: 0.4rem;
font-size: 0.28rem;outline: none;}
.btn { display: flex; justify-content: center;}
.btn button { margin: 0.1rem; border: none;  
color: #fff; border-radius: 4px;
 width:1.4rem; height: .9rem; font-size: .4rem}
.btn .sub { background: #16a3ff;}
.btn .res { background: #fe4241;}
.reg { text-align: center; margin-top: 10px; 
color: #555; font-size: 0.3rem;}
.reg a{ text-decoration: none;color: #555;}
</style>