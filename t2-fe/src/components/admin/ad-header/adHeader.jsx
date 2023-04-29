import './adHeader.css';
import React, {useState} from "react";
//import theLogo from './theLogo.png'
//import theName from './theName.png'
import theLogo from '../../header/theLogo.png'
import Login from "../../screen/Login/Login";
import Modal from 'react-bootstrap/Modal';
//import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <header className='ad-Header'>
            <div className="logo">
                <img className="theLogo" src={theLogo} alt="theLogo" />                
            </div>
            <form action="" className="search-box">
                <input type="text" className="search-text" placeholder="Search" required/>
                <button className="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
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
            >                
                <Login/>
            </Modal>
        </header>
    )
}