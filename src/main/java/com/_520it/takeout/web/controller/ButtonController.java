package com._520it.takeout.web.controller;

import com._520it.takeout.domain.Button;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.ButtonQuery;
import com._520it.takeout.service.IButtonService;
import com._520it.takeout.service.IFoodOrderBillService;
import com._520it.takeout.util.AjaxResult;
import com._520it.takeout.util.HttpUtil;
import com._520it.takeout.util.WeixinUtil;
import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 1 on 2017/9/5.
 */
@Controller
public class ButtonController {
    @Autowired
    private IButtonService service;

    // 菜单主页
    @RequestMapping("/button")
    public String index() {
        return "button";
    }

    //获取菜单列表
    @RequestMapping("/button_list")
    @ResponseBody
    public PageResult list(ButtonQuery qo) {
        return service.queryPageResult(qo);
    }

    //动态创建菜单
    @RequestMapping("/createButton")
    @ResponseBody
    public AjaxResult createButton(HttpServletRequest request, HttpServletResponse response) {
        try {
            request.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            List<Button> buttons = service.selectAll();
            Map<String, Object> map = new HashMap();
            map.put("button", buttons);
            System.out.println(JSON.toJSONString(map));
            String result = HttpUtil.post(WeixinUtil.CREATEMENU_URL.replace("ACCESS_TOKEN", WeixinUtil.getAccessToken()), JSON.toJSONString(map));
            System.out.println(result);
            if ("{\"errcode\":0,\"errmsg\":\"ok\"}".equals(result)) {
                return new AjaxResult(true, "建立成功!");
            } else {
                throw new Exception("菜单格式错误");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new AjaxResult(false, "建立失败!");
    }

    //增加
    @RequestMapping("/button_save")
    @ResponseBody
    public AjaxResult save(Button button) {
        try {
            service.insert(button);
            return new AjaxResult(true, "保存成功!");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new AjaxResult(false, "保存失败!");
    }

    //更改保存
    @RequestMapping("/button_update")
    @ResponseBody
    public AjaxResult update(Button button) {
        try {
            service.updateByPrimaryKey(button);
            return new AjaxResult(true, "更新成功!");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new AjaxResult(false, "更新失败!");
    }

    //删除
    @RequestMapping("/button_delete")
    @ResponseBody
    public AjaxResult delete(Long id) {
        try {
            service.deleteByPrimaryKey(id);
            return new AjaxResult(true, "删除成功!");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new AjaxResult(false, "删除失败!");
    }
}
