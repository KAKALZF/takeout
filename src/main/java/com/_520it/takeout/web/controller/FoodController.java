package com._520it.takeout.web.controller;


import com._520it.takeout.domain.Food;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodQuery;
import com._520it.takeout.service.IFoodService;
import com._520it.takeout.util.AjaxResult;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.FileOutputStream;
import java.util.List;

@Controller
public class FoodController {

	@Autowired
	private IFoodService service;

	@RequestMapping("/food")
	public  String index(){
		return "food";
	}
	@RequestMapping("/bill")
	public ModelAndView index1(FoodQuery qo){
		ModelAndView mv = new ModelAndView();
		PageResult result = service.queryPageResult(qo);
		mv.addObject("results",result);
		return mv;
	}


	@RequestMapping("/food_list")
	@ResponseBody
	public PageResult list(FoodQuery qo){
		return service.queryPageResult(qo);
	}

	@RequestMapping("/food_save")
	@ResponseBody
	public AjaxResult save(MultipartFile file, HttpServletRequest request,Food food){
		try{
			// 自定义的文件名称
			String trueFileName = String.valueOf(file.getOriginalFilename());
			// 设置存放图片文件的路径
			String realpath = request.getSession().getServletContext().getRealPath("/static/images/index/" + trueFileName);
			FileOutputStream fileOutputStream = new FileOutputStream(realpath);
			IOUtils.copy(file.getInputStream(), fileOutputStream);
			fileOutputStream.close();
			food.setPicture(trueFileName);
			service.insert(food);
			return new AjaxResult(true,"保存成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"保存失败!");
	}

	@RequestMapping("/food_update")
	@ResponseBody
	public AjaxResult update(MultipartFile file, HttpServletRequest request,Food food){
		try{
			if (file!=null){
				// 自定义的文件名称
				String trueFileName = String.valueOf(file.getOriginalFilename());
				// 设置存放图片文件的路径
				String realpath = request.getSession().getServletContext().getRealPath("/static/images/index/" + trueFileName);
				FileOutputStream fileOutputStream = new FileOutputStream(realpath);
				IOUtils.copy(file.getInputStream(), fileOutputStream);
				fileOutputStream.close();
				food.setPicture(trueFileName);
			}
			service.updateByPrimaryKey(food);
			return new AjaxResult(true,"更新成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"更新失败!");
	}

	@RequestMapping("/food_delete")
	@ResponseBody
	public AjaxResult changeState(Long id) {
		try{
			service.deleteByPrimaryKey(id);
			return new AjaxResult(true,"删除成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"删除失败!");
	}



}
