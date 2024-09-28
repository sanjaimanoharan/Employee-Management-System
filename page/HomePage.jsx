import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import employees from "../images/employees.png";
import managers from "../images/managers.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
