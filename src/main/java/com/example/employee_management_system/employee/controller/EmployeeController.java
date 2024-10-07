package com.example.employee_management_system.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.employee_management_system.employee.entity.Employee;
import com.example.employee_management_system.employee.service.EmployeeService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
@RequestMapping("/employee")
public class EmployeeController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/dashboard")
    public String employeeDashboard(Authentication authentication, Model model) {
        logger.info("Accessed employee dashboard");

        String username = authentication.getName();
        Employee employee = employeeService.getEmployeeByEmail(username);

        if (employee != null) {
            model.addAttribute("employee", employee);
            logger.info("Employee data loaded for dashboard: " + employee.getFullName());
        } else {
            logger.warn("No employee found for username: " + username);
        }

        return "employee/dashboard";
    }

    // Uncomment this method if needed
    /*
    @GetMapping("/me")
    @ResponseBody
    public ResponseEntity<Employee> getEmployeeDetails() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        Employee employee = employeeService.getEmployeeByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found"));

        return new ResponseEntity<>(employee, HttpStatus.OK);
    }
    */
}
