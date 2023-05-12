import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./usrManagement.css";
import User from "./user";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

export default function CManagement() {
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

  return <div>
    <Container fluid className="usrM">
      <Col>
        <Row sm={1}>
          {isHeaderVisible && <Navbar bg="dark" variant="dark" className="navBar">
            <Container>
              <Navbar.Brand href="#home">User Management</Navbar.Brand>              
            </Container>
          </Navbar>}    
        </Row>
        <Row sm={10}>
          <User />
        </Row>
      </Col>
    </Container>
   
  </div>;
}
