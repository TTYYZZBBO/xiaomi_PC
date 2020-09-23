
/**
 * 商城Vuex-actions
 */
export default {
  saveUserName(context,username){
    context.commit('saveUserName', username);
	console.log("2");
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  },
  saveUserId(context, userid) {
    context.commit('saveUserId', userid);
  }
}