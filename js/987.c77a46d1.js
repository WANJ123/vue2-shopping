"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[987],{987:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(t._s(60===t.second?"获取验证码":t.second+"秒后重新获取"))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],a=i(5720);const n=function(){return a.A.get("/captcha/image")},c=(t,e,i)=>a.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobiel:i}}),r=(t,e)=>a.A.post("/passport/login",{form:{isParty:!1,partyData:{},mobile:t,smsCode:e}});var l={name:"LoginIndex",created(){this.getPicCode()},data(){return{picCode:"",picKey:"",picUrl:"",totalSecond:60,second:60,timer:null,mobile:"",msgCode:""}},methods:{async getPicCode(){const{data:t}=await n();this.picUrl=t.base64,this.picKey=t.key},vaildFn(){return/^1[3-9]\d{9}$/.test(this.mobile)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入正确的图形验证码"),!1):(this.$toast("请输入正确的手机号"),!1)},async getCode(){this.vaildFn()&&(this.timer||this.second!==this.totalSecond||(await c(this.picCode,this.picKey,this.mobile),this.$toast("验证码已发送，请注意查收!"),this.timer=setInterval((()=>{this.second--,this.second<=0&&(clearInterval(this.timer),this.second=this.totalSecond,this.timer=null)}),1e3)))},async login(){if(!this.vaildFn())return;if(!/^\d{6}$/.test(this.msgCode))return void this.$toast("请输入正确的手机验证码");const t=await r(this.mobile,this.msgCode);this.$store.commit("users/setUserInfo",t.data),console.log(t),this.$toast("登录成功");const e=this.$route.query.backUrl||"/";this.$router.replace(e)}},destroyed(){clearInterval(this.timer)}},d=l,m=i(1656),p=(0,m.A)(d,s,o,!1,null,"4789636e",null),h=p.exports}}]);
//# sourceMappingURL=987.c77a46d1.js.map