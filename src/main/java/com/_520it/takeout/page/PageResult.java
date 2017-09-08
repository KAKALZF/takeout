package com._520it.takeout.page;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
public class PageResult {
	//总结果集数
	private Long total;
	//结果集
	private List<?> rows;
}
