<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../images/mi-logo.png" alt="">
      <p>小米商城</p>
    </div>             
    <div class="footer-link">
      <a href="" target="_blank">小米商城</a><span>|</span>
      <a href="" target="_blank">MIUUI</a><span>|</span>
      <a href="" target="_blank">米家</a><span>|</span>
      <a href="" target="_blank">米聊</a><span>|</span>
	  <a href="" target="_blank">多看</a><span>|</span>
	  <a href="" target="_blank">游戏</a><span>|</span>
	  <a href="" target="_blank">政企服务</a><span>|</span>
	  <a href="" target="_blank">小米天猫店</a><span>|</span>
	  <a href="" target="_blank">小米集团隐私</a><span>|</span>
	  <a href="" target="_blank">小米公司儿童信息保护规则</a><span>|</span>
	  <a href="" target="_blank">小米商城隐私政策</a><span>|</span>
	  <a href="" target="_blank">小米商城用户协议</a><span>|</span>
	  <a href="" target="_blank">问题反馈</a><span>|</span>
	  <a href="" target="_blank">Select Location</a>
    </div>
    <div class="copyright">违法和不良信息举报电话：171-5104-4404</div>
  </div>
</template>
<script>
  export default{
    name:'mifooter'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
	
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
		text-decoration: none;
		&:hover{
			color:#FF6600;
		}
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      
    }
  }
</style>