import Mock from 'mockjs'
import userLoginMessage from './userLoginMessage.js'
import productMessage from './productMessage.js'
import userLoginMap from './userLoginMap.js'
import productMessageMap from './productMessageMap.js'
import cartMessage from './cartMessage.js'
import addcarts from './addcarts.js'
import cart from './cart.js'
import user from './user.js'
Mock.setup({
	timeout:'300-600'
})
// mock
Mock.mock('/api/user/login',userLoginMap.login);
Mock.mock('/api/user',user.user);
Mock.mock('/api/productMessage',productMessageMap.productMessage);
Mock.mock('/api/cartMessage',cart.cart);
Mock.mock('/api/addcarts',addcarts.addcarts);




