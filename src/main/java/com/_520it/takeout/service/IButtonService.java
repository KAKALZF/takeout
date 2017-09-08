package com._520it.takeout.service;

import com._520it.takeout.domain.Button;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.ButtonQuery;

import java.util.List;

public interface IButtonService {
    int deleteByPrimaryKey(Long id);

    int insert(Button record);

    Button selectByPrimaryKey(Long id);

    List<Button> selectAll();

    int updateByPrimaryKey(Button record);

    PageResult queryPageResult(ButtonQuery qo);
}

