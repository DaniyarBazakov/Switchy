import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Roadmaps from '../pages/Roadmaps';
import Posts from '../pages/Posts';
import Logout from '../pages/Logout';

const AllRoutes = () =>{ 
  return(
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element ={<User/>}/>
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
);}

export default AllRoutes;