import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import Roadmaps from "../pages/Roadmaps";
import Posts from "../pages/Posts";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserProfile />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} /> {}
      <Route path="/signup" element={<Signup />} /> {}
    </Routes>
  );
};

export default AllRoutes;
