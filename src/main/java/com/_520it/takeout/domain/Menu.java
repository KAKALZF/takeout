package com._520it.takeout.domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Menu {
    private Long id;

    private String text;

    private String url;

    private Long parentId;

    private List<Menu> children = new ArrayList<>();

}