<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box" @click="login">
            <a href="javascript:;" class="btn" >登录</a>
          </div>
          <div class="tips">
            <div class="sms" >手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="#" target="_blank">简体</a><span>|</span>
        <a href="#" target="_blank">繁体</a><span>|</span>
        <a href="#" target="_blank">English</a><span>|</span>
        <a href="#" target="_blank">常见问题</a><span>|</span>
		<a href="#" target="_blank">隐私政策</a>
      </div>
      <p class="copyright">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';
export default {
  name: 'login',
  data(){
    return {
      username:'',
      password:'',
      userId:'',
	  user:""
    }
  },
  methods:{
    login(){
	  let userdata={
		  username:this.username,
		  // password使用m5进行加密
		  password:md5(this.password)
	  }
      // let { username,password } = this;
      // this.axios.post('/user/login',{
      //   username,
      //   password
      // })
	  this.axios.post('/user/login',{
		  username:this.username,
		  password:md5(this.password)
	  }).then((res)=>{
        // this.$cookie.set('userId',res.id,{expires:'Session'});
		// dispatch用来分发action
		sessionStorage.setItem("username",res.username);
		sessionStorage.setItem("userid",res.userid);
		// console.log(res);
        this.$store.dispatch('saveUserName',res.username);
		this.$store.dispatch('saveUserId',res.userid);
		// console.log("1");
        // this.saveUserName(res.username);
       // this.res=res;
	   this.$router.push('/index');
      })
    }
   
    
  }
}
</script>
<style lang="scss">
@import './../assets/css/reset.scss';
@import './../assets/css/button.scss';
.login{
  .container{
    height:113px;
	position: relative;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('../../images/login.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:2px;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:45px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
			box-sizing: border-box;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>