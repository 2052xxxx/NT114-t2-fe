import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import Blog from './components/screen/CBlog/Blog';
import CBlogNext from './components/screen/CBlogNext/CBlogNext';
import Writing from './components/screen/Writing/Writing';
import Pagez from './components/screen/MainAfterSignin/Pagez/Pagez';
import AdHeader from './components/admin/ad-header/adHeader';
import AdSidebar from './components/admin/sidebar/adSidebar';
import Admin from './components/admin/_screen/adminScreen';
import CManagement from './components/admin/contentManagement/cManagement';
import Articles from './components/admin/articles/articles';
import Tags from './components/admin/tags/tags';
import UserProfile from './components/screen/UserProfile/UserProfile_screen';
import Initial from './components/screen/subContent/Initial';
import Home from './components/screen/Home/Home';
import Image from './components/screen/Settings/Images/Image';
import Settings from './components/screen/Settings/Settings';


function App() {
  return (
    <div className="App">      
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/cManagement" exact element={<CManagement/>}/>
          <Route path="/headerPage" element={<AdHeader/>}/>          
          <Route path="/home" element={<Home/>}/>
          <Route path="/Article/:articleID" element={<Blog/>}/>
          <Route path="/Images" element={<Image/>}/>
          <Route path="/settings" element={<Settings/>}/>
          {/* <Route path="/cBlog" element={<CBlog/>}/>
          <Route path="/CBlogNext" element={<CBlogNext/>}/>
          <Route path="/pagez" element={<Pagez/>}/> */}
          <Route path="/UserProfile" element={<div> <UserProfile/></div>}/>
          <Route path="/writing" element={<Writing/>}/>
          <Route path="/adHeader" element={<div> <AdHeader/></div>}/> 
          <Route path="/adSidebar" element={<div> <AdSidebar/></div>}/>          
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/tags" element={<Tags/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
