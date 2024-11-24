import React from "react";

import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // For styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Switchy</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/user">User Profile</Link>
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
