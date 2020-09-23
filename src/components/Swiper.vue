<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
		<!-- 左边导航栏 -->
		<div class="nav-menu">
		    <ul class="menu-wrap">
		      <li class="menu-item">
		        <a href="javascript:;">手机 电话卡<i class="fa fa-angle-right" aria-hidden="true"></i></a>
				<div class="children">
				  <ul>
				    <li v-for="(item,index) in menuList" v-bind:key="index">
				      <a href="#">
				        <img :src="item.img" alt="">
				        {{item.name}}
				      </a>
				    </li>
				  </ul>
				</div>
			  </li>
		      <li class="menu-item">
		        <a href="javascript:;">电视 盒子<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		      <li class="menu-item">
		        <a href="javascript:;">笔记本 显示器<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		      <li class="menu-item">
		        <a href="javascript:;">家电 插线板<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		      <li class="menu-item">
		        <a href="javascript:;">出行 穿戴<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		      <li class="menu-item">
		        <a href="javascript:;">智能 路由器<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		      <li class="menu-item">
		        <a href="javascript:;">电源 配件<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
			  <li class="menu-item">
			    <a href="javascript:;">健康 儿童<i class="fa fa-angle-right" aria-hidden="true"></i></a>
			  </li>
			  <li class="menu-item">
			    <a href="javascript:;">耳机 音箱<i class="fa fa-angle-right" aria-hidden="true"></i></a>
			  </li>
		      <li class="menu-item">
		        <a href="javascript:;">生活 箱包<i class="fa fa-angle-right" aria-hidden="true"></i></a>
		      </li>
		    </ul>
		</div>
       <!-- banner图片轮播 -->
		<swiper v-bind:options="swiperOption" @click="toProduct">
          <swiper-slide v-for="(item,index) in swiperList" v-bind:key="index">
			  <a :href="'product/id='+item.id"><img v-bind:src="item.img" alt=""></a>
           <!-- <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a> -->
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
	  <!-- 轮播图下四个广告 -->
	  <div class="ads-box">
		<div class="list">
			<ul>
			  	<li>
					<i class="fa fa-clock-o" aria-hidden="true"></i>
					<span>小米秒杀</span>
				</li>
			  	<li>
					<i class="fa fa-building-o" aria-hidden="true"></i>
					<span>企业团购</span>
				</li>
				
			  	<li>
					<i class="fa fa-address-card" aria-hidden="true"></i>
					<span>F码通道</span>
				</li>
			  	<li>
					<i class="fa fa-credit-card" aria-hidden="true"></i>
					<span>米粉卡</span>
				</li>
				
			  	<li>
					<i class="fa fa-repeat" aria-hidden="true"></i>
					<span>以旧换新</span>
				</li>
			  	<li>
					<i class="fa fa-jpy" aria-hidden="true"></i>
					<span>话费充值</span>
				</li>
			</ul>
		</div>
		<div class="ads-img" v-for="(item,index) in adsList" :key="index">
			<a href="#">
			  <img :src="item.img" alt="">
			</a>
		</div> 
	  </div>
 
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
// If you use Swiper 6.0.0 or higher
import 'swiper/css/swiper.css'
export default{
    name:'miswiper',
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
		  disableOnInteraction:false,
          loop:true,
		  effect : 'fade',
		  fadeEffect: {
		      crossFade: true,
		  },
          pagination: {
            el:".swiper-pagination",
            clickable:true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
        },
		swiperList:[
		  {
		    id:'1',
		    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe253b0048a5517abca36a605acacba3.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
		  },
		  {
		    id:'2',
		    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/845deea18c7ccddeb01676fe16e99712.jpg?w=2452&h=920'
		  },
		  {
		    id:'3',
		    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9a8a020cf3058f05e8db9483d7a0e45.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
		  },
		  {
		    id:'4',
		    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7c2e5c62dfcaae720a3cd909c0eae52.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
		  },
		  {
		    id:'5',
		    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2058cf62a836d2372bd7e8a1500b54e6.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
		  }
		],
		menuList:[
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			},
			{
				id:"41",
				name:"小米10Pro",
				img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg"
			}
		],
		adsList:[
			{
				id:"",
				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340"
		    },
			{
				id:"",
				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b746a4db2e0473cc076a3a4b9bbe0235.jpg?w=632&h=340"
			},
			{
				id:"",
				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
			}
		]
	   }
	},
    mounted(){
      
    },
    methods:{
		
    }
  }
