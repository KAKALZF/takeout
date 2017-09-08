package com._520it.takeout.service;

import com._520it.takeout.domain.Food;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.FoodQuery;


import java.util.List;

public interface IFoodService {

	int deleteByPrimaryKey(Long id);

	int insert(Food record);

	Food selectByPrimaryKey(Long id);

	List<Food> selectAll();

	int updateByPrimaryKey(Food record);


	PageResult queryPageResult(FoodQuery qo);
	
}
