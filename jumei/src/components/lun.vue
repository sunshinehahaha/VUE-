<template>
	<div class="lun">
		<mt-swipe :auto="3000" :show-indicators="false" >
		  <mt-swipe-item v-for="item in imgs">
			<img :src="item"/>
		  </mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"lun-comp",
		data:function(){
			return {
					imgs:['./../static/images/1.jpeg','./../static/images/2.jpeg','./../static/images/3.jpeg']
			}
		
		},
		methods:{

		}
			
	}
</script>
<style scoped>
	.lun{
		height:162px;
		width:100%;
		/*margin-bottom:0.45rem;*/
		/*background: #f00;*/
	}
	.lun img{
		width:100%;
		height: 100%;
	}
	/*.lun p{
		height:0.45rem;
		line-height: 0.45rem;
		text-align:center;
		color:#fe409e;
	}*/

</style>