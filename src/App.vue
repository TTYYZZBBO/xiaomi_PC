<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
  data(){
	  return{
		  response:{}
	  }
  },
  methods:{
	  // getUser(res){
		 //  this.axios.post('/user',{
		 //  		  username:this.username,
		 //  		  password:md5(this.password)
		 //  }).then((res)=>{
		 //    this.$cookie.set('userId',res.userid,{expires:'Session'});
		 //  		// dispatch用来分发action
		 //    this.$store.dispatch('saveUserName',res.username);	
		 //    this.$store.dispatch('saveUserId',res.userid);
		 //  		// console.log("1");
		 //    // this.saveUserName(res.username);
		 //   // this.res=res;
		 //   this.$router.push('/index');
		 //  })
	  // }
	  // 页面加载开始就请求购物车放到本地的loclalstorage中
	  getCartList:function(){
	  		// this.axios.get('/cartMessage').then((res)=>{
	  			
	  		// 	localStorage.setItem("cart",JSON.stringify(res.data));
	  		// 	console.log("locallstorage:"+localStorage.getItem("cart"));
	  		// 	})  
				
	  }
  },
  mounted() {
	  // 本地集成mockjs实现mock
	  this.getCartList();
  	
  }
 
}
</script>

<style>
@import './assets/css/reset.scss';
@import url("assets/font-awesome-4.7.0/css/font-awesome.min.css");
</style>
