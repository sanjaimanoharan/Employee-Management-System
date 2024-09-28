package com.employee.salary.service.dto;

import java.util.ArrayList;
import java.util.List;

import com.employee.salary.service.entity.PaySlip;
import com.employee.salary.service.entity.Salary;

import lombok.Data;

@Data
public class SalaryResponseDto extends CommonApiResponse {

	private List<Salary> salary;

	private List<PaySlip> paySlips = new ArrayList<>();

}
