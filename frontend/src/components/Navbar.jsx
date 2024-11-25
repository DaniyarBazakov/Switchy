import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // For styling


const Navbar = () => {
  // Get logged-in user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href ='/' >Switchy</a>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to={`/user/${loggedInUser.userId}`}>User Profile</Link>
        </li>
        <li>
          <Link to="/roadmaps">Roadmaps</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
