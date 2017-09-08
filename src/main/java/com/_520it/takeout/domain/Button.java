package com._520it.takeout.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Button {
    private Long id;
    //菜单类型
    private String type;
    //菜单名
    private String name;
    //click等点击类型必须
    private String key;
    //网页链接
    private String url;
    //父菜单id
    private Long parent_id;
    //子菜单
    private List<Button> sub_button;

    @Override
    public String toString() {
        return "Button{" +
                "type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", key='" + key + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}