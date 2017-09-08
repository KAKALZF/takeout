package com._520it.takeout.service;

import com._520it.takeout.domain.Food;
import com._520it.takeout.domain.FoodOrderBill;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodOrderBillQuery;
import com._520it.takeout.query.FoodQuery;

import java.util.List;

public interface IFoodOrderBillService {

	int deleteByPrimaryKey(Long id);

	int insert(FoodOrderBill record);

	FoodOrderBill selectByPrimaryKey(Long id);

	List<FoodOrderBill> selectAll();

	int updateByPrimaryKey(FoodOrderBill record);

	//高级查询的分页结果集
	PageResult queryPageResult(FoodOrderBillQuery qo);

	//根据用户的OPENID来查询对应的订单
	FoodOrderBill selectByOpendId(String openId);
	
}
