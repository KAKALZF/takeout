package com._520it.takeout.service;


import com._520it.takeout.domain.Autoreply;
import com._520it.takeout.page.PageResult;
import com._520it.takeout.query.AutoreplyQuery;

import java.util.List;

public interface IAutoreplyService {

    int deleteByPrimaryKey(Long id);

    int insert(Autoreply record);

    Autoreply selectByPrimaryKey(Long id);

    List<Autoreply> selectAll();

    int updateByPrimaryKey(Autoreply record);

    PageResult queryPageResult(AutoreplyQuery qo);
}
