import React from "react";
import './CBlog.css';

const CBlog = ({ article }) => {
  
  
  return (
    <div className="cblog">
      <div className="cblog-header">
        <h2>{article.articleTitle || ""}</h2>
        {/* <p>By {article.Author} on {article.Date}</p> */}
        <p>By {article.authorName || ""} on {article.lastUpdated || ""}</p>
      </div>
      <div className="cblog-body">
        <p>{article.body || ""}</p>
      </div>
    </div>
  );
};
  
  export default CBlog;