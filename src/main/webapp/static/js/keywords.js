$(function () {
    $("#key_datagrid").datagrid({
        url:"/keywords_list.do",
        fitColumns:true,
        fit:true,
        striped:true,
        rownumbers:true,
        singleSelect:true,
        pagination:true,
        toolbar:"#key_tb",
        columns:[[
            {field:'keyword',title:'关键字',width:100,align:'center'},
            {field:'reply',title:'回复',width:100,align:'center'},
            {field:'state',title:'是否启用',width:100,align:'center',formatter:stateFormatter}
        ]]
    });

    function stateFormatter(value,row,index) {
        return value?"是":"<font color='red'>否</font>";
    }

    $("#key_dialog").dialog({
        width:300,
        height:250,
        buttons:"#key_button",
        closed:true
    })

    $("#key").textbox({
        iconCls:'icon-man',
        iconAlign:'left'
    })

    $("#re").textbox({
        iconCls:'icon-man',
        iconAlign:'left'
    })
})

function add() {
    //清空表单
    $("#editForm").form("clear");
    //打开弹出框
    $("#key_dialog").dialog("open");
    //设置标题
    $("#key_dialog").dialog("setTitle","新增");
}
//编辑
function edit() {
    //判断是否选中数据
    var row = $("#key_datagrid").datagrid("getSelected");
    if (!row) {
        $.messager.alert('提示','请选择一条数据','info');
        return;
    }
    //清空表单
    $("#editForm").form("clear");
    //是否启用的回显的格式化
    row["state"]=row["state"]+"";
    //回显数据
    $("#editForm").form("load",row);
    //打开弹出框
    $("#key_dialog").dialog("open");
    //设置标题
    $("#key_dialog").dialog("setTitle","编辑");
}

function changeState() {

    //判断是否选中数据
    var row = $("#key_datagrid").datagrid("getSelected");
    if (!row) {
        $.messager.alert('提示','请选择要更改的数据','info');
        return;
    }
    // 弹出确认框
    $.messager.confirm('确认对话框', '您想要启用/禁用该回复吗？', function(r) {
        if (r) {
            $.post("/keywords_changeState.do", {
                id : row.id,state:row.state
            }, function(data) {
                $.messager.alert('温馨提示', data.msg, 'info', function() {
                    // 刷新数据表格(保持在当前页)
                    $("#key_datagrid").datagrid("reload");
                });
            })
        }
    });
}
//删除
function dlt() {
    //判断是否选中数据
    var row = $("#key_datagrid").datagrid("getSelected");
    if (!row) {
        $.messager.alert('提示','请选择要删除的数据','info');
        return;
    }
    $.messager.confirm('提示','确定删除该数据吗',function (r) {
        if (r) {
            $.post("/keywords_delete.do",{id:row.id},function (data) {
                if (data.success) {
                    $.messager.alert("温馨提示",data.msg,"info")
                    //关闭弹出框
                    $("#key_dialog").dialog("close");
                    //刷新页面
                    $("#key_datagrid").datagrid("reload");
                }
            })
        }
    })
}

function save() {
    var url;
    //判断是否存在id
    if ($("[name='id']").val()) {
        url = "/keywords_update.do";
    } else {
        url = "/keywords_save.do";
    }
    //提交表单
    $("#editForm").form("submit",{
        url:url,
        success:function (data) {
            data=$.parseJSON(data);
            if (data.success) {
                $.messager.alert("温馨提示",data.msg,"info")
                //关闭弹出框
                $("#key_dialog").dialog("close");
                //刷新页面
                $("#key_datagrid").datagrid("reload");
            }
        }
    })
}

function cancel() {
    $("#key_dialog").dialog("close");
}
