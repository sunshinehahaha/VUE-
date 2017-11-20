<template>
	<div class="list">
	 <!-- {{$store.state.data1}} -->
	 <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
		<ul>

			<li v-for="item in $store.state.data1">
				<router-link :to="{name:'Detail',params:{fid:item.item_id,ftype:item.type}}">

					<div v-if="item.type==='jmstore'">	
						<!-- <img  :src="item.image_url_set.main['800']">		 -->
						<img  v-lazy="item.image_url_set.main['800']">
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
		<!-- </mt-loadmore> -->
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"new-comp",
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
					 axios.get('/v1/deal/dealactlist?card_id=4057&page=1&page_key=1510549800&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj')
					 .then(function(res){
					 	// that.data1 = res.data.item_list;
					 	 that.$store.dispatch("setData", res.data.item_list);
					 })

					 .catch(function(error){
					 	console.log(error);
					 })
				},
				// loadBottom:function(){
			 //  // ...// load more data
				//   this.allLoaded = true;// if all data are loaded
				//   this.$refs.loadmore.onBottomLoaded();
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
		top:-1.1rem;
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

	image[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	}


</style>