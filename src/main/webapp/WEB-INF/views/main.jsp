<%@ page language="java" contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <%@include file="/static/common/common.jsp" %>
    <style type="text/css">
        .border_right_none {
            border-right: none;
        }
    </style>
    <script type="text/javascript" src="/static/js/main.js"></script>
</head>
<body>
<div id="cc" class="easyui-layout" data-options="
	fit:true,
	border:false
	">
    <div data-options="region:'north',border:false"
         style="height:70px; background: url('http://pic.58pic.com/58pic/13/28/22/19Y58PICFqH_1024.jpg') no-repeat;background-size:cover">
        <center><h1>小码哥外卖管理系统</h1></center>
    </div>
    <div data-options="region:'south',border:false"
         style="height:30px; background: url('http://pic.58pic.com/58pic/13/28/22/19Y58PICFqH_1024.jpg') no-repeat;background-size:cover">
        <center>版权所有:广州小码哥科技教育有限公司</center>
    </div>
    <div data-options="region:'west',title:'系统菜单',headerCls:'border_right_none',bodyCls:'border_right_none'"
         style="width:180px;">
        <ul id="main_tree"></ul>
    </div>
    <div data-options="region:'center'" style="padding:5px;background:#eee;">
        <div id="main_tabs" class="easyui-tabs" data-options="fit:true,border:false">
            <div title="系统首页" style="height:30px; background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504676420673&di=8585ac1945ff1d55cbf7f50b40c4d342&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F05%2F17%2F16M58PIC5Gw_1024.jpg') no-repeat;background-size:cover">
                <center><H1>欢迎登陆小码哥外卖管理系统</H1></center>
            </div>
        </div>
    </div>
    // 右键菜单定义如下：
    <div id="mm" class="easyui-menu" style="width:120px;">
        <div onclick="closeOne()" data-options="iconCls:'icon-closeOne'">关闭当前</div>
        <div onclick="closeOthers()" data-options="iconCls:'icon-closeOthers'">关闭其他</div>
        <div onclick="closeAll()" data-options="iconCls:'icon-closeAll'">关闭所有</div>
    </div>
</div>
</body>
</html>