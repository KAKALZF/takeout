package com._520it.takeout.web.controller;

import com._520it.takeout.domain.Autoreply;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.AutoreplyQuery;
import com._520it.takeout.service.IAutoreplyService;
import com._520it.takeout.util.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AutoreplyController {

    @Autowired
    private IAutoreplyService service;

    @RequestMapping("/autoreply")
    public String index(){
        return "autoreply";
    }

    @RequestMapping("/autoreply_list")
    @ResponseBody
    public PageResult list(AutoreplyQuery qo){
        return service.queryPageResult(qo);
    }

    @RequestMapping("/autoreply_delete")
    @ResponseBody
    public AjaxResult delete(Long id){
        try {
            service.deleteByPrimaryKey(id);
            return new AjaxResult(true,"删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false,"删除失败");
        }
    }

    @RequestMapping("/autoreply_update")
    @ResponseBody
    public AjaxResult edit(Autoreply autoreply){
        try {
            service.updateByPrimaryKey(autoreply);
            return new AjaxResult(true,"编辑成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false,"编辑失败");
        }
    }

    @RequestMapping("/autoreply_save")
    @ResponseBody
    public AjaxResult save(Autoreply autoreply){
        try {
            service.insert(autoreply);
            return new AjaxResult(true,"保存成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false,"保存失败");
        }
    }
}
