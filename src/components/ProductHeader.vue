<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;" @click="productDescription">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">F码通道</a><span>|</span>
		<a href="javascript:;">咨询客服</a><span>|</span>
		<a href="javascript:;">F用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'productHeader',
    props:{
      title:String
    },
    data(){
      return {
        isFixed:false
      }
    },
    mounted(){
		// 监听页面卷曲高度,超过之后顶部fix定位
      window.addEventListener('scroll',this.initHeight)
    },
    methods:{
      initHeight(){
		  // 页面卷曲高度兼容,页面高度超过152添加固定定位的class
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152? true:false;
      },
	  productDescription(){
		  this.$router.push('/ProductDescription');
	  }
    },
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false)
    }
  }
</script>
<style lang="scss">
@import './../assets/css/reset.scss';
@import './../assets/css/button.scss';
  .nav-bar{
    height:70px;
    line-height:70px;
    border-top:1px solid #E5E5E5;
    background-color:#FFFFFF;
    z-index:10;
	&.is_fixed{
	  position:fixed;
	  top:0;
	  width:100%;
	  box-shadow: 0 5px 5px #cccccc;
	}
    .container{
      display: flex;
	  justify-content: space-between;
	  align-items: center;
      .pro-title{
        font-size:18px;
        color:#333333;
        font-weight:bold;
      }
      .pro-param{
        font-size:14px;
        span{
          margin:0 10px;
        }
        a{
          color:#666666;
        }
      }
    }
  }
</style>