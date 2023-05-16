import React from "react";
import './Login.css';
import { Row, Col, Container } from "react-bootstrap";
import theName from '../header/name.png';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login(){

     //fetch data
  const fetchUsers = () => {
    // Fetch article data from the API
    axios
      .get('https://localhost:7015/api/User/showUser_Ad')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  //lấy data của user từ api
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch article data from the API
    fetchUsers();
  }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //login
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login request to the API
            const response = await axios.post('https://localhost:7015/api/User/signIn', {
                email,
                password
            });
            // Login successful
            // Redirect to new page
            if (response.data.success) {
                // Login successful
                // Redirect to new page
                window.location.href = "/HeaderPage"; // Replace with your desired page URL
              } else {
                // Login unsuccessful
                window.confirm("Invalid email or password"); // Show error toast
              }
        } catch (error) {
            // Login unsuccessful
            window.confirm("An error occurred while logging in");
        }
        // Reset form fields
        setEmail('');
        setPassword('');
    };


    return(
        <div className="Login-Button">
            <div className="loginTitle">
                <h1 className="CL">Welcome</h1> 
                <img className="theName" src={theName} alt="theName" />
            </div> 
            <form  onSubmit={handleSubmit}>
                <div className="emailType_in">
                    <h5>Your email</h5>
                    <input  type="text" 
                            placeholder="Enter your email" 
                            className="Testbox"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            required/>
                </div>
                
                <div className="passType_in">
                    <h5>Your password</h5>
                    <input  type="password"
                            placeholder="Enter your password" 
                            className="Testbox"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            required/>
                </div>  
                <div className="btnContinue">
                {/* <a href="/Signup">
                    <h5>Create one</h5>
                </a> */}
                    <button className="SW">
                        Continue
                    </button>
            </div>           
            </form>
        </div>
    )
}