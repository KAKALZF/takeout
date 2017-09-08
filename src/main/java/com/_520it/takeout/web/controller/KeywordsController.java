package com._520it.takeout.web.controller;

import com._520it.takeout.domain.Keywords;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.KeywordsQuery;
import com._520it.takeout.service.IKeywordsService;
import com._520it.takeout.util.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class KeywordsController {

    @Autowired
    private IKeywordsService service;

    @RequestMapping("/keywords")
    public String index(){
        return "keywords";
    }

    @RequestMapping("/keywords_list")
    @ResponseBody
    public PageResult list(KeywordsQuery qo){
        return service.queryPageResult(qo);
    }

    @RequestMapping("/keywords_delete")
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

    @RequestMapping("/keywords_update")
    @ResponseBody
    public AjaxResult edit(Keywords keywords){
        try {
            service.updateByPrimaryKey(keywords);
            return new AjaxResult(true,"编辑成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false,"编辑失败");
        }
    }

    @RequestMapping("/keywords_save")
    @ResponseBody
    public AjaxResult save(Keywords keywords){
        try {
            service.insert(keywords);
            return new AjaxResult(true,"保存成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new AjaxResult(false,"保存失败");
        }
    }

    @RequestMapping("/keywords_changeState")
    @ResponseBody
    public AjaxResult changeState(Keywords keywords) {
        if (keywords.getState()) {
            try {
                service.updateState(keywords);
                return new AjaxResult(true, "更改成功");
            } catch (Exception e) {
                e.printStackTrace();
                return new AjaxResult(false, "更改失败");
            }
        } else {
            try {
                service.changeState(keywords);
                return new AjaxResult(true,"更改成功");
            } catch (Exception e) {
                e.printStackTrace();
                return new AjaxResult(false,"更改失败");
            }
        }
    }

}
