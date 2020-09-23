<template>
	<div class="header">
		<div class="topbar">
			<div class="container">
				<div class="left-menu">
					<a href="javascript:;">小米商城</a><!-- 防止页面刷新 -->
					<a href="">MUI</a>
					<a href="">云服务</a>
					<a href="">协议规则</a>
				</div>
				<div class="right-users">
					<a href="javascript:;" v-if="username">{{username}}</a>
					<a href="" @click="login">登录</a>
					<a href="">注册</a>
					<a href="/cart" class="mi-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>购物车</a>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:"miheader",
	data(){
		return {
			shoujiproduct:[]
			// username:this.$store.state.username
		}
	},
	mounted() {
		
	},
	computed:{
		username(){
		  return this.$store.state.username||sessionStorage.getItem("username");
		}
	},
	methods:{
		login:function(){
			this.$router.push('/login');
		}
	},
	created() {
		// axios.get('/api/activity/servicetime').then(res=>{
		// 	// this.shoujiproduct=res.data;
		// 	// console.log("success");
		// 	// console.log(this.shoujiproduct);
		//   }
			
		// )
	}
	
}
</script>

<style lang="scss">
	.header{
		.topbar{
			width: 100%;
			height: 39px;
			line-height: 39px;
			background-color: #333333;
			color: #B0B0B0;
			.container{
				width: 1226px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 14px;
				a{
					display: inline-block;
					color: #B0B0B0;
					text-decoration: none;
					margin-left: 17px;
				}
				.mi-cart{
					width: 110px;
					background-color: #FF6600;
					text-align: center;
					color:#ffffff;
					i{
						width: 16px;
						height: 16px;
						margin-right: 5px;
					}
				}
				
			}
		}
		
	}
</style>

