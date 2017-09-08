package com._520it.takeout.web.controller;

import com._520it.takeout.domain.Menu;
import com._520it.takeout.service.IMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MenuController {
    @Autowired
    private IMenuService service;

    @RequestMapping("/menu_list")
    @ResponseBody
    public List<Menu> list() {
        return service.selectAll();
    }

    @RequestMapping("/menu_getRoot")
    @ResponseBody
    public List<Menu> getRootMenu() {
        return service.getRootMenu();
    }

}
