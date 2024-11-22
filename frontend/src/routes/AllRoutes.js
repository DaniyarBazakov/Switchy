import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import Roadmaps from '../pages/Roadmaps';
import Posts from '../pages/Posts';
import Logout from '../pages/Logout';

const AllRoutes = () =>{ 
  return(
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element ={<UserProfile/>}/>
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
);}

export default AllRoutes;