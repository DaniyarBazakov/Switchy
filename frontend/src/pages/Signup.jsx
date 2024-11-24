import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Create Account</h2>
        <div className="social-login"></div>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input type="text" placeholder="Email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button type="submit" className="btn sign-in-btn">
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-right">
        <h2>Welcome to Switchy</h2>
        <p>Already have an account?</p>
        <a href="/user" className="btn sign-up-btn">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;
