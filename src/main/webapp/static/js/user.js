$(function () {

    // 初始化数据表格
    $("#user_datagrid").datagrid({
        url: "/user_list.do",
        fitColumns: true,
        striped: true,
        fit: true,
        pagination: true,
        singleSelect: true,
        toolbar: "#user_tb",
        columns: [[{
            field: 'openid',
            title: 'openID',
            width: 100
        }, {
            field: 'concerntime',
            title: '关注时间',
            width: 100
        }, {
            field: 'cancelconcerntime',
            title: '取消关注时间',
            width: 100
        }, {
            field: 'status',
            title: '关注状态',
            formatter: statusFormatter,
            width: 100
        },{
            field: 'source',
            title: '关注来源',
            formatter: sourceFormatter,
            width: 100
        }, {
            field: 'operate', title: '用户详细信息', align: 'center', width: 100,
            formatter: function (value, row, index) {
                var h = "";
                h += "<a name='oper' id='user_tb_cs"+index+"' onclick='search1(" + index + ")'><!--<img src='/Images/delete.png' />--></a> ";
                return h;
            }
        }/*,{
            field: 'nickname',
            title: '真实姓名',
            width: 100
        },{
            field: 'gender',
            title: '性别',
            width: 100
        },{
            field: 'country',
            title: '国家',
            width: 100
        },{
            field: 'province',
            title: '省份',
            width: 100
        },{
            field: 'city',
            title: '城市',
            width: 100
        },{
            field: 'languager',
            title: '语言',
            width: 100
        },{
            field: 'remark',
            title: '备注',
            width: 100
        }*/
        ]],
        onLoadSuccess: function (data) {
            $("a[name='oper']").linkbutton({text: '查看', plain: true, iconCls: 'icon-search'});
        }
    });

    $("#user_dialog").dialog({
        width: 350,
        height: 450,
        closed: true,
        title:'用户详情'
    });

});

//初始化状态,1是已关注.0表示未关注
function statusFormatter(value, row, index) {
    if (row.status==1) {
        return '<span style="color: green">已关注</span>';
    } else if(row.status==0){
        return '<span style="color:red">未关注</span>';
    }
}
//初始化用户来源,同一来源扫码
function sourceFormatter(value, row, index) {
        return '扫码';
}

// 查看
function search1(index) {
    $('#user_datagrid').datagrid('selectRow',index);
    // 判断是否选中数据
    var row = $("#user_datagrid").datagrid("getSelected");

    // 回显数据
    $('#user_form').form("load", row);

    // 打开弹出框
    $("#user_dialog").dialog("open");
    //页面判断性别值,1为男,2为女
    if($("#gender").val()==1){
        $("#gender").val('男');
        }else{
        $("#gender").val('女');
    }
    // 设置标题
    $("#user_dialog").dialog("setTitle", "用户详情");

}


// 取消保存
function cancel() {
    // 关闭窗口
    $("#user_dialog").dialog("close");
}

/*
// 提交表单
$('#user_form').form('submit', {
    url: url,
    success: function (data) {
        // 转成json对象
        data = $.parseJSON(data);
        if (data.success) {
            $.messager.alert('温馨提示', data.msg, 'info', function () {
                // 关闭弹出框
                $("#user_dialog").dialog("close");
                // 刷新数据表格(保持在当前页)
                $("#user_datagrid").datagrid("reload");
            });
        } else {
            $.messager.alert('温馨提示', data.msg, 'info');
        }
    }
})*/


// 高级查询
function searchFrom() {
    // 获取关键字文本框的值
    var name = $("[name='name']").val();
    $("#user_datagrid").datagrid('load', {
        openid: name
    });
}


/*/ 查询全部数据
function reload() {
    // 清空查询条件的内容
    $("[name='name']").val('');
    $("[name='minPrice']").val('');
    $("[name='maxPrice']").val('');

    $("#user_datagrid").datagrid('load', {});
}
*/
