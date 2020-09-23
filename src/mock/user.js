import userLoginMessage from './userLoginMessage.js'
//
export default{
	user:config=>{
		let userList={
			username:"",	
			userid:""
		};	
		// userLoginMessage.data.data.map用于创建一个新的数组，数组内容是原始数组处理过后的值
		var bel=userLoginMessage.data.data.map(res=>{
			// console.log("data:"+data.username);	
				userList.username=res.username;
				userList.userid=res.userid;
				// console.log("res"+userList);
				return {
					status:200,
					data:userList
				}
				return {
					status:30,
					data:"用户获取不到"
				}
		})	
	}
}