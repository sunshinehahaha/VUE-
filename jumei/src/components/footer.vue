<template>
	<div class="ft">
		<ul>
			<router-link to="/">
				<li><i class="iconfont">&#xe605;</i></li>
			</router-link>
			<li><i class="iconfont">&#xe77c;</i></li>
			<router-link to="/cart">
				<li><i class="iconfont">&#xe60a;</i></li>
			</router-link>
			<router-link to="/my">
				<li><i class="iconfont">&#xe644;</i></li>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"footer-comp"
	}
</script>
<style scoped>
	.ft{
		height:0.4rem;
		border-top: 1px solid #ccc;
		background: #fff;
		padding:0 0.2rem;
		line-height: 0.4rem;
	}
	.ft ul{
		display: flex;
		justify-content: space-between;
	}
	.ft ul li{
		display:inline-block;
	}
	.iconfont{
		font-size:22px;
	}
</style>