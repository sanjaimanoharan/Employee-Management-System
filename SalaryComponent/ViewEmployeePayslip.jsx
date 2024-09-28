import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewEmployeePayslip = () => {
  const navigate = useNavigate();

  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

  const [payslips, setPaySlips] = useState([]);

  const retrieveEmployeeSalary = async () => {
    const response = await axios.get(
      "http://localhost:8082/salary/user/payslip/fetch?userId=" + employee.id
    );
    console.log(response.data);
    return response.data.paySlips;
  };

  useEffect(() => {
    const getAllSalary = async () => {
      const allSalary = await retrieveEmployeeSalary();
      if (allSalary) {
        setPaySlips(allSalary);
      }
    };

    getAllSalary();
  }, []);

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>PaySlip Detail</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Payment Mode</th>
                  <th scope="col">Bank</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Ifsc Code</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((payslip) => {
                  return (
                    <tr>
                      <td>
                        <b>{payslip.monthYear}</b>
                      </td>
                      <td>
                        <b>{payslip.salary.salary}</b>
                      </td>
                      <td>
                        <b>{payslip.salary.paymentMode}</b>
                      </td>
                      <td>
                        <b>{payslip.salary.bank}</b>
                      </td>
                      <td>
                        <b>{payslip.salary.bankAccount}</b>
                      </td>
                      <td>
                        <b>{payslip.salary.bankIfsc}</b>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm bg-color custom-bg-text"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeePayslip;
