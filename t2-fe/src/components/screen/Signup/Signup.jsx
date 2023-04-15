import React from "react";
import './Signup.css'
import TheName from './TheName.png'
export default function Signup(){
    return(
        <div className = "Login-Button">
            <div>
                <h1 className="CL">Join</h1>
                <img className="TheName" src={TheName} alt="TheName" />
            </div>
            <div>
                <button className="SW">
                    ㅤSign up with Google ㅤ
                </button>
            </div>
            <div>
                <button className="SW">
                    ㅤSign up with Facebookㅤ
                </button>
            </div>
            <div>
                <button className="SW">
                ㅤㅤSign up with Emailㅤㅤ
                </button>
            </div>
            <div>
                Already have an account? <h5>Sign in</h5>
            </div>
        </div>
    )
}