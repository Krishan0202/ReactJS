import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function SignIn() {
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.emailOrPhone === credentials.emailOrPhone &&
      storedUserData.password === credentials.password
    ) {
      console.log("Login successful!");
    } else {
      console.log("Invalid credentials");
    }
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="signin-container">
      <h1>Instagram</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="emailOrPhone"
          value={credentials.emailOrPhone}
          onChange={handleInputs}
          placeholder="email , phone or username"
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleInputs}
          placeholder="password"
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="btn-text">
        <p>Don't have account</p>
        <button className="btn" onClick={navigateToSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
