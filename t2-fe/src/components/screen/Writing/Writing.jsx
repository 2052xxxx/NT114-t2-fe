import React from "react";
import HeaderPage from '../MainAfterSignin/HeaderPage/HeaderPage';

export default function Writing(){
    return(
        <div>
            <HeaderPage/>
            <div> 
                <textarea rows="3" cols="70" placeholder="Title"/>
            </div>
            <div>
                <textarea rows="5" cols="70" placeholder="Content"/>
            </div>
        </div>
    )
}