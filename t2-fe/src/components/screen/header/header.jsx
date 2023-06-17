import React, {useState} from "react";
import theLogo from './theLogo.png'
import theName from './name.png'
import './header.css'
import '../Login/Login'
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Modal from 'react-bootstrap/Modal';

export default function Header(){
    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);
    return(
        <header>
            <div className="logo">
                <img className="theLogo" src={theLogo} alt="theLogo" />
                <img className="theName" src={theName} alt="theName" />
            </div>
            <ul className="lists">
                <li>Home</li>
                <li>About</li>
            </ul>
            <button className="signIn" variant="primary" onClick={handleShowSignIn}>
                Sign In
            </button>
            <button className="signUp" variant="primary" onClick={handleShowSignUp}>
                Sign Up
            </button>
            <Modal
                show={showSignIn}
                onHide={handleCloseSignIn}    
                aria-labelledby="contained-modal-title-vcenter"
                centered            
            >                
                <Login/>
            </Modal>
            {/* <Modal
                show={showSignUp}
                onHide={handleCloseSignUp}    
                aria-labelledby="contained-modal-title-vcenter"
                centered            
            >                
                <Signup/>
            </Modal> */}
        </header>
    )
}