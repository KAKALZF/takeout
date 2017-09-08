package com._520it.takeout.mapper;

import com._520it.takeout.domain.Food;
import com._520it.takeout.domain.FoodOrderBill;
import com._520it.takeout.query.FoodOrderBillQuery;
import com._520it.takeout.query.FoodQuery;

import java.util.List;

public interface FoodOrderBillMapper {
	int deleteByPrimaryKey(Long id);

	int insert(FoodOrderBill record);

	FoodOrderBill selectByPrimaryKey(Long id);

	List<FoodOrderBill> selectAll();

	int updateByPrimaryKey(FoodOrderBill record);
	//高级查询查总数
	Long queryPageCount(FoodOrderBillQuery qo);
	//高级查询查结果集
	List<FoodOrderBill> queryPageResult(FoodOrderBillQuery qo);
	//根据用户的OPENID来查询对应的订单
	FoodOrderBill selectByOpendId(String openId);

}
	

