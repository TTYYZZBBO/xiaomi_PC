var express = require('express');
var app = express();
// 解决跨域问题
app.all('*',function(req,res,next){
	// 允许任何网址都能访问
	res.header("Access-Control-Allow-Origin","*");
	// 允许的请求方式
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	res.header("Content-Type","application/json;charset=utf-8");
	next();
})
// 针对searchPage搜索框匹配接口
app.get('/search', function (req, res) {
	let searchInput=req.query.searchInput;
	// 本意是要在这个中间键中去操作MYSQL的crud,但是现在还没有所以就先模拟一些数据
	//临时商品
	let products=[{
		name:"男装",
		price:156
	},{
		name:"包包",
		price:300
	},{
		name:"童装儿童",
		price:56
	},{
		name:"鞋子",
		price:20
	}];
	//根据输入框的值过滤出符合商品
	let fiflterProduct=products.filter(n=>{
		// 不等于-1代表找到了结果,fiflter只返回结果是true的结果
		return n.name.indexOf(searchInput) !=-1;
	})
	//判断商品是否存在,存在返回商品不存在返回无此商品
	let resProduct=fiflterProduct.length>0?fiflterProduct:{msg:"无此商品"};

    res.send(resProduct);
});
//针对indexPage tabs的接口
app.get('/getTabs',function(req,res){
	let tabs=['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','严选全球'];
	res.send(tabs);
});
//针对indexPage 轮播图Swipe的接口
app.get('/getSwipe',function(req,res){
	let swipImage=[
		"https://yanxuan.nosdn.127.net/704515354b05480b4f6ef5ccd29c5778.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/43166261d4a7bba00b94739e71f75afb.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/4b0e7635a97f1c3a93dbf52c01c331dc.jpeg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/f8e72c13a140a5a2cac1266f7bb4b100.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/f8e72c13a140a5a2cac1266f7bb4b100.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/45db13b06bdc06373f924a10ca820400.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"https://yanxuan.nosdn.127.net/45db13b06bdc06373f924a10ca820400.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
		"http://yanxuan-miaobi.nos-jd.163yun.com/3827023_1_6_wap_3daf23060c99862470ef09b107f50dcc.jpg?type=webp&imageView&quality=75&thumbnail=750x0"	
	];
	res.send(swipImage);
});
//针对indexPage产品导航列表
app.get('/getProductList',function(req,res){
	let productList=[
		{image:"http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",name:"新品首发"},
		{image:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",name:"居家生活"},
		{image:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",name:"服饰鞋包"},
		{image:"http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",name:"美食酒水"},
		{image:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",name:"个护清洁"},
		{image:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",name:"母婴亲子"},
		{image:"https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",name:"运动旅行"},
		{image:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",name:"数码家电"},
		{image:"https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",name:"全球特色"},
		{image:"http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",name:"好货抄底"}	
	];
	res.send(productList);
})
app.get('/getcountdownProduct',function(req,res){
	let countdownProduct=[
		{image:"https://yanxuan-item.nosdn.127.net/1d257c1dcfe98574ab1402d42f45045e.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"147",oldprice:"169"},
		{image:"https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"279",oldprice:"319"},
		{image:"https://yanxuan-item.nosdn.127.net/ab1d06c254ebabd00b72b51bee807be6.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"4499",oldprice:"4999"},
		{image:"https://yanxuan-item.nosdn.127.net/e17c6f1be0ffcae77ff4bd4130b70de5.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"89",oldprice:"99"},
		{image:"https://yanxuan-item.nosdn.127.net/2c969ec804e60eea66686516b3521ee3.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"189",oldprice:"199"},
		{image:"https://yanxuan-item.nosdn.127.net/0b3b9026931efe0ff2c1ad8ea21ca387.png?quality=75&type=webp&imageView&thumbnail=216x216",nowprice:"1599",oldprice:"1699"}	
	];
	res.send(countdownProduct);
})
var server = app.listen(3344, function () {
 

  console.log("应用实例 port");
 
})