$(function () {
     $("#minTime").combo('setText','');
     $("#maxTime").val('');
    //  $("#type").text('-1');

    $("#message_datagrid").datagrid({
        url: "/message_list.do",
        fit: true,
        fitColumns: true,
        striped: true,
        pagination: true,
        align: 'center',
        singleSelect: true,
        toolbar: "#message_button",
        maximizable:true,
        checkOnSelect:true,
        singleSelect:false,
        columns: [[

            {field: 'ck', checkbox:true, width: 100},
            {field: 'id', title: '编号', width: 100},
            {field: 'openid', title: '用户', width: 100},
            {field: 'replycontent', title: '接收的类容', width: 100},
            {field: 'sendcontent', title: '回复类容', width: 100},
            {field: 'type', title: '消息类型', width: 100},
            {field: 'inputtime', title: '消息记录时间', width: 100},
            {field: 'user', title: '微信号名', width: 100,formatter: nicknameFormatter}
        ]],
        onRowContextMenu: function(e, rowIndex, rowData){
            console.debug(e);
            e.preventDefault(); //阻止浏览器捕获右键事件
            // 显示快捷菜单
            $('#contextMenu_jygl').menu('show',{
                left: e.pageX,
                top: e.pageY
            });
        }
    })
    $("#sendText").dialog({
        title: '发送消息',
        top: 30,
        width: 500,
        height: 300,
        closed: true,
        buttons: "#pet_buttons"
    })

    
    function nicknameFormatter(value, rowData, rowIndex) {
        return value? value.nickname : "已取消关注";
    }

});
//高级查询
function searchAll() {
       var minTime = $("#minTime").val();
       var maxTime = $("#maxTime").val();
       var type = $("#type").val();
       console.log(type+maxTime+minTime);
           $("#message_datagrid").datagrid("load",{
               minTime:minTime,
               maxTime:maxTime,
               type:type
           });


}
//删除消息记录
function deleteMessaget() {
    //var dataEmp = $("#message_datagrid").datagrid("getSelected");
    //获取选择多行的数据
    var selRow = $("#message_datagrid").datagrid("getSelections");
    if (selRow.length==0) {
        $.messager.alert("温馨提示", "请至少选择一条数据");
        return;
    }

    var ids=[];
    for (var i = 0; i < selRow.length; i++) {
        //获取自定义table 的中的checkbox值
        var id=selRow[i].id;   //OTRECORDID这个是你要在列表中取的单个id
        ids.push(id); //然后把单个id循环放到ids的数组中
    }
    console.log(ids);
    $.messager.confirm("温馨提示", "确认删除吗?", function (r) {
        if (r) {
            $.post("/message_delete.do", {ids: ids}, function (data) {
                $.messager.confirm("温馨提示", data.msg, function () {
                    //3 重新加载当前列表页面
                    $("#message_datagrid").datagrid("load");
                })
            })
        }
    })
}


//发送单个用户消息

function sendText() {
    var selRow = $("#message_datagrid").datagrid("getSelected");
    if (!selRow) {
        $.messager.alert("温馨提示", "请选择一条数据");
        return;
    }
    $("#sendform").form("clear");
    $("#sendText").dialog("open");

    $("#sendform").form("load", selRow);
}


//确认发送消息
function sava_message() {
    $("#sendform").form("submit", {
        url: "/message_text.do",
        success: function (data) {
            console.log(data);

           // data = $.parseJSON(data);
             data = eval("(" + data + ")");
            $.messager.confirm("温馨提示", data.msg, function () {
                if (data.success) {
                    $.messager.confirm("温馨提示", data.msg, function () {
                        //2 关闭diaolog
                        $("#sendText").dialog("close");
                        //3 重新加载当前列表页面
                        $("#message_datagrid").datagrid("reload");
                    })
                } else {
                    $.messager.confirm("温馨提示", data.success)
                }
            })
        }

    })
}


//取消操作
function cencel_message() {
    $("#sendText").dialog("close");
}
