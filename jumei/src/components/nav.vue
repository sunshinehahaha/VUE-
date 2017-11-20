<template>
	<div id="nav">
		<ul>
			<li v-for="item in info">{{item}}</li>
		</ul>
	</div>



</template>
<script>
	export default{
		name:"nav-comp",
		data:function(){
			return {
				info:['首页','极速免税','母婴','轻奢','名品特卖']
			}
		},
		mounted:function(){
			this.scroll();
			
		},
		methods:{
			scroll:function(){
				 // var count = 0, timer = null; 
		        // var oldTop = $(window).scrollTop(); //为了方便起见，使用jquery或者zepto框架
		       // var newTop = $(window).scrollTop();
		       // console.log(oldTop);
		      // setInterval(function(){
		      	// console.log($('#nav').scrollTop());
		      	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		      	console.log(scrollTop);
		      // },1000);

			}
		}
		
	}
</script>
<style scoped>
	#nav{
		height:0.52rem;
		color:#000;
	}
	#nav ul{
		white-space: nowrap;
		width:100%;
		overflow-x: auto;
	}
	#nav ul li{
		padding:0 0.3rem;
		height: 0.52rem;
		line-height: 0.52rem;
		display: inline-block;
	}
	

</style>