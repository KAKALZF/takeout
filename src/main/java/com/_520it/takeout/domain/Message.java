package com._520it.takeout.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.annotations.Param;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Setter
@Getter
@ToString
public class Message {
    private Long id;
//用户openid
    private String openid;
//用户发送的消息
    private String sendcontent;
//后台回复的消息
    private String replycontent;
//消息类型
    private String type;
//消息记录时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date inputtime;
//    用户信息
    private User user;


}