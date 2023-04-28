import React from "react";
import './CBlog.css';
import HeaderPage from "../MainAfterSignin/HeaderPage/HeaderPage"
import '../CBlogNext/CBlogNext'

export default function CreatBlog(){
    return(
    <div>
            <HeaderPage/>
        <div>
            <form>
                <label>
                <input maxlength="100" className="Texbox" placeholder="+ Title" type="text" name="title" />
                </label>
                <a href="CBlogNext">
                <button className="UpBlog">
                    Next
                </button>
                </a>
            </form>
        </div>
    </div>
    )
}