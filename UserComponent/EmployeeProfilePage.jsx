import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EmployeeProfilePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const empData = location.state;

  const [employee, setEmployee] = useState(
    empData ? empData : JSON.parse(sessionStorage.getItem("active-employee"))
  );

  const [department, setDepartment] = useState({});

  useEffect(() => {
    const getAllDepartment = async () => {
      const department = await retrieveDepartment();
      if (department) {
        setDepartment(department[0]);
      }
    };

    getAllDepartment();
  }, []);

  const retrieveDepartment = async () => {
    const response = await axios.get(
      "http://localhost:8087/department/fetch?departmentId=" +
        employee.departmentId
    );
    console.log(response);
    return response.data.department;
  };

  return (
    <div className="mt-3">
      <div
        className="d-flex justify-content-center"
      >
        <div
          className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
          style={{ width: "1000px" }}
        >
          <div className="card-header custom-bg-text text-center bg-color mb-3">
            <h2>Employee Profile Details</h2>
          </div>
          <div className="card-body" style={{ overflowY: "auto" }}>
            <div className="row">
             
              <div className="col">
                <h4 className="text-center">Personal Details</h4>
                <p>
                  <b>Employee Name:</b> {employee.firstName} {employee.lastName}
                </p>
                <p>
                  <b>Age:</b> {employee.age}
                </p>
                <p>
                  <b>Gender:</b> {employee.gender}
                </p>
                <p>
                  <b>Email Id:</b> {employee.emailId}
                </p>
                <p>
                  <b>Contact:</b> {employee.contact}
                </p>
                <p>
                  <b>Address:</b> {employee.street}, {employee.city},{" "}
                  {employee.pincode}
                </p>
                <p>
                  <b>Emergency Contact:</b> {employee.emergencyContactName} (
                  {employee.emergencyContactMobile})
                </p>
                <p>
                  <b>Permanent Address:</b> {employee.permanentAddress}
                </p>
              </div>

              {/* Professional Details Section */}
              <div className="col">
                <h4 className="text-center">Professional Details</h4>
                <p>
                  <b>Employment Code:</b> {employee.employmentCode}
                </p>
                <p>
                  <b>Company Email:</b> {employee.companyEmail}
                </p>
                <p>
                  <b>Office Phone:</b> {employee.officePhone}
                </p>
                <p>
                  <b>Office Address:</b> {employee.officeAddress}
                </p>
                <p>
                  <b>Reporting Manager:</b> {employee.reportingManager}
                </p>
                <p>
                  <b>HR Name:</b> {employee.hrName}
                </p>
                <p>
                  <b>Date of Joining:</b> {employee.dateOfJoining}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
