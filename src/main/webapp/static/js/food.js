$(function () {
    // 初始化数据表格
    $("#food_datagrid").datagrid({
        url: "/food_list.do",
        fitColumns: true,
        striped: true,
        fit: true,
        pagination: true,
        singleSelect: true,
        toolbar:"#food_tb",
        columns: [[{
            field: 'picture',
            title: '图片',
            width: 100,
            formatter: function(value, rowData, rowIndex) {
                var h = "";
                h += "<div><a name=rowIndex><img src=/static/images/index/"+rowData.picture+"></a> </div>";
                return h;
        }},{
            field: 'name',
            title: '菜名',
            width: 100
        },{
            field: 'sn',
            title: '编号',
            width: 100
        }, {
            field: 'salePrice',
            title: '售价',
            width: 100
        }, {
            field: 'message',
            title: '菜品信息',
            width: 100

        }, {
            field: 'operate', title: '操作', align: 'center', width: 100,
            formatter: function (value, row, index) {
                var h = "";
                h += "<a name='opera' id='food_tb_edit"+index+"'  onclick='edit(" + index + ")' ><!--<img src='/Images/update.png' />--></a> ";
                h += "<a name='oper' id='food_tb_cs"+index+"' onclick='del(" + index + ")'><!--<img src='/Images/delete.png' />--></a> ";
                return h;
            }
        }

        ]],
        onLoadSuccess: function (data) {

            $("a[name='opera']").linkbutton({text: '修改', plain: true, iconCls: 'icon-edit'});
            $("a[name='oper']").linkbutton({text: '删除', plain: true, iconCls: 'icon-remove'});
        }

    });

    $("#food_dialog").dialog({
        width: 400,
        height: 350,
        buttons: '#food_btns',
        closed: true
    });



});

// 新增
function add() {

    // 清空表单
    $('#food_form').form("clear");
    // 打开弹出框
    $("#food_dialog").dialog("open");
    // 设置标题
    $("#food_dialog").dialog("setTitle", "新增菜品");
}

// 编辑
function edit(index) {
    $('#food_datagrid').datagrid('selectRow',index);
    // 判断是否选中数据
    var row = $("#food_datagrid").datagrid("getSelected");

    // 清空表单
    $('#food_form').form("clear");

    // 回显数据
    $('#food_form').form("load", row);

    // 打开弹出框
    $("#food_dialog").dialog("open");
    // 设置标题
    $("#food_dialog").dialog("setTitle", "编辑菜品");

}


// 取消保存
function cancel() {
    // 关闭窗口
    $("#food_dialog").dialog("close");
}


// 保存
 function save() {
    // 判断是否有id
    var url;
    if ($("[name='id']").val()) {
        url = "/food_update.do";
    } else {
        url = "/food_save.do";
    }

    // 提交表单
     $('#food_form').form('submit', {
         url : url,
         success : function (data) {
             // 转成json对象
             data = $.parseJSON(data);
             if (data.success) {
                 $.messager.alert('温馨提示', data.msg, 'info', function () {
                     // 关闭弹出框
                     $("#food_dialog").dialog("close");
                     // 刷新数据表格(保持在当前页)
                     $("#food_datagrid").datagrid("reload");
                 });
             } else {
                 $.messager.alert('温馨提示', data.msg, 'info');
             }
         }
     });
}


// 设置为离职
  function  del(index) {
      $('#food_datagrid').datagrid('selectRow',index);
    // 判断是否选中数据
    var row = $("#food_datagrid").datagrid("getSelected");


    // 弹出确认框
    $.messager.confirm('确认对话框', '您确定删除该菜品吗？', function (r) {
        if (r) {
            $.post("/food_delete.do", {
                id: row.id
            }, function (data) {
                $.messager.alert('温馨提示', data.msg, 'info', function () {
                    // 刷新数据表格(保持在当前页)
                    $("#food_datagrid").datagrid("reload");
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

    $("#food_datagrid").datagrid('load', {
        name: name,
        minPrice:minPrice,
        maxPrice:maxPrice
    });
}


// 查询全部数据
function reload() {
    // 清空查询条件的内容
    $("[name='name']").val('');
    $("[name='minPrice']").val('');
    $("[name='maxPrice']").val('');

    $("#food_datagrid").datagrid('load', {});
}

