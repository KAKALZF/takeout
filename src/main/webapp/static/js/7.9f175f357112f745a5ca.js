webpackJsonp([7],{294:function(e,t,a){var r=a(314)(a(829),a(867),null,null,null);e.exports=r.exports},314:function(e,t){e.exports=function(e,t,a,r,n){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var c;if(n?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=c):a&&(c=a),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?l.render=function(e,t){return c.call(t),p(e,t)}:l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:o,exports:i,options:l}}},325:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pageHelper",props:["currentPage","total"],methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.$emit("sizeChange",e)},handleCurrentChange:function(e){console.log("当前页: "+e),this.$emit("currentChange",e)}}}},326:function(e,t,a){t=e.exports=a(306)(!1),t.push([e.i,"",""])},327:function(e,t,a){function r(e){a(329)}var n=a(314)(a(325),a(328),r,"data-v-41dbbe04",null);e.exports=n.exports},328:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},329:function(e,t,a){var r=a(326);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(307)("74cb2d5c",r,!0,{})},342:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pagination",created:function(){this.page=this.currPage},data:function(){return{currPage:1}},methods:{turning:function(){var e=this.$refs.input.value;if(!/^-?\d+$/.test(e))return!1;e=parseInt(e),e=e<1?1:e,e=e>this.totalPage?this.totalPage:e,this.currPage=e,this.$refs.input.value=e,this.$emit("change-page",e)},prevPage:function(){if(this.currPage<=1)return!1;this.$emit("change-page",--this.currPage)},nextPage:function(){if(this.currPage>=this.totalPage)return!1;this.$emit("change-page",++this.currPage)}},props:{totalPage:{require:!0},initPage:{default:1}}}},343:function(e,t,a){t=e.exports=a(306)(!1),t.push([e.i,".pagination{float:right}.pagination a,.pagination input{-webkit-box-sizing:border-box;box-sizing:border-box;height:32px;line-height:32px;width:70px;padding:0 10px;text-align:center;border:1px solid #eaeef0;border-radius:4px;display:inline-block;vertical-align:middle}.pagination a{color:#7c8ba6}.pagination input{margin:0 10px}.pagination span{font-size:16px;color:#7c8ba6;margin:0 10px}",""])},346:function(e,t,a){function r(e){a(348)}var n=a(314)(a(342),a(347),r,null,null);e.exports=n.exports},347:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("a",{attrs:{href:"javascript:"},on:{click:e.prevPage}},[e._v("上一页")]),e._v(" "),a("span",[e._v(e._s(e.currPage)+"/"+e._s(e.totalPage))]),e._v(" "),a("a",{attrs:{href:"javascript:"},on:{click:e.nextPage}},[e._v("下一页")]),e._v(" "),a("input",{ref:"input",attrs:{type:"text",maxlength:"5"},domProps:{value:e.currPage},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.turning(t):null}}}),e._v(" "),a("a",{attrs:{href:"javascript:"},on:{click:e.turning}},[e._v("跳转")])])},staticRenderFns:[]}},348:function(e,t,a){var r=a(343);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(307)("33086016",r,!0,{})},829:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(12),n=a.n(r),o=a(346),i=a.n(o),s=a(13),l=a(327),c=a.n(l);document.title="客户列表",t.default={name:"customerList",components:{pagination:i.a,pageHelper:c.a},data:function(){return{form:{account:"",password:"",username:"",phone:"",address:""},formInline:{account:"",password:""},rechargeForm:{account:"",username:"",rechargeMoney:null},rules:{rechargeMoney:[{required:!0,type:"number",message:"请输入数字金额",trigger:"change"}]},editItem:null,dialogVisible:!1,dialogVisible1:!1,tableData:[],totalPage:0,currentPage:1,pageSize:10,total:0,loading:null}},mounted:function(){this.getData()},methods:{getData:function(e,t){var a=this;e=e||1,t=t||10;var r=document.getElementById("customerList");this.loading=this.$loading({text:"加载中...",background:"rgba(0,0,0,0,1)",target:r,spinner:"el-icon-loading"}),n.a.post("/am/customer",{page:e,pageSize:t,account:this.formInline.account,password:this.formInline.password}).then(function(r){a.loading.close(),0==r.data.code&&(a.tableData=r.data.data.list,a.totalPage=Math.ceil(r.data.data.total/t),a.total=Math.ceil(r.data.data.total),a.pageSize=t,a.currentPage=e)},function(e){return a.loading.close()})},submitUser:function(){var e=this;return this.form.account?this.form.password?this.form.username?this.form.phone?this.form.address?(this.closeDialog(),a.i(s.mytips)("提交成功"),void n.a.post("/submitUser",{account:this.form.account,password:this.form.password,username:this.form.username,phone:this.form.phone,address:this.form.address}).then(function(t){0==t.data.code&&(e.closeDialog(),a.i(s.mytips)("提交成功"),e.getData())})):(a.i(s.mytips)("请输入地址"),!1):(a.i(s.mytips)("请输入号码"),!1):(a.i(s.mytips)("请输入姓名"),!1):(a.i(s.mytips)("请输入密码"),!1):(a.i(s.mytips)("请输入账号"),!1)},recharge:function(){var e=this;if(!this.rechargeForm.rechargeMoney)return a.i(s.mytips)("请输入金额"),!1;n.a.post("/customerFund/recharge",{rechargeCustomerId:this.rechargeForm.account,amount:this.rechargeForm.rechargeMoney}).then(function(t){0==t.data.code&&(e.closeDialog1(),a.i(s.mytips)("充值成功"),e.getData())})},closeDialog:function(){this.dialogVisible=!1,this.form.account="",this.form.password="",this.form.username="",this.form.phone="",this.form.address=""},closeDialog1:function(){this.dialogVisible1=!1,this.rechargeForm.account="",this.rechargeForm.username="",this.rechargeForm.rechargeMoney=null},handleSizeChange:function(e){this.pageSize=e,this.getData(1,this.pageSize)},handleCurrentChange:function(e){this.getData(e,this.pageSize)},handleClick:function(e){this.form.account=e.account,this.form.password=e.password,this.form.username=e.username,this.form.phone=e.phone,this.form.address=e.address,this.dialogVisible=!0},rechargeClick:function(e){this.rechargeForm.account=e.account,this.rechargeForm.username=e.username,this.dialogVisible1=!0}}}},867:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"账号:"}},[a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.formInline.account,callback:function(t){e.$set(e.formInline,"account",t)},expression:"formInline.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码:"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.getData()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-add"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")])],1)],1),e._v(" "),a("el-table",{staticClass:"c-no-wrap",staticStyle:{width:"100%"},attrs:{id:"customerList",data:e.tableData,height:"500px","max-height":"500px",size:"500px","highlight-current-row":!0}},[a("el-table-column",{attrs:{align:"center",label:"账号",prop:"account"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"密码",prop:"password"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"姓名",prop:"username"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"phone"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"邮寄地址",prop:"address"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"余额",prop:"balance"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"修改时间",prop:"update_time"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){e.rechargeClick(t.row)}}},[e._v("充值")])]}}])})],1),e._v(" "),a("div",[a("pageHelper",{attrs:{"current-page":e.currentPage,total:e.total},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"账户信息",visible:e.dialogVisible,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账户:"}},[a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码:"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话:"}},[a("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址:"}},[a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submitUser}},[e._v("创建")]),e._v(" "),a("el-button",{on:{click:e.closeDialog}},[e._v("取消")])],1)],1)]],2),e._v(" "),a("el-dialog",{attrs:{title:"充值",visible:e.dialogVisible1,width:"500px"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[[a("el-form",{ref:"rechargeForm",attrs:{model:e.rechargeForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账户:"}},[a("span",[e._v(e._s(e.rechargeForm.account))])]),e._v(" "),a("el-form-item",{attrs:{label:"姓名:"}},[a("span",[e._v(e._s(e.rechargeForm.username))])]),e._v(" "),a("el-form-item",{attrs:{label:"充值金额:"}},[a("el-input",{attrs:{type:"number",placeholder:"请输入金额"},model:{value:e.rechargeForm.rechargeMoney,callback:function(t){e.$set(e.rechargeForm,"rechargeMoney",t)},expression:"rechargeForm.rechargeMoney"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.recharge}},[e._v("充值")]),e._v(" "),a("el-button",{on:{click:e.closeDialog1}},[e._v("取消")])],1)],1)]],2)],1)},staticRenderFns:[]}}});