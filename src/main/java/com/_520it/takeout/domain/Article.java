package com._520it.takeout.domain;

import lombok.Getter;
import lombok.Setter;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "item")
@XmlAccessorType(XmlAccessType.FIELD)
@Setter
@Getter
public class Article {
    private item item;

    public static void main(String[] args) {
        System.out.println("hello");
    }
}
