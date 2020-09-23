import productMessage from './productMessage.js'
// 访问具体产品时候id匹配函数
export default{
	productMessage:config=>{
		// 将mock里得到的login传递过过来的字符串转换成JS对象
		let data=JSON.parse(config.body);
		// config包括三部分,第一个是url拦截的地址,第二个是post  get 第三个是
		// 传递过来的参数也就是config.body
		let product={};	
		// userLoginMessage.data.data.map用于创建一个新的数组，数组内容是原始数组处理过后的值
		// var bel=productMessage.product.data.map(res=>{
			// console.log("data:"+data.username);
			var res=productMessage.product.data;
			// console.log(res);
			// console.log(res[1].id);
			// console.log(data.id)
			for(var i=0;i<res.length;i++){	
				if(data.id==res[i].id){
					product=res[i];
					// console.log("这是要返回的匹配后的内容：");
					// console.log(userList);
					return {
						status:200,
						data:product
					}
				}
			}
			return {
				status:20,
				data:{
					masg:"匹配不成功",
					status:'faile'
				}
			}
	}
}