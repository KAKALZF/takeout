<%@ page language="java" contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script type='text/javascript' src='/static/weui/swiper-3.4.2.min.js' charset='utf-8'></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>麻辣小龙虾</title>
    <%@include file="/static/common/common.jsp" %>

    <style type="text/css">
        .border_right_none {
            border-right: none;
        }
    </style>
</head>
<body>
<iframe src="/static/pic/longxia.jpg"></iframe>
<div>
    每年到六、七、八月是捕捞小龙虾的最好季节，到了八月下旬，随着湖水温度的降低， 小龙虾开始在湖底或湖岸挖洞穴居，以等待来年的夏天。" +
    这时候湖面的捕虾工作已渐入低谷， 而河沟里捕虾的人却多了起来
</div>
</body>
<script>
    var pb2 = $.photoBrowser({
        items: [
            {
                image: "/static/pic/longxia.jpg",
                caption: "描述文案1"
            },
            {
                image: "/static/pic/longxia.jpg",
                caption: "描述文案2"
            }
        ]
    });
</script>
</html>