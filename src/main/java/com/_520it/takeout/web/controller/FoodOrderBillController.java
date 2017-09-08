package com._520it.takeout.web.controller;


import com._520it.takeout.domain.FoodOrderBill;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodOrderBillQuery;
import com._520it.takeout.service.IFoodOrderBillService;
import com._520it.takeout.util.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FoodOrderBillController {

	@Autowired
	private IFoodOrderBillService service;

	@RequestMapping("/foodOrderBill")
	public  String index(){
		return "foodOrderBill";
	}


	@RequestMapping("/foodOrderBill_list")
	@ResponseBody
	public PageResult list(FoodOrderBillQuery qo){
		return service.queryPageResult(qo);
	}

	@RequestMapping("/foodOrderBill_save")
	@ResponseBody
	public AjaxResult save(FoodOrderBill fb){
		try{

			service.insert(fb);
			return new AjaxResult(true,"保存成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"保存失败!");
	}

	@RequestMapping("/foodOrderBill_update")
	@ResponseBody
	public AjaxResult edit(FoodOrderBill fb){
		try{
			service.updateByPrimaryKey(fb);
			return new AjaxResult(true,"更新成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"更新失败!");
	}

	@RequestMapping("/foodOrderBill_delete")
	@ResponseBody
	public AjaxResult delete(Long id) {
		try{
			service.deleteByPrimaryKey(id);
			return new AjaxResult(true,"删除成功!");
		}catch(Exception e){
			e.printStackTrace();
		}
		return new AjaxResult(false,"删除失败!");
	}

}
