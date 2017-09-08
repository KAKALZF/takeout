package com._520it.takeout.query;


import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter@Setter
public class FoodQuery extends  QueryObject {

    private String name;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
}
