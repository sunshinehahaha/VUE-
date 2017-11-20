<template>
	<div class="detail">
		<div class="top" v-if="staticData!=null||dynamicData!=null">
			<div v-if="staticData.type!=null||dynamicData.type!=null">
				<div v-if="staticData.type==='global_deal'||dynamicData.type==='global_deal'">
					<div class="page">
						<span>
							<router-link to="/"><i class="iconfont">&#xe518;</i>
							</router-link>
						</span>
						<span>{{staticData.short_name}}</span>
						<span>
							<router-link to="/"><i class="iconfont">&#xe6e4;</i></router-link>
						</span>
					</div>
					<img :src="staticData.image_url_set.dx_image['800']"/>
					<span class="price" v-if="dynamicData!=null">￥{{dynamicData.jumei_price}}</span>
					<span class="market_price" v-if="dynamicData!=null">￥{{dynamicData.market_price}}</span>

					<span v-if="dynamicData.product_detail_price_text.title!=null">{{dynamicData.product_detail_price_text.title}}</span>

					<p class="fen_qi">{{dynamicData.fen_qi.sale_msg}}</p>
					<p class="text">{{dynamicData.buyer_number_text}}</p>
					<div class="info">
						<span class="ziying">{{staticData.special_tags.jm_owner}}</span>
						<span>{{staticData.name}}</span>
					</div>
					<div class="cart" @click="save(staticData.short_name,dynamicData.jumei_price,staticData.image_url_set.dx_image['800'])">加入购物车</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"detail-comp",
		data:function(){
			return {
				staticData:null,
				dynamicData:null,
			}
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			getData:function(){
				var that = this;
				if(this.$route.params.ftype==='global_deal'){
					axios.get(`/product/ajaxStaticDetail?item_id=${this.$route.params.fid}&type=global_deal`)
					.then(function(res){
						that.staticData = res.data.data;
					});

					axios.get(`/product/ajaxDynamicDetail?item_id=${this.$route.params.fid}&type=global_deal`)
					.then(function(res){
						console.log(res);
						that.dynamicData = res.data.data.result;
					})
				}
			},
			save:function(name,price,img){
				var that = this;
				axios.post('/api/saveGoods', {
					goods_name: name,
					price: price,
					goods_img:img
				})
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						alert(res.data.message);
						that.$router.push('/my');
						return;
					}
					alert("添加成功");
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	}
</script>
<style scoped>
	img{
		width:100%;
	}
	.page{
		display: flex;
		justify-content: space-between;
		height:0.3rem;
		line-height: 0.3rem;
		border-bottom: 1px solid #eee;
	}
	.page span:first-of-type{
		padding-left:0.1rem;
	}
	.page span:last-of-type{
		padding-right:0.1rem;
	}
	.price{
		padding-left:0.13rem;
		font-size:16px;
		color:#fe4070;
	}
	.market_price{
		text-decoration: line-through;
	}
	.fen_qi{
		padding-left:0.1rem;
		color:#fe4070;
	}
	.text{
		padding-left:0.13rem;
	}
	.ziying{
		padding-left:0.13rem;
		color:#fe4070;
	}
	.info{
		margin-top:0.1rem;
		border-top:1px solid #eee;
		padding-top:0.05rem;
		line-height: 0.14rem;
		padding-left:0.13rem;
	}
	a{
		text-decoration: none;
		color:#333;
	}
	.cart{
		/*display:inline-block;*/
		width:2rem;
		height:0.5rem;
		background: #fd578d;
		color: #fff;
		font-size:20px;
		border-radius: 0.5rem;
		text-align: center;
		margin:0.3rem auto;
		line-height: 0.5rem;
	}
</style>