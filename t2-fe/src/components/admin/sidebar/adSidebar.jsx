import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import CManagement from '../contentManagement/cManagement';
import { useState } from 'react';
import './adSidebar.css';

export default function Sidebar(){
  const [selectedTag, setSelectedTag] = useState(false);

  const handleBarClick = (id) => {
    switch (id) {
      case 'cManagement':
        setSelectedTag(<CManagement />);
        break;
      case 'usrManagement':
        setSelectedTag(<h1>User Management</h1>);
        break;
      case 'support':
        setSelectedTag(<h1>User Support</h1>);
        break;
      default:
        setSelectedTag(null);
        break;
    }
  }
  
    return(
      <>
        <Row>
          <Col sm={2}>
            <Nav defaultActiveKey="/" className="flex-column sidebar">
              <Nav.Item>
                <Nav.Link href="#cManagement"  onClick={() => handleBarClick('cManagement')}>
                <FontAwesomeIcon className='fontAwesome' icon={faSquarePollHorizontal} />
                  Content Management
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#usrManagement"  onClick={() => handleBarClick('usrManagement')}>
                <FontAwesomeIcon className='fontAwesome' icon={faUser} />
                  User Management</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#support"  onClick={() => handleBarClick('support')}>
                <FontAwesomeIcon className='fontAwesome' icon={faHeadset} />
                  User Support</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className='content'> 
            {selectedTag}
          </Col>
        </Row>   
        </>

    )
}

    // <div>                 
    // <div className="sidebar">
    //   <ul className="nav flex-column">
    //     <li className="nav-item">
    //         <Link className="nav-link" to="/cManagement">
    //             <FontAwesomeIcon className='fontAwesome' icon={faSquarePollHorizontal} />
    //             Content Management
    //         </Link>            
    //     </li>
    //     <li className="nav-item">
    //         <Link to='/usrManagement' className='nav-link' >
    //             <FontAwesomeIcon className='fontAwesome' icon={faUser} />
    //             User Management
    //         </Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link className="nav-link" to="/usrSupport">
    //             <FontAwesomeIcon className='fontAwesome' icon={faHeadset} />
    //             User Support
    //         </Link>
    //     </li>
    //   </ul>
    // </div>
    // </div>
