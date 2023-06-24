import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './UserProfile.css'; // Import CSS file here
import theUser from './theUser.png';
import { useSelector } from 'react-redux';
import CBlog from '../CBlog/CBlog';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  
  const user = useSelector((state) => state.login?.currentUser);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch articles from the API
    fetch(`https://localhost:7015/api/Article/showUserArticle?userId=${user[0]?.userid}`)
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.log(error));
  }, [user]);
  const handleArticleClick = (articleId) => {
    navigate(`/Article/${articleId}`);
  };
  if (!user) {
    return <div>Loading...</div>;
  }
  else{  
    
    return (
      <div>
        <Container fluid className="user-profile">
          <div className="paperwall-background"></div>
          <Row className="follow-row">
            <Col md={12} className="text-center">
              <Image src={theUser} roundedCircle className="profile-avatar" />
              {/* {user.po=="admin"?
                <div className="profile-name"> <h2>{user?.username || "" }</h2></div>: ""
              } */}
              <div className="profile-name"> <h2>{user[0]?.realname || "" }</h2></div>
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
              {articles.map(article => (
                <div key={article.articleId} onClick={() => handleArticleClick(article.articleId)}>
                  <CBlog article={article} />
                </div>
              ))}
            </Col>
            <Col md={4} className='info-column'>
              <div className="">
                <strong>Username:</strong> {user[0]?.username || "" }
              </div>
              <div className="">
                <strong>Email:</strong> {user[0]?.email || "" }
              </div>
              <div className="profile-bio">
                <strong>Bio:</strong> {user[0]?.bio || "" }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default UserProfile;
