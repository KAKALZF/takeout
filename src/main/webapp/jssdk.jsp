<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <script type="text/javascript">
        wx.config({

            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

            appId: 'wx5122e2f09fdfb61d', // 必填，公众号的唯一标识

            timestamp: '1151612056', // 必填，生成签名的时间戳

            nonceStr: 'dfsfdgs', // 必填，生成签名的随机串

            signature: '46c84b1fc037632f07ddf1ab403362f8c48dbfd9',// 必填，签名，见附录1


            jsApiList: ['onMenuShareTimeline', 'hideAllNonBaseMenuItem','getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

        });
        wx.ready(function () {
            wx.onMenuShareTimeline({

                title: '新标题', // 分享标题

                desc: '新的描述', // 分享描述

                link: 'http://albb.nat300.top/jssdk.jsp', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致

                imgUrl: 'http://albb.nat300.top/2.jpg', // 分享图标


                success: function () {
                    window.location.href = "http://albb.nat300.top/2.jpg"
                    // 用户确认分享后执行的回调函数

                },
                cancel: function () {
                    alert("取消分享")
                    // 用户取消分享后执行的回调函数

                }

            })
       // wx.hideAllNonBaseMenuItem();
        });
        wx.getLocation({

            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'

            success: function (res) {

                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90

                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。

                var speed = res.speed; // 速度，以米/每秒计

                var accuracy = res.accuracy; // 位置精度
             alert.log("地理位置"+latitude+longitude+speed+accuracy);
             console.log("地理位置"+latitude+longitude+speed+accuracy);

            }

        });
    </script>
</head>
<body>
<h1>小马哥官网</h1>


</body>
</html>
