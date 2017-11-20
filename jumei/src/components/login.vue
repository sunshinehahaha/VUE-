<template>
	<div id="login">
		<div class="top">
			<router-link to="/my"><i class="iconfont">&#xe518;</i></router-link>
			<span>登录</span>
			<router-link to="/register">注册</router-link>
		</div>
		<p>使用手机号登录</p>
		<div class="reInfo">
			<input type="text" v-model="username" placeholder="请输入11位手机号"><br/><br/>
			<input type="text" v-model="psw" placeholder="6-12位登录密码"><br/><br/>
			<input type="button" @click="login" value="登录">
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:"login-comp",
		data:function(){
			return {
				username : "",
            	psw : ""
			}
		},
		methods:{
			login:function(){
				var that = this;
				axios.post('/api/login', {
					username: this.username,
					psw: this.psw
				})
				.then(function (res) {
					console.log(res);
					if(res.data.code !=1){
						alert("登录失败");
						return;
					}
					// localStorage.setItem("username",res.data.session);
					that.$router.push('/my');
					// location.href="/#/my";
				})
				.catch(function (error) {
					console.log(error);
				});

			}
		}
	}
</script>
<style scoped>
	.top{
		height:0.3rem;
		border-bottom:1px solid #eee;
		display: flex;
		justify-content: space-between;
		padding:0 0.2rem;
		line-height:0.3rem;
	}
	p{
		text-align: center;
		height:0.35rem;
		line-height: 0.35rem;
		color:#aaa;
	}
	.reInfo{
		text-align: center;
		padding: 0 0.3rem;
	}
	.reInfo input{
		width:1.9rem;
		height:0.25rem;
		padding-left: 0.15rem;
		border:1px solid #ccc;
		border-radius: 0.2rem;
		outline: none;
	}
	.reInfo input:last-of-type{
		width:2.1rem;
		height:0.3rem;
		border:0;
		background: #feb2c5;
		color:#fff;
	}
</style>