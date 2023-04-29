import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import SignupWE from './components/screen/SignupWE/SignupWE';
import HeaderPage from './components/screen/MainAfterSignin/HeaderPage/HeaderPage';
import CBlog from './components/screen/CBlog/CBlog';
import CBlogNext from './components/screen/CBlogNext/CBlogNext';
import Writing from './components/screen/Writing/Writing';
import Pagez from './components/screen/MainAfterSignin/Pagez/Pagez';
import AdHeader from './components/admin/ad-header/adHeader';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="" element={<div> <Header/> <SubContent/></div>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signupWE" element={<SignupWE/>}/> 
          <Route path="/headerPage" element={<HeaderPage/>}/>
          <Route path="/cBlog" element={<CBlog/>}/>
          <Route path="/CBlogNext" element={<CBlogNext/>}/>
          <Route path="/pagez" element={<Pagez/>}/>
          <Route path="/writing" element={<Writing/>}/>
          <Route path="/adHeader" element={<AdHeader/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