</script>
<style lang="scss" scoped>

.index{
	width: 1226px;
	margin:3px auto;
    .swiper-box{
		width: 100%;
	   .nav-menu{
	     position:absolute;
	     width:264px;
	     height:460px;
	     z-index:10;
	     padding:20px 0;
	     background-color:#55575a7d;
	     box-sizing:border-box;
	     .menu-wrap{
			 padding: 0;
			 margin: 0;
	       .menu-item{
	         height:42px;
	         line-height:42px;
			 list-style: none;
			 .children{
			   display: none;
			   width:962px;
			   height:460px;
			   background-color:#ffffff;
			   position:absolute;
			   z-index:50;
			   top:0;
			   left:264px;
			   border:1px solid #e5e5e5;
			   ul{
			     display:flex;
			     justify-content:space-between;
				 flex-wrap: wrap;
				 align-content: flex-start;/*子元素之间取消空白间隙，并把项目放在容器顶部。*/
			     width:962px;
			     height:460px;
				 list-style: none;
				 padding-left:30px;
				 box-sizing: border-box;
			     li{	 
				   width: 25%;
			       height:16.6%;
			       line-height:75px;
				   padding:0;
				   margin: 0;
				   a{
					   width: 100%;
					   height: 100%;
				     color:#333333;
				     font-size:14px;
					 display: inline-block;
				   }
				   img{
				     width:42px;
				     height:35px;
				     vertical-align:middle;
				     // margin-right:15px;
					 display: inline-block;
				   }
			     }
			     
			   }
			 }
			 &:hover{
				 background-color: #FF6600;
				 .children{
					 display: block;
				 }
			 }
	         a{
	           position:relative;
			   text-decoration: none;
	           display:block;
	           font-size:16px;
	           color:#ffffff;
	           padding-left:30px;
	           i{
	             position:absolute;
	             right:30px;
	             top:17.5px;
				 width: 10px;
				 height: 15px;
	           }
	         }
	        
	       }
	     }
	   }
      .swiper-container {
        height: 460px;
		width: 100%;
		 --swiper-theme-color: #ff6600;
		.swiper-button-prev{
		  left:274px;
		}
        img{
          width:100%;
          height:100%;
        }
      } 
    }
	.ads-box{
	  display: flex;
	  justify-content:space-between;
	  width: 1226px;
	  margin-top:14px;
	  margin-bottom:31px;
	  flex: 1;
	  .list{
		  width:264px;
		  height:170px;
		  background-color: #5f5750;
		  padding:0;
		  margin: 0;
		  ul{
			  width: 100%;
			  height: 100%;
			  list-style: none;
			  display: flex;
			  flex-wrap: wrap;
			  justify-content: center;
			  align-items: center;
			  padding: 0;
			  margin: 0;
			  
			  li{
				  width: 33.3%;
				  padding: 0;
				  margin: 0;
				  box-sizing: border-box;
				  text-align: center;
				  font-size: 12px;
				  color: #FFFFFF;
				  opacity: 0.6;
				  &:hover{
					  opacity: 1;
					  cursor: pointer;
				  }
				  i{
					  display: block;
					  margin-bottom: 5px;
				  }
				  
			  }
		  }
		 
	  }
	  .ads-img{
	    display:flex;
		justify-content: space-between;
		background-color: #ccc;
		a{
			display: inline-block;
			width:296px;
			height:170px;		
			img{
				width: 100%;
				height: 100%;
			}
		}
	  }
	}

	
  }
</style>