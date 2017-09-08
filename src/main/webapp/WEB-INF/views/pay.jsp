<%@ page import="java.net.URLDecoder" %>
<%@ page language="java" contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>已进入安全支付环境</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="/static/pay/css/wxzf.css">
    <script src="/static/pay/js/jquery.js"></script>
    <script type="text/javascript">
        $(function(){
            //出现浮动层
            $(".ljzf_but").click(function(){
                $(".ftc_wzsf").show();
            });
            //关闭浮动
            $(".close").click(function(){
                $(".ftc_wzsf").hide();
            });
            //数字显示隐藏
            $(".xiaq_tb").click(function(){
                $(".numb_box").slideUp(500);
            });
            $(".mm_box").click(function(){
                $(".numb_box").slideDown(500);
            });
            //----
            var i = 0;
            $(".nub_ggg li a").click(function(){
                i++
                if(i<6){
                    $(".mm_box li").eq(i-1).addClass("mmdd");
                }else{
                    $(".mm_box li").eq(i-1).addClass("mmdd");
                    setTimeout(function(){
                        window.location.href= encodeURI(encodeURI("/cg.do?amount="+$("#cg").html()+"&name="+$("#name").val())) ;
                    },500);
                    //window.document.location="cg.html"
                }
            });

            $(".nub_ggg li .del").click(function(){

                if(i>0){
                    i--
                    $(".mm_box li").eq(i).removeClass("mmdd");
                    i==0;
                }
                //alert(i);



            });



        });
    </script>
</head>
<body>
<%
    String amount = request.getParameter("amount");
    String name = request.getParameter("name");
    name = URLDecoder.decode(name,"UTF-8");
%>
<div class="header">
    <div class="all_w ">
        <div class="gofh"> <a href="#"><img src="/static/pay/images/jt_03.jpg" ></a> </div>
        <div class="ttwenz">
            <h4>确认交易</h4>
            <h5>微信安全支付</h5>
        </div>
    </div>
</div>
<div class="wenx_xx">
    <input id="name" type="hidden" value="<%=name %>">
    <div class="mz">码上吃</div>
    <div class="wxzf_price">￥<span id="cg"><%=amount %></span></div>
</div>
<div class="skf_xinf">
    <div class="all_w"> <span class="bt">收款方</span> <span class="fr">谁</span> </div>
</div>
<a href="javascript:void(0);" class="ljzf_but all_w">立即支付</a>

<!--浮动层-->

<div class="ftc_wzsf">
    <div class="srzfmm_box">
        <div class="qsrzfmm_bt clear_wl"> <img src="/static/pay/images/xx_03.jpg" class="tx close fl" > <img src="/static/pay/images/jftc_03.jpg" class="tx fl" ><span class="fl">请输入支付密码</span> </div>
        <div class="zfmmxx_shop">
            <div class="mz">码上吃</div>
            <div class="wxzf_price">￥<%=amount %></div>
        </div>
        <a href="/cg.do" class="blank_yh"> <img src="/static/pay/images/jftc_07.jpg" class="fl"  ><span class="fl ml5">小码银行信用卡</span> <img src="/static/pay/images/jftc_09.jpg" class="fr"></a>
        <ul class="mm_box">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="numb_box">
        <div class="xiaq_tb"> <img src="/static/pay/images/jftc_14.jpg" height="10"> </div>
        <ul class="nub_ggg">
            <li><a href="javascript:void(0);">1</a></li>
            <li><a href="javascript:void(0);" class="zj_x">2</a></li>
            <li><a href="javascript:void(0);">3</a></li>
            <li><a href="javascript:void(0);">4</a></li>
            <li><a href="javascript:void(0);" class="zj_x">5</a></li>
            <li><a href="javascript:void(0);">6</a></li>
            <li><a href="javascript:void(0);">7</a></li>
            <li><a href="javascript:void(0);" class="zj_x">8</a></li>
            <li><a href="javascript:void(0);">9</a></li>
            <li><span></span></li>
            <li><a href="javascript:void(0);" class="zj_x">0</a></li>
            <li><span  class="del" > <img src="/static/pay/images/jftc_18.jpg"   ></span></li>
        </ul>
    </div>
    <div class="hbbj"></div>
</div>
</body>
</html>