<template>
  <div class="index">
	<miheader></miheader>
	<!-- <headerList></headerList> -->
	<!-- <headerList></headerList> -->
	<miswiper></miswiper>
	<mainProduct></mainProduct>
	<alertMessage 
	title="提示" 
	sureText="查看购物车" 
	modalType="middle" 
	btnType="1" 
	v-bind:showModal="false">
		 <template v-slot:body>
			<p>这是一个p</p>
		</template> 
	</alertMessage>
	<!-- <modal
	  title="提示" 
	  sureText="查看购物车" 
	  btnType="1" 
	  modalType="middle" 
	  v-bind:showModal="showModal"
	  v-on:submit="goToCart"
	  v-on:cancel="showModal=false"
	  >
	  <template v-slot:body>
	    <p>商品添加成功！</p>
	  </template>
	</modal> -->
	<miservice></miservice>
	<mifooter></mifooter>
	
  </div>
</template>

<script>
import miheader from './Header.vue'
// import headerList from './headerList.vue'
import mifooter from './Footer.vue'
import miswiper from './Swiper.vue'
import miservice from './Servisebar.vue'
import mainProduct from './MainProduct.vue'
import alertMessage from './AlertMessage.vue'
export default {
  name: 'index',
  components: {
    miheader,mifooter,miservice,miswiper,mainProduct,alertMessage
  },
  data(){
    return {
  	  
    }
  }
}
</script>

<style>
/* @import './assets/css/reset.scss';
@import url("assets/font-awesome-4.7.0/css/font-awesome.min.css"); */
</style>
