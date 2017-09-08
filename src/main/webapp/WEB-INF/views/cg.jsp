<%@ page import="java.net.URLDecoder" %>
<%@ page language="java" contentType="text/html;charset=utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>微信支付成功</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="/static/pay/css/wxzf.css">
    <script src="/static/pay/js/jquery.js"></script>
    <script type="text/javascript">
        $(function () {
            var date = new Date().toLocaleString();
            $("#date").html(date);
        var time = new Date().getTime();
        $("#jy").html(time);
        })
    </script>
</head>
<body >
<%
    String amount = request.getParameter("amount");
    String name = request.getParameter("name");
    name = URLDecoder.decode(name,"UTF-8");
%>
<div class="header">
    <div class="all_w" style="position:relative; z-index:1;">
        <div class="ttwenz" style=" text-align:center; width:100%;">
            <h4>交易详情</h4>
            <h5>微信安全支付</h5>
        </div>
        <a href="index.html" class="fh_but">返回</a> </div>
</div>

<div class="zfcg_box ">
    <div class="all_w">
        <img src="/static/pay/images/cg_03.jpg" > 支付成功 </div>

</div>
<div class="cgzf_info">
    <div class="wenx_xx">
        <div class="mz">码上吃</div>
        <div class="wxzf_price">￥<%=amount %></div>
    </div>

    <div class="spxx_shop">
        <div class=" mlr_pm">

            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td>商   品</td>
                    <td align="right"><%=name %></td>
                </tr>
                <tr>
                    <td>交易时间</td>
                    <td align="right" id="date"></td>
                </tr>
                <tr>
                    <td>支付方式</td>
                    <td align="right">小码银行</td>
                </tr>
                <tr>
                    <td>交易单号</td>
                    <td id="jy" align="right">1205329821521545465665855444</td>
                </tr>
            </table>

        </div>

    </div>
</div>


<div class="wzxfcgde_tb"><img src="/static/pay/images/jftc_07.jpg" ></div>

</body>
</html>