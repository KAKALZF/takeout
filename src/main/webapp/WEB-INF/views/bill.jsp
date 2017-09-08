<%@ page language="java" contentType="text/html;charset=utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>点餐平台</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/static/css/swiper.min.css">
    <link rel="stylesheet" type="text/css" href="/static/css/style1.css">
    <link rel="stylesheet" type="text/css" href="/static/css/index.css">

    <link rel="stylesheet" type="text/css" href="static/weui/css/weui.min.css">
    <link rel="stylesheet" type="text/css" href="static/weui/css/jquery-weui.css">
    <link rel="stylesheet" type="text/css" href="static/weui/css/demos.css">
</head>

<body>
<%
    Object userinfo = session.getAttribute("USERINFO");
%>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/static/images/index/shop_1.jpg"></div>
        <div class="swiper-slide"><img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=697171380,961924960&fm=27&gp=0.jpg">
        </div>
        <div class="swiper-slide"><img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505289212&di=742cdd0f2009ba08bf0bc6ac6dd5d7ab&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe4dde71190ef76c6e3ddf30f9716fdfaaf516782.jpg">
        </div>
    </div>
</div>

<div class="nav-lf">
    <ul id="nav">
        <li class="current"><a href="#st1">川菜</a><b></b></li>
        <li><a href="#st2">粤菜</a><b>1</b></li>
        <li><a href="#st3">湘菜</a><b>3</b></li>
        <li><a href="#st4">闽菜</a><b>6</b></li>
    </ul>
</div>

<div id="container" class="container">

    <c:forEach items="${results.rows}" var="result">
        <div class="section" id="st1">
            <div class="prt-lt">
                <div class="lt-lt"><img src="/static/images/index/${result.picture}"></div>
                <div class="lt-ct" >
                    <p class="pn">${result.name}</p>
                    <p class="pr">¥<span class="price">${result.salePrice}</span></p>
                </div>
                <div class="lt-rt">
                    <input type="button" class="minus" value="-">
                    <input type="text" class="result" value="0">
                    <input type="button" class="add" value="+">
                </div>
            </div>
        </div>
    </c:forEach>


</div>


<footer>
    <div class="ft-lt">
        <p>合计:<span id="total" class="total">163.00元</span><span class="nm">(<label class="share"></label>份)</span></p>
    </div>
    <div class="ft-rt">
        <p><%--<a href="javascript:;" id="show-custom">下单</a>--%><a href="javascript:;" id='show-custom'
                                                                    class="weui-btn weui-btn_primary">下单</a></p>
    </div>
</footer>

<script type="text/javascript" src="/static/images/Adaptive.js"></script>
<script type="text/javascript" src="/static/images/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/static/images/swiper.min.js"></script>
<script type="text/javascript" src="/static/images/jquery.nav.js"></script>


<%--<script src="static/weui/jquery-2.1.4.js"></script>--%>
<script src="static/weui/fastclick.js"></script>
<script>
    $(function () {
        FastClick.attach(document.body);
    });
</script>
<script src="static/weui/jquery-weui.js"></script>

<script>
    $(document).on("click", "#show-custom", function () {
        var s = "";
        $("input[type='text']").each(function () {
            if (parseInt($(this).val())>0){
               s += $(this).parent().prev().find(".pn").text()+" ,";
            }
        });
        var total =$("#total").html();
        var count =$(".share").html();

        $.modal({
            title: "下单确认",
            text: "<div class='weui-cells weui-cells_form'>" +
            "<div class='weui-cell'>" +
            "<div class='weui-cell__hd'>" +
            "<label class='weui-label'>菜名</label>" +
            "</div>" +
            "<div class='weui-cell__bd'>" +
            "<input class='weui-input' type='text' value='"+s+"' name='name'>" +
            " </div>" +
            " </div>" +
            "<div class='weui-cell'>" +
            "<div class='weui-cell__hd'>" +
            "<label class='weui-label'>价格</label>" +
            "</div>" +
            "<div class='weui-cell__bd'>" +
            "<input class='weui-input' type='number' name='amount' value='"+total+"'>" +
            " </div>" +
            " </div>" +
            "<div class='weui-cell weui-cell_vcode'>" +
            "<div class='weui-cell__hd'>" +
            "<label class='weui-label'>联系方式</label>" +
            "</div>" +
            "<div class='weui-cell__bd'>" +
            "<input class='weui-input' type='tel' placeholder='请输入手机号' name='tel'>" +
            "</div>" +
            "</div>" +
            "<div class='weui-cell'>" +
            "<div class='weui-cell__hd'>" +
            "<label for='' class='weui-label'>地址</label>" +
            "</div>" +
            "<div class='weui-cell__bd'>" +
            "<input class='weui-input' type='text' placeholder='请输入地址' name='address'>" +
            "</div>" +
            "</div>" +
            "<div class='weui-cell__hd'>" +
            "<label for='' class='weui-label'>备注</label>" +
            "</div>" +
            "<div class='weui-cell'>" +
            "<div class='weui-cell__bd'>" +
            "<textarea class='weui-textarea' placeholder='不要辣' rows='3' name='remark'></textarea>" +
            "<div class='weui-textarea-counter'><span>0</span>/200" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>",
            buttons: [
                {
                    text: "确认", onClick: function () {
                        var name = $("[name='name']").val();
                        var amount = $("[name='amount']").val();
                        var tel = $("[name='tel']").val();
                        var address = $("[name='address']").val();
                        var remark = $("[name='remark']").html();
                    url = "/foodOrderBill_save.do";
                    var userinfo = <%=userinfo %>
                        userinfo = eval(userinfo);
                    sn = userinfo.openid;
                    $.post(url,{
                        name:name,
                        amount:amount,
                        tel:tel,
                        address:address,
                        remark:remark,
                        count:count,
                        sn:sn
                    })
                    window.location.href= encodeURI(encodeURI("/pay.do?amount="+$("#total").html()+"&name="+name));
                }
                },               {
                    text: "取消", onClick: function () {
                    $.alert("滚");
                }
                }
            ]
        });
    });
</script>


<script type="text/javascript">
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
    });
    $(function () {
        $('#nav').onePageNav();
    });

</script>


<script>
    $(function () {

        $(".add").click(function () {
            var t = $(this).parent().find('input[class*=result]');
            t.val(parseInt(t.val()) + 1);
            setTotal();
        })

        $(".minus").click(function () {
            var t = $(this).parent().find('input[class*=result]');
            t.val(parseInt(t.val()) - 1);
            if (parseInt(t.val()) < 0) {
                t.val(0);
            }
            setTotal();


        })

        function setTotal() {
            var s = 0;
            var v = 0;
            var n = 0;
            <!--计算总额-->
            $(".lt-rt").each(function () {
                s += parseInt($(this).find('input[class*=result]').val()) * parseFloat($(this).siblings().find('span[class*=price]').text());

            });

            <!--计算菜种-->
            var nIn = $("li.current a").attr("href");
            $(nIn + " input[type='text']").each(function () {
                if ($(this).val() != 0) {
                    n++;
                }
            });

            <!--计算总份数-->
            $("input[type='text']").each(function () {
                v += parseInt($(this).val());
            });
            if (n > 0) {
                $(".current b").html(n).show();
            } else {
                $(".current b").hide();
            }
            $(".share").html(v);
            $("#total").html(s.toFixed(2));
        }

        setTotal();

    })
</script>
<script type="text/javascript" src="/static/images/waypoints.min.js"></script>
<script type="text/javascript" src="/static/images/navbar2.js"></script>
</body>
</html>