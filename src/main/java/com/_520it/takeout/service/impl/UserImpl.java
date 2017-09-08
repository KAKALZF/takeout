package com._520it.takeout.service.impl;


import com._520it.takeout.domain.User;
import com._520it.takeout.mapper.UserMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.UserQuery;
import com._520it.takeout.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserImpl implements IUserService {

	@Autowired
	private UserMapper mapper;

	@Override
	public int insert(User u) {
		return mapper.insert(u);
	}

	@Override
	public User selectByPrimaryKey(Long id) {
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public List<User> selectAll() {
		return mapper.selectAll();
	}

	@Override
	public User select(String sn) {
		return mapper.select(sn);
	}

	@Override
	public int updateByPrimaryKey(User u) {

		return mapper.updateByPrimaryKey(u);
	}

	@Override
	public PageResult queryPageResult(UserQuery qo) {
		//查询总结果数
		Long count = mapper.queryPageCount(qo);
		if (count == 0) {
			return new PageResult(count, Collections.EMPTY_LIST);
		}
		//查询结果集
		return new PageResult(count, mapper.queryPageResult(qo));
	}

}
