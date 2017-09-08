package com._520it.takeout.mapper;

import com._520it.takeout.domain.Menu;

import java.util.List;

public interface MenuMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Menu record);

    Menu selectByPrimaryKey(Long id);

    List<Menu> selectAll();

    List<Menu> getRootMenu();

    int updateByPrimaryKey(Menu record);
}