<template>
	<div id="cart">
		<p class="cartHead">购物车</p>
		<ul v-for="item in data">
			<li class="cb" @click="totalGoods"><input type="checkbox"></li>
			<li><img :src="item.goods_img"></li>
			<li class="cal">
				<p>{{item.goods_name}}</p>
				<span class="price">￥{{item.price}}</span>
			</li>
			<li @click="delInfo(item._id)">删除</li>
		</ul>
		<p class="cartFooter">
			<input type="checkbox" @click="allSelect" id="total">全选
			总价：<span id="totalPrice"></span>
		</p>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"cart-comp",
		data:function(){
			return {
				data:null,
				sum:0,
			}
		},
		mounted:function(){
			// var that = this;
			this.showGoods();

			},

			
		methods:{
			delInfo:function(id){
				var that = this;
				axios.post('/api/del',{
					id:id
				})
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						alert("删除失败");
						return;
					}

					alert("删除成功");
					that.showGoods();
					// location.reload(true);
				})
				.catch(function (error) {
					console.log(error);
				});

			},
			allSelect:function(e){
				var totalId = e.currentTarget;
				var that = this;
            	var checked = $(totalId).prop('checked');
            	console.log(checked);
            	if(checked==true){
            		that.sum = 0;
            		that.allPrice();
            	}else{
            		that.sum = 0;
            		$('#totalPrice').html("￥"+that.sum);
            	}
           		$('.cb').find('input').prop('checked', checked);

	        	$('.cb input').change(function(){
	        	 	var checkedCount = $('.cb input:checked').length;
            		var allCount = $('.cb input').length;
            		$('#total').prop('checked', checkedCount === allCount);

	        	})
			},
			totalGoods:function(e){
				var that = this;
				let temp;
				temp = e.currentTarget;
				if($(temp).find('input').prop('checked')===true){
					var total = $(temp).siblings('.cal').find('.price').html();
					total=parseInt(total.substr(1));
					that.sum+=total;
					$('#totalPrice').html("￥"+that.sum);
				}else{
					var total = $(temp).siblings('.cal').find('.price').html();
					total=parseInt(total.substr(1));
					that.sum-=total;
					$('#totalPrice').html("￥"+that.sum);
				}	

				$('.cb input').change(function(){
	        	 	var checkedCount = $('.cb input:checked').length;
            		var allCount = $('.cb input').length;
            		$('#total').prop('checked', checkedCount === allCount);

	        	})


			},
			allPrice:function(){
				var that = this;
				$('.price').each(function(){         
					var total = $(this).text();
					total = parseInt(total.substr(1));
					that.sum+=total;
      				console.log($(this).text());
      				$('#totalPrice').html("￥"+that.sum);
      			})
				
			},
			showGoods(){
				var that = this;
				axios.get('/api/cart')
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						alert("请先登录");
						that.$router.push('/my');
						return;
					}
					that.data = res.data.data;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	}
</script>
<style scoped>
	#cart img{
		width:1rem;
		height:1rem;
	}
	#cart ul{
		display: flex;
		justify-content: space-between;
	}
	#cart ul li{
		display: inline-block;
	}
	#cart .cb{
		height:1rem;
		line-height: 1rem;
		padding-left:0.2rem;
	}
	#cart .price{
		display: inline-block;
		color:#fe4070;
		padding-top:0.2rem;
	}
	#cart .cartHead{
		height:0.5rem;
		line-height: 0.5rem;
		text-align: center;
		position: relative;
		top:0;
		color:#000;
		font-size:16px;
	}
	#cart .cartFooter{
		height:0.5rem;
		line-height: 0.5rem;
		padding-left:0.2rem;
	}
	#totalPrice{
		color:#f00;
	}
</style>