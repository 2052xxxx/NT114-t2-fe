import React from "react";
import './CBlog.css';

const CBlog = ({ article }) => {
  return (
    <div className="cblog">
      <div className="cblog-header">
        <h2 className="cblog-title">{article.articleTitle}</h2>
      </div>
      <div className="cblog-body">
        <p>{article.body}</p>
      </div>
    </div>
  );
};
  
  export default CBlog;