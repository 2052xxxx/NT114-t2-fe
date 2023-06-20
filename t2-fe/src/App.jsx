import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import CBlog from './components/screen/CBlog/CBlog';
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

function App() {
  return (
    <div className="App">      
    <BrowserRouter>
        <Routes>
          <Route path="" element={<Initial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/cManagement" exact element={<CManagement/>}/>
          <Route path="/headerPage" element={<AdHeader/>}/>
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
