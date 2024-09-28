import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const location = useLocation();
  const userData = location.state;

  const [user, setUser] = useState(userData);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (e) => {
    const formData = new FormData();
    formData.append("id", user.id);
    formData.append("firstName", user.firstName);
    formData.append("password", user.password);
    formData.append("contact", user.contact);
    formData.append("emailid", user.emailid);
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
      .put("http://localhost:8081/user/update", formData)
      .then((resp) => {
        console.log(resp);
        if (resp.data.success) {
          alert(resp.data.responseMessage)
          setTimeout(() => {
            window.location.href = "/home";
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
          alert("It seems server is down!")
        } else if (error.response) {
          alert("error.responsedata.responseMessage")
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Update {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="col-md-6 mb-3 text-color">
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
              <div className="col-md-6 mb-3 text-color">
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
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  value="Update User"
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

export default UpdateUser;
