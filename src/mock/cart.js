import cartMessage from './cartMessage.js'

export default{
	cart:config=>{
		let cartList=[];
		// cartMessage.cart.data
		if(cartMessage.cart.data){
			return {
				status:200,
				data:cartMessage.cart
			}
		}else{
			return {
				status:40,
				data:"购物车为空",
			}
		}						
	}
}