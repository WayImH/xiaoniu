<template>
	<header>
		<div class="back" onclick="history.back()"><img src="../assets/back.png"/></div>
		<div class="title">标题</div>	
	</header>
</template>

<!--scope 作用域，当前的样式只对当前的组件生效
	并不会影响到别的组件
-->
<style scoped>
header { height: 60px; background: #f9080e; color: #fff;display: flex; position: relative;}	
.back { width: 60px; display: flex; justify-content: center; align-items: center; position: absolute; 
top: 14px; left: 0;}
.back img { width: 30%;}
.title { flex:1;display: flex; justify-content: center; align-items: center; font-size: 20px; }
</style>