import React from "react";
import theLogo from './theLogo.png'
import theName from './theName.png'
import './header.css'

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img className="theLogo" src={theLogo} alt="theLogo" />
                <img className="theName" src={theName} alt="theName" />
            </div>
            <ul className="lists">
                <li>Home</li>
                <li>About</li>
            </ul>
            <button className="signIn">
                Sign In
            </button>
        </header>
    )
}