webpackJsonp([4],{286:function(e,a,t){function l(e){t(889)}var o=t(314)(t(820),t(872),l,null,null);e.exports=o.exports},314:function(e,a){e.exports=function(e,a,t,l,o){var n,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(n=e,s=e.default);var i="function"==typeof s?s.options:s;a&&(i.render=a.render,i.staticRenderFns=a.staticRenderFns),l&&(i._scopeId=l);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},i._ssrRegister=c):t&&(c=t),c){var u=i.functional,d=u?i.render:i.beforeCreate;u?i.render=function(e,a){return c.call(a),d(e,a)}:i.beforeCreate=d?[].concat(d,c):[c]}return{esModule:n,exports:s,options:i}}},325:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"pageHelper",props:["currentPage","total"],methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.$emit("sizeChange",e)},handleCurrentChange:function(e){console.log("当前页: "+e),this.$emit("currentChange",e)}}}},326:function(e,a,t){a=e.exports=t(306)(!1),a.push([e.i,"",""])},327:function(e,a,t){function l(e){t(329)}var o=t(314)(t(325),t(328),l,"data-v-41dbbe04",null);e.exports=o.exports},328:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},329:function(e,a,t){var l=t(326);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(307)("74cb2d5c",l,!0,{})},820:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(855),o=t.n(l);document.title="卡板列表",a.default={name:"cardList",components:{cardList_input:o.a},data:function(){return{activeName:"store",tabName:"store",tableData:[],searchFormData:{channel:"",combo:""},channels:[{label:"通道1",value:1},{label:"通道2",value:2},{label:"通道3",value:3}],combos:[{label:"套餐1",value:1},{label:"套餐2",value:2},{label:"套餐3",value:3}]}},methods:{handleClick:function(e,a){this.tabName=e.name,console.log("tab点击操作",this.name,e,a)}},mounted:function(){var e={date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},a=0;for(a=0;a<5;a++)console.log("添加对象"),this.$data.tableData.push(e)}}},821:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(12),o=t.n(l),n=t(327),s=t.n(n),r=t(13);a.default={name:"cardList_input",components:{pageHelper:s.a},props:["saleStatus"],data:function(){return{page:1,size:10,total:0,detailDialogVisible:!1,cardDetail:{comboDate:"2018-11-11 10:23:00",combName:"test",used:"1G",left:"10G",total:"100G"},searchFormData:{channelCode:"",poolCode:"",comboCode:"",period:"",status:"",closeStatus:"",cardCustomerId:"",beginId:"",endId:"",beginTime:"",endTime:"",inputTime:null},channels:[{label:"通道1",value:1},{label:"通道2",value:2},{label:"通道3",value:3}],pools:[{label:"流量池1",value:1},{label:"流量池1",value:2},{label:"流量池1",value:3}],combos:[{label:"套餐1",value:1},{label:"套餐2",value:2},{label:"套餐3",value:3}],period:[{label:"生命期",value:1},{label:"测试期",value:2},{label:"沉默期",value:3},{label:"正式期",value:4},{label:"其他",value:5}],status:[{label:"待激活",value:1},{label:"正常",value:2},{label:"停机",value:3},{label:"销户",value:3}],closeStatus:[{label:"主动停机",value:1},{label:"未主动停机",value:0}],cardCustomerIds:[{label:"客户1",value:1},{label:"客户2",value:2}],tableData:[{iccid:1}],multipleSelection:[]}},methods:{handleClick:function(e,a){console.log(e,a)},handleSelectionChange:function(e){console.log("选项改变触发"),console.log(e),this.multipleSelection=e},searchSubmit:function(){console.log("查询提交..."),console.log(this.searchFormData),this.getData(this.page,this.size)},activeSubmit:function(){console.log("激活提交,打印多选参数"),console.log(this.multipleSelection)},handleSizeChange:function(e){this.size=e,this.getData(this.page,this.size)},handleCurrentChange:function(e){this.page=e,this.getData(this.page,this.size)},detail:function(e){var a=this;console.log("卡板详情id",e),o()({method:"get",url:"/cardFlow/getByIccid",dataType:"json",params:{iccid:e}}).then(function(e){0==e.data.code&&(a.cardDetail=a.data)}),this.detailDialogVisible=!0},getData:function(e,a){var l=this;console.log("page= "+e,"size="+a),this.page=e||1,this.size=a||10,this.searchFormData.beginTime=t.i(r.getTimeByTimeArray)(this.searchFormData.inputTime,0),this.searchFormData.endTime=t.i(r.getTimeByTimeArray)(this.searchFormData.inputTime,1);var n=this.$loading(this.options);o()({method:"get",url:"/card/query",dataType:"json",params:{channelCode:this.searchFormData.channelCode,poolCode:this.searchFormData.poolCode,comboCode:this.searchFormData.comboCode,period:this.searchFormData.period,status:this.searchFormData.status,closeStatus:this.searchFormData.closeStatus,cardCustomerId:this.searchFormData.cardCustomerId,beginId:this.searchFormData.beginId,endId:this.searchFormData.endId,beginTime:this.searchFormData.beginTime,endTime:this.searchFormData.endTime,page:this.page,size:this.size,saleStatus:parseInt(this.saleStatus)}}).then(function(e){0==e.data.code&&(console.log("请求成功res",e),l.tableData=e.data.data.list,l.total=e.data.data.total)},function(e){console.log("请求失败"),l.$nextTick(function(){console.log("关闭loading"),n.close()})}),this.$nextTick(function(){console.log("关闭loading"),n.close()})},detailDialogCloseCall:function(){this.cardDetail={}}},mounted:function(){this.options={text:"加载中...",background:"rgba(0,0,0,0,1)",target:document.getElementById("cardList_input")}}}},840:function(e,a,t){a=e.exports=t(306)(!1),a.push([e.i,".demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}",""])},849:function(e,a,t){a=e.exports=t(306)(!1),a.push([e.i,".my-tabs .el-tabs__header{text-align:center}.my-tabs .el-tabs__nav-wrap{display:inline-block}",""])},855:function(e,a,t){function l(e){t(880)}var o=t(314)(t(821),t(856),l,null,null);e.exports=o.exports},856:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",[t("el-form",{attrs:{inline:!0,model:e.searchFormData}},[t("el-form-item",{attrs:{label:"通道"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.channelCode,callback:function(a){e.$set(e.searchFormData,"channelCode",a)},expression:"searchFormData.channelCode"}},e._l(e.channels,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"流量池"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.poolCode,callback:function(a){e.$set(e.searchFormData,"poolCode",a)},expression:"searchFormData.poolCode"}},e._l(e.pools,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"套餐"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.comboCode,callback:function(a){e.$set(e.searchFormData,"comboCode",a)},expression:"searchFormData.comboCode"}},e._l(e.combos,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"周期"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.period,callback:function(a){e.$set(e.searchFormData,"period",a)},expression:"searchFormData.period"}},e._l(e.period,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"状态"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.status,callback:function(a){e.$set(e.searchFormData,"status",a)},expression:"searchFormData.status"}},e._l(e.status,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"主动停机状态"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.closeStatus,callback:function(a){e.$set(e.searchFormData,"closeStatus",a)},expression:"searchFormData.closeStatus"}},e._l(e.closeStatus,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"客户"}},[t("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.searchFormData.cardCustomerId,callback:function(a){e.$set(e.searchFormData,"cardCustomerId",a)},expression:"searchFormData.cardCustomerId"}},e._l(e.cardCustomerIds,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"id"}},[t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"起始id",size:"mini"},model:{value:e.searchFormData.beginId,callback:function(a){e.$set(e.searchFormData,"beginId",a)},expression:"searchFormData.beginId"}}),e._v("\n                -\n                "),t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"结束id",size:"mini"},model:{value:e.searchFormData.endId,callback:function(a){e.$set(e.searchFormData,"endId",a)},expression:"searchFormData.endId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建时间"}},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"mini"},model:{value:e.searchFormData.inputTime,callback:function(a){e.$set(e.searchFormData,"inputTime",a)},expression:"searchFormData.inputTime"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.searchSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),t("br"),e._v(" "),t("el-table",{ref:"multipleTable",attrs:{data:e.tableData,"tooltip-effect":"dark",height:"500px","max-height":"500px",type:"expand",id:"cardList_input"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection"}}),e._v(" "),t("el-table-column",{attrs:{label:"id",prop:"id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(e._s(a.row.id))]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"iccid",label:"卡号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"channelName",label:"通道",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"poolName",label:"流量池",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"comboName",label:"套餐",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"used",label:"已使用流量",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"left",label:"剩余流量",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"total",label:"累计使用流量",s:"",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"customerName",label:"客户",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"period",label:"生命期",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"status",label:"卡状态",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"closeStatus",label:"是否主动停机",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"enterTime",label:"入库时间",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.detail(a.row.iccid)}}},[e._v("详情")])]}}])})],1),e._v(" "),t("div",[t("pageHelper",{staticClass:"my_pagenation",attrs:{"current-page":e.page,total:e.total},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"卡板详情",visible:e.detailDialogVisible,width:"800px"},on:{"update:visible":function(a){e.detailDialogVisible=a},close:e.detailDialogCloseCall}},[[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"日期"}},[t("span",[e._v(e._s(e.cardDetail.comboDate))])]),e._v(" "),t("el-form-item",{attrs:{label:"套餐"}},[t("span",[e._v(e._s(e.cardDetail.combName))])]),e._v(" "),t("el-form-item",{attrs:{label:"已使用"}},[t("span",[e._v(e._s(e.cardDetail.used))])]),e._v(" "),t("el-form-item",{attrs:{label:"剩余"}},[t("span",[e._v(e._s(e.cardDetail.left))])]),e._v(" "),t("el-form-item",{attrs:{label:"总流量"}},[t("span",[e._v(e._s(e.cardDetail.total))])])],1),e._v(" "),t("el-button",{staticStyle:{position:"relative",left:"680px"},on:{click:function(a){e.detailDialogVisible=!1}}},[e._v("关闭")])]],2)],1)},staticRenderFns:[]}},872:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-tabs",{staticClass:"my-tabs",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"库存",name:"store"}},["store"==e.tabName?t("cardList_input",{attrs:{"sale-status":"0"}}):e._e()],1),e._v(" "),t("el-tab-pane",{attrs:{label:"售出",name:"sale"}},["sale"==e.tabName?t("cardList_input",{attrs:{"sale-status":"1"}}):e._e()],1)],1)],1)},staticRenderFns:[]}},880:function(e,a,t){var l=t(840);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(307)("24007886",l,!0,{})},889:function(e,a,t){var l=t(849);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(307)("ac635900",l,!0,{})}});