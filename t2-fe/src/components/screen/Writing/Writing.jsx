import React from "react";
import AdHeader from "../../admin/ad-header/adHeader";
import { Form, Button } from "react-bootstrap";
import "./Writing.css";

export default function Writing(){
    return(
        <div className="Writing">
            <AdHeader/>
            <div className="writing-form">
                {/* <Form>
                    <Form.Group className="writeTitle">
                        <Form.Control className="d-block" size="lg" type="text" placeholder="Title" required />
                    </Form.Group>
                    <Form.Group className="writeContent">
                        <Form.Control className="d-block" as="textarea" rows={10} placeholder="Content" required />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Submit
                    </Button>
                </Form> */}
                <form>
                    <div className="form-group">
                        <textarea className="form-control writeTitle" type="text" placeholder="Title" required />
                    </div>
                    <div className="form-group ">
                        <textarea className="form-control writeContent" rows={10} placeholder="Content" required />
                    </div>
                    <button className="btn btn-outline-secondary" type="submit">
                        Submit
                    </button>
                </form>

            </div>
           
        </div>
    )
}