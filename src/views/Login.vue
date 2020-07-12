<template>
    <div class="app" :class="animateClass">
        <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <van-form class="loginform">
  <van-field
  class="loginlist"
    v-model="mobile"
    name="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
  class="loginlist"
    v-model="password"
    name="验证码"
    placeholder="验证码"
    :rules="[{ required: true, message: '请填写验证码' }]"
  />
  <div style="margin: 16px;">
    <van-button class="btn" round block type="info" @click="checkSms">
      登录
    </van-button>
    <div @click="sendSms" class="getpsw">获取验证码</div>
  </div>
</van-form>
    
    </div>
</template>


<script>
import {
    animate
} from "@/utils"
export default {
    mixins:[animate],
    data(){
        return{
          mobile:"",
          password:''  
        }
    },
    methods:{
        checkSms(){
            this.$axios.get("/yun/captcha/verify",{
                 params:{
                    phone:this.mobile,
                    captcha:this.password
                }
            }).then(res=>{
                if(res.data.code==200){
                    localStorage.mobile = this.mobile;
                    localStorage.isLogin = true;
                    this.$router.push({name:'mine'})
                }else{}
                localStorage.isLogin = false;
            })
        },
        sendSms(){
            this.$axios.get("/yun/captcha/sent",{
                params:{
                    phone:this.mobile
                }
            })
            .then(res=>{
                console.log(res);
            })
        }
    },
}
</script>


<style lang="scss" scoped>
.app{
    height: 100%;
    background: white;
    overflow: hidden;
}
div{
    box-sizing: border-box;
}
   .logo{
    margin: 100px auto 40px;
    margin-top:70px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img{
        display: block;
        width: 60px;
        height: 60px;
        text-align: center;
        margin:0 auto;
    }
   }
   .loginform{
            font-size: 20px;
           line-height: 55px;
            margin: 0 25px;
            .loginlist{
                font-size: 15px;
                padding: 20px 0;
            }
   }
   .btn{
       width: 325px;
       border-radius: 0;
       margin-left: -10px;
       margin-top: 60px;
       background: #ff5f16;
       border:none;
   }
   .getpsw{
       position: absolute;
        right: 30px;
        top: 200px;
        line-height: 30px;
        width: 90px;
        text-align: right;
        float: right;
        font-size: 13px;
        border-radius: 3px;
        cursor: pointer;
   }
</style>