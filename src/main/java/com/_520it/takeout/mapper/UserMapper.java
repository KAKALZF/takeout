package com._520it.takeout.mapper;

import com._520it.takeout.domain.User;
import com._520it.takeout.query.UserQuery;

import java.util.List;

public interface UserMapper {

    int insert(User record);

    User selectByPrimaryKey(Long id);

    List<User> selectAll();

    User select(String sn);

    int updateByPrimaryKey(User record);

    Long queryPageCount(UserQuery qo);

    List<User> queryPageResult(UserQuery qo);
}