$(function () {
    $("#autoreply_datagrid").datagrid({
        url:"/autoreply_list.do",
        fitColumns:true,
        fit:true,
        striped:true,
        rownumbers:true,
        singleSelect:true,
        toolbar:"#autoreply_tb",
        columns:[[
            {field:'reply',title:'默认回复',width:100,align:'center'}
        ]]
    });

    $("#autoreply_dialog").dialog({
        width:300,
        height:180,
        buttons:"#autoreply_button",
        closed:true
    })

    $("#autoreply").textbox({
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
    $("#autoreply_dialog").dialog("open");
    //设置标题
    $("#autoreply_dialog").dialog("setTitle","新增");
}
//编辑
function edit() {
    //判断是否选中数据
    var row = $("#autoreply_datagrid").datagrid("getSelected");
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
    $("#autoreply_dialog").dialog("open");
    //设置标题
    $("#autoreply_dialog").dialog("setTitle","编辑");
}

//删除
function dlt() {
    //判断是否选中数据
    var row = $("#autoreply_datagrid").datagrid("getSelected");
    if (!row) {
        $.messager.alert('提示','请选择要删除的数据','info');
        return;
    }
    $.messager.confirm('提示','确定删除该数据吗',function (r) {
        if (r) {
            $.post("/autoreply_delete.do",{id:row.id},function (data) {
                if (data.success) {
                    $.messager.alert("温馨提示",data.msg,"info")
                    //关闭弹出框
                    $("#autoreply_dialog").dialog("close");
                    //刷新页面
                    $("#autoreply_datagrid").datagrid("reload");
                }
            })
        }
    })
}

function save() {
    var url;
    //判断是否存在id
    if ($("[name='id']").val()) {
        url = "/autoreply_update.do";
    } else {
        url = "/autoreply_save.do";
    }
    //提交表单
    $("#editForm").form("submit",{
        url:url,
        success:function (data) {
            data=$.parseJSON(data);
            if (data.success) {
                $.messager.alert("温馨提示",data.msg,"info")
                //关闭弹出框
                $("#autoreply_dialog").dialog("close");
                //刷新页面
                $("#autoreply_datagrid").datagrid("reload");
            }
        }
    })
}

function cancel() {
    $("#autoreply_dialog").dialog("close");
}
