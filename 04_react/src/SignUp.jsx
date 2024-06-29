import "./SignUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [userData, setUserData] = useState({
    emailOrPhone: "",
    fullName: "",
    userName: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserData({
      emailOrPhone: "",
      fullName: "",
      userName: "",
      password: "",
    });
    navigate("/signin");
  };
  return (
    <div className="signup-container">
      <h1>Instagram</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="emailOrPhone"
          value={userData.emailOrPhone}
          onChange={handleInputs}
          placeholder="Mobile number or Email"
        />
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleInputs}
          placeholder="Full name"
        />
        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleInputs}
          placeholder="User name"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputs}
          placeholder="Password"
        />
        <button type="submit">Sign up</button>
      </form>
      <div className="btn-text">
        <p>Don't have account</p>
        <button className="btn" onClick={() => navigate("/signin")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
