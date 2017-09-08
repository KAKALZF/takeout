
oFReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

oFReader.onload = function (oFREvent) {
    document.getElementById("uploadPreview").src = oFREvent.target.result;
};

function loadImageFile() {
    if (document.getElementById("fileUpload").files.length === 0) { return; }
    var oFile = document.getElementById("fileUpload").files[0];
    if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
    oFReader.readAsDataURL(oFile);
    $("#Grid").submit();
}
//正则表达式验证
var regBox = {
    regMobile: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,//手机
    reNum: /^[0-9]*$/,//数字
};



//店主的图片上传和回显
function loadImageFiles() {

   // $("#gridLoad").submit();

          var inPhoto = $("#fileUpload").val();
          console.debug(photo);
    $.post("/photoUpload",{
        file:inPhoto
    },function (data) {
          console.debug("保存成功")
    })
   /* $("#gridLoads").form("submit", {
        url: "/photoUpload.do",
        success: function (data) {
            console.log(data);
            //data = $.parseJSON(data);
            // data = eval("(" + data + ")");
            $.messager.confirm("温馨提示", data.msg, function () {
                if (data.success) {
                    $.messager.confirm("温馨提示", data.msg, function () {
                        //2 关闭diaolog
                        $("#loadPicture").dialog("close");
                        //3 重新加载当前列表页面
                        $("#MemberOut").datagrid("reload");
                    })
                } else {
                    $.messager.confirm("温馨提示", data.success)
                }
            })
        }

    })*/



}


//店主修改信息弹框
function UpdateRecord() {
   $("#principalSheet").dialog({
       title: '添加宠物',
       top: 30,
       width: 800,
       height: 300,
      buttons: "#principal_buttons"
   });
    $.post("/show_Sheet.do",function (data){
        var StoreAddress = data.province;
         if(StoreAddress) {
             $("#s_province option:first").text(StoreAddress.split("-")[0]);
             $("#s_city option:first").text(StoreAddress.split("-")[1]);
             $("#s_county option:first").text(StoreAddress.split("-")[2]);
             $("#provinceAddress").val(StoreAddress.split("-")[3]);
         }
        $("#storeName1").val(data.storeName);
        $("#userId1").val(data.id);
        $("#StoreHead").val(data.storehead);
        $("#ContactMobile").val(data.contactmobile);
        $("#SetupTime").val(data.setuptime);
        $("#StoreFax").val(data.storefax);
        $("#StoreIntroduce").val(data.storeintroduce);

    });
}
//我的主页
$(function () {
    $.post("/show_Sheet.do",function (data){
        console.debug("前"+data);
      // data=$.parseJSON(data);
       //data = eval("(" + data + ")");
        console.log("后"+data);
        $("#store").html(data.storeName);
        $("#ID").val(data.id);
        $("#storeheads").html("负责人："+data.storehead);
        $("#contactmobiles").html("联系电话："+data.contactmobile);
        $("#Address").html("店铺地址："+data.province);
        $("#setuptimes").html("成立时间："+data.setuptime);
        $("#StoreIntroduce1").html("我的誓言："+data.storeintroduce);

    })
});


//编辑会员
function sava_Andsheet() {

    $("#sheetForm").form("submit", {
        url: "/update_Sheet.do",
        //添加额外参数
        onSubmit: function (param) {
            //获取已经选中地址
            var provinces= $("#s_province").val();
            var city= $("#s_city").val();
            var county= $("#s_county").val();

            var provinceAddress= $("#provinceAddress").val();
            var address = provinces+"-"+city+"-"+county+"-"+provinceAddress;
            param.province=address;
        },
        success: function (data) {
            console.log(data);
            data = $.parseJSON(data);
            // data = eval("(" + data + ")");
            $.messager.confirm("温馨提示", data.msg, function () {
                if (data.success) {
                    $.messager.confirm("温馨提示", data.msg, function () {
                        //2 关闭diaolog
                        $("#principalSheet").dialog("close");
                        //3 重新加载当前列表页面
                     window.location.href="/principalSheet.do"
                    })
                } else {
                    $.messager.confirm("温馨提示", data.success)
                }
            })
        }

    })
}

