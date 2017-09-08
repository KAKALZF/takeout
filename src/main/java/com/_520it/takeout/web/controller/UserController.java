package com._520it.takeout.web.controller;


import com._520it.takeout.domain.User;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.UserQuery;
import com._520it.takeout.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

	@Autowired
	private IUserService service;


	@RequestMapping("/user")
	public  String index(){
		return "user";
	}


	@RequestMapping("/user_list")
	@ResponseBody
	public PageResult list(UserQuery qo){
		return service.queryPageResult(qo);
	}

	@RequestMapping("/user_listAll")
	@ResponseBody
	public List<User> list1(UserQuery qo){
		List<User> users = service.selectAll();
		return users;
	}

}
