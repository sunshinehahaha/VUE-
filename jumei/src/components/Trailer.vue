<template>
	<div class="list">
		<ul>
			<li v-for="item in data1">
				
				<router-link :to="{name:'Detail',params:{fid:item.item_id,ftype:item.type}}">

					<div v-if="item.type==='jmstore'">	
							<img  :src="item.image_url_set.main['800']">		
					</div>
					<div v-else>
						<img :src="item.image_url_set.dx_image.url['800']">
						<div class="detail">
							<p>{{item.name}}</p>
							<span>￥
								<span class="pink">{{item.jumei_price}}</span>
							</span>
							<span class="old">￥{{item.market_price}}</span>
							<div class="buy-num">{{item.total_sales_number}}人已购买</div>
						</div>
					</div>
				</router-link>


			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"trailer-comp",
		data:function(){
			return {
				data1:[],
			}
		},
		mounted:function(){
			this.getData();
		},
		methods:{
				getData:function(){
					var that = this;
					 axios.get('/v1/activity/activitylist?platform=wap&client_v=1.0&user_tag_id=0&source=touch&request_from_page=home&site=bj&card_id=1801&card_ids=1801&page=1&item_per_page=30&page_key=')
					 .then(function(res){
					 	console.log(res);
					 	that.data1 = res.data.item_list;
					 })

					 .catch(function(error){
					 	console.log(error);
					 })
				},
		}
	}
</script>
<style scoped>
	img{
		width:100%;
		height:100%;
		margin-bottom:0.08rem;
	}
	.detail{
		position: relative;
		right:0;
		top:-1.3rem;
		width:50%;
		left:50%;
	}
	.detail span:first-of-type{
		color:#fe4070;
	}
	.detail .pink{
		font-size:14px;
	}
	.detail .old{
		text-decoration: line-through;
	}
	li div{
		height: 1.12rem;
	}
	a{
		text-decoration: none;
		color: #333;
	}
</style>