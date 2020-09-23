<template>
  <div class="product" >
	<miheader></miheader>
	
    <div class="content">
	  <ProductHeader v-bind:title="name">
		<!-- <ProductHeader v-bind:title="product.name"> -->
		  <template v-slot:buy>
		    <button class="btn" @click="buy">立即购买</button>
		  </template>
	  </ProductHeader>
      <div class="item-bg">
        <h2><!-- {{product.name}} -->小米10</h2>
        <h3><!-- {{product.subtitle}} -->小米10小米10小米10</h3>
        <p>
          <a href="" id="">小米10 Pro</a>
          <span>|</span>
          <a href="" id="">骁龙869</a>
          <span>|</span>
          <a href="" id="">八核处理器</a>
          <span>|</span>
          <a href="" id="">第五代AI引擎</a>
        </p>
        <div class="price">
          <span>￥<em><!-- {{product.price}} -->1223</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div> 
      <div class="item-video">
		<div class="video-bg" @click="showSlide='slideDown'">
			 <i class="fa fa-play-circle play" aria-hidden="true" @click="showSlide='slideDown'"></i>
		</div>
        <div class="video-box" v-show="showSlide">
			<!-- overlay定义一个遮罩层，视频打开底部遮罩 -->
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
			<i class="fa fa-times icon-close" aria-hidden="true" @click="closeVideo"></i>
           
			<!-- muted静音播放 -->
            <video src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2c0028c1ddc2edba37c18f252d5193a.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
	<miservice></miservice>
	<mifooter></mifooter>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import miheader from './Header.vue'
  import ProductHeader from './../components/ProductHeader'
  import miservice from './Servisebar.vue'
  import mifooter from './Footer.vue'
  
  export default{
    name:'ProductDescription',
    components:{
      Swiper,
      SwiperSlide,
	  miheader,
      ProductHeader,
	  mifooter,
	  miservice
    },
    data(){
      return {
		name:"小米10pro",
		productid:"",
        showSlide:'',//控制动画效果
        // product:{},//商品信息
        // swiperOption:{
        //   autoplay:true,
        //   slidesPerView:3,
        //   spaceBetween: 30,
        //   freeMode: true,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable :true,
      //     }
        }
    },
    mounted(){
      this.productid=this.id;
	  console.log(this.productid);
	  console.log(this.id);
    },
    methods:{
      // getProductInfo(){
      //   let id = this.$route.params.id;
      //   this.axios.get(`/products/${id}`).then((res)=>{
      //     this.product = res;
      //   })
      // },
      buy(){
        // let id = this.$route.params.id;
        // this.$router.push(`/detail/${id}`);
		this.$router.push('/productDetail');
      },
      closeVideo(){
        this.showSlide='slideUp';
        setTimeout(()=>{
          this.showSlide='';
        },600)
      }
    }
  }
</script>
<style lang="scss">
  .product{ 
	.content{
			width: 1226px;
			padding: 0;
			margin: 0 auto;
		    .item-bg{
		      background:url(../../images/product-mi10pro.jpg) no-repeat center;
		      height:718px;
		      // text-align:center;
		      h2{
		        font-size:80px;
				padding-left: 20px;
		       
		      }
		      h3{
				padding-left: 20px;
		        font-size:24px;
		        letter-spacing: 10px;
		      }
		      p{
				padding-left: 20px;
		        margin-top:21px;
		        margin-bottom:40px;
		        a{
				
		          font-size:16px;
		          color:#333333;
		        }
		        span{
			
		          margin:0 15px;
		        }
		      }
		      .price{
				padding-left: 20px;
		        font-size:30px;
		        color:#333333;
		        em{
		          font-style:normal;
		          font-size:38px;
		        }
		      }
		    }
		    .item-bg-2{
		      background:url(../../images/product-mi10pro-4.jpg) no-repeat center;
		      height:480px;
		      background-size:1226px 397px;
		    }
		    .item-bg-3{
		      background:url(../../images/product-mi10pro-3.jpg) no-repeat center;
		      height:638px;
		      background-size:cover;
		    }
		    .item-swiper{
		      margin:36px auto 52px;
		      .desc{
		        font-size:18px;
		        color:#333333;
		        text-align:center;
		      }
		      img{
		        width:100%;
		      }
		    }
		    .item-video{
		      height:1044px;
		      background-color:#070708;
		      margin-bottom:76px;
		      color:#FFFFFF;
		      text-align:center;
		      h2{
		        font-size:60px;
		        padding-top:82px;
		        margin-bottom:47px;
		      }
		      p{
		        font-size:24px;
		        margin-bottom:58px;
		      }
		      .video-bg{
		        background:url(../../images/product-mi10pro-2.jpg) no-repeat center;
		        background-size:cover;
		        width:1226px;
		        height:540px;
		        margin:0 auto 120px;
		        cursor:pointer;
				position: relative;
				.play{
					position: absolute;
					top:60%;
					left: 50%;
					font-size: 60px;
				}
		      }
		      .video-box{
		        .overlay{
		          display: fixed;
		  		top:0;
		  		left: 0;
		  		width: 100%;
		  		height: 100%;
		          background-color:#333333;
		          opacity:.4;
		          z-index:10;
		        }
		     
		        .video{
		          position:fixed;
		          top:-50%;
		          left:50%;
		          transform:translate(-50%,-50%);
		          z-index:10;
		          width:1000px;
		          height:536px;
		          opacity:1;
		          &.slideDown{
		            animation:slideDown .6s linear;
		            top:50%;
		          }
		          &.slideUp{
		            animation:slideUp .6s linear;
		          }
		          .icon-close{
		            position:absolute;
		            top:20px;
		            right:20px;
		            width: 20px;
		  		  height: 20px;
		  		  border-radius: 50%;
		  		  background-color: red;
		  		  color:#FFFFFF;
		            cursor:pointer;
		            z-index:11;
		          }
		          video{
		            width:100%;
		            height:100%;
		  		  // 去除video自带的阴影
		            object-fit:cover;
		            outline:none;
		          }
		        }
		      }
		    }
		  }
		  button{
		    margin-left:10px;
		  }

  }
</style>