import React, { Fragment } from "react";
import { Table, Toast } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./user.css";

export default function User() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //mấy cái cũ lưu trong note

  //fetch data
  const fetchUsers = () => {
    // Fetch article data from the API
    axios
      .get('https://localhost:7015/api/User/showUser_Ad')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  //lấy data của user từ api
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch article data from the API
    fetchUsers();
  }, []);

  //xóa user
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // Perform delete operation based on the article ID
      // For example, you can make a DELETE request to the API
      axios

        .delete(`https://localhost:7015/api/User/deleteUser/${id}`)
        .then(response => {
          // Handle successful deletion
          if (response.status ===200) {
            <Toast.Body>Successfully deleted user</Toast.Body>
          }
          // Fetch article data from the API
          fetchUsers();
        })
        .catch(error => {
          // Handle error
          <Toast.Body>Failed to delete user</Toast.Body>
        });
    }
  };

  return <Fragment>
  <Table striped bordered hover size="sm" className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Id</th>
        <th>User name</th>
        <th>Real name</th>
        <th>Email</th>
        <th>Avatar</th>
        <th>Bio</th>
        <th>Registration Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>      
        {/* //trong note luôn */}
      {users.map(
        (user, index) =>         
        {
        return (<tr key={index}>
          <td>{index + 1}</td>
          <td>{user.userid}</td>
          <td>{user.username}</td>
          <td>{user.realname}</td>
          <td>{user.email}</td>
          <td>{user.avatar}</td>
          <td>{user.bio}</td>
          <td>{user.registrationDate}</td>
          <td>                      
            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(user.userid)}>
              Del
            </Button>
          </td>
        </tr>)
      })
      }
  
    </tbody>
  </Table>
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <input type="text" className="form-control" placeholder="Title 1" 
              // value={editName} onChange={(e) => setEditName(e.target.value)}
            />
          </Col>
          <Col>
            <input type="text" className="form-control" placeholder="Titile 2" 
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