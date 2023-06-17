import React from "react";
import './Signup.css'
import TheName from './TheName.png';
import thePeople from './thePeople.png';
import { Form, Container, Row, Col } from 'react-bootstrap';
export default function Signup(){
    return(
        <div className = "Login-Button">
            
            <Container fluid>
                    <Col className="Col-1">
                        <div className="thePeople">
                            <img className="thePeople" src={thePeople} alt="thePeople" />
                        </div>
                        
                    </Col>
                    <Col className="Col-2">
                    <div className="signupTitle">
                            <h1 className="CL">Join <img className="TheName" src={TheName} alt="TheName" /></h1>
                        </div>
                        <Form className="signUp-from">
                            <Form.Group controlId="formBasicName">
                                <Form.Label className="emailType_in">Your name</Form.Label>
                                <Form.Control type="email" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label className="emailType_in">Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    Your username won't include special characters.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="emailType_in">Your email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="passType_in">Your password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="passType_in">Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                            <div className="btnContinue">
                                <button className="SW" type="submit">
                                    Continue
                                </button>
                            </div>
                        </Form>
                    </Col>
            </Container>
            
        </div>
    )
}