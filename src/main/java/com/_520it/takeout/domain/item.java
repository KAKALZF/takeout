package com._520it.takeout.domain;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "item")
@XmlAccessorType(XmlAccessType.FIELD)
public class item {
    //图文消息标题
    private String Title;
    //图片链接
    private String PicUrl;
    //点击图文消息跳转链接
    private String Url;
    //Description图文消息描述
    private String Description;

    /**
     * @param
     * @authro 林泽锋
     */
    public String getPicUrl() {
        return PicUrl;
    }

    public void setPicUrl(String picUrl) {
        PicUrl = picUrl;
    }

    public String getTitle() {
        return Title;
    }

    public String getUrl() {
        return Url;
    }

    public String getDescription() {
        return Description;
    }

    public void setTitle(String title) {
        Title = title;
    }

    @Override
    public String toString() {
        return "item{" +
                "Title='" + Title + '\'' +
                ", PicUrl='" + PicUrl + '\'' +
                ", Url='" + Url + '\'' +
                ", Description='" + Description + '\'' +
                '}';
    }

    public void setUrl(String url) {
        Url = url;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
