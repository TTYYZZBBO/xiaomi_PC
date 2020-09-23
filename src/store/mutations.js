
/**
 * 商城Vuex-mutations
 */
export default {
  saveUserName(state, username) {
 //    if(!username){
	// 	state.username=sessionStorage.getItem("username");
	// }else{
		state.username = username;
	// }
  },
  saveCartCount(state, count) {
	  // if(!count){
	  // 	state.count=sessionStorage.getItem("count");
	  // }else{
	  	state.count = count;
	  // }
    
  },
  saveUserId(state, userid) {
	 // if(!userid){
	 //  	state.userid=sessionStorage.getItem("userid");
	 // }else{
	  	state.userid = userid;
	 // }
    
  },
  
}