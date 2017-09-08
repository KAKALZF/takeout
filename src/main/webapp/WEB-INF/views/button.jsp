<%@ page language="java" contentType="text/html;charset=utf-8" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <%@include file="/static/common/common.jsp" %>


    <style type="text/css">
        body {
            overflow: hidden;
        }

        .l-table-edit {
            width: 100%;
        }

        .l-table-edit-td {
            text-align: right;
            font-size: 12px;
            padding: 4px;
            height: 40px;
        }

        .l-button-submit, .l-button-reset {
            width: 80px;
            float: left;
            margin-left: 120px;
            padding-bottom: 2px;
        }

        .border-color-error {
            border: 1px solid red;
        }

        .border-color-success {
            border: 1px solid #D0D0D0;
        }
    </style>
    <script type="text/javascript" src="/static/js/button.js"></script>

</head>
<body>
<div style="height: 36px; padding-top: 10px; padding-left: 15px" id="button_tb">
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-add',plain:true" onclick="add()">添加菜单</a>
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-add',plain:true" onclick="create()">建立客户端菜单</a>
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-reload',plain:true" onclick="reload()">刷新</a>
</div>
<table id="button_datagrid"></table>

<div id="button_dialog">
    <form id="button_form" method="post">
        <input type="hidden" name="id"/>
        <table align="left" style="margin-top: 15px;margin-left: 40px">
            <tbody>
            <tr style="height: 40px;">
                <td class="l-table-edit-td" style="width: 80px">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</td>
                <td>
                    <input class="easyui-validatebox" type="text" name="type"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td style="width: 80px" class="l-table-edit-td">菜&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;名:</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input type="text" name="name" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr>
                <td class="l-table-edit-td">key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值:</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="salePrice" name="key" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr>
                <td class="l-table-edit-td">URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值:</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="" name="url" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">父级菜单id：</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="message" name="parent_id" type="text" class="easyui-validatebox"/>
                </td>
            </tr>

            </tbody>

        </table>

    </form>
</div>


<div id="button_btns">
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-save',plain:true" onclick="save()">保存</a>
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-cancel',plain:true" onclick="cancel()">取消</a>
</div>


</body>
</html>