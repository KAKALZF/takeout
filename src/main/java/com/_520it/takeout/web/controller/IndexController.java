package com._520it.takeout.web.controller;

import com._520it.takeout.util.URLUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com._520it.takeout.util.HttpUtil;
import com._520it.takeout.util.WeixinUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController {
	@RequestMapping("/index")
	public String index(String code, HttpServletRequest request){
		String link = URLUtil.getURLProperties("link");
		String imgUrl = URLUtil.getURLProperties("imgUrl");
		System.out.println(link);
		System.out.println(imgUrl);
		request.setAttribute("link",link);
		request.setAttribute("imgUrl",imgUrl);
		System.out.println(code);
		//获取ACCESSTOKEN
		String result = HttpUtil.get(WeixinUtil.GET_WEB_ACCESSTOKEN_URL.replace("APPID", WeixinUtil.APPID).replace("SECRET", WeixinUtil.APPSECRET).replace("CODE", code));
		System.out.println(result);

		JSONObject json = JSON.parseObject(result);
		String access_token = json.getString("access_token");
		String openid = json.getString("openid");

		String temp = HttpUtil.get(WeixinUtil.GET_TICKET_URL.replace("ACCESS_TOKEN", WeixinUtil.getAccessToken()));
		System.out.println(temp);
		//获取用户信息
		String userinfo = HttpUtil.get(WeixinUtil.GET_WEB_USERINFO_URL.replace("ACCESS_TOKEN", access_token).replace("OPENID", openid));
		System.out.println(userinfo);
		//把openid放到session
		//.....
		request.getSession().setAttribute("USERINFO",userinfo);
		return "redirect:/bill.do";
	}

	@RequestMapping("pay")
	public String pay(String code, HttpServletRequest request){


		return  "pay";
	}
	@RequestMapping("cg")
	public String cg(){
		return  "cg";
	}

}
