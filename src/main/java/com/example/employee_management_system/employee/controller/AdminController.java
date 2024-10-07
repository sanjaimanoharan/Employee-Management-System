package com.example.employee_management_system.employee.service;

import com.example.employee_management_system.employee.entity.Employee;
import com.example.employee_management_system.employee.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    
    Optional<Employee> getEmployeeById(Long id);
    
    List<Employee> getAllEmployees();
    
    Employee updateEmployee(Long id, Employee employeeDetails) throws ResourceNotFoundException;
    
    void deleteEmployee(Long id) throws ResourceNotFoundException;
}
