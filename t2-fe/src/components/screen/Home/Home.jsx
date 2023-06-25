import AdHeader from '../../admin/ad-header/adHeader';
import CBlog from '../CBlog/CBlog';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home(){
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch articles from the API
        fetch(`https://localhost:7015/api/Article/showArticle`)
          .then(response => response.json())
          .then(data => setArticles(data))
          .catch(error => console.log(error));
      }, []);
      const handleArticleClick = (articleId) => {
        navigate(`/Article/${articleId}`);
      };
      if (!articles) {
        return <div>Loading...</div>;
      }
      
    else{
        return (
            <div>
            <AdHeader/>
            <div  className='article_area'>
                {articles.map(article => (
                    <div key={article.articleId} onClick={() => handleArticleClick(article.articleId)}>
                        <CBlog article={article} />
                    </div>
                ))}
            </div>
            
            </div>
        )
    }
    
}