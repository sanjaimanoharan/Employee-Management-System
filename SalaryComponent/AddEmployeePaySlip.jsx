import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployeePaySlip = () => {
  const navigate = useNavigate();

  const [salary, setSalary] = useState({
    userId: "",
    salaryId: "",
    monthYear: "",
    month: "",
    year: "",
  });

  const handleUserInput = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const [salaries, setSalaries] = useState([]);

  const retrieveEmployeeSalary = async () => {
    const response = await axios.get(
      "http://localhost:8082/salary/user/fetch?userId=" + salary.userId
    );
    console.log(response.data);
    return response.data.salary;
  };

  useEffect(() => {
    const getAllSalary = async () => {
      const allSalary = await retrieveEmployeeSalary();
      if (allSalary) {
        setSalaries(allSalary);
      }
    };

    getAllSalary();
  }, [salary.userId]);

  const saveEmployeeSalary = (e) => {
    salary.monthYear = salary.month + " " + salary.year;
    fetch("http://localhost:8082/salary/add/payslip", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salary),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");
            alert(res.responseMessage)
            setTimeout(() => {
              window.location.href = "/home";
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            alert("It seems server is down")
          }
        });
      })
      .catch((error) => {
        console.error(error);
        alert("It seems server is down")
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
            <h5 className="card-title">Add Employee PaySlip</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveEmployeeSalary}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>User Id</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="userId"
                  name="userId"
                  onChange={handleUserInput}
                  value={salary.userId}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>Salary</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="salaryId"
                >
                  <option value="0">Select Salary</option>
                  {salaries.map((s) => {
                    return <option value={s.id}> {s.salary} </option>;
                  })}
                </select>
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="paymentMode" className="form-label">
                  <b>Salary Month</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="month"
                >
                  <option value="0">Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="paymentMode" className="form-label">
                  <b>Yead</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="year"
                >
                  <option value="0">Select Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  value="Add PaySlip"
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

export default AddEmployeePaySlip;
