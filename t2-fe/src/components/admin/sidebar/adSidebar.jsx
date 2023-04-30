import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import './adSidebar.css';

export default function Sidebar(){
    return(                 
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
        <a className="nav-link active" href="#">
            <FontAwesomeIcon className='fontAwesome' icon={faSquarePollHorizontal} />
            Content Management
        </a>
            
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
                <FontAwesomeIcon className='fontAwesome' icon={faUser} />
                User Management
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
                <FontAwesomeIcon className='fontAwesome' icon={faHeadset} />
                User Support
            </a>
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