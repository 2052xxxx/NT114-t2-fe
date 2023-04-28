import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import SignupWE from './components/screen/SignupWE/SignupWE';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagez from './components/screen/MainAfterSignin/Pagez/Pagez';
import HeaderPage from './components/screen/MainAfterSignin/HeaderPage/HeaderPage';
import CBlog from './components/screen/CBlog/CBlog';
import CBlogNext from './components/screen/CBlogNext/CBlogNext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<div><Header/><SubContent/></div>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/SignupWE" element={<SignupWE/>}/>
          <Route path="/HeaderPage" element={<HeaderPage/>}/>   
          <Route path="/CBlog" element={<CBlog/>}/>
          <Route path="/CBlogNext" element={<CBlogNext/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
