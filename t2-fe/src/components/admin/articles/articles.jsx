import React from "react";
import CManagement from "../contentManagement/cManagement";
import Sidebar from "../sidebar/adSidebar";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./articles.css";

export default function Articles() {
  // link to api
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/Article/showArticle")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  console.log(articles);
    return <div>
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    ;
}