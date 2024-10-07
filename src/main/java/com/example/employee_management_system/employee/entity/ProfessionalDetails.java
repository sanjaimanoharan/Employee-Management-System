package com.example.employee_management_system.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfessionalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "office_phone", nullable = true) // Nullable attribute
    private String officePhone;

    @Column(name = "office_address", nullable = true) // Nullable attribute
    private String officeAddress;

    @Column(name = "reporting_manager_email", nullable = true) // Nullable attribute
    private String reportingManagerEmail;

    @Column(name = "hr_name", nullable = true) // Nullable attribute
    private String hrName;

    @Column(name = "employment_history", nullable = true) // Nullable attribute
    private String employmentHistory; // Ensure this is needed; consider normalizing if too complex

    @Column(name = "date_of_joining", nullable = true) // Nullable attribute
    private LocalDate dateOfJoining;
}
