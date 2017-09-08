package com._520it.takeout.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//关键字回
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Keywords {
    private Long id;

    private String keyword;

    private String reply;

    private Boolean state;

}