import React from "react";
import './Login.css';
import { Row, Col, Container } from "react-bootstrap";
import theName from '../header/name.png';
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login(){
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //       Email:'',
    //       Password:'',
          
    //     };
    //     this.Email = this.Email.bind(this);
    //     this.Password = this.Password.bind(this);
    //     this.login = this.login.bind(this);
    // }

    // Email(event) {
    //             this.setState({ Email: event.target.value })
    //         }
    //         Password(event) {
    //             this.setState({ Password: event.target.value })
    //         }
    //         login(event) {
    //             debugger;
    //             fetch('https://localhost:7015/api/User/signIn', {
    //                 method: 'post',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     Email: this.state.Email,
    //                     Password: this.state.Password
    //                 })
    //             }).then((Response) => Response.json())
    //                 .then((result) => {
    //                     console.log(result);
    //                     if (result.Status === 'Invalid')
    //                         alert('Invalid User');
    //                     else
    //                         this.props.history.push("/HeaderPage");
    //                 })
    //         }
    // render() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
      try {
        // Gửi yêu cầu đăng nhập đến API
        const response = await axios.post("https://localhost:7015/api/User/signIn", {
          email,
          password,
        });
        
        // Đăng nhập thành công
        // Chuyển hướng đến trang mới
        
        window.location.href = "/HeaderPage"; // Thay thế bằng URL của trang bạn muốn chuyển hướng
      } catch (error) {
        // Đăng nhập không thành công
        toast.error("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.");
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
    };
    return(
        <div className="Login-Button">
            <div className="loginTitle">
                <h1 className="CL">Welcome</h1> 
                <img className="theName" src={theName} alt="theName" />
            </div> 
            <form onSubmit={handleSubmit}>
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
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    // const handleLogin = async () => {
    //   try {
    //     // Gửi yêu cầu đăng nhập đến API
    //     const response = await axios.post("https://localhost:7015/api/User/signIn", {
    //       email,
    //       password,
    //     });
        
    //     // Đăng nhập thành công
    //     // Chuyển hướng đến trang mới
        
    //     window.location.href = "/HeaderPage"; // Thay thế bằng URL của trang bạn muốn chuyển hướng
    //   } catch (error) {
    //     // Đăng nhập không thành công
    //     toast.error("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.");
    //   }
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   handleLogin();
    // };
            // }
}