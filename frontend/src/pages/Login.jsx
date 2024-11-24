import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Redirect the user to the posts page after a successful login
      navigate("/posts");
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password'); // Notify the user about the failure
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email or Username
            <input 
              type="text" 
              placeholder="Email or Username" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
