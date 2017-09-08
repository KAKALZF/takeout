package com._520it.takeout.service.impl;




import com._520it.takeout.domain.Food;
import com._520it.takeout.mapper.FoodMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodQuery;
import com._520it.takeout.service.IFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
@Service
public class FoodImpl implements IFoodService {
	@Autowired
	private FoodMapper mapper;

	@Override
	public int deleteByPrimaryKey(Long id) {

		return mapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(Food record) {
		return mapper.insert(record);
	}

	@Override
	public Food selectByPrimaryKey(Long id) {
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Food> selectAll() {
		return mapper.selectAll();
	}

	@Override
	public int updateByPrimaryKey(Food record) {

		return mapper.updateByPrimaryKey(record);
	}

	@Override
	public PageResult queryPageResult(FoodQuery qo) {
		//查询总结果数
		Long count = mapper.queryPageCount(qo);
		if (count == 0) {
			return new PageResult(count, Collections.EMPTY_LIST);
		}
		//查询结果集
		return new PageResult(count, mapper.queryPageResult(qo));
	}

}
