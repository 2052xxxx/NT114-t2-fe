import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import SignupWE from './components/screen/SignupWE/SignupWE';
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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
