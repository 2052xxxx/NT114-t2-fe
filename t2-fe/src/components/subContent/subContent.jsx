import React from "react";
import './subContent.css'
import subTheGIF from './animee.gif'


export default function SubContent(){
    return(
        <div className="subContent">
            <div className="Content">
                <h1>WRITE READ WRITE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aliquam error at recusandae autem laboriosam saepe, dolores accusamus reprehenderit. 
                Aperiam vero libero eligendi incidunt debitis non, repellendus culpa sunt. 
                Delectus!</p>
            </div>
            <div className="sub">
                <img src={subTheGIF} alt="my Aestyle" />
            </div>
        </div>
    )
}