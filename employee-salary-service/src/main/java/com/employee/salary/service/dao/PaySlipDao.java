package com.employee.salary.service.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.salary.service.entity.PaySlip;

@Repository
public interface PaySlipDao extends JpaRepository<PaySlip, Integer> {

	List<PaySlip> findByUserId(int userId);
	
}
