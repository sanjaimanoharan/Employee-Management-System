package com.example.employee_management_system.employee.controller;

import com.example.employee_management_system.employee.entity.Employee;
import com.example.employee_management_system.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class RegistrationController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("employee", new Employee());
        return "registration";
    }

    @PostMapping("/register")
    public String registerEmployee(@ModelAttribute("employee") Employee employee) {
        employeeService.registerNewEmployee(employee);
        return "redirect:/login?registered";
    }
}