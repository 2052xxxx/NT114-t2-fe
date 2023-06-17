import React from "react";
import './Signup.css'
import TheName from './TheName.png'
export default function Signup(){
    return(
        <div className = "Login-Button">
            <div className="loginTitle">
                <h1 className="CL">Join</h1>
                <img className="TheName" src={TheName} alt="TheName" />
            </div>
           
            <div className="loginTitle">
                <button className="SW">
                ㅤㅤRegister with Emailㅤㅤ
                </button>
            </div>
            
        </div>
    )
}