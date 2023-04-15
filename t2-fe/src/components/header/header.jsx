import React from "react";
import theLogo from './theLogo.png'
import theName from './theName.png'
import './header.css'
import '../screen/Login/Login'
import '../screen/SignupWE/SignupWE'

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
            <a href="/Login">
                <button className="signIn">
                    Sign In
                </button>
            </a>
        </header>
    )
}