<template>
  <div class="cart">
    <cartHeader title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </cartHeader>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in list" v-bind:key="index">
              <div class="item-check">
                <span class="checkbox" v-bind:class="{'checked':item.selected}"></span>
              </div>
              <div class="item-name">
                <img :src="item.productMainImage" alt=""></br>
                <span>{{item.productName}}</span>
				<!-- <span>{{item.subTitle}}</span> -->
              </div>
              <div class="item-price">{{item.price}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(index,item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;"  @click="updateCart(index,item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.totalPrice}}</div>
              <div class="item-del" @click="delProduct(index)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/index">继续购物</a>
            共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" >去结算</a>
          </div>
        </div>
      </div>
    </div>
   <miservice></miservice>
   <mifooter></mifooter>
  </div>
</template>
<script>
import cartHeader from './cartHeader.vue'
import miservice from './Servisebar.vue'
import mifooter from './Footer.vue'
  export default{
    name:'index',
    components:{
      cartHeader,
      miservice,
      mifooter
    },
    data(){
      return {
        list:[],//商品列表
        allChecked:false,//是否全选
        cartTotalPrice:0,//商品总金额
        checkedNum:0//选中商品数量
      }
    },
    mounted(){
      this.getCartList();
    },
    methods:{
      // 获取购物车列表
      getCartList:function(){
		this.list=JSON.parse(localStorage.getItem("cart"));
		this.allChecked=this.list.selectdAll;
		for(let i=0;i<this.list.length;i++){
			this.cartTotalPrice+=this.list[i].totalPrice;
		}
		this.checkedNum=this.list.cartTotaolQuantity;	  	
      },
      // 更新购物车数量
      updateCart(index,item,type){
        let quantity = item.quantity;
        //     selected = item.productSelected;
        if(type == '-'){
          if(quantity <= 0){
            quantity=0;
			this.list.splice(index,1);
            return;
			localStorage.setItem('cart',JSON.stringify(this.list));
          }
          --quantity;
		  this.cartTotalPrice-=this.list[index].price;
        }else if(type == '+'){
          if(quantity > item.stock){
            alert('购买数量不能超过库存数量');
            return;
          }
          ++quantity;
		  this.cartTotalPrice+=this.list[index].price;
        }
		this.list[index].quantity=quantity;
		this.list[index].totalPrice=quantity* this.list[index].price;
		localStorage.setItem('cart',JSON.stringify(this.list));
        
      },
      // 删除购物车商品
      delProduct(index){
		 this.list.splice(index,1);
		 localStorage.setItem('cart',JSON.stringify(this.list));
      },
      // 控制全选功能
      // toggleAll(){
      //   let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
      //   this.axios.put(url).then((res)=>{
      //     this.renderData(res);
      //   })
      // },
      // 公共赋值
      // renderData(res){
      //   this.list = res.cartProductVoList || [];
      //   this.allChecked = res.selectedAll;
      //   this.cartTotalPrice = res.cartTotalPrice;
      //   this.checkedNum = this.list.filter(item=>item.productSelected).length;
      // },
      // // 购物车下单
      // order(){
      //   let isCheck = this.list.every(item=>!item.productSelected);
      //   if(isCheck){
      //     this.$message.warning('请选择一件商品');
      //   }else{
      //     this.$router.push('/order/confirm');
      //   }
      // }
    }
  }
</script>
<style lang="scss">
@import './../assets/css/reset.scss';
@import './../assets/css/button.scss';
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url(../../images/icon-gou.png) #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
			  margin-left: -15px;
			  margin-right: 3px;
            }
            .item-name{
              flex:3;
              font-size: 14px;
			 
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
			  
              background:url(../../images/icon-close.png) no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>