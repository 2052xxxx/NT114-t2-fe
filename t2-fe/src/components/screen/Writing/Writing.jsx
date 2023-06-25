import React from "react";
import AdHeader from "../../admin/ad-header/adHeader";
import { Form, Button } from "react-bootstrap";
import "./Writing.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Writing(){
    const [articleTitle, setArticleTitle] = useState('');
    const [body, setBody] = useState('');
    // const [authorId, setAuthorId] = useState('');
    const [errorText, setErrorText] = useState('');
    const [posted, setPosted] = useState(false);
    const user= useSelector((state)=> state.login?.currentUser)
    // if (!user) {
    //     return <div>Loading...</div>;
    // }
    const handlePostArticle = async (e) => {
        e.preventDefault();
        // /**
        //  * @type {Object} data
        //  */
        const data = {
          "articleTitle" : articleTitle,
          "body" : body,
          "authorId" : user[0]?.userid         
        };
        console.log(data);
        // try {
          // Gửi yêu cầu đăng nhập đến API
          axios.post("https://localhost:7015/api/Article/postArticle", data)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              // đăng bài thành công
                setPosted(true);
              
            }
            else if (response.status === 401) {
              // setErrorText("Failed to sign up. Please check again if username or email already exists.");
                setPosted(false);
            }
          })
          .catch((error) => {
                setErrorText("Failed to post article. Please check again.");
          })
          ;
      };

      useEffect(() => {
        if (posted) {
            console.log("Posted successfully");

        } else {
            // if (window.confirm(errorText)===true)
            // {
            //     window.location.assign("/Writing");
            // }
            console.log("Failed to post article. Please check again.");
        }
        }, [posted]);

        if (posted) {
            return window.location.assign("/UserProfile");
          }

    return(
        <div className="Writing">
            <AdHeader/>
            <div className="writing-form" onSubmit={handlePostArticle}>                
                <form>
                    <div className="form-group">
                        <textarea className="form-control writeTitle" 
                            type="text" 
                            placeholder="Title" 
                            value={articleTitle}
                            onChange={(e) => setArticleTitle(e.target.value)}
                            required />
                    </div>
                    <div className="form-group ">
                        <textarea className="form-control writeContent" 
                            rows={10} 
                            placeholder="Content" 
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required />
                    </div>
                    <button className="btn btn-outline-secondary" type="submit">
                        Submit
                    </button>
                </form>

            </div>
           
        </div>
    )
}