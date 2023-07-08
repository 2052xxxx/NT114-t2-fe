import React from "react";
import './subContent.css'
import subTheGIF from './animee.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function SubContent(){
    
    return(
        <div className="subContent">
            <Container className="container-md">
                <Row>
                    <Col className="col-md-7">  
                        <div>
                            <h1>WRITE READ WRITE</h1>
                            <p>A place where you can explore and share your own information, knowledge, and experiences with the online community. We have created a friendly and reliable environment for everyone to connect, exchange opinions, and learn from each other.</p>  
                        </div>                                                
                    </Col>
                    <Col className="col-md-5">        
                        <img className="myGIF" src={subTheGIF} alt="my Aestyle" />
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}