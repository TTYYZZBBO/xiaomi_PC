<template>
  <div class="order-header">
    <div class="container">
      <div class="header-logo">
        <a href="/index"><img src="../../images/mi-home.png" alt=""></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'cartheader',
	data(){
		return{
			username:this.$store.state.userid || sessionStorage.getItem("username"),
			userid:this.$store.state.userid || sessionStorage.getItem("userid")
		}
	},
    props:{
      title:String
    },
    computed:{
      
    },
	mounted() {
		
	},
	methods:{
		
	}
  }
</script>
<style lang="scss">
  .order-header{
    height: 60px;
    border-bottom:2px solid #FF6600;
	.container{
		width: 1226px;
		margin: 0 auto;
		height: 100%;
		.header-logo{
		  float:left;
		  width: 55px;
		  height: 55px;
		  background-color: #FF6600;
		  img{
			  width: 100%;
			  height: 100%;
			  
		  }
		}
		.title,.username{
		  display:inline-block;
		  height:55px;
		  line-height:55px;
		}
		.title{
		  float:left;
		  margin-left:54px;
		  h2{
		    font-size:28px;
		    color:#333333;
			padding: 0;
			margin: 0;
		  }
		  span{
		    font-size:14px;
		    margin-left:17px;
		    color:#999999;
		    font-weight:200;
		  }
		}
		.username{
		  float:right;
		  a{
		    color:#666666;
		    font-size:16px;
		  }
		}
	}  
  }
</style>