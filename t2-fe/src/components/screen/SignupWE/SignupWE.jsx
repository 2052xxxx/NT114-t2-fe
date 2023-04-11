import React from "react";
import './SignupWE.css'

export default function SignupWE(){
    return(
        <div className="Allblock">
            <div className="Inblock">
                <div className="Fonttetel">
                    Sign in with email
                </div>
                <h4>
                    Enter the email address associated with your account,<br/> and we’ll send a magic link to your inbox.
                </h4>
                <h5>Your email</h5>
                <input type="text" name="String" value="Write here" className="Testbox"></input>
                <div>
                    <button className="CTN-Button">
                        Countinue
                    </button>
                </div>
                <div>
                   {'<'}All  sign in options
                </div>
            </div>
        </div>
    )
}

