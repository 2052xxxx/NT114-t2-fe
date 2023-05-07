import React, { Fragment } from "react";
import CManagement from "../contentManagement/cManagement";
import Sidebar from "../sidebar/adSidebar";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./articles.css";

export default function Articles() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //mấy cái cũ lưu trong note

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch article data from the API
    axios
      .get('https://localhost:7015/api/Article/showArticle')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <Fragment>
  <Table striped bordered hover size="sm" className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        <th>Author Id</th>
        <th>Views</th>
        <th>Likes</th>
        <th>Comments</th>
        <th>Last Date</th>
      </tr>
    </thead>
    <tbody>
      
        {/* //trong note luôn */}
      {articles.map(
        (article, index) =>         
        {
        return (<tr key={index}>
          <td>{index + 1}</td>
          <td>{article.id}</td>
          <td>{article.title}</td>
          <td>{article.content}</td>
          <td>{article.authorId}</td>
          <td>{article.views}</td>
          <td>{article.likes}</td>
          <td>{article.comments}</td>
          <td>{article.lastDate}</td>
        </tr>)
      })
      }
  
    </tbody>
  </Table>
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <input type="text" className="form-control" placeholder="Title" 
              // value={editName} onChange={(e) => setEditName(e.target.value)}
            />
          </Col>
          <Col>
            <input type="text" className="form-control" placeholder="Context" 
            // value={editAge} onChange={(e) => setEditAge(e.target.value)}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
  </Modal>
  </Fragment>
  ;
}