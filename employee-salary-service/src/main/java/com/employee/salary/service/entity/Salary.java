package com.employee.salary.service.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Salary {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// Removed @NonNull annotation from here
	private int userId;

	// Strings can still have @NonNull
	private String payCycle; // Month, Quarter, Year

	private String paymentMode; // Bank Transfer, UPI

	private String bank; // bank name

	private String bankAccount;

	private String bankIfsc;

	private BigDecimal salary;

	private String fromDate;

	private String toDate;
}
