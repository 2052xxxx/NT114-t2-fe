import React, {useState} from "react";
import theLogo from './theLogo.png'
import theName from './name.png'
import './header.css'
import '../Login/Login'
import Login from "../Login/Login";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function Header(){
    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    return(
        <header>
            <div className="logo">
                <img className="theLogo" src={theLogo} alt="theLogo" />
                <img className="theName" src={theName} alt="theName" />
            </div>
            <ul className="lists">
                <li>Home</li>
            </ul>
            <button className="signIn " variant="primary" onClick={handleShowSignIn}>
                Sign In
            </button>
            <Link to = '/Signup'>
                <button className="signUp" variant="primary">
                    Sign Up
                </button>
            </Link>
            
            <Modal
                show={showSignIn}
                onHide={handleCloseSignIn}    
                aria-labelledby="contained-modal-title-vcenter"
                centered            
            >                
                <Login/>
            </Modal>
            
        </header>
    )
}