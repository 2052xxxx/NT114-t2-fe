import React, {useState} from "react";
import theLogo from './theLogo.png'
import theName from './theName.png'
import './header.css'
import '../screen/Login/Login'
import '../screen/SignupWE/SignupWE'
import Login from "../screen/Login/Login";
import Modal from 'react-bootstrap/Modal';

export default function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <button className="signIn" variant="primary" onClick={handleShow}>
                Sign In
            </button>
            <Modal
                show={show}
                onHide={handleClose}    
                centered            
            >                
                <Login/>
            </Modal>
        </header>
    )
}