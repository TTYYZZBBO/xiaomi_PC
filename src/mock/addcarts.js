import cartMessage from './cartMessage.js'
export default{
	addcarts:config=>{
		let data=JSON.parse(config.body);
		let cartList=[];
		var res=cartMessage.cart.data;
		console.log(res);
		for(var i=0;i<res.length;i++){	
			if(data.id===res[i].id){
				res[i].quantity+=1;	
				res[i].totalPrice=res[i].price*res[i].quantity;
				cartMessage.cart.data=res;
				return {
					status:200,
					data:res
				}
			}else{	
				data.quantity+=1;	
				data.totalPrice=data.price*data.quantity;
				cartMessage.cart.data.push(data);
			}
		}
		return {
			status:40,
			data:"购物车为空"
		}						
	}
}