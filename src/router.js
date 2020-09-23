import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index.vue'
import Product from '@/components/product.vue'
import login from '@/components/login.vue'
import ProductDescription from '@/components/ProductDescription.vue'
import cart from '@/components/cart.vue'
Vue.use(VueRouter);
const routes=[
	{path:'/index',component:index},
	{path:'/product/id=:id',component:Product},
	{path:'/login',component:login},
	{path:'/ProductDescription',component:ProductDescription},
	{path:'/cart',component:cart}
]
const router =new VueRouter({
	 mode:"history",
	 routes
})
export default router
