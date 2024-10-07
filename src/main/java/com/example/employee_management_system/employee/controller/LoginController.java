package com.example.employee_management_system.employee.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @GetMapping("/default")
    public String defaultAfterLogin(Authentication authentication) {
        logger.info("Entered defaultAfterLogin method");
        logger.info("User authenticated: " + authentication.isAuthenticated());
        logger.info("User authorities: " + authentication.getAuthorities());

        if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
            logger.info("Redirecting to admin dashboard");
            return "redirect:/admin/dashboard";
        } else if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_EMPLOYEE"))) {
            logger.info("Redirecting to employee dashboard");
            return "redirect:/employee/dashboard";
        } else {
            logger.warn("No matching role found, redirecting to login with error");
            return "redirect:/login?error=true";
        }
    }

    @GetMapping("/login")
    public String login() {
        logger.info("Accessed login page");
        return "login";
    }
}