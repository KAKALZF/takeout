$(function () {

    // 初始化数据表格
    $("#button_datagrid").datagrid({
        url: "/button_list.do",
        fitColumns: true,
        striped: true,
        fit: true,
        pagination: true,
        singleSelect: true,
        toolbar: "#button_tb",
        columns: [[
            {
                field: 'id',
                title: '菜单id',
                width: 100
            }, {
                field: 'name',
                title: '菜单名',
                width: 100
            }, {
                field: 'type',
                title: '类型',
                width: 100
            }, {
                field: 'key',
                title: 'key值',
                width: 100
            }, {
                field: 'url',
                title: 'url',
                width: 100

            }, {
                field: 'parent_id',
                title: '父级菜单ID',
                width: 100
            }, {
                field: 'operate', title: '操作', align: 'center', width: 100,
                formatter: function (value, row, index) {
                    var h = "";
                    h += "<a name='opera' id='button_tb_edit" + index + "'  onclick='edit(" + index + ")' ><!--<img src='/Images/update.png' />--></a> ";
                    h += "<a name='oper' id='button_tb_cs" + index + "' onclick='del(" + index + ")'><!--<img src='/Images/delete.png' />--></a> ";
                    return h;
                }
            }

        ]],
        onLoadSuccess: function (data) {

            $("a[name='opera']").linkbutton({text: '修改', plain: true, iconCls: 'icon-edit'});
            $("a[name='oper']").linkbutton({text: '删除', plain: true, iconCls: 'icon-remove'});
        }

    });

    $("#button_dialog").dialog({
        width: 400,
        height: 350,
        buttons: '#button_btns',
        closed: true
    });


});

// 新增
function add() {
    // 清空表单
    $('#button_form').form("clear");
    // 打开弹出框
    $("#button_dialog").dialog("open");
    // 设置标题
    $("#button_dialog").dialog("setTitle", "新增菜单");

}
// 建立客户端菜单
function create() {

    $.get("/createButton.do", function (data) {
        $.messager.alert('温馨提示', data.msg, 'info');
    });

}

// 编辑
function edit(index) {
    $('#button_datagrid').datagrid('selectRow', index);
    // 判断是否选中数据
    var row = $("#button_datagrid").datagrid("getSelected");

    // 清空表单
    $('#button_form').form("clear");

    // 回显数据
    $('#button_form').form("load", row);

    // 打开弹出框
    $("#button_dialog").dialog("open");
    // 设置标题
    $("#button_dialog").dialog("setTitle", "编辑菜品");

}


// 取消保存
function cancel() {
    // 关闭窗口
    $("#button_dialog").dialog("close");
}


// 保存
function save() {
    // 判断是否有id
    var url;
    if ($("[name='id']").val()) {
        url = "/button_update.do";
    } else {
        url = "/button_save.do";
    }

    // 提交表单
    $('#button_form').form('submit', {
        url: url,
        success: function (data) {
            // 转成json对象
            data = $.parseJSON(data);
            if (data.success) {
                $.messager.alert('温馨提示', data.msg, 'info', function () {
                    // 关闭弹出框
                    $("#button_dialog").dialog("close");
                    // 刷新数据表格(保持在当前页)
                    $("#button_datagrid").datagrid("reload");
                });
            } else {
                $.messager.alert('温馨提示', data.msg, 'info');
            }
        }
    });
}


// 设置为离职
function del(index) {
    $('#button_datagrid').datagrid('selectRow', index);
    // 判断是否选中数据
    var row = $("#button_datagrid").datagrid("getSelected");


    // 弹出确认框
    $.messager.confirm('确认对话框', '您确定删除该菜单吗？', function (r) {
        if (r) {
            $.post("/button_delete.do", {
                id: row.id
            }, function (data) {
                $.messager.alert('温馨提示', data.msg, 'info', function () {
                    // 刷新数据表格(保持在当前页)
                    $("#button_datagrid").datagrid("reload");
                });
            })
        }
    });

}


// 高级查询
function searchForm() {
    // 获取关键字文本框的值
    var name = $("[name='name']").val();
    var minPrice = $("[name='minPrice']").val();
    var maxPrice = $("[name='maxPrice']").val();

    $("#button_datagrid").datagrid('load', {
        name: name,
        minPrice: minPrice,
        maxPrice: maxPrice
    });
}


// 查询全部数据
function reload() {
    // 清空查询条件的内容
    $("[name='name']").val('');
    $("[name='minPrice']").val('');
    $("[name='maxPrice']").val('');

    $("#button_datagrid").datagrid('load', {});
}

