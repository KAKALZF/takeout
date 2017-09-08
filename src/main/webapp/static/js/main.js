$(function () {
    /*初始化树组件*/
    $("#main_tree").tree({
        url: "/menu_getRoot.do",
        onClick: function (node) {
            console.log(node);
            //判断选项卡是否存在,如果存在,就选中该选项卡,否则,就添加一个选项卡
            if ($("#main_tabs").tabs("exists", node.text)) {//存在
                $("#main_tabs").tabs("select", node.text);//选中
            } else {//不存在
                $("#main_tabs").tabs("add", {
                    title: node.text,
                    closable: true,
//					href:node.attributes.url,
                    content: "<iframe frameborder=0 height='100%' width='100%' src=" + node.url + "></iframe>"
                })
            }
        }
    })
    //右击事件
    $('#main_tabs').tabs({
        onContextMenu: function (e, node) {
            e.preventDefault();
            // 查找节点
            $('#main_tabs').tabs('select', node.target);
            // 显示快捷菜单
            $('#mm').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }
    });


})
//有点问题
function closeOne() {
    var tab = $('#main_tabs').tabs('getSelected');
    var index = $('#main_tabs').tabs('getTabIndex', tab);
    $('#main_tabs').tabs('close', index);
}
function closeOthers() {
    var tab = $('#main_tabs').tabs('getSelected');
    var index = $('#main_tabs').tabs('getTabIndex', tab);
    var tabs = $('#main_tabs').tabs('tabs');
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] != index) {
            $('#main_tabs').tabs('close', tabs[i].panel('options').title);
        }
    }
}
//有点问题
function closeAll() {
    var tabs = $('#main_tabs').tabs('tabs');
    for (var i = 0; i < tabs.length; i++) {
        $('#main_tabs').tabs('close', tabs[i].panel('options').title);
    }
    var tab = $('#main_tabs').tabs('getSelected');
    var index = $('#main_tabs').tabs('getTabIndex', tab);
    $('#main_tabs').tabs('close', index);
}