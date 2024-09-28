import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    alert("logged out!!!")
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      navigate("/home");
    }, 1000); // Redirect after 3 seconds
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/department/add"
          className="nav-link active"
          aria-current="page"
        >
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/department/fetch"
          className="nav-link active"
          aria-current="page"
        >
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/employee/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Employee</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/employee/salary/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Employee Finance</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/employee/payslip/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Employee PaySlip</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/employee/fetch"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Employees</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
