import React from "react";
import AdHeader from "../../admin/ad-header/adHeader";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./UserProfile.css";

export default function UserProfile(){
    return (
      <Container fluid className="user-profile">
      <div className="paperwall-background">
      <Row>
        <Col md={12} className="text-center">
          <Image src="avatar.jpg" roundedCircle className="profile-avatar" />
          <div className="profile-info">Followers: 100</div>
          <div className="profile-info">Following: 50</div>
        </Col>
      </Row>
      </div>
      <Row>
        <Col md={12}>
          <h2>User Profile</h2>
          <div className="profile-info">
            <strong>Real Name:</strong> John Doe
          </div>
          <div className="profile-info">
            <strong>Username:</strong> johndoe123
          </div>
          <div className="profile-info">
            <strong>Email:</strong> johndoe@example.com
          </div>
          <div className="profile-bio">
            <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dapibus ultricies sapien, vel efficitur lacus venenatis eu.
          </div>
        </Col>
      </Row>
    </Container>
      );
}