import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Sign In</h2>
        <div className="social-login"></div>
        <form onSubmit={handleLogin}>
          <label>
            Email or Username
            <input type="text" placeholder="Email or Username" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button type="submit" className="btn log-in-btn">
            Sign In
          </button>
        </form>
      </div>
      <div className="login-right">
        <h2>Welcome to Switchy</h2>
        <p>Don’t have an account?</p>
        <a href="/signup" className="btn sign-up-btn">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
