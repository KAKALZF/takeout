var tab = null;
var tabItems = [];
$(function () {
    //布局
    $("#main").ligerLayout({
        leftWidth: 75,
        bottomHeight: 30,
        space: -2,
        allowBottomResize: false ,
        allowCenterBottomResize:false ,
        allowLeftResize: false,
        allowLeftCollapse:false
    });

    //tablepage
    tab = $("#framecenter").ligerTab({
        width: "100%", height: "100%",
        leftWidth: 0,
        showSwitchInTab: true,
        showSwitch: true,
        dblClickToClose: true,
        dragToMove: true,
        contextmenu: true
    });

    $(".box_n li a").click(function () {
        $(".box_n li a").removeClass("nav_sub");
        $(this).addClass("nav_sub");
    });
});
//弹出新页面
function f_addTab(tabid, text, url){
    tab.addTabItem({
        tabid: tabid,
        text: text,
        url: url
    });
}

//关闭新页面
function f_closeTab(tabid) {
    tab.removeTabItem(tabid);
}
///判断选项卡是否存在
function f_existsTab(tabid) {
    return tab.isTabItemExist(tabid)
}
//重新加载数据
function f_reloadTab(tabid) {
    tab.reload(tabid)
}

function onSelect(note) {
    alert('onSelect:' + note.data.text);
}
//弹出新页面
function addtab(id, atext, aurl) {
    if (!tab) return;
    tab.addTabItem({ tabid: id, text: atext, url: aurl })
}

//显示菜单下面的选项
function ShowMenuList(id) {

    var objectobj = document.getElementById(id);
    var dtObj = document.getElementById("div_" + id);
    if (objectobj.style.display == "none") {
        objectobj.style.display = "";

        //其它菜单折叠
        //$(dtObj).parent().parent().find("div").not(dtObj).attr("class", "head1"); //折叠
        $(".head2").attr("class", "head1");
        dtObj.setAttribute("class", "head2");
        $(objectobj).parent().parent().find("ul").not(objectobj).css("display", "none"); //隐藏菜单子项
    }
    else {
        objectobj.style.display = "none";
        dtObj.setAttribute("class", "head1");
    }
}
//控制菜单模块的显示和隐藏
function showDivMenu(divId) {
    $("#" + divId).css("visibility", "visible");
    $("#" + divId).siblings("div").css("visibility", "hidden");
}
$(document).ready(function () {
    $("#nav div").click(function () {
        $("#nav div").removeClass("active")
        $(this).addClass("active")
    })
})