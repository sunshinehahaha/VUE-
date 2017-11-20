var express = require('express');
var router = express.Router();
var GoodsModel = require('../model/GoodsModel');
var UserModel = require('../model/UserModel');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/api/regist', function(req, res, next) {
	var result = {
		code:1
	}
	UserModel.find({username:req.body.username},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		if(docs.length !=0){
			result.code = -21;
			result.message = '用户名已存在';
			res.send(JSON.stringify(result));
			return;
		}

		var user = new UserModel();
		user.username = req.body.username;
		user.psw = req.body.psw;
		user.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			// result.username = req.body.username;
			res.send(JSON.stringify(result));
		})	
	})
});


router.post('/api/saveGoods', function(req, res, next) {
	var result = {
		code:1
	}
	if(!req.session.username){
		result.code = -110;
		result.message = "亲~要先登录哦";
		res.send(JSON.stringify(result));
		return;
	}
	GoodsModel.find({goods_name:req.body.goods_name},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		if(docs.length !=0){
			result.code = -21;
			result.message = '用户名已存在';
			res.send(JSON.stringify(result));
			return;
		}

		var goods = new GoodsModel();
		goods.username = req.session.username;
		goods.goods_name = req.body.goods_name;
		goods.price = req.body.price;
		goods.goods_img = req.body.goods_img;
		goods.save((err)=>{
			if(err){
				result.code = -22;
				result.message = '保存失败，服务器出错';
			}
			// result.username = req.body.username;
			res.send(JSON.stringify(result));
		})	
	})
});


router.post('/api/login', function(req, res, next) {
	var result = {
		code:1
	}
	UserModel.find({username:req.body.username,psw:req.body.psw},(err,docs)=>{
		if(err){
			result.code = -20;
			result.message = '服务器故障';
			res.send(JSON.stringify(result));
			return;
		}
		if(docs.length ===0){
			result.code = -21;
			result.message = '密码或用户名不正确呢';
			res.send(JSON.stringify(result));
			return;
		}

		req.session.username = req.body.username;
		result.session = req.body.username;
		res.send(JSON.stringify(result));
		
	})
});


router.post('/api/del', function(req, res, next) {
	var result ={
		code:1
	}
	GoodsModel.findByIdAndRemove({_id:req.body.id},(err)=>{
		if(err){
			result.code = -30;
			result.message = "服务器错误";
		}

		res.send(JSON.stringify(result));

	})
  	
});



router.get('/api/cart', function(req, res, next) {
	var result ={
		code:1
	}
	if(!req.session.username){
		res.send('亲~要先登录哦');
		return;
	}
	GoodsModel.find({username:req.session.username},(err,docs)=>{
		if(err || docs.length===0){
			result.code = -30;
			result.message = "服务器错误";
		}else{
			console.log(docs);
			result.data = docs;
			res.send(JSON.stringify(result));
		}

	})
  	
});



router.get('/api/logout', function(req, res, next) {
	var result ={
		code:1
	}
    delete req.session.username;
    res.send(JSON.stringify(result));
});

router.get('/api/justify', function(req, res, next) {
	var result ={
		code:1
	}
    if(!req.session.username){
    	result.code =-110;
    	res.send(JSON.stringify(result));
    	return;
    }
    result.username = req.session.username;
    res.send(JSON.stringify(result));
});



module.exports = router;
