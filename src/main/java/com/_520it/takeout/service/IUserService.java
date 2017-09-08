package com._520it.takeout.service;

import com._520it.takeout.domain.User;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.UserQuery;

import java.util.List;

public interface IUserService {

	int insert(User record);

	User selectByPrimaryKey(Long id);

	List<User> selectAll();

	User select(String sn);

	int updateByPrimaryKey(User record);


	PageResult queryPageResult(UserQuery qo);
	
}
