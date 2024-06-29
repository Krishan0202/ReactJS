import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  const [loginMessage, setLoginMessage] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={<SignIn setLoginMessage={setLoginMessage} />}
          />
          <Route path="/" element={<SignUp />} />
        </Routes>
        {loginMessage && <p>Login Succesfully</p>}
      </div>
    </Router>
  );
}

export default App;
