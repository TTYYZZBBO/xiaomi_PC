import userLoginMessage from './userLoginMessage.js'
import md5 from 'js-md5';
// 登陆用户名和密码匹配函数
export default{
	login:config=>{
		// 将mock里得到的login传递过过来的字符串转换成JS对象
		let data=JSON.parse(config.body);
		console.log(config);
		let userList={
			username:"",
			password:"",
			userid:""
		};
		// userLoginMessage.data.data.map用于创建一个新的数组，数组内容是原始数组处理过后的值
		var bel=userLoginMessage.data.data.map(res=>{
			// console.log("data:"+data.username);	
				console.log(res);
			if(data.username===res.username&&data.password===md5(res.password)){
				userList.username=data.username;
				userList.password=data.password;
				userList.userid=data.userid;
				// console.log("res"+userList);
				return true;
			}else{
				console.log("bu一致");
				return false;
			}
		})
		if(bel.includes(true)){
			return {
				status:200,
				data:userList
			}
		}else{
			return {
				status:10,
				data:{
					masg:"用户名密码错误",
					status:'faile'
				}
			}
			
			
		}
	}
}