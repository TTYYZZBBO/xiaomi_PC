<template>	
	<div class="detail">
		<miheader></miheader>
	    <div class="wrapper">
		  <ProductHeader v-bind:title="productMessage.productName"></ProductHeader>
	      <div class="container clearfix">
	        <div class="swiper">
	          <swiper :options="swiperOption">
	              <swiper-slide><img src="../../images/productList.jpg" alt=""></swiper-slide>
	              <swiper-slide><img src="../../images/productList2.jpg" alt=""></swiper-slide>
	              <swiper-slide><img src="../../images/productList3.jpg" alt=""></swiper-slide>
	              <swiper-slide><img src="../../images/productList4.jpg" alt=""></swiper-slide>
	              <!-- Optional controls -->
	              <div class="swiper-pagination"  slot="pagination"></div>
	          </swiper>
	        </div>
	        <div class="content">
	          <h2 class="item-title">{{productMessage.productName}}</h2>
	          <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
	          <div class="delivery">{{productMessage.flag}}</div>
	          <div class="item-price">{{productMessage.price}}元<span class="del">{{productMessage.oldPrice}}</span></div>
	          <div class="line"></div>
	          <div class="item-addr">
	            
				<i class="fa fa-map-marker icon-loc" aria-hidden="true"></i>
	            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
	            <div class="stock">有现货</div>
	          </div>
	          <div class="item-version clearfix">
	            <h2>选择版本</h2>
	            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
	            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
	          </div>
	          <div class="item-color">
	            <h2>选择颜色</h2>
	            <div class="phone checked">
	              <span class="color"></span>
	              深空灰
	            </div>
	          </div>
	          <div class="item-total">
	            <div class="phone-info clearfix">
	              <div class="fl">{{productMessage.productName}}{{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
	              <div class="fr">{{productMessage.price}}元</div>
	            </div>
	            <div class="phone-total">总计：{{productMessage.price}}元</div>
	          </div>
	          <div class="btn-group">
	            <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
	          </div>
			  
	        </div>
	      </div>
		  <alertMessage
		  title="提示" 
		  sureText="查看购物车" 
		  modalType="middle" 
		  btnType="1" 
		  v-bind:showModal="showModal">
		  	 <template v-slot:body>
		  		<p>商品添加成功</p>
		  	</template> 
		  </alertMessage>
	    </div>
		<div class="container">
			<miservice></miservice>
		</div>
		
	    <mifooter></mifooter>
		
	  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import miheader from '@/components/Header.vue'
import ProductHeader from '@/components/ProductHeader'
import miservice from '@/components/Servisebar.vue'
import mifooter from '@/components/Footer.vue'
import alertMessage from './AlertMessage.vue'
export default{
	name:"Product",
	data(){
		return {
			showModal:false,
			// 获取商品的id
			id:this.$route.params.id,
			productMessage:{},
			cartlist:[],
			version:1,//商品版本切换
			swiperOption:{
			  autoplay:true,
			  pagination: {
			    el: '.swiper-pagination',
			    clickable :true,
			  }
			}
		}
	},
	components:{
		miheader,ProductHeader,Swiper,SwiperSlide,miservice,mifooter,alertMessage
	},
	methods:{
		// 添加购物车
		addCart:function(){
		  this.showModal=true;
		  if(!localStorage.getItem('cart')){
			  this.axios.get('/cartMessage').then((res)=>{
			  localStorage.setItem("cart",JSON.stringify(res.data));})  
		  }
		  this.cartlist=JSON.parse(localStorage.getItem('cart'));
		  for(let i=0;i<this.cartlist.length;i++){
			  if(this.productMessage.id===this.cartlist[i].id){
			  	this.cartlist[i].quantity+=1;	
			  	this.cartlist[i].totalPrice=this.cartlist[i].price*this.cartlist[i].quantity;
			  	localStorage.setItem("cart",JSON.stringify(this.cartlist));
				return;
			  }
		  }
		  this.cartlist.push(this.productMessage);
		  localStorage.setItem("cart",JSON.stringify(this.cartlist));

		},
		getproduct:function(){
			
			// console.log({id:this.id});
			this.axios.post('/productMessage',{id:this.id}).then((res)=>{
				this.productMessage=res;
				
			})
			
		}
	},
	mounted() {
		this.getproduct();
	}
}
</script>

<style lang="scss"> 
@import './../assets/css/reset.scss';
@import './../assets/css/button.scss';
  .detail{
	 .container{
		  width: 1226px;
		  margin: 0 auto;
	  }
    .wrapper{
		width: 1226px;
		margin: 0 auto;
		height: 100%;
		overflow: auto;
      .swiper{
        float:left;
        width:560px;
        height:560px;
        margin-top:5px;
        img{
          width:100%;
          height:100%;
        }
      }
      .content{
        float:right;
        width:584px;
        height:1000px;
        .item-title{
          font-size:28px;
          padding-top:30px;
          padding-bottom:16px;
          height: 26px;
        }
        .item-info{
          font-size:14px;
          height: 36px;
        }
        .delivery{
          font-size:16px;
          color:#FF6700;
          margin-top:26px;
          margin-bottom:14px;
          height: 15px;
        }
        .item-price{
          font-size:20px;
          color:#FF6700;
          height: 19px;
          .del{
            font-size:16px;
            color:#999999;
            margin-left:10px;
            text-decoration:line-through;
          }
        }
        .line{
          height:0;
          margin-top:25px;
          margin-bottom:28px;
          border-top:1px solid #E5E5E5;
        }
        .item-addr{
          height:108px;
          background-color:#FAFAFA;
          border:1px solid #E5E5E5;
          box-sizing:border-box;
          padding-top:31px;
          padding-left:64px;
          font-size:14px;
          line-height:14px;
          position:relative;
          .icon-loc{
            position: absolute;
            top: 27px;
            left: 34px;
			display:inline-block;
			width:20px;
			height:20px;
          }
          .addr{
            color:#666666;
          }
          .stock{
            margin-top:15px;
            color:#FF6700;
          }
        }
        .item-version,.item-color{
          margin-top:30px;
          h2{
            font-size:18px;
            margin-bottom:20px;
          }
        }
        .item-version,.item-color{
          .phone{
            width:287px;
            height:50px;
            line-height:50px;
            font-size:16px;
            color:#333333;
            border:1px solid #E5E5E5;
            box-sizing: border-box;
            text-align:center;
            cursor:pointer;
            span{
              color:#666666;
              margin-left:15px;
            }
            .color{
              display:inline-block;
              width:14px;
              height:14px;
              background-color:#666666;
            }
            &.checked{
              border:1px solid #FF6600;
              color:#FF6600;
            }
          }
        }
        .item-total{
          height: 108px;
          background: #FAFAFA;
          padding: 24px 33px 29px 30px;
          font-size: 14px;
          margin-top:50px;
          margin-bottom:30px;
          box-sizing: border-box;
          .phone-total{
            font-size: 24px;
            color: #FF6600;
            margin-top: 18px;
          }
        }
      }
    }
    
  }
</style>
