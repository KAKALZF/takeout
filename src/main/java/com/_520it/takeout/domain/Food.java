package com._520it.takeout.domain;


import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter@Setter
public class Food {
    private Long id;
    private String sn;
    private  String name;
    private BigDecimal salePrice;
    private String message;
    private String picture;

}
