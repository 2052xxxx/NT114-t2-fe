import React, {useState} from "react";
import theLogo from '../../screen/header/theLogo.png'
//import Login from "../../screen/Login/Login";
// import Modal from 'react-bootstrap/Modal';
//import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenNib, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser, faNewspaper} from '@fortawesome/free-regular-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image';
import './adHeader.css';

export default function Header(){
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
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
            <div className="header-components">     
                
                    <Button className="btn-write">
                        <FontAwesomeIcon icon={faPenNib} />
                        <span>Write</span>
                    </Button>
                    <div className="btn-noti">                    
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faBell} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    <div className="btn-ava">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">       
                            <Image src="holder.js/171x180" roundedCircle />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <FontAwesomeIcon icon={faUser} style={{color: "#d46bca",}} />
                                <span> Profile </span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <FontAwesomeIcon icon={faNewspaper} style={{color: "#d46bca",}}/>
                                <span> Articles </span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <FontAwesomeIcon icon={faGear} style={{color: "#d46bca",}}/>
                                <span> Settings </span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>                                    
                </div>
            </div>
        </header>
    )
}