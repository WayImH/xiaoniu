<template>
	<div class="reg">
		<div class="logo"><img src="../assets/logo.png"/></div>
		<div class="reg_centent">
			<h2>用户注册</h2>
			<div>
				<div style="margin-right:0 ;">
					<label for="userName">用户名</label>
					<input type="text" v-bind:class="[flag?text1:'']" id="userName" @input="testUser()" v-model="obj.userName" placeholder="请输入..." />
					<div style="font-size: 0.2rem; margin: 0; padding: 0;">
						{{userMsg}}
					</div>
				</div>
				<div>
					<label for="pwd">密码</label>
					<input type="text" id="pwd" v-model="obj.pwd" placeholder="请输入..." />
				</div>
				<div>
					<label for="pwds">确认密码</label>
					<input type="text" id="pwds" v-model="obj.pwds" placeholder="请输入..." />
				</div>
				<div>
					<label for="phone">手机号</label>
					<input type="text" id="phone" v-model="obj.phone" placeholder="请输入..." />
				</div>
			</div>
			<div class="btn">
				<button class="sub" @click="submit()">提交</button>
				<button class="res" v-on:click="reset()">重置</button>
			</div>
			<div class="login">
				<router-link to="/login">我是账号</router-link>
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
				pwd:"",
				pwds:"",
				phone:""
			},
			timer:null,
			userMsg:"",
			flag:false,
			text1:"text"
		}
	},
	methods:{
		submit(){
			this.$http.post("/reg",this.obj).then(res=>{
				//在这里 能拿到 服务器发回来的信息
				console.log(res)
				//router-link, 编程式的 路由切换
				this.$router.push("/login")
			})
		},
		testUser(){
			//我写一个定时器，你每一次输入后，我过一秒钟再发请求
			clearTimeout(this.timer)
			this.timer = setTimeout(()=>{
				//console.log("我响应了")
				//向服务器发请求，把当前的用户名给带着发给http服务器
				this.$http.post("/testUser",{userName:this.obj.userName}).then(res=>{
					console.log(res.data) // {code:1,msg:"..."}
					this.userMsg = res.data.msg
					if(res.data.code){
						this.flag = false
					}else{
						this.flag = true
					}
				})
			},1000)
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
.reg_centent label { width:2rem; text-align: center; color: #555; }
.reg_centent input { border: none; height: 0.4rem;
font-size: 0.28rem;outline: none;}

.btn { display: flex; justify-content: center;}
.btn button { margin: 0.1rem; border: none;  
color: #fff; border-radius: 4px;
 width:1.4rem; height: .9rem; font-size: .4rem}
.btn .sub { background: #16a3ff;}
.btn .res { background: #fe4241;}
.login { text-align: center; margin-top: 10px; 
color: #555; font-size: 0.3rem;}
.login a{text-decoration: none;color: #555; }
.reg_centent .text {
	border:1px solid #f00;
	box-shadow: 0px 0px 8px 0px #f00;
}

</style>