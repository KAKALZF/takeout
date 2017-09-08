package com._520it.takeout.service.impl;

import com._520it.takeout.domain.Message;
import com._520it.takeout.mapper.MessageMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.MessageQuery;
import com._520it.takeout.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;


@Service
public class MessageServiceImpl implements IMessageService {

    @Autowired
    private MessageMapper messageMapper;


    public void deleteByPrimaryKey(Long id) {

          messageMapper.deleteByPrimaryKey(id);

    }

    public int insert(Message record) {
        return messageMapper.insert(record);
    }

    public Message selectByPrimaryKey(Long id) {
        return messageMapper.selectByPrimaryKey(id);
    }

//    返回结果集
    public PageResult selectAll(MessageQuery qo) {
        Long totalCount = messageMapper.getTotalCount(qo);
        if(totalCount==0){
            return new PageResult(totalCount,messageMapper.selectAll(qo));
        }

        return new PageResult(totalCount,messageMapper.selectAll(qo));
    }

    public int updateByPrimaryKey(Message record) {
        return 0;
    }
}
