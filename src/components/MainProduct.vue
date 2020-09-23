<template>
  <div class="index">
	<div class="product-box">
		<div class="container">
			<!-- 大的banner -->
			<div class="banner">
			  <a href="#">
				  <!-- 记录遇到的坑:v-lazy使用本地相对路径有问题必须使用require()解决 -->
			    <img v-lazy="require('../../images/banner1.webp')" alt="">
			  </a>
			</div>
		    <h2>手机</h2>
		    <div class="wrapper">
		      <div class="banner-left">
		        <a href="#"><img v-lazy="require('../../images/mainproduct1.webp')" alt=""></a>
		      </div>
		      <div class="list-box">
		        <div class="list" v-for="(item,index) in phoneList" :key="index">  
		            <div class="item-img">
		              <img :src="item.img" alt="">
		            </div>
		            <div class="item-info">
		              <h3>{{item.name}}</h3>
		              <p>{{item.des}}</p>
		              <p class="price">{{item.price}}元起</p>
		            </div>
		        </div>
		      </div>
		    </div>
			<!-- 大的banner -->
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner2.webp')" alt="">
			  </a>
			</div>
			<productsignal name="家电" :jiadian="jidianList"></productsignal>
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner3.webp')" alt="">
			  </a>
			</div>
			<productsignal name="智能" :jiadian="zhinengList"></productsignal>
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner4.webp')" alt="">
			  </a>
			</div>
			<productsignal name="搭配" :jiadian="dapeiList"></productsignal>
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner5.webp')" alt="">
			  </a>
			</div>
			<productsignal name="配件" :jiadian="peijianList"></productsignal>
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner6.webp')" alt="">
			  </a>
			</div>
			<productsignal name="周边" :jiadian="zhoubianList"></productsignal>
			<div class="banner">
			  <a href="#">
			    <img v-lazy="require('../../images/banner7.webp')" alt="">
			  </a>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import productsignal from './ProductSignal.vue'
export default{
    
    components: {
      productsignal
    },
    data(){
      return {
		  zhoubianList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米000000至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米10至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米10至尊版",
		    			des:"120X变焦/1200W秒充/120Hz屏幕",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  peijianList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米000000至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米10至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米10至尊版",
		    			des:"120X变焦/1200W秒充/120Hz屏幕",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  dapeiList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米000000至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米10至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米10至尊版",
		    			des:"120X变焦/1200W秒充/120Hz屏幕",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  zhinengList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米000000至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米10至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米10至尊版",
		    			des:"120X变焦/1200W秒充/120Hz屏幕",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  zhinengList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米000000至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米10至尊版",
		    		  				des:"120X变焦/1200W秒充/120Hz屏幕",
		    		  				price:"5299"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米10至尊版",
		    			des:"120X变焦/1200W秒充/120Hz屏幕",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  jidianList:[
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"Redmi 红米电视 70英寸 ",
		    		  				des:"70英寸震撼巨屏，4K画质，细腻如真",
		    		  				price:"2729"
		    		  },
		    		  {
		    		  				id:"",
		    		  				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  				name:"小米全面屏电视E32C",
		    		  				des:"全面屏设计，人工智能系统",
		    		  				price:"699"
		    		  },
		    		  {
		    			id:"",
		    			img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    			name:"小米全面屏电视E55A",
		    			des:"全面屏设计，人工智能语音",
		    			price:"5299"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 至尊版",
		    		  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
		    		    price:"1999"
		    		  },
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"腾讯黑鲨3S ",
		    		  	des:"骁龙865处理器，120Hz刷新率",
		    		    price:"3999"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi 9A",
		    		  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
		    		  	price:"499"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10 青春版 5G",
		    		  	des:"50倍潜望式变焦 / 轻薄5G手机",
		    		  	price:"1899"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"小米10",
		    		    des:"骁龙865/1亿像素相机",
		    		  	price:"3699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"2699"
		    		  },
		    		  
		    		  {
		    		  	id:"",
		    		  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
		    		  	name:"Redmi K30 Pro 变焦版",
		    		  	des:"双模5G，骁龙865，弹出全面屏",
		    		  	price:"3799"
		    		  }	  
		  ],
		  
		  phoneList:[
			  {
				id:"",
				img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=213&h=213&f=webp&q=90",
				name:"小米10至尊版",
				des:"120X变焦/1200W秒充/120Hz屏幕",
				price:"5299"
			  },
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"Redmi K30 至尊版",
			  	des:"120Hz弹出全面屏，天玑1000+旗舰处理器",
			    price:"1999"
			  },
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"腾讯黑鲨3S ",
			  	des:"骁龙865处理器，120Hz刷新率",
			    price:"3999"
			  },
			  
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"Redmi 9A",
			  	des:"5000mAh长循环大电量，6.53超大护眼屏幕",
			  	price:"499"
			  },
			  
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"小米10 青春版 5G",
			  	des:"50倍潜望式变焦 / 轻薄5G手机",
			  	price:"1899"
			  },
			  
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"小米10",
			    des:"骁龙865/1亿像素相机",
			  	price:"3699"
			  },
			  
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"Redmi K30 Pro",
			  	des:"双模5G，骁龙865，弹出全面屏",
			  	price:"2699"
			  },
			  
			  {
			  	id:"",
			  	img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=213&h=213&f=webp&q=90",
			  	name:"Redmi K30 Pro 变焦版",
			  	des:"双模5G，骁龙865，弹出全面屏",
			  	price:"3799"
			  }	  
		  ]
      }
	}
  }
</script>
<style lang="scss" scoped>
.index{
	.product-box{
      background-color:#F5F5F5;
      padding:0 0 50px;
	  .container{
		  width: 1226px;
		  margin: 0 auto;
		  .banner{
		    margin-bottom:20px;
			 margin-top: 20px;
		    a{
		  	  width: 100%;
		  	  img{
		  		  width: 100%;
		  	  }
		    }
		  }
		  h2{
		    font-size:#d7d7d7;
		    height:21px;
		    line-height:21px;
		    color:#333333;
		    margin-bottom:20px;
		  }
		  .wrapper{
		    display:flex;
		    .banner-left{
		      margin-right:16px;
		      img{
		        width:224px;
		        height:619px;
		      }
		    }
		    .list-box{
				display: flex;
				flex-wrap: wrap;
				// align-items: center;
				align-content:flex-start;
				justify-content: space-between;
				width:986px;
				height: 100%;
				// margin-bottom:14px;
		        .list{
		          width:236px;
		          height:302px;
		          background-color:#ffffff;
		          text-align:center; 
				  // padding-left:20px;
				  // padding-bottom: 20px;
				 
				  margin-bottom: 14px;
				  &:hover{
					 // 鼠标移入后动画
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