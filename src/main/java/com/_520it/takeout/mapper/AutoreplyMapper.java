package com._520it.takeout.mapper;

import com._520it.takeout.domain.Autoreply;
import com._520it.takeout.query.AutoreplyQuery;

import java.util.List;

public interface AutoreplyMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Autoreply record);

    Autoreply selectByPrimaryKey(Long id);

    List<Autoreply> selectAll();

    int updateByPrimaryKey(Autoreply record);

    Long queryPageCount(AutoreplyQuery qo);

    List<Autoreply> queryPageResult(AutoreplyQuery qo);
}