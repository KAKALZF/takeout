webpackJsonp([24],{150:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(36),a=e.n(o),i=e(2),c=(e.n(i),e(12)),r=e.n(c),u=e(0),l=e(52),p=e(11),s=e.n(p),h=e(5),m=(e.n(h),e(37)),d=(e.n(m),e(13));u.default.use(s.a),u.default.use(l.a);var f=function(n){return e.e(0).then(function(){var t=[e(84)];n.apply(null,t)}.bind(this)).catch(e.oe)},L=function(n){return e.e(1).then(function(){var t=[e(83)];n.apply(null,t)}.bind(this)).catch(e.oe)},b=function(n){return e.e(7).then(function(){var t=[e(294)];n.apply(null,t)}.bind(this)).catch(e.oe)},v=function(n){return e.e(6).then(function(){var t=[e(295)];n.apply(null,t)}.bind(this)).catch(e.oe)},y=function(n){return e.e(12).then(function(){var t=[e(296)];n.apply(null,t)}.bind(this)).catch(e.oe)},g=function(n){return e.e(9).then(function(){var t=[e(290)];n.apply(null,t)}.bind(this)).catch(e.oe)},w=function(n){return e.e(8).then(function(){var t=[e(291)];n.apply(null,t)}.bind(this)).catch(e.oe)},$=function(n){return e.e(3).then(function(){var t=[e(297)];n.apply(null,t)}.bind(this)).catch(e.oe)},x=function(n){return e.e(4).then(function(){var t=[e(286)];n.apply(null,t)}.bind(this)).catch(e.oe)},S=function(n){return e.e(21).then(function(){var t=[e(287)];n.apply(null,t)}.bind(this)).catch(e.oe)},N=function(n){return e.e(20).then(function(){var t=[e(288)];n.apply(null,t)}.bind(this)).catch(e.oe)},O=function(n){return e.e(22).then(function(){var t=[e(285)];n.apply(null,t)}.bind(this)).catch(e.oe)},P=function(n){return e.e(19).then(function(){var t=[e(289)];n.apply(null,t)}.bind(this)).catch(e.oe)},R=function(n){return e.e(16).then(function(){var t=[e(292)];n.apply(null,t)}.bind(this)).catch(e.oe)},j=function(n){return e.e(18).then(function(){var t=[e(293)];n.apply(null,t)}.bind(this)).catch(e.oe)},k=function(n){return e.e(10).then(function(){var t=[e(284)];n.apply(null,t)}.bind(this)).catch(e.oe)},_=function(n){return e.e(11).then(function(){var t=[e(283)];n.apply(null,t)}.bind(this)).catch(e.oe)},C=function(n){return e.e(14).then(function(){var t=[e(303)];n.apply(null,t)}.bind(this)).catch(e.oe)},J=function(n){return e.e(15).then(function(){var t=[e(300)];n.apply(null,t)}.bind(this)).catch(e.oe)},M=function(n){return e.e(13).then(function(){var t=[e(302)];n.apply(null,t)}.bind(this)).catch(e.oe)},T=function(n){return e.e(5).then(function(){var t=[e(301)];n.apply(null,t)}.bind(this)).catch(e.oe)},U=function(n){return e.e(17).then(function(){var t=[e(299)];n.apply(null,t)}.bind(this)).catch(e.oe)},q=function(n){return e.e(2).then(function(){var t=[e(298)];n.apply(null,t)}.bind(this)).catch(e.oe)};u.default.config.productionTip=!1;var z=new l.a({routes:[{path:"*",redirect:"/realNameList"},{name:"basic",path:"/basic",component:L},{name:"login",path:"/login",component:f},{name:"customerList",path:"/customerList",component:b},{name:"realNameList",path:"/realNameList",component:v},{name:"uploadPic",path:"/uploadPic",component:y},{name:"channelList",path:"/channelList",component:g},{name:"flowPoolList",path:"/flowPoolList",component:w},{name:"cardStatistic",path:"/cardStatistic",component:$},{name:"comboList",path:"/comboList",component:R},{name:"rateList",path:"/rateList",component:j},{name:"cardList",path:"/cardList",component:x},{name:"inputRecordList",path:"/inputRecordList",component:S},{name:"outputRecordList",path:"/outputRecordList",component:N},{name:"batchOperateList",path:"/batchOperateList",component:O},{name:"specialOperateList",path:"/specialOperateList",component:P},{name:"platformStreamList",path:"/platformStreamList",component:k},{name:"customerStreamList",path:"/customerStreamList",component:_},{name:"roleList",path:"/roleList",component:C},{name:"accountList",path:"/accountList",component:J},{name:"resourceList",path:"/resourceList",component:M},{name:"logList",path:"/logList",component:T},{name:"index",path:"/index",component:q},{name:"orderList",path:"/orderList",component:U}]});r.a.interceptors.response.use(function(n){return window.mytips=d.mytips,405==n.data.code?window.location.href="/index.html":n.data.code>0?(console.log("返回的响应code>0"),e.i(d.mytips)(n.data.message),window.location.href="/center.html#/cardList"):n.data.code<0&&(console.log("返回的响应code<0"),e.i(d.mytips)("系统异常")),n},function(n){return e.i(d.mytips)("连接异常"),a.a.reject(n)});new u.default({el:"#app",router:z,data:function(){return{restNum:1,username:"涛涛",nav:["login","basic"]}},methods:{handleSelect:function(n,t){console.log("控制导航页的页面跳转"),this.$router.push(t)},skip:function(n){console.log(n),this.$router.push(n)},getUser:function(){var n=this;r()({url:"/user"}).then(function(t){0==t.data.code&&(console.log(t),n.username=t.data.data.username)})},hasPerm:function(n){return this.nav.indexOf(n)>-1},handleCommand:function(n){"index"==n?(console.log("点击子菜单",n),this.$router.push("/index")):"logout"==n?window.location.href="/index.html":"realName"==n&&this.$router.push("/basic")}},watch:{$route:function(n,t){console.log("to========"),console.log(n),console.log(t),console.log("this.$router",this.$router),console.log("this.$route",this.$route)}},computed:{activeNav:function(){return this.$route.path}}})},37:function(n,t){},5:function(n,t){}},[150]);