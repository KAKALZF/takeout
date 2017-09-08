<%@ page language="java" contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
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
    <script type="text/javascript" src="/static/js/user.js"></script>

</head>
<body>
<div style="height: 36px; padding-top: 10px; padding-left: 15px" id="user_tb">
    <input type="text" name="name" placeholder="关键字"/>
    <a class="easyui-linkbutton"
       data-options="iconCls:'icon-search',plain:true" onclick="searchFrom()">查询</a>
</div>
<table id="user_datagrid"></table>

<div id="user_dialog">
    <form id="user_form" method="post">
        <input type="hidden" name="id"/>
        <table align="left" style="margin-top: 15px;margin-left: 40px">
            <tbody>
            <%--<tr style="height: 40px;">
                <td style="width: 80px" class="l-table-edit-td">openID</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input type="text" name="openid" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr>
                <td class="l-table-edit-td">关注时间</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="concerntime" name="concerntime" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">取消关注时间</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="cancelconcerntime" name="cancelconcerntime" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">关注状态</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="status" name="status" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">关注来源</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="source" name="source" type="text" class="easyui-validatebox"/>
                </td>
            </tr>--%>


            <tr style="height: 40px;">
                <td class="l-table-edit-td">真实姓名</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="nickname" name="nickname" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">性别</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="gender" name="gender" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">国家</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="country" name="country" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">省份</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="province" name="province" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">城市</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="city" name="city" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">语言</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="languager" name="languager" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            <tr style="height: 40px;">
                <td class="l-table-edit-td">备注</td>
                <td class="l-table-edit-td" style="text-align: left;">
                    <input id="remark" name="remark" type="text" class="easyui-validatebox"/>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
</div>

</body>

</html>