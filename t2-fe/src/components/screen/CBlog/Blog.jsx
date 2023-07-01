import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdHeader from '../../admin/ad-header/adHeader';
import theUser from '../UserProfile/theUser.png'
import './CBlog.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

const Blog = () => {
    const [article, setArticle] = useState(null);
    const [user, setUser] = useState(null);

    let { articleID } = useParams();

  // useEffect(() => {
  //   // Fetch the selected article using the articleId
  //   // axios.get(`https://localhost:7015/api/Article/showArticle/`+ articleID)
  //   //   .then(response => response.json())
  //   //   .then(data => setArticle(data))
  //   //   .catch(error => console.log(error));
  //   //   if (article) {
  //   //     axios.get(`https://localhost:7015/api/User/${article.authorId}`)
  //   //       .then(response => response.json())
  //   //       .then(data => setUser(data))
  //   //       .catch(error => console.log(error));
  //   //     }
  //   axios.get(`https://localhost:7015/api/Article/showArticle/`+ articleID)
  //     .then(response => {
  //       setArticle(response.data);
  //       console.log(response.data.views);
  //       if (response.data) {
  //         axios.get(`https://localhost:7015/api/User/${response.data.authorId}`)
  //           .then(response => {
  //             setUser(response.data);
  //           })
  //           .catch(error => console.log(error));
  //       }
  //     }).catch(error => console.log(error));    
  // }, [articleID, article]);

  useEffect(() => {
    let isMounted = true;
  
    // Fetch the selected article using the articleId
    axios.get(`https://localhost:7015/api/Article/showArticle/${articleID}`)
      .then(response => {
        if (isMounted) {
          setArticle(response.data);
          console.log(response.data.views);
  
          // Fetch the user information using the authorId
          if (response.data) {
            axios.get(`https://localhost:7015/api/User/${response.data.authorId}`)
              .then(response => {
                if (isMounted) {
                  setUser(response.data);
                }
              })
              .catch(error => console.log(error));
          }
        }
      })
      .catch(error => console.log(error));
  
    return () => {
      // Cleanup function to cancel API calls when the component is unmounted
      isMounted = false;
    };
  }, [articleID]);
  
  
//   useEffect(() => {
//     // Fetch the selected article using the articleId
//     fetch(`https://localhost:7015/api/User/`+ article.authorId)
//         .then(response => response.json())
//         .then(data => setUser(data))
//         .catch(error => console.log(error));
//   }, [article.authorId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <AdHeader/>

    <div className="row">
      <div className="col-md-8">
        <div className="cblog-next">
          <div className="cblog-header">
            <h2>{article.articleTitle || ""}</h2>
            <p>By {article.authorName || ""} on {article.lastUpdated || ""}</p>
          </div>
          <div className="cblog-body">
            <p>{article.body}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="author-info">
            <div className="author-avatar">
                <Image src={user?.avatar || theUser} alt="Avatar" className='Avatar' roundedCircle />
            </div>
            <div className="author-details">
                <h4>{user?.realname || "" }</h4>
                <p className="username">Username: {user?.username || "" }</p>
                <p className="email">Email: {user?.email || "" }</p>
                <p className="bio">Bio: {user?.bio || "" }</p>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Blog;
