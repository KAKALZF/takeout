<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <%@include file="/static/common/common.jsp" %>
    <script type="text/javascript" src="/static/js/message.js"></script>
</head>
<body>
<table id="message_datagrid"></table>

<div id="message_button">
    <form>
        <a onclick="deleteMessaget()" href="#" class="easyui-linkbutton"
           data-options="plain:true,iconCls:'icon-delete'">删除</a>
        时间从 <input id="minTime" class="easyui-datetimebox">到<input id="maxTime" class="easyui-datetimebox">
        消息类型<select id="type" name="">
        <option value="-1">请选择</option>
        <option value="text">文本</option>
        <option value="image">图片</option>
        <option value="voice">语音</option>
        <option value="video">视频</option>
        <option value="location">地理位置</option>
        <option value="link">链接</option>
    </select>
        <a onclick="searchAll()" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'">查询</a>
    </form>
</div>
<%--点击右键事件--%>
<div id="contextMenu_jygl" class="easyui-menu" style="width: 80px; display: none;">
    <div id="btn_More" data-options="iconCls:'icon-ok'" onclick="sendText()">发送文本消息</div>
    <div id="Pass" data-options="iconCls:'icon-remove'" onclick="editMember()">发送图文</div>
    <div id="NoPass" data-options="iconCls:'icon-remove'" onclick="deleteMessaget()">删除</div>
</div>


<%--发送按钮--%>
<div id="pet_buttons">
    <a class="easyui-linkbutton" data-options="plain:true" onclick="sava_message()">确认发送</a>
    <a class="easyui-linkbutton" data-options="plain:true" onclick="cencel_message()">取消</a>
</div>

<div id="sendText">
    <form id="sendform">
        用户<input name="openid">
        消息类容
        <textarea rows="6" cols="40" id="StoreIntroduce" name="text"
                  id="storintroduce"  class="textarea fl"></textarea>
    </form>
</div>

</body>
</html>
