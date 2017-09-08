package com._520it.takeout.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "xml")
@XmlAccessorType(XmlAccessType.FIELD)
@Setter
@Getter
@ToString
public class XmlMessageEntity {
    private String ToUserName;
    private String FromUserName;
    private Long CreateTime;
    private String MsgType;
    private String Content;
    private String Event;
    private Long MsgId;
    private String PicUrl;
    private Integer EventKey;
    //图文消息个数，限制为8条以内
    private Long ArticleCount;
    //图文消息
    private List<Article> Articles;

    public String getEvent() {
        return Event;
    }

    public void setEvent(String event) {
        Event = event;
    }

    public String getToUserName() {
        return ToUserName;
    }

    public void setToUserName(String toUserName) {
        ToUserName = toUserName;
    }

    public String getFromUserName() {
        return FromUserName;
    }

    public void setFromUserName(String fromUserName) {
        FromUserName = fromUserName;
    }

    public Long getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(Long createTime) {
        CreateTime = createTime;
    }

    public String getMsgType() {
        return MsgType;
    }

    public void setMsgType(String msgType) {
        MsgType = msgType;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public Long getMsgId() {
        return MsgId;
    }

    public void setMsgId(Long msgId) {
        MsgId = msgId;
    }

   /* @Override
    public String toString() {
        return "XmlMessageEntity [ToUserName=" + ToUserName + ", FromUserName="
                + FromUserName + ", Event=" + Event + ", MsgType=" + MsgType
                + ", Content=" + Content + ", MsgId=" + MsgId + "]";
    }*/

//    @Override
//    public String toString() {
//        return "item{" +
//                "ToUserName='" + ToUserName + '\'' +
//                ", FromUserName='" + FromUserName + '\'' +
//                ", CreateTime=" + CreateTime +
//                ", MsgType='" + MsgType + '\'' +
//                ", Content='" + Content + '\'' +
//                ", Event='" + Event + '\'' +
//                ", MsgId=" + MsgId +
//                ", PicUrl='" + PicUrl + '\'' +
//                ", ArticleCount=" + ArticleCount +
//                ", Articles=" + Articles +
//                '}';
//    }

    public String getPicUrl() {
        return PicUrl;
    }

    public void setPicUrl(String picUrl) {
        PicUrl = picUrl;
    }


    public Long getArticleCount() {
        return ArticleCount;
    }

    public void setArticleCount(Long articleCount) {
        ArticleCount = articleCount;
    }

}
