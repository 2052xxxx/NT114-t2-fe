import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './UserProfile.css'; // Import CSS file here
import theUser from './theUser.png';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { userInfo } = useSelector(state => state.auth);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const { username, realname, email, bio} = userInfo;
  
  return (
    <div>
      <Container fluid className="user-profile">
        <div className="paperwall-background"></div>
        <Row className="follow-row">
          <Col md={12} className="text-center">
            <Image src={theUser} roundedCircle className="profile-avatar" />
            <div className="profile-name"> <h2>{username}</h2></div>
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
              <strong>Username:</strong> {username}
            </div>
            <div className="">
              <strong>Email:</strong> {email}
            </div>
            <div className="profile-bio">
              <strong>Bio:</strong> {bio}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
