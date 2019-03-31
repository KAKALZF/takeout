<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html;charset=utf-8" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/static_bootstrap/js/message.js"></script>
    <%@ include file="./common/header.jsp" %>
    <script type="text/javascript"
            src="/static_bootstrap/js/plugins/jquery.twbsPagination.min.js"></script>
    <script type="text/javascript" src="/static_bootstrap/js/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript">
        $(function () {
            $(".beginDate,.endDate").click(function () {
                WdatePicker();
            });

            $("#query").click(function () {
                $("#currentPage").val(1);
                $("#searchForm").submit();
            });

            $('#pagination').twbsPagination({
                totalPages:${pageResult.totalPage},
                visiblePages: 3,
                startPage:${pageResult.currentPage},
                onPageClick: function (event, page) {
                    $("#currentPage").val(page);
                    $("#searchForm").submit();
                }

            })
            ;
        })
    </script>
</head>
<body>
<div class="container">
    <%@ include file="./common/top.jsp" %>
    <div class="row">
        <div class="col-sm-3">
            <%@include file="./common/menu.jsp" %>
        </div>
        <div class="col-sm-9">
            <div class="page-header">
                <h3>消息查询</h3>
            </div>
            <form id="searchForm" class="form-inline" method="post"
                  action="/message_views_bootstrap.do">
                <input type="hidden" id="currentPage" name="page" value="1"/>
                <div class="form-group">
                    <label>状态</label>
                    <select class="form-control" name="state" id="state">
                        <option value="-1">全部</option>
                        <option value="1">登录失败</option>
                        <option value="0">登录成功</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>登陆时间</label>
                    <input class="form-control beginDate" type="text" name="minTime">
                    到
                    <input class="form-control endDate" type="text" name="maxTime">
                </div>
                <div class="form-group">
                    <label>用户类型</label>
                    <select class="form-control" name="userType" id="userType">
                        <option value="-1">全部</option>
                        <option value="1">后台管理员</option>
                        <option value="0">前台用户</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>用户名</label>
                    <input class="form-control" type="text" name="username"/>

                </div>
                <div class="form-group">
                    <button id="query" type="button" class="btn btn-success">
                        <i class="icon-search"></i>
                        查询
                    </button>
                </div>
            </form>
            <div class="panel panel-default">
                <table class="table">
                    <thead>
                    <tr>
                        <th>编号</th>
                        <th>用户</th>
                        <th>接收的类容</th>
                        <th>回复类容</th>
                        <th>消息类型</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    <c:forEach items="${pageResult.rows}" var="msg">
                        <tr>
                            <td>${msg.id}</td>
                            <td>${msg.openid}</td>
                            <td>${msg.replycontent}</td>
                            <td>${msg.sendcontent}</td>
                            <td>${msg.type}</td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                <div style="text-align: center;">
                    <ul id="pagination" class="pagination"></ul>
                </div>
                <div style="text-align: center;"></div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
