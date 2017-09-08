package com._520it.takeout.mapper;

import com._520it.takeout.domain.Message;
import com._520it.takeout.query.MessageQuery;
import com._520it.takeout.query.QueryObject;

import java.util.List;

public interface MessageMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Message record);

    Message selectByPrimaryKey(Long id);

    List<Message> selectAll(QueryObject qo);

    Long getTotalCount(QueryObject qo);

    int updateByPrimaryKey(Message record);
}