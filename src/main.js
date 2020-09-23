import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
// VueAxios可以把axios挂载到vue上,就可以使用this进行调用了
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import router from './router.js'
// 默认会读取store 中的index.js
import store from './store'


// 接口代理的默认地址
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
// mock模拟数据
const mock=true;
if(mock){
	require('./mock/api.js');
}
//商品id匹配：200 OK，20错误
//login:200 OK,10错误
//获取购物车：200 OK
// axios接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  // 后台返回0代表成功
  // console.log("manjs"+JSON.stringify(res));
  // console.log(res.data.username);
  if(res.status == 200){
	//   console.log("mainjs")
	// console.log(res.data);
    return res.data;
	// 未登录返回码10,提示需要登陆,跳转到登陆页面
  }else if(res.status == 10){
	  // 跳转到登陆页面
	  
    window.location.href = '/login';
	alert("请注册");
    return Promise.reject(res);
  }else{
    // Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  // let res = error.response;
  // Message.error(res.data.message);
  // return Promise.reject(error);
});


Vue.config.productionTip = false
Vue.use(router).use(VueAxios,axios).use(VueAwesomeSwiper).use(VueLazyLoad).use(VueCookie);

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
