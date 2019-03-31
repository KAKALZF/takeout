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
	private Integer currentPage;
	//结果集
	private List<?> rows;

	public PageResult(Long total, List<?> rows) {
		this.total = total;
		this.rows = rows;
	}
}
