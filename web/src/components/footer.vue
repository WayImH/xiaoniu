<template>
	<footer>
		<div>
			<router-link to="/">
				<div><img src="../assets/shop.png"/></div>
				<p>首页</p>
			</router-link>
		</div>
		<div>
			<router-link to="/list">
			<div><img src="../assets/server.png"/></div>
			<p>列表</p>
			</router-link>
		</div>
		<div>
			<router-link to="/order">
			<div><img src="../assets/order.png"/></div>
			<p>订单</p>
			</router-link>
		</div>
		<div>
			<router-link to="/user">
			<div><img src="../assets/my.png"/></div>
			<p>我的</p>
			</router-link>
		</div>
	</footer>
</template>
<style scoped>
footer { background: #000; height: 1.2rem; display: flex; justify-content: space-around; position: fixed; bottom: 0; left: 0; width: 100%;}
footer div {  display: flex; flex-direction: column; align-items: center; flex: 1;  }
footer div div { width:30%; text-align: center; margin-top: 0.1rem;}
footer div div img{ width:100%; height: auto;}
footer div p { color: #999; font-size: 0.28rem; margin-top: 0.05rem; }
footer div a { display: flex; width: 100%; height: 100%; justify-content: center; flex-direction: column; align-items: center;}
</style>