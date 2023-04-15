import React from "react";
import './SignupWE.css';
import '../MainAfterSignin/HeaderPage/HeaderPage'
import '../Login/Login'

export default function SignupWE(){
    return(
        <div className="Allblock">
            <div className="Inblock">
                <div className="Fonttetel">
                    Sign in with email
                </div>
                
                <h5>Your email</h5>
                <input type="text" name="String" placeholder="Enter your email" className="Testbox"/>
                <h5>Your password</h5>
                <input type="password" name="String" placeholder="Enter your password" className="Testbox"/>
                <div>
                    <a href="/HeaderPage">
                        <button className="CTN-Button">
                            Countinue
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

