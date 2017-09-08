package com._520it.takeout.mapper;

import com._520it.takeout.domain.Keywords;
import com._520it.takeout.query.KeywordsQuery;

import java.util.List;

public interface KeywordsMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Keywords record);

    Keywords selectByPrimaryKey(Long id);

    List<Keywords> selectAll();

    int updateByPrimaryKey(Keywords record);

    int updateState(Keywords record);

    int changeState(Keywords record);

    Long queryPageCount(KeywordsQuery qo);

    List<Keywords> queryPageResult(KeywordsQuery qo);
}