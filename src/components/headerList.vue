<template>
	<div class="header">
		<div class="topbar">
			<div class="container">
				<div class="header-nav">
					<div class="container">
						<div class="mi-logo">
							<a href=""></a>	
						</div>
						<div class="nav">
							<div class="nav-item">
								<span>小米手机</span>
								<div class="native-item-child">
									<ul>
										<li class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li  class="product">
										<li class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li>
										<li  class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li>
										<li  class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li>
										<li  class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li>
										<li  class="product">
											<a href="" target="_blank">
												<img src="../../images/nav1.webp" alt="">
												<div class="name">红米</div>
												<div class="price">1326元</div>
											</a>
										</li>
									</ul>
									
								</div>
							</div>
							<div class="nav-item">
								<span>Redmi红米</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>电视</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>笔记本</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>家电</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>路由器</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>智能硬件</span>
								<div class="native-item-child">
									<div class="product">						
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>服务</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
								</div>
							</div>
							<div class="nav-item">
								<span>社区</span>
								<div class="native-item-child">
									<div class="product">
										
									</div>
							    </div>
							</div>
						</div>
						<div class="mi-search">
							<div class="con">
								<input type="text">
								<i class="fa fa-search" aria-hidden="true"></i>
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
	name:"headerList"
}
</script>

<style lang="scss" scoped>
.header{
	.topbar{
		width: 100%;
		height: 39px;
		line-height: 39px;
		background-color: #333333;
		color: #B0B0B0;
		.container{
			width: 1226px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			.header-nav{
				height: 112px;
				.container{
					width: 1226px;
					margin: 0 auto;
					color:#333;
					position: relative;
						// 鼠标经过改变图片margnin-left实现图片切还,使用伪类添加两个图片
					.mi-logo{
						float: left;
						width:55px;
						height: 55px;
						margin-top: 22px;
						background-color: #FF6600;
						a{
							display: inline-block;
							width: 55px;
							height: 55px;
							overflow: hidden;
							&:before{
								display: inline-block;
								// 用来占位的
								content: '';    
								width: 55px;
								height: 55px;
								background-size: 55px;
								background: url(../../images/mi-logo.png) no-repeat center;
								transition: margin .3s;
							}
							&:after{
								content: '';
								display: inline-block;
								width: 55px;
								height: 55px;
								background: url(../../images/mi-home.png) no-repeat center;
								background-size: 55px;
							}
							&:hover:before{
								margin-left: -55px;
								transition: margin .3s;
							}
						}
				    }
				    .nav{
					     float: left;
					     width:650px;
					     padding-left: 50px;
					     .nav-item{
					     	display: inline-block;
					     	font-size: 16px;
							line-height: 112px;
							color: #333333;
							font-weight: bold;
							margin-right: 20px;
							&:hover{
								cursor: pointer;	
								.native-item-child{
									height: 240px;
									opacity: 1;
									z-index: 100;
								}
						    }
							.native-item-child{
								width: 1226px;		
								background-color: #FFFFFF;
								opacity:0;
								overflow: hidden;
								border-top:1px solid #E5E5E5;
								position: absolute;
								left: 0;
								top:112px;
								box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
								ul{
									height: 220px;
									padding: 0;
									width: 1226px;
									margin:0 auto;
									.product{
										float: left;
										width: 16.6%;
										heigh: 220px;
										line-height: 12px;
										list-style: none;
										margin: 0;
										padding:0;
										font-size: 12px;
										position: relative;
										&:before{
											content: '';
											position: absolute;
											top:28px;
											rigt: 0;
											border-left:1px solid #CCCCCC;
											height: 100px;
										}
										&:last-child:before{
											display: none;
										}
										a{
											display: inline-block;
											width: 100%;
											height: 100%;
											text-decoration: none;
											text-align: center;
											color: #333333;							
											img{
												height: 137px;
												width: auto;
											}
											.name{
												width: 100%;
												height: 20px;
												font-size: 16px;
												margin-top: 19px;
												margin-bottom: 8px;
												font-weight: bold;
				
												}
												.price{
													font-size: 12px;
													color:#FF6600;
												}
											}
											
						                }
									}
									
								 	
							    }
							}			    
					    }
						.mi-search{
							width:296px;			
							float: right;
							margin-top: 25px;
							.con{
								height: 55px;
								width: 296px;
								position: relative;
								border:1px solid #E0E0E0;
								box-sizing: border-box;
								
								input{
									border: none;
									position: absolute;
									top: 0;
									border-right: 1px solid #E0E0E0;
									width: 223px;
									height: 51px;
									line-height: 51px;
									padding-left: 14px;	
								}
								i{
									position: absolute;
									top: 30%;
									right: 20px;	
								}
								
							}
			            }			
			        }
		        }
	        }
    }
}  			
</style>
      