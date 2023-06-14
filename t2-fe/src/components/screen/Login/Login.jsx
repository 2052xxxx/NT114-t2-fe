import React, { useEffect } from "react";
import './Login.css';
import { Row, Col, Container } from "react-bootstrap";
import theName from '../header/name.png';
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


export default function Login(){
  
  const [loggedIn, setLoggedIn] = useState(false);    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleLogin = async (e) => {
      e.preventDefault();
      // /**
      //  * @type {Object} data
      //  */
      const data = {
        
        "email" : email,
        "password" : password,
      };
      // try {
        // Gửi yêu cầu đăng nhập đến API
        axios.post("https://localhost:7015/api/User/signIn", data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // Đăng nhập thành công, lưu thông tin user và access token vào localStorage 
            localStorage.setItem('token', response.data);
            setLoggedIn(true);
          }
          else if (response.status === 401) {
            window.confirm("Login failed. Please check your login information.");
          }
        })
        .catch((error) => {
          if (window.confirm("Bật api chưa?, bật rồi thì lỗi api rồi nha.")===true)
           //form.reset();
            window.location.assign("/")
           ;
        });
        
        
        // Đăng nhập thành công
        // Chuyển hướng đến trang mới
        
      //window.location.href= "/HeaderPage"; // Thay thế bằng URL của trang bạn muốn chuyển hướng
      // } catch (error) {
      //   // Đăng nhập không thành công
      //   toast.error("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.");
      // }
    };
    useEffect(() => {
      if (loggedIn) {
        // Chuyển hướng sau khi xử lý thành công
        console.log("Redirecting...");
      }
    }, [loggedIn]);
  
    // Nếu đã đăng nhập, chuyển hướng đến "/HeaderPage"
    if (loggedIn) {
      return window.location.assign("/HeaderPage");
    }
    return(
        <div className="Login-Button">
            <div className="loginTitle">
                <h1 className="CL">Welcome</h1> 
                <img className="theName" src={theName} alt="theName" />
            </div> 
            <form  onSubmit={handleLogin}>
                <div className="emailType_in">
                    <h5>Your email</h5>
                    <input  type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                </div>
                
                <div className="passType_in">
                    <h5>Your password</h5>
                    <input  type="password"
                            placeholder="Enter your password" 
                            className="Testbox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                </div>  
                <div className="btnContinue">
                {/* <a href="/Signup">
                    <h5>Create one</h5>
                </a> */}
                    <button className="SW" type="submit">
                        Continue
                    </button>
            </div>           
            </form>
        </div>
    )
}