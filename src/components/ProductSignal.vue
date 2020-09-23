<template>
  <div class="index">
	<div class="product-box">
		<div class="container">
		    <h2>{{this.hname}}</h2>
		    <div class="wrapper">
		      <div class="list-box">
		        <div class="list" v-for="(item,index) in jiadianList" :key="index">  
		            <div class="item-img">
						<!-- v-lazy本身会自动封装:bind和src -->
		              <img v-lazy="item.img" alt="">
		            </div>
		            <div class="item-info">
		              <h3>{{item.name}}</h3>
		              <p>{{item.des}}</p>
		              <p class="price" @click="addCart(item.id)">{{item.price}}元起</p>
		            </div>
		        </div>
		      </div>
		    </div>
		</div>
	</div>
</div>
</template>
<script>
export default{
    name:"productsignal",
	props:['name',"jiadian"],
	data(){
	  return {
		  hname:"",
		  jiadianList:[]	  
	  }
	},
	methods:{
		addCart(id){
			
		}
	},
	mounted() {
		this.hname=this.name;
		this.jiadianList=this.jiadian;
		
		// console.log(this.name);
		// console.log(this.jiadianList);
	}  
  }
</script>
<style lang="scss" scoped>
.index{
	.product-box{
      background-color:#F5F5F5;
      padding:30px 0 50px;
	  .container{
		  width: 1226px;
		  margin: 0 auto;
		  h2{
		    font-size:#d7d7d7;
		    height:21px;
		    line-height:21px;
		    color:#333333;
		    margin-bottom:20px;
		  }
		  .wrapper{
		    display:flex;
		    .list-box{
				display: flex;
				flex-wrap: wrap;
				// align-items: center;
				align-content:flex-start;
				justify-content: space-between;
				width:100%;
		        .list{
		          width:236px;
		          height:302px;
		          background-color:#ffffff;
		          text-align:center; 
				  margin-bottom: 14px;
				  &:hover{
					  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.11);
					  margin-top: -2px;
				  }
		          .item-img{
		            img{
		              width:160;
		              height:160px;
		            }
		          }
		          .item-info{
		            h3{
		              font-size:14px;
		              color:#333333;
		              font-weight:400;
		            }
		            p{
		              color:#b0b0b0;
					  font-size: 12px;
		              line-height:13px;
		              margin:0 10px 10px;
					  // 定义同行显示
					  white-space: nowrap;
					  overflow: hidden;
		            }
		            .price{
		              color:#FF6600;
		              font-size:14px;
		              font-weight:bold;
		              cursor:pointer;
		             
		            }
		          }
		        }
		      
		   }
	    }
	  }
   }
}
</style>