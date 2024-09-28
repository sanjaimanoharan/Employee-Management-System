package com.employee.salary.service.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaySlip {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// Removed @NonNull annotation from here
	private int userId;

	@ManyToOne
	@JoinColumn(name = "salary_id")
	private Salary salary; // Month, Quarter, Year

	private String monthYear; // January 2024

	@Transient
	private int salaryId;

}
