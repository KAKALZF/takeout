<%@ page language="java" contentType="text/html;charset=utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="/static/common/common.jsp" %>


	<style type="text/css">
		body
		{
			overflow: hidden;
		}

		.l-table-edit
		{
			width: 100%;
		}

		.l-table-edit-td
		{
			text-align: right;
			font-size: 12px;
			padding: 4px;
			height: 40px;
		}

		.l-button-submit, .l-button-reset
		{
			width: 80px;
			float: left;
			margin-left: 120px;
			padding-bottom: 2px;
		}

		.border-color-error
		{
			border: 1px solid red;
		}

		.border-color-success
		{
			border: 1px solid #D0D0D0;
		}
	</style>
<script type="text/javascript" src="/static/js/foodOrderBill.js"></script>

</head>
<body>
	<div style="height: 36px; padding-top: 10px; padding-left: 15px" id="foodOrderBill_tb">
		菜名:<input type="text" name="food.name" placeholder="请输入菜名"/>
		订单时间:<input type="text" name="begindate" class="easyui-datetimebox"/>--<input type="text" name="enddate" class="easyui-datetimebox"/>
		订单状态:<select id="cc" class="easyui-combobox"  style="width:200px;" data-options="
			panelHeight:'auto',
			editable:false">
					<option value="1">已支付</option>
			        <option value="0">未支付</option>
			</select>
		<a  class="easyui-linkbutton"
		   data-options="iconCls:'icon-search',plain:true" onclick="searchForm()">查询</a>
		<a  class="easyui-linkbutton"
			data-options="iconCls:'icon-reload',plain:true" onclick="reload()">刷新</a>
	</div>
	<table id="foodOrderBill_datagrid"></table>

</body>
</html>