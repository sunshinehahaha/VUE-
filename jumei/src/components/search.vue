<template>
	<div class="search">
	 <!-- {{$store.state.data1}} -->
		<i class="iconfont mirror">&#xe678;</i>
		<input type="text" class="input" placeholder="搜索商品 分类 功效" @click="show=true">
		<i class="iconfont right menu"  @click="show=!show">&#xe617;</i>

		<transition name="css">
			<div class="menu1" v-if="show">
				<i class="iconfont mirror">&#xe678;</i>
				<input type="text" placeholder="搜索商品 分类 功效" v-model="message" @keydown.enter="searchInfo" >
				<span @click = "show=false">返回</span>
				<ul v-if="message ===null">
					<li v-for="item in data" class="list" @click="show1">
						{{item.name}}
						<ul class="detail">
							<li v-for="item1 in item.sub_categories">
								{{item1.name}}
							</li>
						</ul>
					</li>
				</ul>

				<ul v-else>
					<li v-for="item in $store.state.data1" class="list" v-if="item.name!=null">
						<div v-if="item.name.indexOf(message)!=-1">
							{{item.name}}
						</div>
					</li>
				</ul>

			</div>	
		</transition>

	</div>
</template>
<script>
    import axios from 'axios';
    // import 
    import $ from 'jquery';
   
	export default{
		name:"search-comp",
		data:function(){
			return {
				show:false,
				data:null,
				showDetail1:false,
				data1:null,
				message:null,
				isopend:false,
			}
		},
		mounted:function(){
			this.getData();
			// this.getSearch();
		},
		methods:{
			getData:function(){
					var that = this;
					 axios.get('/msapi/mall/allcategories.json')
					 .then(function(res){
					 	that.data = res.data.data;
					 })
					 .catch(function(error){
					 	console.log(error);
					 })
				},
			getSearch:function(){
					// var that = this;
					//  axios.get(`/msapi/search/suggestion.json?keyword={that.message}`)
					//  .then(function(res){
					//  	console.log(res);
					//  	// that.data = res.data.data;
					//  })
					//  .catch(function(error){
					//  	console.log(error);
					//  })
				},
			show1: function(e){
				var temp = e.currentTarget;
				if(this.isopend){
					$(temp).find('.detail').css({
						display:'none',
					});
					this.isopend = false;
				}else{
					$(temp).find('.detail').css({
						display:'block',
					});
					this.isopend = true;
				}
		    },
		    send:function(){
		    	
			},
			searchInfo:function(){

				console.log(this.$store.state.data1);
				// c
				// console.log($route.state.data1);
				console.log(this.message);
			}

		}
	}
</script>
<style scoped>
	.search{
		height:0.4rem;
		position: relative;
	}
	.right{
		float: right;
	}
	.search input{
		border:1px solid #ccc;
		background: #f5f5f5;
		border-radius: 0.2rem;
		margin-top:0.08rem;
		margin-left:0.2rem;
		outline: none;
		width:2.13rem;
		height:0.31rem;
		padding-left:1rem;
	}
	.input{
		color:#fff;
		background-color: #fff;
	}
	.mirror{
		position:absolute;
		top:0.18rem;
		left:1rem;
	}
	.menu{
		margin-top:0.13rem;
		font-size: 18px;
		margin-right:0.05rem;
	}


	.menu1{
		position: fixed;
		top:0;
		color: #000;
		width:80%;
		background: #fff;
		height:100%;
		color:#333;
		padding-left:0.1rem;
		z-index:2;
		right:0;
	}
	.menu1 ul li.list{
		/*height:0.4rem;*/
		line-height: 0.3rem;
		/*border-top:1px solid #ccc;*/
		border-bottom:1px solid #eee;
	}

	.menu1 input{
		width:1.9rem;
		padding-left:0.5rem;
	}
	.menu1 .mirror{
		left:0.5rem;
	}

	ul{
		list-style: none;
	}

	.css-enter {
		right: -5rem;
		opacity: 0;
	}
	.css-enter-to {
		right: 0;
		opacity: 1;
		transition-duration: 0.6s;
	}

	.css-leave {
		right: 0;
		opacity: 1;
	}
	.css-leave-to {
		right: -8rem;
		opacity: 0;
		transition-duration: 0.4s;
	}
	a{
		color: #fff;
		text-decoration: none;
	}
	.detail li{
		height: 0.2rem;
		padding-left:0.3rem;
	}
	.detail{
		display: none;
	}
</style>