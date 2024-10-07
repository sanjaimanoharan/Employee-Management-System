package com.example.employee_management_system.employee.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class FinanceDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "aadhar_card", nullable = true) // Consider whether this should be nullable
    private String aadharCard;

    @Column(name = "pan_card", nullable = true) // Consider whether this should be nullable
    private String panCard;

    @Column(name = "bank_name", nullable = true) // Consider whether this should be nullable
    private String bankName;

    @Column(name = "branch", nullable = true) // Consider whether this should be nullable
    private String branch;

    @Column(name = "ifsc_code", nullable = true) // Consider whether this should be nullable
    private String ifscCode;

    @Column(name = "ctc_breakup", nullable = true) // Consider whether this should be nullable
    private String ctcBreakup;

    // Other fields (ensure they're needed)
}
