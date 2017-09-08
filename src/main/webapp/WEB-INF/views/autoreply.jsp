<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="reset.min.css" rel="stylesheet" type="text/css">
    <!--reset.min.css 根据实际情况引入，如果你有自己的初始化样式表可以不引入当前样式-->
    <link href="/static/insdep/easyui_full.css" rel="stylesheet" type="text/css">
    <link href="/static/insdep/iconfont/iconfont.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/static/plugins/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="/static/plugins/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/static/insdep/insdep-extend.min.js"></script>
    <script type="text/javascript" src="/static/js/autoreply.js"></script>
</head>
<body>
    <table id="autoreply_datagrid"></table>
    <%--表格顶部工具栏--%>
    <div id="autoreply_tb">
        <a href="#" class="easyui-linkbutton button-line-grey"
           style="height:30px" onclick="add()">新增</a>
        <a href="#" class="easyui-linkbutton button-line-grey"
           style="height:30px" onclick="edit()">编辑</a>
        <a href="#" class="easyui-linkbutton button-line-red"
           style="height:30px" onclick="dlt()">删除</a>
    </div>
    <%--弹出框--%>
    <div id="autoreply_dialog">
        <form id="editForm" method="post">
            <input type="hidden" name="id"/>
            <table align="center" style="margin-top: 40px">
                <tr>
                    <td>自动回复:</td>
                    <td>
                        <input id="re" type="text" name="reply" style="width:150px">
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <%--弹出框底部工具栏--%>
    <div id="autoreply_button">
        <a href="#" class="easyui-linkbutton button-green" style="height:30px" onclick="save()">
            <i class="iconfont">&#xe60e;</i>保存</a>
        <a href="#" class="easyui-linkbutton button-grey" style="height:30px" onclick="cancel()">
            <i class="iconfont">&#xe60f;</i>取消</a>
    </div>
</body>
</html>
