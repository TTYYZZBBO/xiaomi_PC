<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><i class="fa fa-wrench" aria-hidden="true" ></i>预约维修服务</li>
        <li><i class="fa fa-check-circle" aria-hidden="true"></i>7天无理由退货</li>
        <li><i class="fa fa-check-circle" aria-hidden="true"></i>15天免费换货</li>
        <li><i class="fa fa-gift" aria-hidden="true"></i>满99元包邮</li>
		<li><i class="fa fa-map-marker" aria-hidden="true"></i>520余家售后网点</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'miservice'
  }
</script>
<style lang="scss">
  .service{
    padding:33px 0;
    color:#666666;
    font-size:16px;
    li{
      display:inline-block;
      width:19.9%;
      text-align:center;
      border-right:1px solid #E5E5E5;
      span{
        display:inline-block;
        width:20px;
        height:20px;
        vertical-align: middle;
        margin-right:8px;
      }
      i{
        width: 20px;
		height: 20px;
      }
	  &:hover{
		  color: #FF6600;
		  cursor: pointer;
	  }
      
    }

  }
</style>