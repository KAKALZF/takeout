$(function () {

    // 初始化数据表格
    $("#foodOrderBill_datagrid").datagrid({
        url: "/foodOrderBill_list.do",
        fitColumns: true,
        striped: true,
        fit: true,
        pagination: true,
        singleSelect: true,
        toolbar:"#foodOrderBill_tb",
        columns: [[{
            field: 'sn',
            title: '用户ID',
            width: 100
        },{
            field: 'food',
            title: '菜名',
            width: 100,
            formatter : foodFormatter
        }, {
            field: 'orderTime',
            title: '订单时间',
            width: 100
        }, {
            field: 'tel',
            title: '订餐人电话',
            width: 100

        }, {
            field: 'address',
            title: '订餐人地址',
            width: 100

        }, {
            field: 'status',
            title: '状态',
            width: 100,
            formatter : stateFormatter

        },{
            field: 'remark',
            title: '备注',
            width: 100

        }]]
    });

    $("#foodOrderBill_datagrid").dialog({
        width: 400,
        height: 300,
        buttons: '#food_btns',
        closed: true
    });

    //菜名格式化
    function foodFormatter(value, row, index) {
        console.log(value);
        console.log(row);
        return value ? value.name : "";
    }

    // 状态格式化
    function stateFormatter(value, row, index) {
        return value? "<font color='green'>已支付</font>":"<font color='red'>未支付</font>";
    }

});

// 高级查询
  function searchForm() {
    // 获取关键字文本框的值
    var foodName = $("[name='food.name']").val();
    var begindate = $("[name='begindate']").val();
    var enddate = $("[name='enddate']").val();
    var status = $("#cc").val();

    $("#foodOrderBill_datagrid").datagrid('load', {
        foodName: foodName,
        begindate:begindate,
        enddate:enddate,
        status:status
    });
}


// 查询全部数据
function reload() {
    // 清空查询条件的内容
    $("[name='food.name']").val('');
/*    $("[name='begindate']").datetimebox('setValue',"");
    $("[name='enddate']").datetimebox('setValue',"");*/
        $("#foodOrderBill_datagrid").datagrid('load', {});
}


