import React, {useState} from "react";
import theLogo from '../../screen/header/theLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenNib, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image';
import './adHeader.css';

export default function Header(){
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // logout = () => {
    const handleNavHome = () => {
        window.location.href = "/HeaderPage";
    }
    return(
        <header className='ad-Header'>
            <div className="logo">
                <img className="theLogo" src={theLogo} alt="theLogo" onClick={handleNavHome}/>                
            </div>
            <form action="" className="search-box">
                <input type="text" className="search-text" placeholder="Search" required/>
                <button className="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className="header-components">     
                
                    <a href="/Writing">
                        <Button className="btn-write">
                            <FontAwesomeIcon icon={faPenNib} />
                            <span>Write</span>
                        </Button>
                    </a>
                    <div className="btn-noti">                    
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faBell} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Another action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    <div className="btn-ava">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">       
                            <Image src="holder.js/171x180" roundedCircle />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/UserProfile">
                                <FontAwesomeIcon icon={faUser} style={{color: "#d46bca",}} />
                                <span> Profile </span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <FontAwesomeIcon icon={faGear} style={{color: "#d46bca",}}/>
                                <span> Settings </span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <FontAwesomeIcon icon={faEnvelope} style={{color: "#d46bca",}}/>
                                <span> Help </span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#d46bca",}}/>
                                <span> Logout </span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>                                    
                </div>
            </div>
        </header>
    )
}