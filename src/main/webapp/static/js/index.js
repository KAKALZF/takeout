/*
$(function(){
	/!*初始化树组件*!/
	$("#index_tree").tree({
		url:"/menu_list.do",
		onClick:function(node){
			//判断选项卡是否存在,如果存在,就选中该选项卡,否则,就添加一个选项卡
			if($("#index_tabs").tabs("exists",node.text)){//存在
				$("#index_tabs").tabs("select",node.text);//选中
			}else{//不存在
				$("#index_tabs").tabs("add",{
					title:node.text,
					closable:true,

//					href:node.attributes.url,
					content:"<iframe frameborder=0 height='100%' width='100%' src="+node.url+"></iframe>"
				})
			}
		}
	})
})*/
function opentabs(titleVal,url){
	/*$("#index_tabs").tabs("add",{
	 title: titleVal,
	 fit:true,
	 selected: true,
	 content:'<iframe src='+url+
	 ' width="100%" height="100%" border="0" frameborder=0></iframe>',
	 closable:true
	 });*/
    addtab(titleVal,titleVal,url);
}


function openTab(titleVal,url){
	/*  if($("#index_tabs").tabs("exists",titleVal)){
	 $("#index_tabs").tabs("close",titleVal);
	 }
	 $("#index_tabs").tabs("add",{
	 title: titleVal,
	 fit:true,
	 selected: true,
	 content:'<iframe src='+url+
	 ' width="100%" height="100%" border="0" frameborder=0></iframe>',
	 closable:true
	 });*/

    if(f_existsTab(titleVal)){
        f_closeTab(titleVal);
    }
    addtab(titleVal,titleVal,url);
}
