import React from "react";
import './Signup.css'
import TheName from './TheName.png';
import thePeople from './thePeople.png';
import { Form, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Signup(){
    const [signUp, setSignUp] = useState(false);    
    const [username, setUsername] = useState('');
    const [realname, setRealname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleSignUp = async (e) => {
      e.preventDefault();
      // /**
      //  * @type {Object} data
      //  */
      const data = {
        "username" : username,
        "realname" : realname,
        "email" : email,
        "password" : password,
      };
      // try {
        // Gửi yêu cầu đăng nhập đến API
        axios.post("https://localhost:7015/api/User/register", data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // Đăng nhập thành công, lưu thông tin user và access token vào localStorage 
            localStorage.setItem('token', response.data);
            setSignUp(true);
          }
          else if (response.status === 400) {
            window.confirm("Sign up failed. Please check your sign up information.");
          }
        })
        .catch((error) => {
          if (window.confirm("Bật api chưa?, bật rồi thì lỗi cái vừa nãy rồi nha.")===true)
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
      if (signUp) {
        // Chuyển hướng sau khi xử lý thành công
        console.log("Redirecting...");
      }
    }, [signUp]);
  
    // Nếu đã đăng nhập, chuyển hướng đến "/HeaderPage"
    if (signUp) {
      return window.location.assign("/HeaderPage");
    }
    return(
        <div className = "SignUp-Button">
            
            <Container>
                    <Col className="Col-1 d-flex align-items-center justify-content-center">
                        <div className="thePeople">
                            <img src={thePeople} alt="thePeople" />
                        </div>
                        
                    </Col>
                    <Col className="Col-2">
                    <div className="signupTitle">
                            <h1 className="CL">Join <img className="TheName" src={TheName} alt="TheName" /></h1>
                        </div>
                        <Form className="signUp-from" onSubmit={handleSignUp}>
                            <Form.Group className="formBasicName">
                                <Form.Label className="">Your name</Form.Label>
                                <Form.Control placeholder="Enter name" 
                                    value={realname}
                                    onChange={(e) => setRealname(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Form.Group className="formBasicUsername">
                                <Form.Label className="">Username</Form.Label>
                                <Form.Control placeholder="Enter username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required/>
                                <Form.Text className="text-muted">
                                    Your username won't include special characters.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="formBasicEmail">
                                <Form.Label className="">Your email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Form.Group className="formBasicPassword">
                                <Form.Label className="">Your password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Form.Group className="formBasicCfPassword">
                                <Form.Label className="">Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                            <div className="btnContinue">
                                <button className="SW" type="submit">
                                    Continue
                                </button>
                            </div>
                        </Form>
                    </Col>
            </Container>
            
        </div>
    )
}