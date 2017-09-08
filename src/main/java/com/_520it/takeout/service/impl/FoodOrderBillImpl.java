package com._520it.takeout.service.impl;


import com._520it.takeout.domain.Food;
import com._520it.takeout.domain.FoodOrderBill;
import com._520it.takeout.mapper.FoodMapper;
import com._520it.takeout.mapper.FoodOrderBillMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodOrderBillQuery;
import com._520it.takeout.query.FoodQuery;
import com._520it.takeout.service.IFoodOrderBillService;
import com._520it.takeout.service.IFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class FoodOrderBillImpl implements IFoodOrderBillService {
	@Autowired
	private FoodOrderBillMapper mapper;

	@Override
	public int deleteByPrimaryKey(Long id) {

		return mapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(FoodOrderBill record) {
		record.setOrderTime(new Date());
		record.setStatus(false);
		return mapper.insert(record);
	}

	@Override
	public FoodOrderBill selectByPrimaryKey(Long id) {
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public List<FoodOrderBill> selectAll() {
		return mapper.selectAll();
	}

	@Override
	public int updateByPrimaryKey(FoodOrderBill record) {

		return mapper.updateByPrimaryKey(record);
	}

	@Override
	public PageResult queryPageResult(FoodOrderBillQuery qo) {
		//查询总结果数
		Long count = mapper.queryPageCount(qo);
		if (count == 0) {
			return new PageResult(count, Collections.EMPTY_LIST);
		}
		//查询结果集
		return new PageResult(count, mapper.queryPageResult(qo));
	}

	@Override//根据用户的OPENID来查询对应的订单
	public FoodOrderBill selectByOpendId(String openId) {
		return mapper.selectByOpendId(openId);
	}

}
