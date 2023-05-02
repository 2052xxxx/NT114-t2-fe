import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './adSidebar.css';

export default function Sidebar(){
    return(                 
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
            <Link className="nav-link" to="/cManagement">
                <FontAwesomeIcon className='fontAwesome' icon={faSquarePollHorizontal} />
                Content Management
            </Link>            
        </li>
        <li className="nav-item">
            <Link to='/usrManagement' className='nav-link' >
                <FontAwesomeIcon className='fontAwesome' icon={faUser} />
                User Management
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/usrSupport">
                <FontAwesomeIcon className='fontAwesome' icon={faHeadset} />
                User Support
            </Link>
        </li>
      </ul>
    </div>

    //     <Navbar bg="light" variant="light">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         Navbar
    //       </Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#content-management">
    //             <FontAwesomeIcon icon={faSquarePollHorizontal} />
    //             Content Management
    //         </Nav.Link>
    //         <Nav.Link href="#user-management">
    //             <FontAwesomeIcon icon={faUser} />
    //             User Management
    //         </Nav.Link>
    //         <Nav.Link href="#user-support">
    //         <FontAwesomeIcon icon={faHeadset} />
    //             User Support
    //         </Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar> 
    )
}