import './App.css';
import Header from './components/screen/header/header';
import SubContent from './components/screen/subContent/subContent';
import React from 'react';
import Login from './components/screen/Login/Login';
import Signup from './components/screen/Signup/Signup';
import CBlog from './components/screen/CBlog/CBlog';
import CBlogNext from './components/screen/CBlogNext/CBlogNext';
import Writing from './components/screen/Writing/Writing';
import Pagez from './components/screen/MainAfterSignin/Pagez/Pagez';
import AdHeader from './components/admin/ad-header/adHeader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdSidebar from './components/admin/sidebar/adSidebar';
import Admin from './components/admin/_screen/adminScreen';
import CManagement from './components/admin/contentManagement/cManagement';
import Articles from './components/admin/articles/articles';
import Tags from './components/admin/tags/tags';
import UserProfile from './components/screen/UserProfile/UserProfile';

function App() {
  // send token from local storage to api("https://localhost:7015/api/User/verify"")
  // const token = localStorage.getItem('token');
  // const data = {
  //   "token" : token,
  // };
  // fetch("https://localhost:7015/api/User/verify", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  // .then((response) => {
  //   console.log(response);
  //   if (response.status === 200) {
  //     // Đăng nhập thành công, lưu thông tin user và access token vào localStorage
  //     localStorage.setItem('token', 'bearer '+ response.data);
  //   }
  //   else if (response.status === 401) {
  //     window.confirm("Login failed. Please check your login information.");
  //   }
  // })
  // .catch((error) => {
  //   if (window.confirm("Bật api chưa?, bật rồi thì lỗi cái vừa nãy rồi nha.")===true)
  //     //form.reset();
  //     window.location.assign("/")
  //   ;
  // });

  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Routes>
          <Route path="" element={<div> <Header/> <SubContent/></div>}/>
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
