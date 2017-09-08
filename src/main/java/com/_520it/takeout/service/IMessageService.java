package com._520it.takeout.service;

import com._520it.takeout.domain.Message;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.MessageQuery;

import java.lang.reflect.Array;


public interface IMessageService {

    void deleteByPrimaryKey(Long ids);

    int insert(Message record);

    Message selectByPrimaryKey(Long id);

    PageResult selectAll(MessageQuery qo);

    int updateByPrimaryKey(Message record);


}
