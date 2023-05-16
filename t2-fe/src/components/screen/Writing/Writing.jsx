import React from "react";
import AdHeader from "../../admin/ad-header/adHeader";
import { Form, Button } from "react-bootstrap";
import "./Writing.css";

export default function Writing(){
    return(
        <div className="Writing">
            {/* <AdHeader/> */}
            <Form>
                <Form.Group className="writeTitle">
                    <Form.Control size="lg" type="text" placeholder="Title" required />
                </Form.Group>
                <Form.Group className="writeContent">
                    <Form.Control as="textarea" rows={10} placeholder="Content" required />
                </Form.Group>
                <Button variant="outline-secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}