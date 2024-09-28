package com.employee.user.service.dto;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;
import com.employee.user.service.entity.User;
import lombok.Data;

@Data
public class UserRegisterDto {

	private int id;

	private String firstName;

	//private String lastName;

	private int age;

	private String gender;

	private String emailId;

	private String contact;

	private String street;

	private String city;

	private String pincode;

	private String password;

	private String role;

	private int departmentId;

	private int status;

	private int experience;

	private String emergencyContactName;

	private String emergencyContactMobile;

	private String permanentAddress;

	// professional detail

	private String employmentCode;

	private String companyEmail;

	private String officePhone;

	private String officeAddress;

	private String reportingManager;

	private String hrName;

	private String dateOfJoining;
	
//	private String projectCode;
//	
//	private String startDate;
//	
//	private String endDate;
//	
//	private String clientProjectName;
//	
//	private String reportingMngMail;
//	

	//private MultipartFile image;

	public static User toEntity(UserRegisterDto userRegisterDto) {
		User user = new User();
		BeanUtils.copyProperties(userRegisterDto, user);
		return user;
	}

}
