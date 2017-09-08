package com._520it.takeout.mapper;

import com._520it.takeout.domain.Button;
import com._520it.takeout.query.ButtonQuery;

import java.util.List;

public interface ButtonMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Button record);

    Button selectByPrimaryKey(Long id);

    List<Button> selectAll();

    int updateByPrimaryKey(Button record);

    Long queryPageCount(ButtonQuery qo);

    List<Button> queryPageResult(ButtonQuery qo);
}