//宠物保存弹出框取消操作
function cencel_sheet() {
    $("#principalSheet").dialog("close");
}


















//加载图片
$(function () {
    showimg();
});


function showimg() {
    $.ajax({
        url: ""/*"/UserDetailedInfo/showimg"*/,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            document.getElementById("uploadPreview").src = data["StoreTrademark"];
        }
    });
}





//充值
function CreateRecharge(id) {
    var id = '';
    var dlg = $.ligerDialog.open({
        url: ""/*"/Member/CreateRecharge/" + id*/,
        title: "充值",
        width: 800,
        height: 350,
        buttons: [
            {
                text: '充值',
                onclick: function (item, dialog) {
                    $.ajax({
                        url: ""/*"/Member/CreateRecharge"*/,
                        type: 'POST',
                        data: JSON.stringify({
                            RechargeNumber: dialog.frame.$("#RechargeNumber").text(),
                            MemberNumber: dialog.frame.$("#MemberNumber").val(),
                            RechargePrice: dialog.frame.$("#RechargePrice").val(),
                            VIPMemberLevel: dialog.frame.$("#VIPMemberID").val(),
                            RechargeUpgradeDetails: dialog.frame.$("#RechargeUpgradeDetails").val()
                        }),
                        dataType: 'json',
                        contentType: 'application/json',
                        success: function (data) {
                            if (data.flag) {
                                alert("充值成功！");
                                dialog.close();
                                window.location.reload();
                            }
                            else {
                                alert("请确认输入值正确！");
                            }
                        }
                    });
                }
            },
{
    text: '取消',
    onclick: function (item, dialog) {
        dialog.close();
    }
}]
    })
}
var grid;
var selectData = [{ value: "1", text: '是' }, { value: "0", text: '否' }];
var editState = "EDIT";
$.ligerDefaults.Grid.sorters['currency'] = function (val1, val2) {
    return parseFloat(val1) < parseFloat(val2) ? -1 : parseFloat(val1) > parseFloat(val2) ? 1 : 0;
};
function GridTrue() {
    grid = $("#grid").ligerGrid({
        columns: [
                        { display: "店铺名称", name: "StoreName", editor: { type: "text" } },
                        { display: "联系手机", name: "ContactMobile", editor: { type: "text" } },
                        { display: "联系座机", name: "ContacLandline", editor: { type: "text" } },
                        { display: "店铺传真", name: "StoreFax", editor: { type: "text" } },
                        { display: "负责人", name: "StoreHead", editor: { type: "text" } },
                        { display: "成立日期", name: "SetupTime", type: 'date', format: 'yyyy年MM月dd日', editor: { type: 'date' } }
                        //{
                        //    display: "店铺状态", name: "DisPlay", hide: true, render: function (item) {
                        //        return item.DisPlay == 1 ? "是" : "否";
                        //    }
                        //},
        ],
        url: ""/*"/UserDetailedInfo/UserDetailedList"*/,
        parms: { keyword: $("#StoreName").val() },
        height: "98%",
        pageSize: 20,
        rownumbers: true,
        enabledEdit: true,
        clickToEdit: false
    });
}
//查询条件
function DoSearch() {
    grid.set({
        parms: { keyword: $("#StoreName").val() }
    });
    grid.changePage("first"); grid.reload();
}
//获取权限id
var rid;
var Uid;
$(function () {
    $.ajax({
        url: ""/*"/UserDetailedInfo/GetRoleid"*/,
        type: 'POST',
        data: JSON.stringify({
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            rid = data.rid;
            Uid = data.Uid;
            if (rid == 8) {
                document.getElementById("Address").innerHTML = "学校地址：";
            }
        }
    })
})

//时间格式转化
function Todate(num) {
    //Fri Oct 31 18:00:00 UTC+0800 2008   
    //Thu Sep 24 2015 00:00:00 GMT+0800 
    num = num + ""; //给字符串后就一个空格  
    var date = "";
    var month = new Array();
    month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4;
    month["May"] = 5; month["Jun"] = 6; month["Jul"] = 7; month["Aug"] = 8;
    month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
    var week = new Array();
    week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四";
    week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
    str = num.split(" "); //根据空格组成数组  
    date = str[3] + "-"; //就是在2008的后面加一个“-”  
    //通过修改这里可以得到你想要的格式  
    date = date + month[str[1]] + "-" + str[2];
    //date=date+" 周"+week[str[0]];  
    return date;
}

//判断界面显示
//rid 权限id
//UDCount 分店数量
//Star 明星店铺是否开通
//WX 微信服务是否达标
//ud 是否使用U盾
var WX = false;
var InventoryCount = 0;
var Sales = 0;
$(function () {
    $.ajax({
        url: ""/*"/UserDetailedInfo/GetUDListCounts"*/,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        parms: { keyword: '' },
        success: function (data) {
            //判断权限显示申请分店及分店数量显示分店列表
            if (data.rid == 3 || data.rid == 2 || data.rid == 8) {
                if (data.rid == 2 || data.rid == 8) {
                    if (data.UDCount == 0) {
                        $("#wdfd").attr("onclick", "alert('暂无分店')");
                    }
                    document.getElementById("fdsq").style.display = '';
                }
                if (data.rid == 3) {
                    document.getElementById("fdsq").style.display = 'none';
                    document.getElementById("wdfd").style.display = 'none';
                    document.getElementById("kjsy").style.display = '';
                    document.getElementById("kjcz").style.display = '';
                }
            }
            else if (data.rid == 1 || data.rid == 7) {
                document.getElementById('Info').style.display = 'none';
                document.getElementById('StoreInfo').style.display = '';
                GridTrue();
            }
            //判断明星店铺是否开启
            if (data.Star) {
                var date = new Date();
                dttime = parseInt(data.StarDtTime.replace("/Date(", "").replace(")/", ""), 10);
                now = date.getTime();
                if (dttime > now) {
                    //document.getElementById("startrue").style.display = '';
                    document.getElementById("starimg").style.display = '';
                    document.getElementById("dttime").style.display = '';
                    document.getElementById("dttime").innerHTML = Todate(new Date(dttime));
                    document.getElementById("star").style.background = '#ff6600';
                }
                else {
                    document.getElementById("dt").style.display = '';
                }
            }
            //判断wx服务权限
            //if (data.WX) {
            //    WX = data.WX;
            //    InventoryCount = data.InventoryCount;
            //    Sales = data.Sales;
            //    document.getElementById("wxtrue").style.display = '';
            //    document.getElementById("wx").style.background = '#ff6600';
            //}
            //else {
            //    //判断是否满足条件
            //    $.ajax($.post("/UserDetailedInfo/WXConditions", {}, function (data) {
            //        if (data.flag) {
            //            document.getElementById("wxtrue").style.display = '';
            //            document.getElementById("wx").style.background = '#ff6600';
            //        }
            //    }))
            //}
            if (data.ud) {
                document.getElementById("UDtrue").style.display = '';
                document.getElementById("UD").style.background = '#ff6600';
            }
        }
    });
});
var stardialog = null;
var wxdialog = null;
//明星店铺
function StarStore() {
    if (stardialog == null) {
        stardialog = $.ligerDialog.open({
            title: "明星店铺",
            width: 500,
            target: $("#StarStore"),
            id: "StarStore",
            buttons: [{
                text: "确定开通 ￥998/年",
                onclick: function () {
                    if (!WX) {
                        $.ligerDialog.warn("微信服务尚未开通！");
                        return;
                    }
                    if (InventoryCount < 100) {
                        $.ligerDialog.warn("库存商品数不足！");
                        return;
                    }
                    if (Sales < 3000) {
                        $.ligerDialog.warn("月均销售额不足！");
                        return;
                    }
                    window.open("/LevelUp/Pay?type=4");
                }
            }, {
                text: "关闭",
                onclick: function (item, stardialog) {
                    stardialog.hide();
                }
            }]
        });
    }
    else {
        stardialog.show();
    }
}
//微信服务
function WXStore() {
    if (wxdialog == null) {
        wxdialog = $.ligerDialog.open({
            title: "微信服务",
            width: 500,
            target: $("#WX"),
            id: "WXStore",
            buttons: [{
                text: "确认",
                onclick: function (item, wxdialog) {
                    wxdialog.hide();
                }
            }]
        });
    }
    else {
        wxdialog.show();
    }
}
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code = ""; //验证码
var codeLength = 6;//验证码长度
function sendMessage() {
    curCount = count;
    var dealType; //验证方式
    var uid = $("#uid").val();//用户uid
    if ($("#phone").attr("checked") == true) {
        dealType = "phone";
    }
    else {
        dealType = "email";
    }
    //产生验证码
    for (var i = 0; i < codeLength; i++) {
        code += parseInt(Math.random() * 9).toString();
    }
    //设置button效果，开始计时
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").val(+curCount + "秒再获取");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次

    //向后台发送处理数据
    $.ajax({
        type: 'POST',
        url:""/* "/Login/GetAuthCode"*/,
        datatype: 'josn',
        data: JSON.stringify({
            Phone: $("#Phone").val()
        }),
        contentType: 'application/json',
        success: function (data1) {
            if (data1 != 0) {
                $("#WXUserKey").val(data1);
            } else {
                alert("该电话号码已注册！请前往登录！");
            }
        }
    });
}
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启用按钮
        $("#btnSendCode").val("重新发送验证码");
        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
    }
    else {
        curCount--;
        $("#btnSendCode").val(+curCount + "秒再获取");
    }
}
//jquery验证手机号码 
function checkSubmitMobil() {
    if ($("#Phone").val() == "") {
        $("#Phone").attr("class", "txt-ms fl");
        $("#moileMsg").html("<font color='red'><img src='/Images/Help/vili-error.png' />&nbsp;不能为空！</font>");
        $("#btnSendCode").attr("class", "db fl chgs send");
        $("#btnSendCode").attr("disabled", true);
        return false;
    }

    if (!$("#Phone").val().match(/^[1][0-9][0-9]{9}$/)) {
        $("#Phone").attr("class", "txt-ms fl");
        $("#moileMsg").html("<font color='red' ><img src='/Images/Help/vili-error.png' />&nbsp;格式不正确！</font>");
        $("#btnSendCode").attr("class", "db fl chgs send");
        $("#btnSendCode").attr("disabled", true);
        return false;
    }
    $("#Phone").attr("class", "txt-m fl");
    $("#moileMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    $("#btnSendCode").attr("class", "db fl chg send");
    $("#btnSendCode").attr("disabled", false);
    return true;
}
//jquery验证效验码 
function checkidentify() {
    if ($("#identify").val() == "") {
        $("#identifyclass").attr("class", "fl yzm22");
        $("#identifyMsg").html("<font color='red'>效验码不能为空！</font>");
        return false;
    }

    if (!$("#identify").val().match(/^[0-9]{6}$/)) {
        $("#identifyclass").attr("class", "fl yzm22");
        $("#identifyMsg").html("<font color='red' >格式不正确！</font>");
        return false;
    }
    $("#identifyclass").attr("class", "fl yzm2");
    $("#identifyMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    return true;
}
///验证登录名
function checkUsername() {
    if ($("#Username").val() == "") {
        $("#Username").attr("class", "txt-ms fl");
        $("#UsernameMsg").html("<font color='red'><img src='/Images/Help/vili-error.png' />&nbsp;登录名不能为空</font>");
        return false;
    }
    if (!$("#Username").val().match(/^[\u4E00-\u9FA5A-Za-z0-9]+$/)) {
        $("#Username").attr("class", "txt-ms fl");
        $("#UsernameMsg").html("<font color='red' ><img src='/Images/Help/vili-error.png' />&nbsp;登录名格式不正确！</font>");
        return false;
    }
    if (true) {
        //向后台发送处理数据
        $.ajax({
            type: 'POST',
            url: ""/*"/Login/Getusernameok"*/,
            datatype: 'josn',
            data: JSON.stringify({
                Username: $("#Username").val()
            }),
            contentType: 'application/json',
            success: function (data1) {
                if (data1 != 0) {
                    $("#Username").attr("class", "txt-ms fl");
                    $("#UsernameMsg").html("<font color='red' ><img src='/Images/Help/vili-error.png' />&nbsp;该用户名已被注册！</font>");
                    return false;
                }
            },
        });
    }
    $("#Username").attr("class", "txt-m fl");
    $("#UsernameMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    return true;
}
//jquery验证密码 
function checkpassword() {
    if ($("#PassWord").val() == "") {
        $("#PassWord").attr("class", "txt-ms fl");
        $("#passwordMsg").html("<font color='red'><img src='/Images/Help/vili-error.png' />&nbsp;登录密码不能为空</font>");
        return false;
    }
    if (!$("#PassWord").val().match(/^[\A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/)) {
        $("#PassWord").attr("class", "txt-ms fl");
        $("#passwordMsg").html("<font color='red' ><img src='/Images/Help/vili-error.png' />&nbsp;密码格式不正确！</font>");
        return false;
    }
    $("#PassWord").attr("class", "txt-m fl");
    $("#passwordMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    return true;
}
//jquery验证重复密码 
function checkRepeatpassword() {
    if ($("#Repeatpassword").val() != $("#PassWord").val()) {
        $("#Repeatpassword").attr("class", "txt-ms fl");
        $("#RepeatpasswordMsg").html("<font color='red'><img src='/Images/Help/vili-error.png' />&nbsp;两次密码不一致！</font>");
        return false;
    }
    $("#Repeatpassword").attr("class", "txt-m fl");
    $("#RepeatpasswordMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    return true;
}
//jquery验证店主名称
function checkStoreHead() {
    if ($("#StoreHead").val() == "") {
        $("#StoreHead").attr("class", "txt-ms fl");
        $("#StoreHeadMsg").html("<font color='red'><img src='/Images/Help/vili-error.png' />&nbsp;姓名不能为空</font>");
        return false;
    }
    if (!$("#StoreHead").val().match(/^[0-9A-Za-z\u4e00-\u9fa5]{2,18}$/)) {
        $("#StoreHead").attr("class", "txt-ms fl");
        $("#StoreHeadMsg").html("<font color='red' ><img src='/Images/Help/vili-error.png' />&nbsp;格式不正确！</font>");
        return false;
    }
    $("#StoreHead").attr("class", "txt-m fl");
    $("#StoreHeadMsg").html("<font color='red' ><img style='padding-top:15px;' src='/Images/Help/vili-valid.png' /></font>");
    return true;
}
///提交店主账户
function NewLoginNameSubmit() {
    if (checkUsername() && checkpassword() && checkRepeatpassword() && checkStoreHead() && checkSubmitMobil() && checkidentify()) {
        $.ajax($.post(
            ""/*"/UserInfo/NewLoginName"*/,
            {
                Username: $("#Username").val(),
                PassWord: $("#PassWord").val(),
                StoreHead: $("#StoreHead").val(),
                Phone: $("#Phone").val(),
                identify: $("#identify").val(),
                WXUserKey: $("#WXUserKey").val()
            },
            function (data) {
                if (data.flag) {
                    window.open("/LevelUp/Pay?count=1&type=5" + "&Name=" + $("#StoreHead").val() + "&Phone=" + $("#Phone").val() + "&UserGroupID=" + $("#ID").val() + "&UserID=" + $("#UserID").val());
                }
            }))
    }
    else {
        return;
    }
}
///弹出验证框
var logindialog = null;
function NewLoginName() {
    if (logindialog == null) {
        logindialog = $.ligerDialog.open({
            width: 700,
            height: 500,
            title: "绑定新店主账户",
            target: $("#NewLoginName"),
            id: "NewLoginName",
            buttons: [{
                text: "确认",
                onclick: function (item, logindialog) {
                    NewLoginNameSubmit();
                }
            }, {
                text: "关闭",
                onclick: function (item, logindialog) {
                    logindialog.hide();
                }
            }]
        });
    }
    else {
        logindialog.show();
    }
}
function StoreInfoTrue() {
    if (document.getElementById('StoreInfo').style.display == '') {
        document.getElementById('StoreInfo').style.display = 'none';
    }
    else {
        document.getElementById('StoreInfo').style.display = '';
        GridTrue();
    }
}
function SchoolInfo() {
    top.f_addTab('店铺活动', '店铺活动', '/PetService/SchoolInfo');
}