import React from "react";
import './Login.css'

export default function Header(){
    return(
        <header>
            <div>
                <h1>Welcome</h1>
            </div>
            <button className="SWG">
                Sign in with Google
            </button>
            <button className="SWF">
                Sign in with Facebook
            </button>
            <button className="SWE">
                Sign in with Email
            </button>
        </header>
    )
}