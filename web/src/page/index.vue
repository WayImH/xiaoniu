<template>
	<div>
		<header2></header2>
		<div class="banner">
			<img src="../assets/home/sw03.901a267.png"/>
		</div>
		<div class="nav">
			<div>
				<router-link to="/list">
					<div><img src="../assets/home/main_03.png"/></div>
					<p>
						整车热卖
					</p>
				</router-link>
			</div>
			<div>
				<router-link to="/">
					<div><img src="../assets/home/main_05.png"/></div>
					<p>热卖配件</p>
				</router-link>
			</div>
			<div>
				<router-link to="/">
					<div><img src="../assets/home/main_07.png"/></div>
					<p>线下门店</p>
				</router-link>
			</div>
			<div>
				<router-link to="/">
					<div><img src="../assets/home/main_09.png"/></div>
					<p>文化调边</p>
				</router-link>
			</div>
		</div>
		<div class="hot">
			<h2>整车热卖</h2>
			<div>
				<img src="../assets/home/n1s.jpg"/>
				<img src="../assets/home/n1s01.jpg"/>
				<img src="../assets/home/n1s02.jpg"/>
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
</script>

	

<style scoped>
img { width: 100%; height: auto;}
.nav { background: #eee; height: 1.2rem; display: flex; justify-content: space-around; padding: 10px;}
.nav div {  display: flex; flex-direction: column;}
.nav div a{
	display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
}
.nav div a div { width:30%;margin-top: 0.1rem;}
.nav div p { color: #666; font-size: 0.28rem; margin-top: 0.05rem; }
/*.nav div p a{text-decoration: none; color: #666;}*/
.hot h2 { font-size: 0.4rem; color: #f30; margin: 16px 0;}
</style>