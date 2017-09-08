package com._520it.takeout.service.impl;

import com._520it.takeout.domain.Keywords;
import com._520it.takeout.mapper.KeywordsMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.KeywordsQuery;
import com._520it.takeout.service.IKeywordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class KeywordsServiceImpl implements IKeywordsService {

    @Autowired
    private KeywordsMapper mapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return mapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Keywords record) {
        return mapper.insert(record);
    }

    @Override
    public Keywords selectByPrimaryKey(Long id) {
        return mapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Keywords> selectAll() {
        return mapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(Keywords record) {
        return mapper.updateByPrimaryKey(record);
    }

    @Override
    public int updateState(Keywords record){
        return mapper.updateState(record);
    }

    @Override
    public int changeState(Keywords record){
        return mapper.changeState(record);
    }

    @Override
    public PageResult queryPageResult(KeywordsQuery qo) {
        Long count = mapper.queryPageCount(qo);
        if (count==0) {
            return new PageResult(count, Collections.EMPTY_LIST);
        }
        return new PageResult(count,mapper.queryPageResult(qo));
    }
}
