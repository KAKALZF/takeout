package com._520it.takeout.service;

import com._520it.takeout.domain.Button;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:application.xml")
public class IButtonServiceTest {
    @Autowired
    private IButtonService service;

    @Test
    public void deleteByPrimaryKey() throws Exception {

    }

    @Test
    public void insert() throws Exception {
        Button button = new Button();
        button.setName("like");
        button.setType("click");
        button.setKey("V1001_TODAY_MUSIC");
        button.setUrl("http://www.soso.com");
        service.insert(button);
    }

    @Test
    public void selectByPrimaryKey() throws Exception {

    }

    @Test
    public void selectAll() throws Exception {
        List<Button> buttons = service.selectAll();
        System.out.println(buttons);

    }

    @Test
    public void updateByPrimaryKey() throws Exception {

    }



}