package com._520it.takeout.mapper;

import com._520it.takeout.domain.Food;
import com._520it.takeout.query.FoodQuery;


import java.util.List;

public interface FoodMapper {
	int deleteByPrimaryKey(Long id);

	int insert(Food record);

	Food selectByPrimaryKey(Long id);

	List<Food> selectAll();

	int updateByPrimaryKey(Food record);

	Long queryPageCount(FoodQuery qo);

	List<Food> queryPageResult(FoodQuery qo);

}
	

