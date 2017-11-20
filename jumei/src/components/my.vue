<template>
	<div id="my">
		<div class="top">
			<router-link to="/">
				<i class="iconfont">&#xe518;</i>
			</router-link>
			<span>我的聚美</span>
			<router-link to="/">
				<i class="iconfont">&#xe605;</i>
			</router-link>
		</div>
		<div class="home">
		<div>{{getUserName()}}</div>
			<div v-if="user===null||user===undefined">
				<p>
					<router-link to="/login">登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<router-link to="/register">注册</router-link>
				</p>
			</div>
			<div v-else>
				<p id="welcome"> {{user}}    欢迎你~~  </p>
				<span class="logout" @click="logoutInfo">注销</span>
			</div>
		</div>



	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"my-comp",
		data:function(){
			// this.$router.replace('/my/users');
			return {
				user:null,
			}
			
		},
		methods:{
			getUserName:function(){
				var that = this;
				axios.get('/api/justify')
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						return null;
					}
					that.user= res.data.username;
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			logoutInfo:function(){
				var that = this;
				axios.get('/api/logout')
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						alert("注销失败");
						return;
					}
					// location.reload(true);
					that.$router.go();
					// that.$router.push('/my');

					// alert("注销成功");
					

					
				})
				.catch(function (error) {
					console.log(error);
				});
			},		
		}
	}
</script>
<style scoped>
	#my .top{
		display: flex;
		justify-content: space-between;
		height:0.5rem;
		line-height: 0.5rem;
		background: #fd578d;
		color:#fff;
		padding:0 0.2rem;
		font-size:16px;
	}
	#my .home{
		height:1.5rem;
		background: #fd578d;
		color:#fff;
		width:100%;
		position:relative;
	}
	#my .home .cir{
		height: 0.55rem;
		width:0.55rem;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
		position: relative;
		left:1.65rem;
		top:0.2rem;
	}
	#my .home .cir .iconfont{
		color:#fd578d;
		position: absolute;
		left:0.12rem;
		top:0.14rem;
		font-size:30px;
	}
	#my .home p{
		text-align: center;
		padding-top:0.3rem;
		font-size:18px;
		color:#fff;
	}
	#my .home p a{
		color:#fff;
	}
	#welcome{
		/*margin-top: 0;*/
		line-height: 1rem;
	}
	.logout{
		color:#fff;
		float: right;
		padding-right: 0.2rem;
	}
	/*#my .home div:first-of-type p{
		padding-top:0.3rem;
	}*/
</style>