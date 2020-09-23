<template>
	<!-- vue的transition动画效果 -->
	<transition name="slide">
		<div class="modal" v-show="showModal">
			<!-- 遮罩层 -->
		  <div class="mask"></div>
		  <div class="modal-dialog">
		    <div class="modal-header">
		      <span>标题</span>
			  <i class="fa fa-times icon-close" aria-hidden="true"></i>
		    </div>
		    <div class="modal-body">
		      <slot name="body"></slot>
		    </div>
		    <div class="modal-footer">
				<div class="btn-group">
					<a href="javascript:;" class="btn" @click="hidden">确定</a>
					<a href="javascript:;" class="btn" @click="hidden">取消</a>
				</div>
		    </div>
		  </div>
		</div>
	</transition>
    
</template>
<script>
export default{
    name:'alertmessage',
	methods:{
		hidden:function(){
			this.showModal=false;
		}
	},
    props:{
      // 弹框类型：小small、中middle、大large、表单form
      modalType:{
        type:String,
        default:'form'
      },
      // 弹框标题
      title:String,
      // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cancelText:{
        type:String,
        default:'取消'
      },
      showModal:Boolean
    }
  }
</script>
<style scoped lang="scss">
@import './../assets/css/reset.scss';
@import './../assets/css/button.scss';
.modal{
	z-index: 1000;
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height:100% ;
	.mask{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height:100% ;
		background-color: #000000;
		opacity: 0.3;
	}
	transition:  all  .3s;
	&.slide-enter{
		TOP:-100%;
	}
	&.slide-enter-active{
		top:0;
	}
	&.slide-leave-active{
		top:-100%;
	}
	.modal-dialog{
		width: 660px;
		// height: 500px;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #ffffff;
		z-index: 10000;
		.modal-header{
			height: 60px;
			line-height: 60px;
			font-size: 20px;
			// background-color: red;
			background-color: #F5F5F5 ;
			padding:0 25px;
			i{
				position: absolute;
				top:20px;
				right:20px;
				width: 14px;
				height: 14px;
				transition: transform .2s;
				&:hover{
					transform: scale(1.5);
				}
				
			}
		}
		.modal-body{
			padding:42px 40px 54px;
			font-size: 18px;
		}
		.modal-footer{
			height: 82px;
			line-height: 82px;
			text-align: center;
			background-color: #F5F5F5;
		}
		
		
	}
	
}
</style>