import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './UserProfile.css'; // Import CSS file here
import AdHeader from '../../admin/ad-header/adHeader';
import theUser from './theUser.png';

const UserProfile = () => {
  return (
    <div>
      <AdHeader />
      <Container fluid className="user-profile">
        <div className="paperwall-background"></div>
        <Row className="follow-row">
          <Col md={12} className="text-center">
            <Image src={theUser} roundedCircle className="profile-avatar" />
            <div className="profile-name"> <h2>John Doe</h2></div>
            <div className="profile-info">
              <div>Followers: 100</div>
              <div className='profile-button'>
                <button>
                  Follow
                </button>
              </div> {/* TODO: Add onClick event to follow/unfollow */}
              <div>Following: 50</div>
              
            </div>
          </Col>
        </Row>
        <Row className="info-row">
          <Col md={8}>
            HEHE
          </Col>
          <Col md={4} className='info-column'>
            <div className="">
              <strong>Username:</strong> johndoe123
            </div>
            <div className="">
              <strong>Email:</strong> johndoe@example.com
            </div>
            <div className="profile-bio">
              <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ultricies
              sapien, vel efficitur lacus venenatis eu.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
