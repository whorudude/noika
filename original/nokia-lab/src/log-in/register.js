import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./log-in.css";
import Particles from "./Particles.js";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post(
        "http://localhost:80/api/sign-up/",
        formData
      );
      if (response.data === "Success") {
        navigate("/");
      } else {
        setError(response.data);
        alert(response.data);
      }
    } catch (error) {
      setError("An error occurred during registration.");
    }
  };

  return (
    <>
      <Particles id="tsparticles"></Particles>
      <div id="log-in">
        <div id="half1">
          <div id="glass2">
            <div id="inner">
              <h1 id="h1">Register</h1>
              <form onSubmit={handleRegister} className="form">
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  id="ps1"
                ></input>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  required
                  id="ps1"
                ></input>
                <br></br>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  id="ps1"
                ></input>
                <br></br>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="tel"
                  required
                  id="ps1"
                ></input>
                <br></br>
                <p id="whitep3">Enter your date of birth:</p>
                <input
                  type="date"
                  placeholder="Enter Birth Date"
                  name="date"
                  required
                  id="ps1"
                  max="05-15-2024"
                ></input>
                <br></br>
                <input
                  type="submit"
                  placeholder="Register"
                  name=""
                  id="btn"
                  value="Register"
                ></input>
              </form>

              <nav></nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
