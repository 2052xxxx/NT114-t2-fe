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
                    <Col className="content">  
                        <div>
                            <h1>WRITE READ WRITE</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perferendis aliquam error at recusandae autem laboriosam saepe, dolores accusamus reprehenderit. 
                            Aperiam vero libero eligendi incidunt debitis non, repellendus culpa sunt. 
                            Delectus!</p>  
                        </div>                                                
                    </Col>
                    <Col className="content">        
                        <img className="myGIF" src={subTheGIF} alt="my Aestyle" />
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}