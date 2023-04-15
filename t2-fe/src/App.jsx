import './App.css';
import Header from './components/header/header.jsx';
import SubContent from './components/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import SignupWE from './components/screen/SignupWE/SignupWE';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './components/screen/MainAfterSignin/Page/Page';
import HeaderPage from './components/screen/MainAfterSignin/HeaderPage/HeaderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<div> <Header/> <SubContent/></div>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/SignupWE" element={<SignupWE/>}/>     
          {/* <Route path="/Page" element={<Page/>}/>
          <Routes path="/HeaderPage" element={<HeaderPage/>}/> */}
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
