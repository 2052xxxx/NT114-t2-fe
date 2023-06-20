import React from "react";
import './Signup.css'
import TheName from './TheName.png';
import thePeople from './thePeople.png';
import { Form, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Signup(){
    const [signUp, setSignUp] = useState(false);   
    const [passwordCheck, setPasswordCheck] = useState(true);     
    const [username, setUsername] = useState('');
    const [realname, setRealname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const checkValidation = (e) =>
    {
      const cf = e.target.value;
      setConfirmPassword(cf);
      if (password !== cf)
      {
        setErrorText("Password and Confirm password are not the same. Please check again.");
        setPasswordCheck(false);
      }else{
        setErrorText("");
        setPasswordCheck(true);
      }
    }
    
    const handleSignUp = async (e) => {
      e.preventDefault();
      // /**
      //  * @type {Object} data
      //  */
      const data = {
        "username" : username,
        "realname" : realname,
        "email" : email,
        "password" : confirmPassword,
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
          else if (response.status === 401) {
            setErrorText("Failed to sign up. Please check again if username or email already exists.");
          }
          
        })
        .catch((error) => {
          if (window.confirm("Failed to sign up. Please check again if username or email already exists.")===true)
           //form.reset();
            window.location.assign("/Signup")
           ;
        })
        ;
        
        
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
      return window.location.assign("/UserProfile");
    }
    return(
        <div className = "SignUp-Button">
            <Container>
                    <Col className="Col-1">
                      <div className="home">
                      
                      <a href="/"  role="button" aria-pressed="true"><FontAwesomeIcon icon={faArrowLeft} style={{color: "#553566",}} /> Home</a>
                      </div>
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
                                    Your username cannot contain the following special characters: !, @, #, $, %. ^, &, *, ( , ),., =, +, ]
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
                            <Form.Group className="formBasicConfirmPassword">
                                <Form.Label className="">Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" 
                                  value={confirmPassword}
                                  onChange={(e) => checkValidation(e)}
                                  required
                                  />
                                <Form.Text className="text-warning">
                                    {errorText}
                                </Form.Text>
                            </Form.Group>
                            <div className="btnContinue">
                                <button className="SW" type="submit" disabled={!passwordCheck}>
                                    Continue
                                </button>
                            </div>
                        </Form>
                    </Col>
            </Container>
            
        </div>
    )
}