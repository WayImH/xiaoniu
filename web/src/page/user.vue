<template>
	<div class="user">
		<header1 title="用户中心"></header1>
		<div class="user_content">
			<div class="user_info">
				<div>
					<div>
						<div><img src="../assets/home/main_03.png"/></div>
						<div>qq</div>
					</div>
				</div>
				<button>退出</button>
			</div>
			<div>
				<div>电话号码</div>
				<div>1389067893</div>
			</div>
			<div @click="$router.push('/fav')">
				<div>收藏夹</div>
				<div>11 > </div>
			</div>
			<div @click="$router.push('/order')">
				<div>单订列表</div>
				<div>7 > </div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.user_content > div{
	display: flex; justify-content: space-between; border-bottom: 1px solid #ddd;
	line-height: 1rem; font-size: 0.32rem; padding: 0 0.2rem;
}
.user_content .user_info { padding: 0.3rem;}
.user_content .user_info div div { display: flex;}
.user_content .user_info div div img{ width: 1rem; height: 1rem; border-radius:0.5rem ;}
.user_content .user_info button { width: 1.5rem; border: none; height: 0.7rem; color: #333; background: #ddd; font-size: .3rem; }
</style>