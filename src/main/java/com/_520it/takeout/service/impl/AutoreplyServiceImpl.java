package com._520it.takeout.service.impl;

import com._520it.takeout.domain.Autoreply;
import com._520it.takeout.mapper.AutoreplyMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.AutoreplyQuery;
import com._520it.takeout.service.IAutoreplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class AutoreplyServiceImpl implements IAutoreplyService {

    @Autowired
    private AutoreplyMapper mapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return mapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Autoreply record) {
        return mapper.insert(record);
    }

    @Override
    public Autoreply selectByPrimaryKey(Long id) {
        return mapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Autoreply> selectAll() {
        return mapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(Autoreply record) {
        return mapper.updateByPrimaryKey(record);
    }

    @Override
    public PageResult queryPageResult(AutoreplyQuery qo) {
        Long count = mapper.queryPageCount(qo);
        if (count==0) {
            return new PageResult(count, Collections.EMPTY_LIST);
        }
        return new PageResult(count,mapper.queryPageResult(qo));
    }
}
