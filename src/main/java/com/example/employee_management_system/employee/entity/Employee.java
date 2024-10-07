package com.example.employee_management_system.employee.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false) // Add nullability as needed
    private String firstName;

    @Column(name = "last_name", nullable = false) // Add nullability as needed
    private String lastName;

    @Column(name = "email", nullable = false, unique = true) // Ensure email is unique
    private String email;

    @Column(name = "password", nullable = false) // Password should not be nullable
    private String password;

    @Column(name = "role", nullable = false) // Add nullability as needed
    private String role;

    // Computed Getter for Full Name
    public String getFullName() {
        return firstName + " " + lastName;
    }
}
