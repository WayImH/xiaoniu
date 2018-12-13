<template>
	<header>
		<div class="logo">
			<img src="../assets/logo.png"/>
		</div>
		<div class="icon">
			<div>
				<img src="../assets/star.png"/>
			</div>
			<div>
				<img src="../assets/user.png"/>
			</div>
		</div>
	</header>
</template>

<script>
</script>

<style scoped>
header { height: 1rem; background: #ccc; display: flex; justify-content: space-between;}
.logo { width: 35%; height: 1rem; display: flex;align-items: center;}
.logo img { width: 100%;}
.icon { display: flex; height: 1rem; display: flex;align-items: center;}
.icon div { width: 1rem; display: flex;align-items: center;}
.icon div img { width: 70%; height: auto;}
</style>