webpackJsonp([1],{314:function(e,t){e.exports=function(e,t,i,a,s){var o,n=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,n=e.default);var l="function"==typeof n?n.options:n;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),a&&(l._scopeId=a);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):i&&(d=i),d){var m=l.functional,u=m?l.render:l.beforeCreate;m?l.render=function(e,t){return d.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,d):[d]}return{esModule:o,exports:n,options:l}}},513:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(12),s=i.n(a),o=i(13);t.default={data:function(){return{loading:null,imgName:""}},props:{value:String,imgUrl:String,fileSize:{type:Number,default:1},width:null,height:null,path:{type:String,default:"/am/billBo/uploadPic"},showPreview:{type:Boolean,default:!0}},methods:{changeImage:function(e){var t=this,a=e.target.files[0];if(a.size>1024*this.fileSize*1024)return i.i(o.mytips)("图片最大只能上传"+this.fileSize+"Mb"),e.target.value=null,!1;if("image/jpeg"!=a.type&&"image/gif"!=a.type&&"image/png"!=a.type&&"image/bmp"!=a.type)return i.i(o.mytips)("只能上传图片"),e.target.value=null,!1;var n=window.URL.createObjectURL(a),r=function(){var e=new FormData;e.append("file",a),t.loading=t.$loading({text:"加载中...",background:"rgba(0,0,0,0.1)"}),s.a.post(""+t.path,e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.loading.close(),0==e.data.code&&(t.imgName=a.name,t.$emit("update:imgUrl",e.data.data.image_url),t.$emit("input",e.data.data.image_name))},function(e){return t.loading.close()})};if(this.width&&"suggest"!=this.width.type||this.height&&"suggest"!=this.height.type){var l=document.createElement("img");l.src=n,l.onload=function(){var e=!1,a="图片尺寸";if(t.width&&("max"==t.width.type&&l.naturalWidth>t.width.value?(e=!0,a+="宽度不能大于"+t.width.value):"min"==t.width.type&&l.naturalWidth<t.width.value?(e=!0,a+="宽度不能小于"+width.value):"equal"==t.width.type&&l.naturalWidth!=t.width.value&&(e=!0,a+="宽度必须为"+t.width.value)),t.height&&("max"==t.height.type&&l.naturalHeight>t.height.value?(a+=e?"，":"",e=!0,a+="高度不能大于"+t.height.value):"min"==t.height.type&&l.naturalHeight<t.height.value?(a+=e?"，":"",e=!0,a+="高度不能小于"+t.height.value):"equal"==t.height.type&&l.naturalHeight!=t.height.value&&(a+=e?"，":"",e=!0,a+="高度必须为"+t.height.value)),l=null,e)return a+="。",i.i(o.mytips)(a),t.$refs.file.value=null,t.imgName="",t.$emit("update:imgUrl",""),t.$emit("input",""),!1;r()}}else r()}}}},514:function(e,t,i){t=e.exports=i(306)(!1),t.push([e.i,".com-image-file-input .file-tips{display:inline-block}.com-image-file-input .img-wrap{margin-top:10px;width:360px}.com-image-file-input .img-wrap img{width:100%}",""])},779:function(e,t,i){function a(e){i(781)}var s=i(314)(i(513),i(780),a,null,null);e.exports=s.exports},780:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"com-image-file-input"},[i("button",{staticClass:"c-btn sm",attrs:{type:"button"},on:{click:function(t){e.$refs.file.click()}}},[e._v(e._s(e.imgName||e.value?"重新选择":"选择文件"))]),e._v(" "),i("p",{staticClass:"file-tips"},[e._v(e._s(e.imgName?e.imgName:e.value?e.value:"未选择任何文件"))]),e._v(" "),e.imgUrl?e.showPreview&&e.imgUrl?i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:e.imgUrl}})]):e._e():i("p",[e.width||e.height?i("span",[e._v("\n            图片尺寸：\n            "),e.width?["suggest"==e.width.type?[e._v("建议宽度"+e._s(e.width.value)+"px")]:e._e(),e._v(" "),"max"==e.width.type?[e._v("最大宽度"+e._s(e.width.value)+"px")]:e._e(),e._v(" "),"min"==e.width.type?[e._v("最小宽度"+e._s(e.width.value)+"px")]:e._e(),e._v(" "),"equal"==e.width.type?[e._v("宽度须为"+e._s(e.width.value)+"px")]:e._e(),e._v(e._s(e.height?"，":"")+"\n            ")]:e._e(),e._v(" "),e.height?["suggest"==e.height.type?[e._v("建议高度"+e._s(e.height.value)+"px")]:e._e(),e._v(" "),"max"==e.height.type?[e._v("最大高度"+e._s(e.height.value)+"px")]:e._e(),e._v(" "),"min"==e.height.type?[e._v("最小高度"+e._s(e.height.value)+"px")]:e._e(),e._v(" "),"equal"==e.height.type?[e._v("高度须为"+e._s(e.height.value)+"px")]:e._e()]:e._e(),e._v("。\n        ")],2):e._e(),e._v("图片大小不超过"+e._s(e.fileSize)+"Mb。\n    ")]),e._v(" "),i("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.changeImage}})])},staticRenderFns:[]}},781:function(e,t,i){var a=i(514);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(307)("19490f6e",a,!0,{})},815:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(12),s=i.n(a),o=i(13),n=i(779),r=i.n(n);t.default={name:"basicMessage",components:{ImageFileInput:r.a},data:function(){return{basic:{account:"",password:"",companyName:"",companyId:"",corporation:"",idCard:"",status:0,business_url:"http://hfbimg.wukongcz.com/366019153533840444450c5bf64d2a4c.jpg",business_name:"啦啦啦",idCard_up_url:"http://hfbimg.wukongcz.com/366019153533840444450c5bf64d2a4c.jpg",idCard_up_name:"我是",idCard_down_url:"http://hfbimg.wukongcz.com/7196091535594976484宝宝.jpg",idCard_down_name:"你爹"},change:{account:"",oldPassword:"",newPassword:""},form:{account:"",companyName:"",companyId:"",corporation:"",idCard:"",business_url:"",business_name:"",idCard_up_url:"",idCard_up_name:"",idCard_down_url:"",idCard_down_name:""},dialogVisible:!1,dialogVisible1:!1}},mounted:function(){this.getBasic()},methods:{getBasic:function(){s.a.get("/user").then(function(e){e.data.code})},showDialog:function(){this.dialogVisible=!0,this.form.account=this.basic.account,this.form.companyName=this.basic.companyName,this.form.companyId=this.basic.companyId,this.form.corporation=this.basic.corporation,this.form.idCard=this.basic.idCard,this.form.business_name=this.basic.business_name,this.form.business_url=this.basic.business_url,this.form.idCard_up_url=this.basic.idCard_up_url,this.form.idCard_up_name=this.basic.idCard_up_name,this.form.idCard_down_url=this.basic.idCard_down_url,this.form.idCard_down_name=this.basic.idCard_down_name},onSubmit:function(){s.a.post("/am/upload",{account:this.form.account,companyName:this.form.companyName,companyId:this.form.companyId,business_name:this.form.business_name,business_url:this.form.business_url,idCard_up_url:this.form.idCard_up_url,idCard_up_name:this.form.idCard_up_name,idCard_down_url:this.form.idCard_down_url,idCard_down_name:this.form.idCard_down_name}).then(function(e){0==e.data.code&&i.i(o.mytips)("上传成功")})},closeDialog:function(){this.dialogVisible=!1,this.form.account="",this.form.companyName="",this.form.companyId="",this.form.corporation="",this.form.idCard=""},showModifyPassword:function(){this.dialogVisible1=!0,this.change.account=this.basic.account},modifyPassword:function(){return this.change.oldPassword?this.change.newPassword?this.change.oldPassword!=this.basic.password?(i.i(o.mytips)("旧密码输入错误!!!"),!1):void s.a.post("/modify",{account:this.change.account,oldPassword:this.change.oldPassword,newPassword:this.change.newPassword}).then(function(e){0==e.data.code&&i.i(o.mytips)("修改成功")}):(i.i(o.mytips)("请输入新密码"),!1):(i.i(o.mytips)("请输入旧密码"),!1)},closeDialog1:function(){this.dialogVisible1=!1,this.change.account="",this.change.oldPassword="",this.change.newPassword=""}}}},83:function(e,t,i){var a=i(314)(i(815),i(859),null,null,null);e.exports=a.exports},859:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{staticClass:"demo-form-inline",attrs:{model:e.basic}},[i("el-form-item",{attrs:{label:"公司账号:"}},[i("span",[e._v(e._s(e.basic.account))])]),e._v(" "),i("el-form-item",{attrs:{label:"公司名称:"}},[i("span",[e._v(e._s(e.basic.companyName))])]),e._v(" "),i("el-form-item",{attrs:{label:"公司纳税号:"}},[i("span",[e._v(e._s(e.basic.companyId))])]),e._v(" "),i("el-form-item",{attrs:{label:"公司法人:"}},[i("span",[e._v(e._s(e.basic.corporation))])]),e._v(" "),i("el-form-item",{attrs:{label:"法人身份证:"}},[i("span",[e._v(e._s(e.basic.idCard))])]),e._v(" "),i("el-form-item",{attrs:{label:"营业执照:"}},[i("img",{attrs:{src:e.basic.business_url}})]),e._v(" "),i("el-form-item",{attrs:{label:"身份证正面:"}},[i("img",{attrs:{src:e.basic.idCard_up_url}})]),e._v(" "),i("el-form-item",{attrs:{label:"身份证反面:"}},[i("img",{attrs:{src:e.basic.idCard_down_url}})]),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.showModifyPassword}},[e._v("修改密码")]),e._v(" "),0==e.basic.status?i("el-button",{attrs:{type:"primary"},on:{click:e.showDialog}},[e._v("去实名")]):i("el-button",{attrs:{type:"primary",disabled:"true"}},[e._v("已实名")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"修改密码",visible:e.dialogVisible1,width:"500px"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[[i("el-form",{ref:"form",attrs:{model:e.change,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"账户:"}},[i("span",[e._v(e._s(e.change.account))])]),e._v(" "),i("el-form-item",{attrs:{label:"原密码:"}},[i("el-input",{attrs:{placeholder:"请输入原密码"},model:{value:e.change.oldPassword,callback:function(t){e.$set(e.change,"oldPassword",t)},expression:"change.oldPassword"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"新密码:"}},[i("el-input",{attrs:{placeholder:"请输入新密码"},model:{value:e.change.newPassword,callback:function(t){e.$set(e.change,"newPassword",t)},expression:"change.newPassword"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.modifyPassword}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:e.closeDialog1}},[e._v("取消")])],1)],1)]],2),e._v(" "),i("el-dialog",{attrs:{title:"账户信息",visible:e.dialogVisible,width:"800px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"账户:"}},[i("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"公司名称:"}},[i("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.form.companyName,callback:function(t){e.$set(e.form,"companyName",t)},expression:"form.companyName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"公司纳税号:"}},[i("el-input",{attrs:{placeholder:"请输入纳税号"},model:{value:e.form.companyId,callback:function(t){e.$set(e.form,"companyId",t)},expression:"form.companyId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"法人:"}},[i("el-input",{attrs:{placeholder:"请输入法人"},model:{value:e.form.corporation,callback:function(t){e.$set(e.form,"corporation",t)},expression:"form.corporation"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"身份证:"}},[i("el-input",{attrs:{placeholder:"请输入法人身份证"},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"营业执照:"}},[i("image-file-input",{attrs:{"img-url":e.form.business_url},on:{"update:imgUrl":function(t){e.$set(e.form,"business_url",t)}},model:{value:e.form.business_name,callback:function(t){e.$set(e.form,"business_name",t)},expression:"form.business_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"身份证正面:"}},[i("image-file-input",{attrs:{"img-url":e.form.idCard_up_url},on:{"update:imgUrl":function(t){e.$set(e.form,"idCard_up_url",t)}},model:{value:e.form.idCard_up_name,callback:function(t){e.$set(e.form,"idCard_up_name",t)},expression:"form.idCard_up_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"身份证反面:"}},[i("image-file-input",{attrs:{"img-url":e.form.idCard_down_url},on:{"update:imgUrl":function(t){e.$set(e.form,"idCard_down_url",t)}},model:{value:e.form.idCard_down_name,callback:function(t){e.$set(e.form,"idCard_down_name",t)},expression:"form.idCard_down_name"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:e.closeDialog}},[e._v("取消")])],1)],1)]],2)],1)},staticRenderFns:[]}}});