package com._520it.takeout.service;

import com._520it.takeout.domain.Menu;

import java.util.List;

/**
 * Created by liruifeng on 2017/9/4.
 */

public interface IMenuService {
    int deleteByPrimaryKey(Long id);

    int insert(Menu record);

    Menu selectByPrimaryKey(Long id);

    List<Menu> selectAll();

    int updateByPrimaryKey(Menu record);

    List<Menu> getRootMenu();
}
