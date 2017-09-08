package com._520it.takeout.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.util.Date;

/*
 *菜品订单表
 */
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FoodOrderBill {
    //主键id
    public Long id;
    //订单编号
    public String orderNumber;
    //用户id(OPENID)
    public String sn;
    //菜品id(这里使用对象,因为后面要使用到菜品的其他属性)
    public Food food;
    //下单份数
    public BigDecimal count;
    //下单总金额
    public BigDecimal amount;
    //下单时间
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    @DateTimeFormat(pattern="yyyy-MM-dd:HH:mm:ss")
    public Date orderTime;
    //订餐人电话
    public String tel;
    //订餐人地址
    public String address;
    //订单状态
    public Boolean status;
    //备注
    public String remark;
}
