package com._520it.takeout.web.controller;

import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.MessageQuery;
import com._520it.takeout.service.IMessageService;
import com._520it.takeout.util.AjaxResult;
import com._520it.takeout.util.ArticleUtil;
import com._520it.takeout.util.WeixinUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MessageController {

    @Autowired
    private IMessageService messageService;

    @RequestMapping("/message_views")
    public String list() {
        return "message";
    }

    @RequestMapping("/message_list")
    @ResponseBody
    public PageResult seleAll(MessageQuery qo) {
        return messageService.selectAll(qo);
    }

    //    批量删除消息
    @RequestMapping("/message_delete")
    @ResponseBody
    public AjaxResult delete(@RequestParam("ids[]") Long[] ids) {
        try {
            for (Long id : ids) {
                messageService.deleteByPrimaryKey(id);
            }
            return new AjaxResult(true, "删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false, "删除失败");
        }
    }


    //    发送文本消息
    @RequestMapping("/message_text")
    @ResponseBody
    public AjaxResult message(String openid, String text) {

        String articleMsg = ArticleUtil.makeTextCustomMessage(openid, text);
        boolean res = ArticleUtil.sendCustomMessage(WeixinUtil.getAccessToken(), articleMsg);
        if (res) {
            return new AjaxResult(true, "客服消息发送成功");
        } else {
            return new AjaxResult(false, "客服消息发送失败");
        }
    }


   /* //    发送图文消息
    @RequestMapping("/message_send")
    @ResponseBody
    public void message(Customer customer) {

        List<Customer> all = new ArrayList<Customer>();

        Customer a2 = new Customer();
        a2.setDescription("最崇拜的明星Justin Timberlake");
        a2.setPicUrl("http://albb.nat300.top/1.jpg");
        a2.setTitle("贾斯汀·汀布莱克(Justin Timberlake),1981年1月31日出生于美国田纳西州孟菲斯市，美国男歌手、演员、音乐制作人、主持人，前男子演唱组合超级男孩成员。");
        a2.setUrl("http://baike.haosou.com/doc/3382630-3560934.html?from=1358&sid=3560934&redirect=search");

        Customer a3 = new Customer();
        a3.setDescription("最崇拜的明星Justin Timberlake");
        a3.setPicUrl("http://albb.nat300.top/1.jpg");
        a3.setTitle("贾斯汀·汀布莱克(Justin Timberlake),1981年1月31日出生于美国田纳西州孟菲斯市，美国男歌手、演员、音乐制作人、主持人，前男子演唱组合超级男孩成员。");
        a3.setUrl("http://baike.haosou.com/doc/3382630-3560934.html?from=1358&sid=3560934&redirect=search");
        all.add(a2);
        all.add(a3);


        String articleMsg = ArticleUtil.makeNewsCustomMessage("oAMzW0rHBqGIq6eYabwGJ8vudpWs", all);
        boolean res = ArticleUtil.sendCustomMessage(WeixinUtil.getAccessToken(), articleMsg);
        if (res) {
            System.out.println("客服消息发送成功");
        } else {
            System.out.println("客服消息发送失败");
        }
    }
*/

    //=======================整合bootstrap===========================================
    @RequestMapping("/message_views_bootstrap")
    public String message_views_bootstrap(Model model, MessageQuery qo) {
        PageResult pageResult = messageService.selectAll(qo);
        pageResult.setCurrentPage(qo.getPage());
//        com._520it.takeout.bootstrap.PageResult pageResult1 = new com._520it.takeout.bootstrap.PageResult(pageResult.getRows(), pageResult.getTotal().intValue(), qo.getPage(), 10);
        model.addAttribute("pageResult", pageResult);
        return "message";
    }

}
