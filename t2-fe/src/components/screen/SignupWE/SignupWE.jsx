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
                <div className="components">
                    <div className="email">
                        <h5>Your email</h5>
                        <input type="text" name="String" placeholder="Enter your email" className="Testbox"/>
                    </div>
                    
                    <div className="password">
                        <h5>Your password</h5>
                        <input type="password" name="String" placeholder="Enter your password" className="Testbox"/>
                    </div>                    
                </div>               
                <div className="btn-continue">
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

