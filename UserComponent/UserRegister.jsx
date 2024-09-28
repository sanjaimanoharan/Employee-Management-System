import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { resolvePath, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const manager = JSON.parse(sessionStorage.getItem("active-manager"));
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [user, setUser] = useState({
    firstName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
    departmentId: "",
    experience: "",
    emergencyContactName: "",
    emergencyContactMobile: "",
    permanentAddress: "",
    employmentCode: "",
    companyEmail: "",
    officePhone: "",
    officeAddress: "",
    reportingManager: "",
    hrName: "",
    dateOfJoining: "",
  });

  if (document.URL.indexOf("admin") !== -1) {
    user.role = "admin";
  } else if (document.URL.indexOf("employee") !== -1) {
    user.role = "employee";
  }

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [departments, setDepartments] = useState([]);

  const retrieveAllDepartments = async () => {
    const response = await axios.get("http://localhost:8087/department/all");
    return response.data;
  };

  useEffect(() => {
    const getAllDepartments = async () => {
      const allDepartments = await retrieveAllDepartments();
      if (allDepartments) {
        setDepartments(allDepartments.department);
      }
    };

    getAllDepartments();
  }, []);

  const saveUser = (e) => {
    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("password", user.password);
    formData.append("contact", user.contact);
    formData.append("emailId", user.emailId);
    formData.append("street", user.street);
    formData.append("age", user.age);
    formData.append("gender", user.gender);
    formData.append("experience", user.experience);
    formData.append("city", user.city);
    formData.append("pincode", user.pincode);
    formData.append("departmentId", user.departmentId);
    formData.append("role", user.role);
    formData.append("emergencyContactName", user.emergencyContactName);
    formData.append("emergencyContactMobile", user.emergencyContactMobile);
    formData.append("permanentAddress", user.permanentAddress);
    formData.append("employmentCode", user.employmentCode);
    formData.append("companyEmail", user.companyEmail);
    formData.append("officePhone", user.officePhone);
    formData.append("officeAddress", user.officeAddress);
    formData.append("reportingManager", user.reportingManager);
    formData.append("hrName", user.hrName);
    formData.append("dateOfJoining", user.dateOfJoining);

    axios
      .post("http://localhost:8081/user/register", formData)
      .then((resp) => {
        console.log("here register success");

        if (resp.data.success) {
          console.log("Got the success response");
          alert(resp.data.responseMessage)
          setTimeout(() => {
            window.location.href = "/user/login";
          }, 1000); // Redirect after 3 seconds
        } else {
          console.log("got response as false");
          alert("It seems server is down")
        }
      })
      .catch((error) => {
        console.log("register failed");
        console.log("Error", error);

        if (error.message === "Network Error") {
          alert("It seems server is down")
        } else if (error.response) {
          alert("error.response.data.responseMessage")
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "80rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Add {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="text-center">
                <h2>Personal Details</h2>
              </div>
              <div className="col-md-3 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b> Full Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div className="col-md-3 mb-3 text-color">
                <b>
                  <label className="form-label">Email Id</label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>
              <div className="col-md-3 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="gender"
                >
                  <option value="0">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-md-3 mb-3 text-color">
                <label htmlFor="bloodGroup" className="form-label">
                  <b>Department</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="departmentId"
                >
                  <option value="">Select Department</option>

                  {departments.map((d) => {
                    return <option value={d.id}> {d.name} </option>;
                  })}
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Contact No</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="experience" className="form-label">
                  <b>Experience</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="experience"
                  name="experience"
                  onChange={handleUserInput}
                  value={user.experience}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Street</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="price" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Pincode</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Emercency Contact Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="emergencyContactName"
                  onChange={handleUserInput}
                  value={user.emergencyContactName}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Emercency Contact Mobile</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="emergencyContactMobile"
                  onChange={handleUserInput}
                  value={user.emergencyContactMobile}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Permanent Address</b>
                </label>
                <textarea
                  className="form-control"
                  id="permanentAddress"
                  name="permanentAddress"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.permanentAddress}
                />
              </div>
              <hr></hr>
              <div className="text-center">
                <h2>Professional Details</h2>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="employmentCode" className="form-label">
                  <b>Employment Code</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employmentCode"
                  name="employmentCode"
                  onChange={handleUserInput}
                  value={user.employmentCode}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="companyEmail" className="form-label">
                  <b>Company Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="companyEmail"
                  name="companyEmail"
                  onChange={handleUserInput}
                  value={user.companyEmail}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="officePhone" className="form-label">
                  <b>Office Phone</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="officePhone"
                  name="officePhone"
                  onChange={handleUserInput}
                  value={user.officePhone}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="officeAddress" className="form-label">
                  <b>Office Address</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="officeAddress"
                  name="officeAddress"
                  onChange={handleUserInput}
                  value={user.officeAddress}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="reportingManager" className="form-label">
                  <b>Reporting Manager</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reportingManager"
                  name="reportingManager"
                  onChange={handleUserInput}
                  value={user.reportingManager}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="hrName" className="form-label">
                  <b>HR Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hrName"
                  name="hrName"
                  onChange={handleUserInput}
                  value={user.hrName}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="dateOfJoining" className="form-label">
                  <b>Date of Joining</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfJoining"
                  name="dateOfJoining"
                  onChange={handleUserInput}
                  value={user.dateOfJoining}
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  value="Register User"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
