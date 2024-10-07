package com.example.employee_management_system;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode("kunal123");  // Replace with the actual password you want to encode
        System.out.println(encodedPassword);
    }
}
