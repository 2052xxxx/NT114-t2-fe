import React from "react";
import './SignupWE.css'

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
                    <button className="CTN-Button">
                        Countinue
                    </button>
                </div>
                
            </div>
        </div>
    )
}

