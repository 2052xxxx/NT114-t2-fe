import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = (/*{ articleId }*/) => {
    const [article, setArticle] = useState(null);
    let { articleID } = useParams();

  useEffect(() => {
    // Fetch the selected article using the articleId
    fetch(`https://localhost:7015/api/Article/showArticle/`+ articleID)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.log(error));
  }, [articleID]);

  if (!article) {
    return <div>Loading...</div>;
  }


  return (
    <div className="cblog-next">
      <div className="cblog-header">
        <h2>{article.articleTitle}</h2>
        <p>By {article.authorName} on {article.lastUpdated}</p>
      </div>
      <div className="cblog-body">
        <p>{article.body}</p>
      </div>
    </div>
  );
};

export default Blog;
