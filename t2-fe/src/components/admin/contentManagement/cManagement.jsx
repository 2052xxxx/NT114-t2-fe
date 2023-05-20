import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./cManagement.css";
import AdHeader from "../ad-header/adHeader";
import Sidebar from "../sidebar/adSidebar";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";


export default function CManagement() {

  //controll the header visibility
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && isHeaderVisible) {
        setIsHeaderVisible(false);
      } else if (scrollTop === 0 && !isHeaderVisible) {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible]);

  //control the sidebar navigating tags
  const [selectedTag, setSelectedTag] = useState(false);
  const handleBarClick = (id) => {
    switch (id) {
      case 'articles':
        setSelectedTag(<Articles />);
        break;
      case 'tags':
        setSelectedTag(<Tags/>);
        break;
      default:
        setSelectedTag(null);
        break;
    }
  }

  
  return <div>
    <Container fluid>
      <Col>
        <Row sm={1}>
          {isHeaderVisible && <Navbar bg="dark" variant="dark" className="navBar">
            <Container>
              <Navbar.Brand href="#home">Content Management</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Articles" onClick={() => handleBarClick('articles')}>Articles</Nav.Link>
                <Nav.Link href="#Tags" onClick={() => handleBarClick('tags')}>Tags</Nav.Link>
              </Nav>
            </Container>
          </Navbar>}    
        </Row>
        <Row sm={10}>
          {selectedTag}
        </Row>
      </Col>
    </Container>
   
  </div>;
}
