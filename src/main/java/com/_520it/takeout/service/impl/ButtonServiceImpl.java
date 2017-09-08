package com._520it.takeout.service.impl;

import com._520it.takeout.domain.Button;
import com._520it.takeout.mapper.ButtonMapper;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.ButtonQuery;
import com._520it.takeout.service.IButtonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ButtonServiceImpl implements IButtonService {
    @Autowired
    private ButtonMapper mapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        mapper.deleteByPrimaryKey(id);
        return 0;
    }

    @Override
    public int insert(Button record) {
        mapper.insert(record);
        return 0;
    }

    @Override
    public Button selectByPrimaryKey(Long id) {
        return mapper.selectByPrimaryKey(id);

    }

    @Override
    public List<Button> selectAll() {
        return mapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(Button record) {
        mapper.updateByPrimaryKey(record);
        return 0;
    }

    @Override
    public PageResult queryPageResult(ButtonQuery qo) {
        //查询总结果数
        Long count = mapper.queryPageCount(qo);
        if (count == 0) {
            return new PageResult(count, Collections.EMPTY_LIST);
        }
        //查询结果集
        return new PageResult(count, mapper.queryPageResult(qo));
    }
}
